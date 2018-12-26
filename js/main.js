var $ball = $('.ball');

$('#btn-up').on('click', function() {
    var newDown = $ball.offset().top - 10;
    $ball.css('top', newDown);
});




$('#btn-right').on('click', function() {
    var newLeft = $ball.offset().left + 10;
    $ball.css('left', newLeft);
});


$('#btn-down').on('click', function() {
    var newTop = $ball.offset().top + 10;
    $ball.css('top', newTop);
});



$('#btn-left').on('click', function() {
    var newRight = $ball.offset().left - 10;
    $ball.css('left', newRight);
});