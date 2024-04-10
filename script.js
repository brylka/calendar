$(document).ready(function() {
	// tablica z dniami tygodnia
	var dayName = ["Pon", "Wto", "Śro", "Czw", "Pią", "Sob", "Nie"];
	
	// wyświetlenie dni tygodnia
	for (let i = 0; i <= 6; i++) {
		//$("#calendar").append('<div class="day-name' + (i == 5 ? ' saturday' : i == 6 ? ' sunday' : '') + '">' + dayName[i] + '</div>');
		divDay = $('<div>').text(dayName[i]);
		divDay.addClass('day-name');
		if (i == 5) { divDay.addClass('saturday'); }
		if (i == 6) { divDay.addClass('sunday'); }
		$("#calendar").append(divDay);
	}
	
	// wyświetlenie kalendarza
	for (let i = 1; i <= 31; i++) {
		// wyświetlanie dni miesiąca
		//$("#calendar").append('<div class="' +
		//((i % 7 == 1) ? 'clear' : (i % 7 == 0) ? 'sunday' : (i % 7 == 6) ? 'saturday' : '') + 
		//'">' + i + '</div>')
		divDay = $('<div>').text(i);
		if (i % 7 == 1) { divDay.addClass('clear'); }
		if (i % 7 == 0) { divDay.addClass('sunday'); }
		if (i % 7 == 6) { divDay.addClass('saturday'); }
		$("#calendar").append(divDay);
		
	}
})