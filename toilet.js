function toiletSpinner() {
	/**
	 * Required variables
	 */
	var toilet = $('body'),
		flusher = $('<a id="flusherHandle">Flush me!</a>');

	flusher.css({
		'color' : 'red',
		'cursor' : 'pointer',
		'font-weight' : 'bold',
		'position' : 'absolute',
		'top' : '20px',
		'right' : '20px'
	});

	toilet.prepend(flusher);

	flusher.on( 'click', function() {
		toilet.css({
			'font-size' : '0px',
			'-webkit-transition:' : '2s all ease-in-out',
			'-moz-transition' : '2s all ease-in-out',
			'transition' : '2s all ease-in-out',
			'-webkit-transform': 'rotate(360deg)',
			'-moz-transform' : 'rotate(360deg)',
			'-o-transform' : 'rotate(360deg)',
			'-ms-transform' : 'rotate(360deg)'
		});
	});
}