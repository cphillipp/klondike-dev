$(document).ready(function() {
	$('.select').click(function() {
	  $(this).find('ul').show();
	});
	$('.select').mouseleave(function() {
	  $('.select ul').hide();
	});
});