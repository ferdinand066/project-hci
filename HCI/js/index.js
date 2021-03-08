$(document).ready(function () {
    var i = 0;
    var max = 3;
    var imgList = [
        "../assets/images/image-slider/1.jpg",
        "../assets/images/image-slider/2.jpg",
        "../assets/images/image-slider/3.jpg",
        "../assets/images/image-slider/4.png"
    ]

    function nextSlide() { 
        var curr = $('img.active');
        curr.fadeOut(250);
        setTimeout(()=>{
            ++i;
            i = i > max ? 0 : i;
            curr.attr("src", (imgList[i]));
            $('.dot.active').removeClass('active')
            $('.'+i+'.dot').addClass('active')
        }, 250);

        curr.fadeIn(250);
    }
    
    $('.next').click(nextSlide);

    $('.prev').click(function () { 
        var curr = $('.active');
        curr.fadeOut(250);
        setTimeout(()=>{
            --i;
            i = i < 0 ? max : i;
            curr.attr("src", (imgList[i]));
            $('.dot.active').removeClass('active')
            $('.'+i+'.dot').addClass('active')
        }, 250);
        curr.fadeIn(250);
    });

    setInterval(nextSlide, 5000);

    $('.dot').click(function () { 
        $(this).parent().children('.active')
        $($(this).parent().children('.active')[0]).removeClass('active')
        $(this).addClass('active')
        
        i = (parseInt($(this).attr('class').split(' ')) - 1)
        nextSlide()
        
        
    });

    $('.background').css('height', $('body').height())
});

