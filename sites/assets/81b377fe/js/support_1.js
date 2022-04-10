$(function(){
	var currentMainItem, currentFAQitem;

	function closeFirstLevel(){
		$('.second-section__inner').addClass('hidden');
	}

	function openFirstLevel(){
		$('.second-section__inner').removeClass('hidden');
	}

	function openSecondLevel(){
		$('.FAQ').removeClass('hidden');
		$('#FAQ-' + currentMainItem).removeClass('hidden');
	}
	function closeSecondLevel(){
		$('#FAQ-' + currentMainItem).addClass('hidden');
		$('.FAQ').addClass('hidden')
	}
	function openThirdLevel(){
		$('.FAQ-' + currentMainItem + '-answers').removeClass('hidden');
		$('.FAQ-' + currentMainItem + '__answer-' + currentFAQitem).removeClass('hidden');
	}

	function closeThirdLevel(){
		$('.FAQ-' + currentMainItem + '-answers').addClass('hidden');
		$('.FAQ-' + currentMainItem + '__answer-' + currentFAQitem).addClass('hidden');
	}

	//Клик по айтемам первого экрана
	$('.second-section__inner .second-section__item').each(function(){
		$(this).click(function(){
			currentMainItem = $(this).data('number');
			closeFirstLevel();
			openSecondLevel();
		})
	})
	//Клик по кнопке назад второго экрана 
	$('.FAQ__item-backward, .FAQ__item .second-section__item').each(function(){
		$(this).click(function(){
			closeSecondLevel();
			openFirstLevel();
		});	

	})

	//Клик по вопросам второго экрана
	$('.FAQ__item li').each(function(){
		$(this).click(function(){
			console.log('taped!');
			currentFAQitem = $(this).data('number');
			console.log(currentFAQitem);
			closeSecondLevel();
			openThirdLevel();
		})
	});

	//Клик по кнопке назад третьего экрана 
	$('.FAQ-answers__backward').each(function(){
		$(this).click(function(){
			closeThirdLevel();
			openSecondLevel();
		})
	})


})	