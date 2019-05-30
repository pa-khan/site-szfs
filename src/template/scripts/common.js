$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');


	$('.c-news__list').slick({
		slidesToShow: 3
	})

	$('.c-announce__list').slick({
		slidesToShow: 3
	})

	$('.slider').slick({
		slidesToShow: 4
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
});
