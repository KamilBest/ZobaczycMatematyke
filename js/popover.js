$(document).ready(function(){
    $('.trigger').popover();
});
$('html').on('click', function(e) {
  if (typeof $(e.target).data('original-title') == 'undefined') {
    $('[data-original-title]').popover('hide');
  }
});
