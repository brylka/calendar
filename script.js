$(document).ready(function() {
	// dane startowe
	month = 9;
	year = 2024;
	
	startDay = new Date(year, month - 1, 1).getDay(); // .getDay() zwraca indexy dni tygodnia 0-6, gdzie 0 to niedziela, 1 poniedziałek, 6 sobota
	if (startDay == 0) { startDay = 7; } // zamiana numeru dla niedzieli
	maxDay = new Date(year, month, 0).getDate(); // pobranie maksymalnego dnia w miesiącu
	//console.log("startDay: " + startDay + ",maxDay: " + maxDay)
	
	//startDay = 7 // numer dnia tygodnia 1-7, gdzie 1 - poniedziałek, 7 - niedziela
	//maxDay = 30 // ilośc dni w miesiącu

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
	
	// wyświetlenie pustych dni
	for (let i = 1; i < startDay; i++) {
		divDay = $('<div>');
		divDay.addClass('none');
		if (i == 1) { divDay.addClass('clear'); }
		$("#calendar").append(divDay);
	}
	
	
	// wyświetlenie kalendarza
	for (let i = 1; i <= maxDay; i++) {
		// wyświetlanie dni miesiąca
		//$("#calendar").append('<div class="' +
		//((i % 7 == 1) ? 'clear' : (i % 7 == 0) ? 'sunday' : (i % 7 == 6) ? 'saturday' : '') + 
		//'">' + i + '</div>')
		ii = i + startDay - 1
		divDay = $('<div>').text(i);
		if (ii % 7 == 1) { divDay.addClass('clear'); }
		if (ii % 7 == 0) { divDay.addClass('sunday'); }
		if (ii % 7 == 6) { divDay.addClass('saturday'); }
		$("#calendar").append(divDay);
	}
})