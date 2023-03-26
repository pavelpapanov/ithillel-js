$(document).ready(function() {
	let $_galItem = $('.js--gal_item');
	let $_modal = $('.js--modal');
	let $_modalImage = $('.js--modal__content img');
	let $_modalClose = $('.js--modal__close');

	$_galItem.on('click', function() {
		$_modal.addClass('active');
		let $_imageUrl = $(this).find('img').attr('src');
		$_modalImage.attr('src', $_imageUrl);
	});

	$_modalClose.on('click', function () {
		if ($_modal.has('active')) {
			$_modal.removeClass('active');
		}
	});
});