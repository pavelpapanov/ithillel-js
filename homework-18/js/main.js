$(document).ready(function() {
	let $_galItem = $('.js--gal_item');
	let $_modal = $('.js--modal');

	$_galItem.on('click', function() {
		$_modal.addClass('active');
		let $_imageUrl = $(this).find('img').attr('src');
		$('.js--modal__content img').attr('src', $_imageUrl);
		console.log($_imageUrl);
	});

	$('.js--modal__close').on('click', function () {
		if ($_modal.has('active')) {
			$_modal.removeClass('active');
		}
	});
});