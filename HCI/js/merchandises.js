$(document).ready(function () {

    for (i = 0; i < 3; i++) {
        $('.title')[i].onclick = function (e) {
            var a = e.srcElement.parentElement.children[1].children[0]
            if (a.className == 'artists nonactive') {
                resetClassName()
                a.className = a.className.replace('nonactive', 'active')
                var cn = a.className.split(' ').join('.')
                $('.artists.nonactive').slideUp(300)
                $('.' + cn).slideDown(300)
            }
            else {
                a.className = 'artists nonactive'
                $('.artists.nonactive').slideUp(300)
            }
        }
    }
})

function resetClassName() {
    for (j = 0; j < 3; j++) {
        var m = $('.artists')[j]
        m.className = "artists nonactive"
    }
}