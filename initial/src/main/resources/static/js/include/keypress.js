/**
 * keypress example
 */
$(function(){
	$('.bt_keydown').on('keypress', function(e){
		if(e.which == 13){
			e.preventDefault();
		}

		$('#txt_view').text(e.which);
	});

	var names = ['민호', '서울', '부산', '인천'];
	console.info(names[1]);

	names.push('소민');
	console.info(names[4]);

	$.getJSON('json/sample1.txt', function(people){
		console.info(people);
	});



});