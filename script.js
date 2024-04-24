$(document).ready(function() {
	// dane startowe
	let date = new Date();
	const dayCurrent = date.getDate(); // getDate() pobiera aktualny dzień miesiąca
	const monthCurrent = date.getMonth() + 1; // getMonth() pobiera aktualny index miesiąca od 0 dla stycznia do 11 dla grudnia
	const yearCurrent = date.getFullYear(); // getFullFear() pobiera aktualny rok w formacie czterocyfrowym
	let month = monthCurrent;
	let year = yearCurrent;
	
	let textSelectMonthYear = "Ustaw";
	
	// tablica z dniami tygodnia
	let dayName = ["Pon", "Wto", "Śro", "Czw", "Pią", "Sob", "Nie"];
	
	// tablica z nazwami miesięcy
	let monthName = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];

	renderCalendar();

	$(document).on('click', '.click-left, .click-right', function() {
		if ($(this).hasClass('click-left')) { month--; } else { month++; }
		if (month == 13) { month = 1; year++; }
		if (month == 0) { month = 12; year--; }
		renderCalendar();
	});
	
	$(document).on('click', '.month-year', function() {
		$('.month-year').hide();
		$('.change-month-year').show();
	});

	$(document).on('click', '#btnSelectMonthYear', function() {
		month = parseInt($('#month-select').val());
		year = parseInt($('#year-select').val());
		renderCalendar();
	});
	
	$(document).on('change', '#language-select', function() {
		//alert(document.getElementById('language-select').value);
		//alert($('#language-select').val());
		//alert(this.value);
		lang = this.value;
		if (lang == "pl") {
			textSelectMonthYear = "Ustaw";
			dayName = ["Pon", "Wto", "Śro", "Czw", "Pią", "Sob", "Nie"];
			monthName = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
		} else if (lang == "en") {
			textSelectMonthYear = "Set";
			dayName = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
			monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
		} else if (lang == "de") {
			textSelectMonthYear = "Satz";
			dayName = ["Mon", "Die", "Mit", "Don", "Fre", "Sam", "Son"];
			monthName = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember" ];
		}
		renderCalendar();
	});

	// funkcja generująca kalendarz
	function renderCalendar() {
		$("#calendar").html('');
		// pobieranie dnia startowego i ilości dni na podstawie miesiąca i roku
		let startDay = new Date(year, month - 1, 1).getDay(); // .getDay() zwraca indexy dni tygodnia 0-6, gdzie 0 to niedziela, 1 poniedziałek, 6 sobota
		if (startDay == 0) { startDay = 7; } // zamiana numeru dla niedzieli
		let maxDay = new Date(year, month, 0).getDate(); // pobranie maksymalnego dnia w miesiącu
		
		// wyświetlanie nazwy miesiąca i roku oraz elementów nawigacyjnych
		$('<div>').text("<").addClass('click-left').appendTo("#calendar");
		$('<div>').text(monthName[month-1] + " " + year).addClass('month-year').appendTo("#calendar");
		// stworzenie słownej listy miesięcy 
		let monthSelect = '<select id="month-select">';
		for (m=1; m<=12; m++) { 
			monthSelect += '<option value="' + m + '"' + (m == month ? ' selected' : '') + '>' + monthName[m-1];
		}
		monthSelect += '</select>';
		// stworzenie listy lat +-10
		let yearSelect = '<select id="year-select">';
		for (y=year-10; y<=year+10; y++) { 
			yearSelect += '<option value="' + y + '"' + (y == year ? ' selected' : '') + '>' + y;
		}
		yearSelect += '</select>';
		
		$('<div>').html(monthSelect + yearSelect + '<button id="btnSelectMonthYear">' + textSelectMonthYear + '</button>').hide().addClass('change-month-year').appendTo("#calendar");
		$('<div>').text(">").addClass('click-right').appendTo("#calendar");
			
		// wyświetlenie dni tygodnia
		for (let i = 0; i <= 6; i++) {
			divDay = $('<div>').text(dayName[i]).addClass('day-name');
			if (i == 5) { divDay.addClass('saturday'); }
			if (i == 6) { divDay.addClass('sunday'); }
			$("#calendar").append(divDay);
		}
		
		// wyświetlenie pustych dni
		for (let i = 1; i < startDay; i++) {
			divDay = $('<div>').addClass('none');
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