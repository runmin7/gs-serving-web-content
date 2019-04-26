$(function() {

	var df = {dateFormat : "yy-mm-dd"};
	
	$('#calendar').fullCalendar({
		header: {
			left: 'custom1,custom2',
			center: 'title',
			right: 'prev,next today'
		},
		height		: 600,
		titleFormat : 'YYYY. MM',
		monthNames	: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		selectable: true,
		dayClick : function(date, allDay, jsEvent, view) {
			//view.select(date,date);
			$(".color-set").css('background-color', '###fff');
			$("#hMinTbId").val("");
			$("#hMaxTbId").val("");
			$("#lbSelectedDt").text(date.format('YYYY-MM-DD'));
			$("#iResrDt").val(date.format('YYYY-MM-DD'));
			$(this).css('background-color', 'rgba(188, 232, 241, 0.3)');
			$(this).addClass('color-set');
//			DrawTimeTable(date.format('YYYY-MM-DD'));
		},
		viewDisplay: function(view) {
			$('.fc-header-title').css({'font-size':'20'});
			$('.fc-header-title').css({'font-weight':'bold'});

	    },	
	    eventClick : function(event, jsEvent, view) {
	    	$("#hMinTbId").val("");
			$("#hMaxTbId").val("");
			$("#lbSelectedDt").text(event.start.format('YYYY-MM-DD'));
			$("#iResrDt").val(event.start.format('YYYY-MM-DD'));

//			DrawTimeTable(event.start.format('YYYY-MM-DD'));

		},
	    events:{
//	    	url: '${CONTEXT_PATH}/front/facilities/selectAuditorium_01',
//	    	cache: false,
//	        type: 'POST',
//	        data: {
//	        	sMtRoomNo:$('#iRoomNo').val()
//	    	},
//	        success: function(data, st){
//	        	//console.log(data)
//	    	},
//	        error: function() {
//	            alert('예약현황을 로드하는 동안 에러가 발생하였습니다.');
//	        }
	    },
	    customButtons: {
	    	custom1: {
	          text: '월주차',
	          click: function() {
	        	  $(".fc-day").css('background', '#d6d6d6');
	          }
	        },
	        custom2: {
	          text: '일주차',
	          click: function() {
	        	  $(".fc-day").css('background', '#fff');
	          }
	        }
	    }
    });
});