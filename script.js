$(document).ready(function() {
	// tablica z dniami tygodnia
	var dayName = ["Pon", "Wto", "Śro", "Czw", "Pią", "Sob", "Nie"];
	
	// wyświetlenie dni tygodnia
	for (let i = 0; i <= 6; i++) {
		$("#calendar").append('<div class="day-name">' + dayName[i] + '</div>');
	}
	
	// wyświetlenie kalendarza
	for (let i = 1; i <= 31; i++) {
		//if (i % 7 != 1) {
		//	$("#calendar").append("<div>" + i + "</div>")
		//} else {
		//	$("#calendar").append('<div class="clear">' + i + '</div>');
		//}
		$("#calendar").append('<div class="' + ((i % 7 == 1) ? 'clear' : '') + '">' + i + '</div>')
	}
})