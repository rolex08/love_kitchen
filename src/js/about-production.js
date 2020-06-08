$(window).ready(function(){

/**play/pause видеоплеер */
    var video_1 = document.querySelector('#video-1');
    var video_2 = document.querySelector('#video-2');
    $('#play-video-1').on( 'click', function(){
        $('#play-video-1').fadeOut(500);
        video_1.play();
        $('#video-1').attr('controls', 'controls' );
    });
    $('#play-video-2').on( 'click', function(){
        $('#play-video-2').fadeOut(500);
        video_2.play();
        $('#video-2').attr('controls', 'controls' );
    });
    $('.popup-about-production-close').on( 'click', function(){
        $('#play-video-1').fadeIn(500);
        $('#play-video-2').fadeIn(500);
        video_1.pause();
        video_2.pause();
        $('#video-1').removeAttr('controls');
        $('#video-2').removeAttr('controls');
    });

/**клик узнать о производстве*/
    $('.js-btn-about-production').on('click', function(){
        $('.popup').removeClass('active-popup');
        $('#popup-about-production').addClass('active-popup');
        //document.body.style.overflowY = $('#popup-about-production').is(':hidden') ? "scroll" : "hidden";
    });

    $('.js-show-more-offers').on('click', function(){
        $(this).addClass('dn');
        $('.offer-next').removeClass('dn-320');
    });

/** Замена картинки на более маенькую */
    if ($(window).width() < 681){
        $('#poopup-about-product-img').attr('src','src/img/image41_680.jpg')
    }
})
