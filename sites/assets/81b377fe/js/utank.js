$(function(){
	$('.third-section__imitation-range-item').each(function(){
		$(this).on('click', function(){
			var number = $(this).data('number');
			var topJump = 0;
			if ($(window).width() > '810'){
				var topJump = 49;
			}
			if ($(window).width() <= '810' && $(window).width() > 440){
				var topJump = 46;
			}
			if ($(window).width() <= '440'){
				var topJump = 44;
			}
			
			$(this).addClass('third-section__imitation-range-item_active').siblings().removeClass('third-section__imitation-range-item_active');
			$('.third-section__point').css({'top':topJump*number});
			$('.third-section__text-item').each(function(){
				$(this).addClass('third-section__text-item_hidden');
			});
			$('#text-item-'+number).removeClass('third-section__text-item_hidden');
		})
	})
});