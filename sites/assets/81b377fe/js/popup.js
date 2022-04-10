$(function(){
	$('.open-popup').click(function(){
		$('.form-bg, .form-box').fadeIn(100);
	});
	$('.close-popup').click(function(){
		$('.form-bg, .form-box').fadeOut(100);
	});
});