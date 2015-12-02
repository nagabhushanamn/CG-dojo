
$(document).ready(function() {

	var box = $('.jumbotron');

	$('.btn-primary').on('click', function(event) {
		box.show();
	});
	$('.btn-danger').on('click', function(event) {
		box.hide();
	});

});