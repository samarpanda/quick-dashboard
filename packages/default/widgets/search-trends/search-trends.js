widget = {
    //runs when we receive data from the job
    onData: function(el, data) {

        //The parameters our job passed through are in the data object
        //el is our widget element, so our actions should all be relative to that
        if (data.title) {
            $('h2', el).text(data.title);
        }

        var result = data.result,
        		countryResults = result[3];//India

        var $ul = $('<ul/>');
        countryResults.forEach(function(str){
        	var $li = $('<li/>');
        	$li.append(str);
        	$ul.append($li);
        });
        $('.content', el).html($ul);
    }
};