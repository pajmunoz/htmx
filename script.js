
$(document).ready(function () {
  var hoveredTextContainer = $("#hoveredTextContainer")
  var sound = $('#hover-sound')[0]
  var muteBtn = $('#muteBtn')
  var isMuted = false


 
  $(document).on("click",  '#muteBtn', function() {
    isMuted = !isMuted
    console.log(isMuted)
    if(isMuted){
      $('#hover-sound').prop("muted", true);
    }else{
      $('#hover-sound').prop("muted", false);
    }
  })
 
  $(document).on("click", "li span", function () {
    sound.play();
    //console.log(text); // Show text in an alert
    var position = $(this).position();
    var top = position.top;
    var left = position.left + $(this).outerWidth(true);

    hoveredTextContainer.css({
      'top': top + 'px',
      'left': left + 'px',
      'display': 'block'
    });

  });
  $(document).on("mouseleave", "li span", function () {
    hoveredTextContainer.css({
      'display': 'none'
    });

    sound.pause();
    sound.currentTime = 0;

  })

});
