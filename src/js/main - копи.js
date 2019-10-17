
$(document).ready(function() {
    $('.screenshots-carousel').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.main-gallery').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $('.tournaments-gallery').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });



    var note = $('#note'),
        ts = new Date(2012, 0, 1),
        newYear = true;

    if((new Date()) > ts){
        // The new year is here! Count towards something else.
        // Notice the *1000 at the end - time must be in milliseconds
        ts = (new Date()).getTime() + 10*24*60*60*1000;
        newYear = false;
    }

    $('#countdown').countdown({
        timestamp	: ts,
        callback	: function(days, hours, minutes, seconds){

            var message = "";

            message += days + " day" + ( days==1 ? '':'s' ) + ", ";
            message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
            message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
            message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";

            if(newYear){
                message += "left until the new year!";
            }
            else {
                message += "left to 10 days from now!";
            }

            note.html(message);
        }
    });

    $('#countdown2').countdown({
        timestamp	: ts,
        callback	: function(days, hours, minutes, seconds){

            var message = "";

            message += days + " day" + ( days==1 ? '':'s' ) + ", ";
            message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
            message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
            message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";

            if(newYear){
                message += "left until the new year!";
            }
            else {
                message += "left to 10 days from now!";
            }

            note.html(message);
        }
    });

    $('#countdown3').countdown({
        timestamp	: ts,
        callback	: function(days, hours, minutes, seconds){

            var message = "";

            message += days + " day" + ( days==1 ? '':'s' ) + ", ";
            message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
            message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
            message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";

            if(newYear){
                message += "left until the new year!";
            }
            else {
                message += "left to 10 days from now!";
            }

            note.html(message);
        }
    })

    $('#countdown4').countdown({
        timestamp	: ts,
        callback	: function(days, hours, minutes, seconds){

            var message = "";

            message += days + " day" + ( days==1 ? '':'s' ) + ", ";
            message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
            message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
            message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";

            if(newYear){
                message += "left until the new year!";
            }
            else {
                message += "left to 10 days from now!";
            }

            note.html(message);
        }
    })

    $('#countdown5').countdown({
        timestamp	: ts,
        callback	: function(days, hours, minutes, seconds){

            var message = "";

            message += days + " day" + ( days==1 ? '':'s' ) + ", ";
            message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
            message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
            message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";

            if(newYear){
                message += "left until the new year!";
            }
            else {
                message += "left to 10 days from now!";
            }

            note.html(message);
        }
    })

    $('.btn-menu').click(function(eventObject){
        $(this).toggleClass('active');
        $("body").toggleClass("menu-active");
        if ($('.sidebar').hasClass('active')) {
            $(".sidebar").removeClass("active");
            $('body').removeAttr('style')
		} else {
            $(".sidebar").addClass("active");
            $('body').css({
				'padding-right':SW
			})
		}
        eventObject.preventDefault();
    });
    $('.btn-menu2').click(function(eventObject){
        $(this).toggleClass('active');
        $(".main-nav ul").toggleClass("active");
        eventObject.preventDefault();
    });

    $('.marker').click(function(eventObject){
        $('.marker').removeClass('active');
        $(this).addClass('active');
        var id  ="#" + $(this).attr('data-tab');
        $('.info-block').removeClass('active');
        $(id).addClass('active');

        eventObject.preventDefault();
    });

    $('.open-login').click(function(eventObject){
        $(".popup-login").css('display','inline-block');
        $(".bg-popup").css('display','inline-block');
        $("body").addClass('popup-active');
        eventObject.preventDefault();
    });
    $('.open-account').click(function(eventObject){
        $(".account").css('display','inline-block');
        $(".bg-popup").css('display','inline-block');
        $("body").addClass('popup-active');
        eventObject.preventDefault();
    });
    $('.open-registration').click(function(eventObject){
        $(".registration").css('visibility','visible');
        $(".registration").css('display','inline-block');
        $(".bg-popup").css('display','block');
        $("body").addClass('popup-active');
        eventObject.preventDefault();
        $('.bonuses-gallery').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true
        });
    });
    $('.popup .btn-close').click(function(eventObject){
        $(".popup").css('display','none');
        $(".bg-popup").css('display','none');
        $("body").removeClass('popup-active');
        eventObject.preventDefault();
    });
	$window = $(window)
    function changingVars() {
        var div = document.createElement('div');
        div.style.overflowY = 'scroll';
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        SW = div.offsetWidth - div.clientWidth;
        document.body.removeChild(div);

        window_width = $window.width() + SW
        window_height = $window.height()

        scroll = $window.scrollTop()
    }
    changeDOM = [null]
    function adaptive() {
		$playingPlacesWrapper = $('.playing-places-wrapper')
		if (window_width < 1440) {
			if (changeDOM[0] != 0) {
                $playingPlacesWrapper.insertAfter('.tournament')
                changeDOM = 0
			}
		} else {

            if (changeDOM[0] != 1) {
                $playingPlacesWrapper.appendTo('.tournament-info-wrapper');
                changeDOM = 1
            }
		}
		console.log('asd')
	}
    changingVars()
	adaptive()
	$window.resize(function() {
		changingVars()
		adaptive()
    })
})