function bust() {
    document.write = "";
    window.top.location = window.self.location;
    setTimeout(function() {
        document.body.innerHTML = '';
    }, 0);
    window.self.onload = function(evt) {
        document.body.innerHTML = '';
    };
}
if (window.top !== window.self) { // are you trying to put self in an iframe?
    try {
        if (window.top.location.host) { // this is illegal to access unless you share a non-spoofable document domain
            // fun times
        } else {
            bust(); // chrome executes this
        }
    } catch (ex) {
        bust(); // everyone executes this
    }
}
