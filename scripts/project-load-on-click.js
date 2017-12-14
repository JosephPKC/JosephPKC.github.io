jQuery(document).ready(function() {
    jQuery('#disco-bot').click(function(e) {
       e.preventDefault();
        console.log("loading...");
        jQuery('#load-here').load("../projects/test.html");
    });
})