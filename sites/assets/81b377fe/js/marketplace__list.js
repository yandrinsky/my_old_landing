$(function(){
	$('select').styler();
	clearStyleList();
	$(window).resize(clearStyleList);
	sort();
	callToggle();
	openSort();
	whiteHead();

	function callToggle(){
		$('.aside__manufacturer-head').click(function(){
			$('.aside__manufacturer-content').slideToggle();
		})
		$('.aside__availability-head').click(function(){
			$('.aside__availability-content').slideToggle();
		})
		$('.aside__condition-head').click(function(){
			$('.aside__condition-content').slideToggle();
		})
		$('.aside__data-center-head').click(function(){
			$('.aside__data-center-content').slideToggle();
		})
		$('.aside__choose-data-head').click(function(){
			$('.aside__choose-data-content').slideToggle();
		})
		$('.aside__delivery-head').click(function(){
			$('.aside__delivery-content').slideToggle();
		})
		$('.aside__price-head').click(function(){
			$('.aside__price-content').slideToggle();
		})
	}
	



	$('.pages__item').each(function(){
		$(this).hover(
		function(){
			$('.pages__item').removeClass('pages__item_active');
			$(this).addClass('pages__item_active');
		},
		function(){
			$('.pages__item').removeClass('pages__item_active');
			$('.pages__item:nth-of-type(3)').addClass('pages__item_active');
		});
	})


	function sort(){
		$('.second-section__sort-list').click(function(){
			$('.second-section').removeClass('card-style');
			$('.second-section').addClass('list-style');
			$('.second-section__goods-inner').removeClass('second-section__goods-inner_cards');
			$('.second-section__goods-inner').addClass('second-section__goods-inner_list');
			$('.goods-item').removeClass('card-item');
			$('.goods-item').addClass('list-item');

		})
		$('.second-section__sort-bock').click(function(){
			$('.second-section').removeClass('list-style');
			$('.second-section').addClass('card-style');
			$('.second-section__goods-inner').removeClass('second-section__goods-inner_list');
			$('.second-section__goods-inner').addClass('second-section__goods-inner_cards');
			$('.goods-item').removeClass('list-item');
			$('.goods-item').addClass('card-item');
		})

	}
console.log('idE')
	function openSort(){
		$('.aside-open').click(function(){
			$('.aside').slideToggle();
		})
	}
	function whiteHead(){
		var head = $('.top-head');
		var top = head.offset().top;
		$(window).scroll(function(){
			if($(window).scrollTop() > top){
				$('.top-head__content').removeClass('center');
				$('.top-head__logo').removeClass('hidden');
				$('.top-head__cart').removeClass('hidden');
				$('.top-head').removeClass('top-head_normal');
				$('.top-head').addClass('top-head_fixed');
				$('.second-section').addClass('second-section_fixed-help');

			} else { 
				$('.top-head__content').addClass('center');
				$('.top-head__logo').addClass('hidden');
				$('.top-head__cart').addClass('hidden');
				$('.top-head').removeClass('top-head_fixed');
				$('.top-head').addClass('top-head_normal');
				$('.second-section').removeClass('second-section_fixed-help');
			}
			
		})
	}
	console.log('idE')
	$('.top-head__open').click(function(){
		$('.top-head__item').each(function(){
			$(this).toggle();
		})
		$('.top-head_fixed .search').toggle()
	});
	function clearStyleList(){
		if (window.matchMedia('(max-width: 540px)').matches) {
			$('.second-section').removeClass('list-style');
			$('.second-section').addClass('card-style');
			$('.second-section__goods-inner').removeClass('second-section__goods-inner_list');
			$('.second-section__goods-inner').addClass('second-section__goods-inner_cards');
			$('.goods-item').removeClass('list-item');
			$('.goods-item').addClass('card-item');
		}
        	
		
	}

});



