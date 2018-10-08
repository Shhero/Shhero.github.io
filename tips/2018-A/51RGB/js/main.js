$(".module-banner").slide(
    {
        titCell:".hd ul",
        mainCell:".bd ul",
        effect:"leftLoop",
        vis:"auto",
        scroll:1,
        autoPlay:true,
        autoPage:true,
        trigger:"click"
    }
);


$('#loginLink').on('click', function (event) {
    $('.module-shade').removeClass('hide');
});


$('.module-close').on('click', function (event) {
    event.stopPropagation();
    $('.module-shade').addClass('hide');
});

