jQuery(function($){
	if(navigator.userAgent.indexOf('Android') > 0){
		$("html").addClass("android");
	}
    //*-- winのみ --------------------------------*
	if (navigator.platform.indexOf("Win") != -1) {
		$('html').addClass('win');
	}
});

//*-- pc / sp  --------------------------------*
jQuery(function($){
	$('body').addClass('mode__pc');
	var w = $(window).width();
	var x = 750;
	if (w <= x) {
		$('body').addClass('mode__sp');
        $('body').removeClass('mode__pc');
        
        //*-- pc menu --------------------------------*
        var current_scrollY;
        $('.menu').css('display', 'block');
        $('.menu').wrapAll('<div class="menuWrap"><div></div></div>');
        $('.menuWrap').before('<div class="menuBtn"><span></span></div>');
        $('.menuWrap').css('top', '-100%');

        $('.menuBtn').on('click', function() {
            if($(this).hasClass('open')) {
                $(this).next('div').animate({'top' : '-2000px' }, 700);
                $(this).removeClass('open');
                setTimeout(function () {
                    $('.menuBtn').removeClass('btnChange');
                }, 500);
                $( 'html, body' ).removeAttr('style');
                $( 'html, body' ).prop( { scrollTop: current_scrollY } );

            } else {
                
                $(this).next('div').css('display', 'block').animate({'top' : '132px' },700);
                $(this).addClass('open');
                setTimeout(function () {
                    $('.menuBtn').addClass('btnChange');
                }, 300);
                current_scrollY = $( window ).scrollTop();
                $( 'body,html' ).css( {
                    position: 'fixed',
                    width: '100%',
                    top: -1 * current_scrollY
                });
            }
        });

        $('.menu a').on('click', function() {
            $('.menuWrap').animate({'top' : '-100%' }, 300);
            $('.menuBtn').removeClass('open').removeClass('btnChange');
            $( 'html, body' ).removeAttr('style');
            $( 'html, body' ).prop( { scrollTop: current_scrollY } );
        });
        
         //*-- ページ内スクロール --------------------------------*
        $('header h1 a').addClass('scrolltop');
        $('.menu li a').addClass('scrolltop');
        $(document).on('click','.scrolltop', function() {
            var targetY = $($(this).attr('href')).offset().top - 132;
            $('html,body').animate({ scrollTop: targetY }, 1000);
            return false;
        });
        
        //*-- google map api --------------------------------*
         jQuery(document).ready(function($){
            function map_initialize() {
                var latlng = new google.maps.LatLng(35.667113, 139.740135);
                var map = new google.maps.Map(
                    document.getElementById("OfficeMap"),
                    {
                        zoom: 15,
                        center: latlng,
                        scrollwheel: false
                    }
                );
                var markerImg = {
                    url: 'resources/images/outline/map_ico_sp.svg',
                    scaledSize : new google.maps.Size(210, 106)
                };
                var marker = new google.maps.Marker({
                    position: latlng,
                    map: map,
                    icon: markerImg
                });
            }
            map_initialize();
         });
        
        
        
	} else {
        
        $('body').removeClass('mode__sp');
        $('body').addClass('mode__pc');
        
        $(window).resize(function(){
            var w = $(window).height();
            var y = 500;
            if (w <= x) {
                $('.menuWrap').addClass('narrow');
            } else {
                $('.menuWrap').removeClass('narrow');
            }
        });
        
        //*-- pc menu --------------------------------*
        var current_scrollY;
        $('.menu').css('display', 'block');
        $('.menu').wrapAll('<div class="menuWrap"><div></div></div>');
        $('.menuWrap').before('<div class="menuBtn"><span></span></div>');
        $('.menuWrap').css({display:'none',right:'-100%'});

        $('.menuBtn').on('click', function() {
            if($(this).hasClass('open')) {
                $(this).next('div').animate({'right' : '-100%' }, 500);
                $(this).removeClass('open').removeClass('btnChange');
                $( 'html, body' ).removeAttr('style');
                $( 'html, body' ).prop( { scrollTop: current_scrollY } );


            } else {
                $(this).next('div').css('display', 'block').animate({'right' : '0' }, 1);
                $(this).addClass('open');
                setTimeout(function () {
                    $('.menuBtn').addClass('btnChange');
                }, 300);
                current_scrollY = $( window ).scrollTop();
                $( 'body,html' ).css( {
                    position: 'fixed',
                    width: '100%',
                    top: -1 * current_scrollY
                });
            }
        });
        
        $('.menu a').on('click', function() {
            $('.menuWrap').animate({'right' : '-100%' }, 300);
            $('.menuBtn').removeClass('open').removeClass('btnChange');
            $( 'html, body' ).removeAttr('style');
            $( 'html, body' ).prop( { scrollTop: current_scrollY } );
        });
        
        //*-- ページ内スクロール --------------------------------*
        $('header h1 a').addClass('scrolltop');
        $('.menu li a').addClass('scrolltop');
        $(document).on('click','.scrolltop', function() {
            var targetY = $($(this).attr('href')).offset().top;
            $('html,body').animate({ scrollTop: targetY }, 1000);
            return false;
        });

        //*-- google map api --------------------------------*
         jQuery(document).ready(function($){
            function map_initialize() {
                var latlng = new google.maps.LatLng(35.66592686589819, 139.70376720058852);
                var map = new google.maps.Map(
                    document.getElementById("OfficeMap"),
                    {
                        zoom: 15,
                        center: latlng,
                        scrollwheel: false
                    }
                );
                var markerImg = {
                    url: 'resources/images/outline/map_ico.svg',
                    scaledSize : new google.maps.Size(85, 43)
                };
                var marker = new google.maps.Marker({
                    position: latlng,
                    map: map,
                    icon: markerImg
                });
            }
            map_initialize();
         });
        
        
	}
});

//*-- topics --------------------------------*
jQuery(function ($) {
    $( document ).ready(function( $ ) {
        $('.topics').css('display', 'block');
				$('.topics').slick({
					dots: false,
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: false,
                    fade: true,
					autoplaySpeed: 5000
				});
		});
});

jQuery(function ($) {
    //*-- check --------------------------------*
    $("input[type='checkbox']").on({
		'change': function () {
	        $("input[type='checkbox']").each(function () {
	            if ($(this).is(":checked")) {
	                $(this).parent().addClass("checked");
	            } else {
	                $(this).parent().removeClass("checked");
	            }
	        });
	    }
	})
    
    //*-- thanks modal --------------------------------*
    $('.thanks').css('display', 'none');
    $('.thanks a').after('<span class="clsBtn"></span>');
    $('.submitBtn').on('click',function(){
        $('.thanks').fadeIn(300);
        $('.thanks').addClass('open');
        current_scrollY = $( window ).scrollTop();
        $( 'body,html' ).css( {
            position: 'fixed',
            width: '100%',
            top: -1 * current_scrollY
        });
	});
    
    $('.thanks .clsBtn').on('click',function(){
        $(this).parents('.thanks').fadeOut(300);
        $( 'html, body' ).removeAttr('style');
        $( 'html, body' ).prop( { scrollTop: current_scrollY } );
    });
    
    
    //*-- privacy modal --------------------------------*
    var current_scrollY;
    $('.privacy').css('display', 'none');
    $('.privacy .sign').after('<span class="clsBtn"></span>');
    $('.moadlBtn').on('click',function(){
        $('.privacy').fadeIn(300);
        $('.privacy').addClass('open');
        current_scrollY = $( window ).scrollTop();
        $( 'body,html' ).css( {
            position: 'fixed',
            width: '100%',
            top: -1 * current_scrollY
        });
	});

    $('.privacy .clsBtn').on('click',function(){
        $('.privacy').fadeOut(300); 
        $('.privacy').removeClass('open'); 
        $( 'html, body' ).removeAttr('style');
        $( 'html, body' ).prop( { scrollTop: current_scrollY } );
    });
	
});