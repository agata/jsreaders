(function() {
    window.setTimeout = window.setTimeout;
    window.setInterval = window.setInterval;
    window.WATCH = function(label, block) {
        if (typeof block === "undefined") {
            block = label;
            label = undefined
        }
        if (typeof label === "string") {
            WATCH._didExecute[label] = true
        }
        WATCH._attempt(this, block)
    };
    WATCH._didExecute = {};
    WATCH._reportCount = 0;
    WATCH._reportLimit = 25;
    WATCH._reportInterval = 60 * 1000;
    WATCH._active = false;
    WATCH.activate = function(setting) {
        if (typeof setting === "undefined") {
            setting = true
        }
        WATCH._active = setting;
        extend(WATCH, WATCH._active ? WATCH.actives : WATCH.inactives)
    };
    WATCH.actives = {};
    WATCH.inactives = {};
    var extend = function(destination, source) {
            for (var key in source) {
                destination[key] = source[key]
            }
        };
    var noop = function() {};
    WATCH._attempt = function(that, block) {
        if (arguments.length < 2) {
            block = that;
            that = window
        }
        if (WATCH._active) {
            try {
                block.apply(that)
            } catch (error) {
                WATCH._triggerError(error)
            }
        } else {
            block.apply(that)
        }
    };
    WATCH.inactives.end = noop;
    WATCH.actives.end = function(label) {
        if (typeof label === "undefined") {
            throw new Error("WATCH.end() requires a label")
        }
        if (WATCH._didExecute[label]) {
            WATCH._didExecute[label] = false
        } else {
            if (WATCH._active) {
                WATCH._triggerError(new Error('WATCH.end("' + label + '") called without successful call to WATCH("' + label + '", fn(){...}) - a SyntaxError probably just happened'))
            }
        }
        WATCH._didExecute[label] = false
    };
    WATCH.inactives.callback = function(that, callback) {
        return typeof callback === "undefined" ? that : callback
    };
    WATCH.actives.callback = function(that, callback) {
        if (arguments.length === 1) {
            callback = that;
            that = this
        }
        if (typeof callback === "string") {
            callback = (function(stringVersion) {
                return function() {
                    eval(stringVersion)
                }
            }(callback))
        }
        var watchedCallback = function() {
                var that = this,
                    args = arguments,
                    result;
                WATCH._attempt(function() {
                    result = callback.apply(that, args)
                });
                return result
            };
        watchedCallback.isWatched = true;
        return watchedCallback
    };
    WATCH._onErrorCallbacks = {};
    WATCH.inactives._addOnError = noop;
    WATCH.actives._addOnError = function(callback) {
        var unique = WATCH._unique();
        WATCH._onErrorCallbacks[unique] = callback;
        return unique
    };
    WATCH.inactives._removeOnError = noop;
    WATCH.actives._removeOnError = function(id) {
        delete WATCH._onErrorCallbacks[id]
    };
    WATCH._lastUnique = -1;
    WATCH._unique = function() {
        return ++WATCH._lastUnique
    };
    WATCH.inactives.jQuery = noop;
    WATCH.actives.jQuery = function() {
        WATCH._originalJQueryEventAdd = WATCH._originalJQueryEventAdd || jQuery.event.add;
        jQuery.event.add = function() {
            var newArgs = Array.prototype.slice.call(arguments);
            if (typeof newArgs[2] === "function") {
                newArgs[2] = WATCH.callback(newArgs[2])
            } else {
                if (newArgs && typeof newArgs[2] === "object" && newArgs[2].handler) {
                    newArgs[2].handler = WATCH.callback(newArgs[2].handler)
                }
            }
            return WATCH._originalJQueryEventAdd.apply(this, newArgs)
        };
        WATCH._originalJQueryAjax = WATCH._originalJQueryAjax || jQuery.ajax;
        jQuery.ajax = function(options) {
            jQuery.each(["complete", "error", "success"], function(which, key) {
                if (!options[key]) {
                    return
                }
                options[key] = WATCH.callback(options[key])
            });
            return WATCH._originalJQueryAjax.apply(this, arguments)
        }
    };
    WATCH.inactives.undoJQuery = noop;
    WATCH.actives.undoJQuery = function() {
        jQuery.event.add = WATCH._originalJQueryEventAdd;
        jQuery.ajax = WATCH._originalJQueryAjax
    };
    WATCH._previousErrors = {};
    var escapeDoubleQuotes = function(string) {
            return string.toString().replace('"', '\\"')
        };
    var stringifyLite = function(object) {
            var result = "{",
                hasProperty = false;
            for (var key in object) {
                if (typeof object[key] === "undefined" || object[key] === null) {
                    continue
                }
                result += (hasProperty ? ',"' : '"') + escapeDoubleQuotes(key) + '":"' + escapeDoubleQuotes(object[key]) + '"';
                hasProperty = true
            }
            return result + "}"
        };
    WATCH._scribeError = function(report) {
        if (WATCH._previousErrors[report.error] && (new Date()) - WATCH._previousErrors[report.error] < WATCH._reportInterval) {
            return false
        }
        if (WATCH.reportLimit <= WATCH.reportCount) {
            return
        }
        WATCH.reportCount++;
        if (!document.location.hostname.match(/(^(www|api)\.)?twitter\.com$/)) {
            return
        }
        WATCH._previousErrors[report.error] = new Date();
        report.product_name = "webclient";
        report.type = "js_error";
        report.url = window.location.href;
        report.event_name = "test";
        var isProduction = document.location.hostname.match(/(^(www|api|staging\d+.local)\.)twitter\.com$/) != null;
        var scribeHost = isProduction ? "scribe.twitter.com" : window.location.host;
        var scribeUrl = (window.location.protocol.match(/s\:$/) ? "https" : "http") + "://" + scribeHost;
        scribeUrl += isProduction ? "/" : "/scribe";
        scribeUrl += "?category=client_watch_error&log=" + encodeURIComponent(stringifyLite(report)) + "&ts=" + (new Date()).getTime();
        (new Image()).src = scribeUrl
    };
    WATCH._triggerError = function(error) {
        var reraise = true;
        var report = {
            error: error
        };
        for (var key in WATCH._onErrorCallbacks) {
            try {
                if (WATCH._onErrorCallbacks[key](report) === false) {
                    reraise = false
                }
            } catch (callbackError) {
                report.callbackFailure = true
            }
        }
        WATCH._scribeError(report);
        if (reraise) {
            throw error
        }
    };
    WATCH.inactives.natives = noop;
    WATCH.actives.natives = function() {
        window.setInterval = WATCH._watchedSetInterval;
        window.setTimeout = WATCH._watchedSetTimeout
    };
    WATCH.inactives.undoNatives = noop;
    WATCH.actives.undoNatives = function() {
        window.setInterval = WATCH._originalSetInterval;
        window.setTimeout = WATCH._originalSetTimeout
    };
    WATCH._originalSetInterval = window.setInterval;
    WATCH._originalSetTimeout = window.setTimeout;
    WATCH._watchedSetInterval = function(callback, timeout) {
        var setInterval = WATCH._originalSetInterval;
        return setInterval(WATCH.callback(callback), timeout)
    };
    WATCH._watchedSetTimeout = function(callback, timeout) {
        var setTimeout = WATCH._originalSetTimeout;
        return setTimeout(WATCH.callback(callback), timeout)
    };
    WATCH.activate(false)
}());
