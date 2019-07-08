$('#writeComment').on('click', function (e) {
    e.preventDefault();
    $('#commentForm').slideToggle(300);
});



$('#commentList').on('click', '.delete', function () {
    $(this).parent().fadeOut(300, function () {
        $(this).remove();
    });
});



$('.open-modal').on('click', function (e) {
    e.preventDefault();

    $('.modal').fadeIn(300);
});



$('.close-modal').on('click', function () {
    $('.modal').fadeOut(300);
});
