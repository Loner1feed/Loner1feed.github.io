function active(str) {
    $(str).click(function(){
        $(str).removeClass('active');
        $(this).addClass('active');
    });
}



active('.block-modules-heading-switch__item');

var id = 1;
var strid;

$('.block-stories-lower-desc__button').click(function(){
    if(id >= 6){
        id = 0;
    }
    id++;
    strId = String(id);
    $('.block-stories-upper-menu-items__item').removeClass('active');
    $('#' + strId).addClass('active');



    var s;
    s = $('#' + strId).html();
    $('.block-stories-upper__img, .block-stories-lower').fadeOut(function(){
        $('.block-stories-lower-desc__title').html(s);
        $('.block-stories-upper__img, .block-stories-lower').fadeIn()
    });
});



$('.block-stories-upper-menu-items__item').click(function(){
    
    id = $(this).attr('id');
    strId = String(id);
    $('.block-stories-upper-menu-items__item').removeClass('active');
    $('#' + strId).addClass('active');
    var s;
    s = $('#' + strId).html();
    $('.block-stories-upper__img, .block-stories-lower').fadeOut(function(){
        $('.block-stories-lower-desc__title').html(s);
        $('.block-stories-upper__img, .block-stories-lower').fadeIn()
    });
});

$('#all').click(function(){
    $('.block-modules-grid').fadeOut(function(){
        $('.block-modules-grid-item_small').show();
        $('.block-modules-grid-item_big').show(function(){
            $('.block-modules-grid').fadeIn();
        });
    });
});

$('#events').click(function(){
    $('.block-modules-grid').fadeOut(function(){
        $('.block-modules-grid-item_small').hide();
        $('.block-modules-grid-item_big').show(function(){
            $('.block-modules-grid').fadeIn();
        });
    });
});

$('#news').click(function(){
    $('.block-modules-grid').fadeOut(function(){
        $('.block-modules-grid-item_small').show();
        $('.block-modules-grid-item_big').hide(function(){
            $('.block-modules-grid').fadeIn()
        });
    });
    
});


$('#price1, #price2, #price3').change(function(){
    $('#price1, #price2, #price3').parent().removeClass('active');
    $(this).parent().addClass('active');
});

$('#frequency1, #frequency2').change(function(){
    $('#frequency1, #frequency2').parent().removeClass('active');
    $(this).parent().addClass('active');
});