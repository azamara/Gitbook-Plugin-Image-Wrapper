var cheerio = require( "cheerio" )


var wrapTableTags = function(page){

    var $ = cheerio.load(page.content);

    // Loop through each table found in the page content
    $('table').each(function(){

        // Build the wrapper
        var tableWrapper = $('<div>').addClass('table-wrapper');

        // Get the table object
        var $table = $(this);

        // Append the original table
        tableWrapper.append($table);
        
        // Add the table with its wrapper
        $(this).before(tableWrapper);
        
        // Remove the table
        $(this).remove();
    });

    page.content = $.html();

    return page;

}

module.exports = {


    // Map of hooks
    hooks: {

    	'page': function(page){    		
    		return wrapTableTags(page);
    	}
    },

    // Map of new blocks
    blocks: {},

    // Map of new filters
    filters: {}
};
