jQuery(function($){
	if(navigator.userAgent.indexOf('Android') > 0){
		$("html").addClass("android");
	}
	if (navigator.platform.indexOf("Win") != -1) {
		$('html').addClass('win');
	}
	else {

	}


//*-- pc / sp  --------------------------------*


	$('body').addClass('mode__pc');
	var w = $(window).width();
	var x = 750;
	if (w <= x) {
		$('body').addClass('mode__sp');
        $('body').removeClass('mode__pc');



	} else {

        $('body').removeClass('mode__sp');
        $('body').addClass('mode__pc');



	}

    //*-- ページ内スクロール --------------------------------*
    $(document).on('click','.scrolltop', function() {
        var targetY = $($(this).attr('href')).offset().top;
		$('html,body').animate({ scrollTop: targetY }, 1000);
		return false;
    });

    //*-- privacy modal --------------------------------*
    var current_scrollY;
    $('.privacy__modal').css('display', 'none');
    $('.privacy__modal iframe').after('<span class="clsBtn"></span>');
    $('.privacyBtn.moadlBtn').on('click',function(){
        $('.privacy__modal').fadeIn(300);
        $('.privacy__modal').addClass('open');
        current_scrollY = $( window ).scrollTop();
        $( 'body,html' ).css( {
            position: 'fixed',
            width: '100%',
            top: -1 * current_scrollY
        });
	});

    $('.privacy__modal .clsBtn').on('click',function(){
        $('.privacy__modal').fadeOut(300);
        $('.privacy__modal').removeClass('open');
        $( 'html, body' ).removeAttr('style');
        $( 'html, body' ).prop( { scrollTop: current_scrollY } );
    });

	/*
    $('.contact__modal').css('display', 'none');
    $('.contact__modal iframe').after('<span class="clsBtn"></span>');
    $('.contactBtn').on('click',function(){
        $('.contact__modal').fadeIn(300);
        $('.contact__modal').addClass('open');
        current_scrollY = $( window ).scrollTop();
        $( 'body,html' ).css( {
            position: 'fixed',
            width: '100%',
            top: -1 * current_scrollY
        });
	});

    $('.contact__modal .clsBtn').on('click',function(){
        $('.contact__modal').fadeOut(300);
        $('.contact__modal').removeClass('open');
        $( 'html, body' ).removeAttr('style');
        $( 'html, body' ).prop( { scrollTop: current_scrollY } );
    });
	*/
});
