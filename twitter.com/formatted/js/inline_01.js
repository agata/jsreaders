  document.domain = 'twitter.com';

  // this will be copied to twttr.appStartTime once our JS has started up
  document.startTime = new Date().getTime();
  var twttr = {};
  twttr.versionName = 'phoenix';

  if (!window.console) {
      (function() {
          var names = ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml", "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"];
          window.console = {};
          for (var i = 0; i < names.length; ++i) {
              window.console[names[i]] = function() {};
          }
      }());
  }
