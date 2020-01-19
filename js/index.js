$('.list__item').click(function(){
    $('.list__item').removeClass('list__item--active');
    $(this).addClass('list__item--active');
});