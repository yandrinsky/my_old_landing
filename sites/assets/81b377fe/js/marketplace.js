
$(function(){

	activeChange(5);



	function activeChange(sec){
		var count = 1;

		function removeActive(){
			$('.first-section__item').each(function(){
				$(this).removeClass('active')
			})
		}

		function change(){

			if(count === 3) count = 0;

			console.log(count);

			removeActive()

			$('#first-item-' + count).addClass('active');
			count++;
		}
		var interval = setInterval(change, sec * 1000);

		$('.first-section__item').each(function(){
			$(this).hover(
			function(){
				removeActive()
				$(this).addClass('active');
				clearInterval(interval);
			},
			function(){
				interval = setInterval(change, sec * 1000);
			},
			)
		});

		
	};
	
	

	

	$('.second-section__item').each(function(){
		$(this).hover(	
			function(){
				var number = $(this).data('number');
				$('#img-' + number).animate({
					bottom: "+=10",

				}, 200);
			},

			function(){
				var number = $(this).data('number');
				$('#img-' + number).animate({
					bottom: "-=10",

				}, 200);
			}
		);
	});

	function addSlick(){
		if (window.matchMedia('(max-width: 1350px)').matches) {
        	$('.first-section__inner').slick({
			  dots: true,
			  infinite: true,
			  speed: 500,
			  fade: true,
			  cssEase: 'linear',
			  autoplay: true,
  			  autoplaySpeed: 5000,
			});
    	} 
		
	}
	addSlick();
	$(window).resize(addSlick);
	$(window).load(addSlick);

});
