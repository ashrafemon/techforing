$(document).ready(function () {
    $('.feature-brand-carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplaySpeed: 2000,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    })

    $('.happy-client-carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplaySpeed: 2000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
        }
    })

    $('.people-saying-carousel').owlCarousel({
        // margin: 20,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplaySpeed: 2000,
        items: 1
    })
})