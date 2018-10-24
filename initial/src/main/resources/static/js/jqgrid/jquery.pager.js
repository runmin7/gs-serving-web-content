/*
* jQuery pager plugin
*/
(function($) {

    $.fn.pager = function(options) {

        var opts = $.extend({}, $.fn.pager.defaults, options);
        // get pager id
        var pagerId = $(this).attr("id");
        
        // jqgrid 의 pagenation 부분을 삭제함
        $('#'+pagerId+'_center').html('');
       // $('#'+pagerId+'_center').css({'width':'460px'});
        $('#'+pagerId+'_center').css({'width':'100%'});
        return this.each(function() {        	
        	//$(this).empty().append(renderpager(parseInt(options.pagenumber), parseInt(options.pagecount), options.buttonClickCallback));
        	// Modify, 2011-07-05, free4u, {gridPager}_center 에 위치 시킴
        	$('#'+pagerId+'_center').append(renderpager(parseInt(options.pagenumber), parseInt(options.pagecount), options.buttonClickCallback));
            
            // specify correct cursor activity
            $('.pages li').mouseover(function() { 
            	document.body.style.cursor = "pointer"; }
            ).mouseout(function() { 
            	document.body.style.cursor = "auto"; 
            });
        });
    };

    /*
     * render and return the pager with the supplied options
     */
    function renderpager(pagenumber, pagecount, buttonClickCallback) {

        // setup $pager to hold render
        var $pager = $('<ul class="pages"></ul>');

        // add in the previous and next buttons
        $pager.append(renderButton('첫페이지', pagenumber, pagecount, buttonClickCallback))
        	//.append(renderButton('prev', pagenumber, pagecount, buttonClickCallback));

        /*
         * pager currently only handles 10 viewable pages 
         * ( could be easily parameterized, maybe in next version ) so handle edge cases
         */ 
        var startPoint = 1;
        var endPoint = 9;

        if (pagenumber > 4) {
            startPoint = pagenumber - 4;
            endPoint = pagenumber + 4;
        }

        if (endPoint > pagecount) {
            startPoint = pagecount - 8;
            endPoint = pagecount;
        }

        if (startPoint < 1) {
            startPoint = 1;
        }

        // loop thru visible pages and render buttons
        for (var page = startPoint; page <= endPoint; page++) {

            var currentButton = $('<li class="page-number">' + (page) + '</li>');

            page == pagenumber ? currentButton.addClass('pgCurrent') : currentButton.click(function() { buttonClickCallback(this.firstChild.data); });
            currentButton.appendTo($pager);
        }

        // render in the next and last buttons before returning the whole rendered control back.
        //.append(renderButton('next', pagenumber, pagecount, buttonClickCallback))
        $pager.append(renderButton('끝페이지', pagenumber, pagecount, buttonClickCallback));

        return $pager;
    }

    /*
     * renders and returns a 'specialized' button, 
     * ie 'next', 'previous' etc. rather than a page number button
     */ 
    function renderButton(buttonLabel, pagenumber, pagecount, buttonClickCallback) {

        var $Button = $('<li class="pgNext">' + buttonLabel + '</li>');

        var destPage = 1;

        // work out destination page for required button type
        switch (buttonLabel) {
            case "첫페이지":
                destPage = 1;
                break;
            case "prev":
                destPage = pagenumber - 1;
                break;
            case "next":
                destPage = pagenumber + 1;
                break;
            case "끝페이지":
                destPage = pagecount;
                break;
        }

        // disable and 'grey' out buttons if not needed.
        if (buttonLabel == "첫페이지" || buttonLabel == "prev") {
            pagenumber <= 1 ? $Button.addClass('pgEmpty') : $Button.click(function() { buttonClickCallback(destPage); });
        }
        else {
            pagenumber >= pagecount ? $Button.addClass('pgEmpty') : $Button.click(function() { buttonClickCallback(destPage); });
        }

        return $Button;
    }

    /*
     * pager defaults. 
     */ 
    $.fn.pager.defaults = {
        pagenumber: 1,
        pagecount: 1
    };

})(jQuery);





