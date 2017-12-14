jQuery(document).ready(function() {
    if(window.location.hash === '#to-projects') {
        history.pushState('', document.title, window.location.pathname + window.location.search);
        jQuery('#nav-projects').click();
    }
})
