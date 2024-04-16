$(document).ready(function() {
	// dane startowe
	let date = new Date();
	const dayCurrent = date.getDate(); // getDate() pobiera aktualny dzień miesiąca
	const monthCurrent = date.getMonth() + 1; // getMonth() pobiera aktualny index miesiąca od 0 dla stycznia do 11 dla grudnia
	const yearCurrent = date.getFullYear(); // getFullFear() pobiera aktualny rok w formacie czterocyfrowym
	let month = monthCurrent;
	let year = yearCurrent;
	
	
	// tablica z dniami tygodnia
	let dayName = ["Pon", "Wto", "Śro", "Czw", "Pią", "Sob", "Nie"];
	
	// tablica z nazwami miesięcy
	let monthName = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];

	renderCalendar();

	//$('.click-right').click(function() {
	//$('.click-right').on('click', function() {
	$(document).on('click', '.click-right', function() {
		$("#calendar").html('');
		month++;
		if (month == 13) { month = 1; year++; }
		renderCalendar();
	});

	$(document).on('click', '.click-left', function() {
		$("#calendar").html('');
		month--;
		if (month == 0) { month = 12; year--; }
		renderCalendar();
	});


	// funkcja generująca kalendarz
	function renderCalendar() {
		// pobieranie dnia startowego i ilości dni na podstawie miesiąca i roku
		let startDay = new Date(year, month - 1, 1).getDay(); // .getDay() zwraca indexy dni tygodnia 0-6, gdzie 0 to niedziela, 1 poniedziałek, 6 sobota
		if (startDay == 0) { startDay = 7; } // zamiana numeru dla niedzieli
		let maxDay = new Date(year, month, 0).getDate(); // pobranie maksymalnego dnia w miesiącu
		
		// wyświetlanie nazwy miesiąca i roku oraz elementów nawigacyjnych
		divDay = $('<div>').text("<");
		divDay.addClass('click-left');
		$("#calendar").append(divDay);
		divDay = $('<div>').text(monthName[month-1] + " " + year);
		divDay.addClass('month-year');
		$("#calendar").append(divDay);
		divDay = $('<div>').text(">");
		divDay.addClass('click-right');
		$("#calendar").append(divDay);
			
		// wyświetlenie dni tygodnia
		for (let i = 0; i <= 6; i++) {
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
			$("#calendar").append(divDay);
		}
		
		// wyświetlenie kalendarza
		for (let i = 1; i <= maxDay; i++) {
			// wyświetlanie dni miesiąca
			let ii = i + startDay - 1
			divDay = $('<div>').text(i);
			if (i == dayCurrent && month == monthCurrent && year == yearCurrent) { divDay.addClass('today'); } 
			else {
				if (ii % 7 == 0) { divDay.addClass('sunday'); }
				if (ii % 7 == 6) { divDay.addClass('saturday'); }
			}
			$("#calendar").append(divDay);
		}
	}
})