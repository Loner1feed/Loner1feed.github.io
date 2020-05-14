$('a[href^="#"]').on('click', function(event) {
    // отменяем стандартное действие
    event.preventDefault();
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */

    dn -= 70;
    
    $('html, body').animate({scrollTop: dn}, 1000);
    
    /*
    * 1000 скорость перехода в миллисекундах
    */
  });


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
});


$(window).scroll(function(){
    if ( $(this).scrollTop() > $('#ps').offset().top - 600 ) {
        $('#ps').addClass('ps-anim');
    }
    if ( $(this).scrollTop() > $('#html').offset().top - 700 ) {
        $('#html').addClass('html-anim');
    }
    if ( $(this).scrollTop() > $('#css').offset().top - 800 ) {
        $('#css').addClass('css-anim');
    }
    if ( $(this).scrollTop() > $('#js').offset().top - 900 ) {
        $('#js').addClass('js-anim');
    }
});
