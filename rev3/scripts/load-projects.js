jQuery(document).ready(function() {
    jQuery.getJSON("assets/files/projects.json", function(json) {
    }).done(function(json) {
        jQuery.each(json, function(key, val) {
            createTab(key, val['name'], val['techs'].join(", "), val['des'], val['img']);
        })
    }).fail(function(json) {
        console.log("Error grabbing json.");
    });
})


function createTab(id, name, techs, des, img) {
    var ln_div = '#' + id + ' div';
    jQuery('<a/>', {
        class: 'tab',
        id: id,
        href: './projects/' + id + '.html'
    }).appendTo('#tab-grid');
    jQuery('<div/>').appendTo('#' + id);
    jQuery('<p/>', {
        id: 'name',
        text: name
    }).appendTo(ln_div);
    jQuery('<img/>', {
        src: "assets/images/" + id + '/' + img
    }).appendTo(ln_div);
    jQuery('<p/>', {
        id: 'tech',
        text: techs
    }).appendTo(ln_div);
    jQuery('<p/>', {
        id: 'des',
        text: des
    }).appendTo(ln_div);
}
