/**
 * accodion example
 */
$(function(){

		$('.accordion').each(function(){
			var dl = $(this);
			var allDt = dl.find('dt');
			var allDd = dl.find('dd');
			allDd.hide();
			allDt.addClass('closed');
			allDt.css('cursor', 'pointer')
			allDt.on('click', function(){
				var dt = $(this);
				var dd = dt.next();
				allDd.hide();
				dd.show();
				allDt.css('cursor', 'pointer');
				dt.css('cursor', 'default');
			})
		});

});