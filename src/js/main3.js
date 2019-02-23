
$(document).ready(function() {
jackpot(); setInterval(jackpot,1000);

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
        $(".popup-recovery").css('display','none');
        $(".popup-registration").css('display','none');
        $(".popup-login").css('display','inline-block');
        $(".bg-popup").css('display','inline-block');
        $("body").addClass('popup-active');
        eventObject.preventDefault();

        $('body').css({
            'padding-right':SW
        })
    });

    $('.open-recovery').click(function(eventObject){
        $(".popup-login").css('display','none');
        $(".popup-registration").css('display','none');
$(".popup-recovery").css('display','inline-block');
        $(".bg-popup").css('display','inline-block');
        $("body").addClass('popup-active');
        eventObject.preventDefault();

        $('body').css({'padding-right':SW});
    });

    $('.open-account').click(function(eventObject){
$(".popup-help").css('display','none');
        $(".account").css('display','inline-block');
        $(".bg-popup").css('display','inline-block');
        $("body").addClass('popup-active');
        eventObject.preventDefault();
$('body').css({'padding-right':SW});
    });

    $('.open-help').click(function(eventObject){
$(".account").css('display','none');
        $(".popup-help").css('display','inline-block');
        $(".bg-popup").css('display','inline-block');
        $("body").addClass('popup-active');
        eventObject.preventDefault();
$('body').css({'padding-right':SW});
    });

    $('.open-registration').click(function(eventObject){
        $(".popup-login").css('display','none');
        $(".popup-recovery").css('display','none');
        $(".registration").css('visibility','visible');
        $(".registration").css('display','inline-block');
        $(".bg-popup").css('display','block');
        $("body").addClass('popup-active');
        eventObject.preventDefault();
        $('body').css({
            'padding-right':SW
        })
    });
    $('.popup .btn-close').click(function(eventObject){
        $(".popup").css('display','none');
        $(".bg-popup").css('display','none');
        $("body").removeClass('popup-active');
        eventObject.preventDefault();
        
 if (!$('.sidebar').hasClass('active')) {
            $('body').css({
                'padding-right':0
            });
        }
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
    }
    changingVars()
    adaptive()
    $window.resize(function() {
        changingVars()
        adaptive()
    })
})