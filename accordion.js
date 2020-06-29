$(document).ready(function() {
	
	$(".c-accordion__item").on("click", function() {
		if ($(this).hasClass("c-accordion__item-active")) {
			$(this).children(".c-accordion__description").slideUp(300);
			$(this).removeClass("c-accordion__item-active");
		} else {
			$(".c-accordion__item-active").removeClass("c-accordion__item-active");
			$(".c-accordion__description").slideUp(300);
			$(this).children(".c-accordion__description").slideDown(300);
			$(this).addClass("c-accordion__item-active");
		}
	});
})