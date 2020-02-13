$(document).ready(function () {
    $('.hamburger').click(function () {
        $('.header__list-mobile').toggleClass('flex');
    });



    var $menu = $(".header");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100 && $menu.hasClass("default")) {
            $menu.removeClass("default").addClass("fixed");
        } else if ($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
            $menu.removeClass("fixed").addClass("default");
        }
    });



    $('.list__item').click(function(){
        $('.list__item').removeClass('list__item--active');
        $(this).addClass('list__item--active');
    });


    $('#services').hover(function(){
        $('.list__item').removeClass('list__item--active');
        $('.list__item[href="#services"]').addClass('list__item--active');
    })

    $('#clients').hover(function(){
        $('.list__item').removeClass('list__item--active');
        $('.list__item[href="#clients"]').addClass('list__item--active');
    })

    $('#team').hover(function(){
        $('.list__item').removeClass('list__item--active');
        $('.list__item[href="#team"]').addClass('list__item--active');
    })


});
