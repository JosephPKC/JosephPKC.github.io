jQuery(document).ready(function() {
    jQuery.getJSON("../assets/files/projects.json", function(json) {
    }).done(function(json) {
        var url = document.location.href.split('/');
        var id = url[url.length - 1].split('.')[0];
        var data = json[id];
        var cache = orderData(json);
        
        loadProjectInfo(id, data['name'], data['techs'], data['des'], data['tags'], data['type'], data['start'], data['finish'], data['link'], data['order'], Object.keys(json).length, cache);
    }).fail(function(json) {
        console.log("Error grabbing json.");
    });
})

function loadProjectInfo(id, name, techs, des, tags, type, start, end, link, order, size, cache) {
    /* Grab the name */
//    jQuery('#project-name').text(name);
    jQuery('.project-name').text(name);
    
    /* Grab the date range */
    var date = start['month'] + ' ' + start['year'] + ' - ';
    if(end == null) {
        date += 'Current';
    }
    else {
        date += end['month'] + ' ' + end['year'];
    }
    jQuery('#heading p').text(date);
    
    /* Grab the tags */
    var tag_text = tags.join(' • ') + ' • <span id=\'dev-tag\'>' + type + '</span>'; 
    jQuery('#project-tags').html(tag_text);
    
    /* Grab the techs */
//    jQuery.each(techs, function(key, value) {
//        jQuery('<li>', {
//            class: 'fade',
//            text: value
//        }).appendTo('#project-techs');
//    });
    
    jQuery('#project-techs').text(techs.join(' • '));
    /* Grab the link */
    var url = link == null ? 'not-found' : link;
    jQuery('#sub-heading a').attr('href', url);
    
    /* Determine previous/next */
    var i = order == 1 ? cache.length - 1 : order - 2;
    var previous = cache[i];
    jQuery('#previous-project').text(previous[1]['name']);
    jQuery('#previous-des').text(previous[1]['des']);
    jQuery('#previous a').attr('href', './' + previous[0] + '.html');
    
    i = order == size ? 0 : order;
    var next = cache[i];
    jQuery('#next-project').text(next[1]['name']);
    jQuery('#next-des').text(next[1]['des']);
    jQuery('#next a').attr('href', './' + next[0] + '.html');
    
}

function orderData(json) {
    var data_array = [];
    for(var d in json) {
        data_array.push([d, json[d]]);
    }
    data_array.sort(function(a, b) {
        return a[1]['order'] - b[1]['order'];
    })
    return data_array;
}