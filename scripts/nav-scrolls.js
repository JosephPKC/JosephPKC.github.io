jQuery(document).ready(function() {
    var navs = {"nav-about":"about", "nav-skills":"skills", "nav-projects":"projects", "nav-contact":"contact", "nav-use":"use", "nav-dev":"dev", "nav-future":"future", "nav-team":"team"};
    jQuery.each(navs, function(key, value) {
        setScroll(key, value);
    });
})

function setScroll(nav, to) {
    jQuery('#' + nav).click(function(e) {
        e.preventDefault();
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        var offset = w >= 641 ? -100 : 0;
        jQuery('html, body').animate({scrollTop: jQuery('#' + to).offset().top + offset}, 1000);
        return false;
    })
}