jQuery(document).ready(function() {
    var offset = 100;
    var duration = 250;
    
    jQuery(window).scroll(function() {
        if(jQuery(this).scrollTop() > offset) {
            jQuery('.anchor-top').fadeIn(duration);
        }
        else {
            jQuery('.anchor-top').fadeOut(duration);
        }
    });
    jQuery('.anchor-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});

