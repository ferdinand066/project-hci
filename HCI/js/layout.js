$(document).ready(function () {
    var backgroundList = [
        'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)',
        'linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)',
        'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)'
    ]

    $('.background').css('background-image', backgroundList[Math.floor(Math.random() * backgroundList.length)])

    function setBackground(){
        var a = $('body').css('height');
        $('.background').css({
            'width' : '100%',
            'height' : a
        });
    }
    setBackground()

    setInterval(setBackground, 1000);
});