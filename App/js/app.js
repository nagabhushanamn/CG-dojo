//window.onload = function() {};

document.addEventListener('DOMContentLoaded', function() {

	var msgBox = document.getElementsByClassName('jumbotron')[0];
	var showBtn = document.getElementsByClassName('btn-primary')[0];
	var hideBtn = document.getElementsByClassName('btn-danger')[0];

	showBtn.addEventListener('click', function() {
		msgBox.style.display = 'block';
	}, false);
	hideBtn.addEventListener('click', function() {
		msgBox.style.display = 'none';
	}, false);

}, false);
