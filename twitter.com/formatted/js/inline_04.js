var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-30775-6"]);
_gaq.push(["_trackPageview"], ["_setDomainName", "twitter.com"]);
(function() {
    var B = document.createElement("script");
    B.type = "text/javascript";
    B.async = true;
    B.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
    var A = document.getElementsByTagName("script")[0];
    A.parentNode.insertBefore(B, A)
}());
twttr.trackPageView = function(A) {
    var B = ["_trackPageview"];
    if (A) {
        B.push(A)
    }
    _gaq.push(B)
};
