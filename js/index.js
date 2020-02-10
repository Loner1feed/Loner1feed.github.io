$('.hamburger').click(function () {
    $('.header__mobile-list').toggleClass('flex');
});


$('.list__item').click(function () {
    $('.list__item').removeClass('list__item--active');
    $(this).addClass('list__item--active');
});


var $menu = $(".header");
$(window).scroll(function () {
    if ($(this).scrollTop() > 100 && $menu.hasClass("default")) {
        $menu.removeClass("default").addClass("fixed");
    } else if ($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
        $menu.removeClass("fixed").addClass("default");
    }
});




$('#profile').hover(function(){
    $('.list__item').removeClass('list__item--active');
    $('.list__item[href="#profile"]').addClass('list__item--active');
})

$('#skills').hover(function(){
    $('.list__item').removeClass('list__item--active');
    $('.list__item[href="#skills"]').addClass('list__item--active');
})

$('#works').hover(function(){
    $('.list__item').removeClass('list__item--active');
    $('.list__item[href="#works"]').addClass('list__item--active');
})

$('#resume').hover(function(){
    $('.list__item').removeClass('list__item--active');
    $('.list__item[href="#resume"]').addClass('list__item--active');
})
