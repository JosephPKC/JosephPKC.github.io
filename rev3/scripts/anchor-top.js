jQuery(document).ready(function() {
    var offset = 100;
    var duration = 500;
    
    jQuery(window).scroll(function() {
        if(jQuery(this).scrollTop() > offset) {
            jQuery('#anchor-top a').fadeIn(duration);
        }
        else {
            jQuery('#anchor-top a').fadeOut(duration);
        }
    });
    
    jQuery('#anchor-top a').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});
