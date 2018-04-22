import 'owl.carousel'

var width = $(window).width()
var stagePadding = 0
if(width > 1050 && width <= 1150){
    stagePadding = 50
} else if(width <= 1050)  {
    stagePadding = 120
} else {
    stagePadding = 100
}

$('.treatments .carousel').owlCarousel({
    items: 3,
    navigation : false,
    //stagePadding: stagePadding,
    responsive:{
        320:{
            items:1,
        },
        1050:{
            items:2
        },
        1150:{
            items:2
        }
    }
})

$('.prev').click(function () {
    $('.carousel').trigger('prev.owl.carousel', [300])
})

$('.next').click(function () {
    $('.carousel').trigger('next.owl.carousel')
})

$('.about .carousel').owlCarousel({
    items: 1
})