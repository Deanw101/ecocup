console.clear();

const { gsap, Splitting } = window;

Splitting();

gsap.set('.cards__wrapper', { autoAlpha: 1 })

gsap.timeline({
	defaults: {
		duration: 1.25,
		stagger: 0.125,
		ease: "expo.inOut",
	},
})
	.fromTo(".card__image--wrapper", { yPercent: 110 }, { yPercent: 0 }, 0)
	.fromTo(".card__image--outer", { yPercent: -110 }, { yPercent: 0 }, 0)
	.set(".cards__wrapper, .card", { pointerEvents: "all" }, "-=1");



(function ($) {
    "use strict";

		$(window).on('scroll', function() {
		
						 var scroll_pos = $(this).scrollTop();
						if(scroll_pos > 210) {
								$('.menuh').css('color', '#000');
						} else {
								$('.menuh').css('color', '#fff');
						}
				 });

				 $('#homem').on("click", function () {
				   window.location.href = "index.html";
				 })

				 $('#missionm').on("click", function () {
				   window.location.href = "mission.html";
				 })

				 $('#findm').on("click", function () {
					window.location.href = "find.html";
				})

				$('#contactm').on("click", function () {
				 window.location.href = "contact.html";
			 })

})(jQuery);
