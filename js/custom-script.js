jQuery(window).load(function(){
	//Background Image carousel
	$('.slideCarousel').carousel({
		interval: 3500
	})
	$(".loader").fadeOut("slow");
	//Script of fancy scroll
	$(window).load(function(){			
			$("#content-1").mCustomScrollbar({
				theme:"minimal"
			});			
	});
	
	$('.buyApp').each(function(){
		$(this).addClass("floating");
	});
});

$(window).scroll(function() {
	
	$('.fromRight').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+450) {
			$(this).addClass("slideLeft");
		}
	});
	
	$('.fromLeft').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+450) {
			$(this).addClass("slideRight");
		}
	});
	
	$('.fromBottom').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+450) {
			$(this).addClass("slideUp");
		}
	});
	
});