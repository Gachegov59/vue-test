$(function () {
    $('.js-fancy').on("click", function (e) {
        e.preventDefault();
        $.fancybox.close();
        $.fancybox.open($($(this).attr('data-popup')));
    } )
})

