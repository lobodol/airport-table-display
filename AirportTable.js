/**
 * Object AirportTable
 */
var AirportTable = {
	/**
     * Display message
     *
     * @param String message   : message to display 
     * @param String container : identifier of the container
     */
	display: function(message, container) {
		// Check entry parameters
		if (typeof message != "string" || typeof container != "string" || $('#' + container).length == 0) {
			return false;
		}

		var letters = message.split('');
		var wrapper = $('#' + container);

		for (var i = 0; i < letters.length; i++) {
			var div = $('<div>', {
				class: 'letter'
			});
			var p = $('<p>', {
				html: letters[i],
			});

			div.append(p);
			wrapper.append(div);
		}
	}	
};