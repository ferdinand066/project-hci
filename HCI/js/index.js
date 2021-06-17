$(document).ready(function () {
    var i = 0;
    var max = 3;
    var imageWidth = $('.slider-container>img').width();
    function nextSlide() { 
        ++i;
        i = i > max ? 0 : i;
        imageWidth = $('.slider-container>img').width();
        $('.slider-container').animate({
            left: '-' + i * imageWidth + 'px'
        }, 700, ()=>{});
    }
    
    $('.next').click(nextSlide);

    $('.prev').click(function () { 
        --i;
        i = i < 0 ? max : i;
        imageWidth = $('.slider-container>img').width();
        $('.slider-container').animate({
            left: '-' + i * imageWidth + 'px'
        }, 700, ()=>{});
    });

    setInterval(nextSlide, 5000);

    $('.background').css('height', $('body').height())
});

