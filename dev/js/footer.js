$(window)
  .scroll(positionFooter)
  .resize(positionFooter)

function positionFooter() {
  var docHeight = $(document.body).height() - $("#sticky-footer-push").height();
  if(docHeight < $(window).height()){
    var diff = $(window).height() - docHeight;
    if (!$("#sticky-footer-push").length > 0) {
      $("#footer").before('<div id="sticky-footer-push"></div>');
    }
    $("#sticky-footer-push").height(diff);
  }
}

$(document).ready(function(){
  positionFooter()
})