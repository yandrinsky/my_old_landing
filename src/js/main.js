AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


$(function(){
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('#modal').attr('style', 'display: inline-block;');
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


	$('.slider__inner').slick({
			infinite: true,
			autoplay: true,
			autoplaySpeed: 4000,
			dots: true,
			arrows: false
	});

	$('.header .header__inner .menu a, .header a, .footer a, .button').click(function(){
		var element = $(this).attr('href');
		var dist = $(element).offset().top;
		if($(element).attr('id') == 'services'){
			$('html, body').animate({'scrollTop': dist-75}, 800);}
		else{
			$('html, body').animate({'scrollTop': dist}, 800);}
			
		return false;
	});



	$('.header__btn-menu').on('click', function(){
		$('.menu__item-inner').slideToggle();
		$('.menu__item-inner').css('visibility', 'visible');

	});


	

	function buttonMenu(){
		if ($(window).width() <= '680'){
	     $('.menu__item a').on('click', function(){
			$('.header .menu ul').attr('style', 'display: none;');
		});	
	    } 
	    if ($(window).width() >= '680'){
			$('.header .menu ul').attr('style', '');
		};
	}


	buttonMenu();
	$(window).resize(buttonMenu);
	$(window).load(buttonMenu);// при загрузке
	buttonMenu();
	
	/*$(window).scroll(function(){

		$('section[id]').each(function(){
			var id = $(this).attr('id');
			if($(this).offset().top-100 < $(window).scrollTop()){
				$('.header .header__inner .menu a[href=#'+id+']').addClass('menu__item_active').siblings().removeClass('menu__item_active');
			}
		});
		
	});*/
});

class Popup{
	constructor() {
		this.popup = document.querySelector(".popup");
		this.popupDark= document.querySelector(".popup_dark");
		this.frame = document.querySelector("#popup__iframe")
		this.popupCloseBtn = document.querySelector("#popup__close");
		this.src = "";
	}

	close(){
		this.popupDark.classList.add("hidden");
		this.popup.classList.add("hidden");
	}
	open(){
		this.popupDark.classList.remove("hidden");
		this.popup.classList.remove("hidden");
	}
	toggle(){
		this.popupDark.classList.toggle("hidden");
		this.popup.classList.toggle("hidden");
	}
	setSrc(src){
		this.src = src;
		this.frame.src =   this.src;
	}
	start(){
		this.popupCloseBtn.onclick = e => {
			this.close();
		}
	}
}


let popup = new Popup();
popup.start();
document.querySelectorAll(".portfolio__item").forEach(item => {
	item.onclick = e => {
		e.preventDefault();
		popup.setSrc(e.target.dataset.href);
		popup.open();
		// frame.src = e.target.dataset.href;
		// popup.classList.remove("hidden");
		//console.log(e.target.dataset.href)
	}
})

