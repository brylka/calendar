$(document).ready(function() {
	// tablica z dniami tygodnia
	var dayName = ["Pon", "Wto", "Śro", "Czw", "Pią", "Sob", "Nie"];
	
	// wyświetlenie dni tygodnia
	for (let i = 0; i <= 6; i++) {
		$("#calendar").append('<div class="day-name' +
		(i == 5 ? ' saturday' : i == 6 ? ' sunday' : '') 
		+ '">' + dayName[i] + '</div>');
	}
	
	// wyświetlenie kalendarza
	for (let i = 1; i <= 31; i++) {
		// wyświetlanie dni miesiąca
		$("#calendar").append('<div class="' +
		((i % 7 == 1) ? 'clear' : (i % 7 == 0) ? 'sunday' : (i % 7 == 6) ? 'saturday' : '') + 
		'">' + i + '</div>')
	}
})