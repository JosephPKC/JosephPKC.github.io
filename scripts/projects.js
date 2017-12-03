$(document).ready(function() {
    //Open json file
    //Read json file into an object
    //For each entry in the object, create a tab and append it
    console.log("Grabbing json file");
    $.getJSON("files/projects.json", function(json) {
        console.log("Got json file.");
    }).done(function(json) {
        $.each(json, function(key, val) {
        //Key is name
            createTab(key, val['name'], val['techs'].join(", "), val['des'], val['img']);
        })
        jQuery('<br/>').appendTo('#' + body);
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
    }).appendTo('#body');
    jQuery('<div/>').appendTo('#' + id);
    jQuery('<p/>', {
        id: 'name',
        text: name
    }).appendTo(ln_div);
    jQuery('<p/>', {
        id: 'tech',
        text: techs
    }).appendTo(ln_div);
    jQuery('<p/>', {
        id: 'des',
        text: des
    }).appendTo(ln_div);
    jQuery('<img/>', {
        src: img
    }).appendTo(ln_div);
}