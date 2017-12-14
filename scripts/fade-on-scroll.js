jQuery(document).ready(function() {
    getElements().each(function() {
        if(isInView(jQuery(this).offset().top + jQuery(this).outerHeight())) {
//            jQuery(this).animate({'opacity':'1'}, 500);
            jQuery(this).fadeTo("slow", 1);
//            jQuery(this).css({'opacity':'1'});
        }
    });
    
    jQuery(window).scroll(function() {
        getElements().each(function(i) {
//            console.log(jQuery(this));
            if(isInView(jQuery(this).offset().top + jQuery(this).outerHeight())) {
//                jQuery(this).animate({'opacity':'1'}, 500);
                jQuery(this).fadeTo("slow", 1);
            }
        })
    })
})


function getElements() {
    return jQuery('.fade, .fade-li > li, .fade-art > h1, .fade-art > h2, .fade-art > h3, .fade-art > p, .tab, .fade-img > a, .fade-img > p');
}


function isInView(b) {
    var botWin = jQuery(window).scrollTop() + jQuery(window).height();

    if(botWin > b - 150) {
        return true;
    }
    else {
        return false;
    }
}