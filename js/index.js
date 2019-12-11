$(document).ready(function () {
    $('.headSlider-slider-wrap').slick({
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
    });

    width = $(window).width();
    if (width < 1100) {
        $('.block-courses-cards').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 5000,
            dots: true
        });

        $('.block-teachers-cards').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            centerMode: true,
            responsive: [{
                breakpoint: 768,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            }]
        });
    }

    $('.block-clients-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.block-clients-slider-nav'
      });
      $('.block-clients-slider-nav').slick({
        slidesToShow: 5,
        infinite: true,
        arrows: true,
        slidesToScroll: 1,
        asNavFor: '.block-clients-slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
      });
});