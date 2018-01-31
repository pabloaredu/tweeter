
$(document).ready(function() {
    $('.writing-tweet').on('keyup', function() {
      var count = this.value.length;
      var leftChars = 140 - count;
      if (count > 140) {
        $(this).parent().find('.counter').text(leftChars).css({'color': 'red'});
      } else {
        $(this).parent().find('.counter').text(leftChars).css({'color': 'black'});;
      }
    });
 });




