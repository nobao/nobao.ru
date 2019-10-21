$(function() {

	// оборачиваем букву O в span, чтобы изменить её цвет
	$('.header__logo__litera').each(function() {
		let ths = $(this);
		ths.html(ths.html().replace('O', '<span>O</span>'));
	});

	// работа с полем поиска
	$('.header__search').click(function() {
		$('.header__search__field').stop().slideToggle();
		$('.header__search__field input[type=text]').focus();
	});

	$(document).keyup(function(e) {
		if (e.keyCode == 27) {
			$('.header__search__field').slideUp();
		}
	}).click(function() {
		$('.header__search__field').slideUp();
	});

	$('.header__search').click(function(e) {
		e.stopPropagation();
	});

	// мобильное меню
	$('.header').after('<div class="header__mobile-menu d-lg-none"></div>');
	$('.header__menu__top').clone().appendTo('.header__mobile-menu');
	$('.header__mobile-menu__button').click(function() {
		$('.header__mobile-menu').stop().slideToggle();
	});

	$("body").prognroll({
		height: 3,
		color: "#0f20f2",
		custom: false
	});

	$('.header__menu li').removeClass('active');
	var path = window.location.pathname;
	$('.header__menu li a').each(function() {
		var href = $(this).attr('href');
		if(path.slice(1).substring(0, href.length) === href) {
			$(this).parent('li').addClass('active');
		}
	});

	document.querySelectorAll('pre code').forEach((block) => {
		hljs.highlightBlock(block);
	  });



});
