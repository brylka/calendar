$(document).ready(function() {
	for (let i = 1; i <= 31; i++) {
		if (i % 7 != 1) {
			$("#calendar").append("<div>" + i + "</div>")
		} else {
			$("#calendar").append('<div class="clear">' + i + '</div>');
		}
	}
})