$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');


	$('.c-news__list').slick({
		slidesToShow: 3,
		responsive: [{
			breakpoint: 1199,
			settings: {
				slidesToShow: 2
			}}, {
			breakpoint: 767,
			settings: {
				slidesToShow: 1
			}
		}]
	})

	$('.c-announce__list').slick({
		slidesToShow: 3,
		responsive: [{
			breakpoint: 1199,
			settings: {
				slidesToShow: 2
			}}, {
			breakpoint: 767,
			settings: {
				slidesToShow: 1
			}
		}]
	})

	$('.slider').slick({
		slidesToShow: 4,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 3
			}}, {
			breakpoint: 767,
			settings: {
				slidesToShow: 1
			}
		}]
	})


	function valueElementForm(nameElement) {
		var newNameElement = '.' + nameElement;
			element = $(newNameElement);
		element.each(function(index, el) {
			var elementInput = $(this).find($('input')),
				elementLabel = $(this).find($('label')),
				elementValue = index + 1;
			elementInput.attr('id', nameElement + '-' + elementValue);
			elementLabel.attr('for', nameElement + '-' + elementValue);
		});
		
	}
	valueElementForm('checkbox');
	
	$('select').styler();


	$('.aside').each(function(index, el) {
		var section = $(this).siblings('.section');
		if ($(this).hasClass('aside_left')) {
			section.addClass('section_pl');
		} else if($(this).hasClass('aside_right')) {
			section.addClass('section_pr');
		}
	});

	var hum = $('.hum'),
			humClass = 'hum_toggle',
			nav = $('.nav__list');
	
	hum.click(function(event) {
		$(this).toggleClass(humClass);
		nav.slideToggle(300);
	});


	$('.c-links__list a').click(function(event) {
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1500);
    return false;
	});


	$('.toggle-phones a').click(function(event) {
		event.preventDefault();
		$('.hidden-phones').slideToggle(300);
	});
});
