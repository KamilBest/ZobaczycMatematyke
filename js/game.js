$(function() {
    var result = $('#incorrectResult');
    var correctResult = $('#correctResult');

    $(".draggable").draggable({
        containment: '#gameContainer',
        revert: 'invalid',
        helper: 'clone',
        start: function(event, ui) {
            result.fadeOut(1000);
        }


    });

    $("#droppable").droppable({
        accept: '.correct',
        drop: function(event, ui) {
            $(".draggable").draggable('disable');
            correctResult.fadeIn(1000);
            correctResult.prepend('Well done! You found the ' + ui.draggable.attr('id') + ' ');
        }
    });

    $("#playAgain").click(function() {
        location.reload(true);
    });
});
