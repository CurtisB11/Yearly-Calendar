	// Curtis' Yearly Calendar main script.


	var currentCalendarYear = 0;
	var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var dayFullNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	


	// Method getDaysInMonth returns an array of date objects. One for each of all the days in a month - given a year and the month number that are both passed-in.
	function getDaysInMonth(month, year){ // Fourth, and last method called in the base-calendar construction. Called from buildMonth method.
		"use strict";
		var days = [];
		var date = 0;
		if((year === 1752) && (month === 8)){
			date = new Date(year, month, 12, 12, 0, 0, 0); // For year 1752 only, this starts September on the 12, so the month begins on a Tuesday to allow space for the 1st and 2nd (in my faux 1752 section of the Julian Calendar) to be added before omitting the skipped 11 days until Thursday the 14th (which is the date of British switchover to the Gregorian Calendar).
		}else{
			date = new Date(year, month, 1, 12, 0, 0, 0); // Create date object for the 1st of each passed in month and year. Set time of day to 12 noon to prevent things such as DST autumn changeover from rolling time earlier than midnight and thereby changing the date.
		}
		while(date.getMonth() === month){
			days.push(new Date(date)); // As each new date object is created, add it to end of array days.
			date.setDate(date.getDate() + 1); // Add 1 to increment the date number.
		}
		return days;
	} // end method getDaysInMonth()



	// This method returns an array of 12 date objects that are all from the first day of each month for a passed-in year.
	function getMonthsInYear(year){ // Second method called. Called from buildYearCalendar method.
		"use strict";
		var months = [];
		var date = 0;
		var monthCount = 0;
		date = new Date(year, 0, 1, 12, 0, 0, 0); // Create date object for the 1st of each month, set to 12-noon, starting with January = 0, for passed in year.
		while(monthCount < 12){
			months.push(new Date(date)); // As each new date object is created, add it to end of array months.
			date.setMonth(date.getMonth() + 1); // Add 1 to increment the month number.
			monthCount++;
		}
		return months;
	} // end method getMonthsInYear()



	// Create a full 12-month calendar. The divElement paramater is the div with id="calendar", located in the html doc calendarYearly.html. It's passed in, along with the current year, when method buildYearCalendar is initially called from the addEventListener("DOMContentLoaded") function, located at bottom of this script.
	function buildYearCalendar(divElement, year){ // First method called. It's called from page "DOMContentLoaded" event listener at bottom.
		"use strict";
		var todayDateObject = checkForUpdateToToday(); // Create new date object here for today and pass it into method createModal. This way, it is only refreshed when calendar is created, or recreated using navigation buttons. This avoids problems with today's modal window when clicking old today's date when calander isn't updated after today has advanced.
		var viewedYearTextHolder = document.getElementById("viewedYear"); // viewedYear is id of div in navigation bar.
		var months = getMonthsInYear(year); // Second method call.
		reInitializeMainArrayItems(year); // This method runs once per year. Most items in the eventsArray need to have their dates and/or information changed (Daylight Saving Time changeover dates, Thanksgiving, Mother's Day, the seasons start-times, Easter, etc.) for correct placement in the year being created. Many also need their memos enhanced for placement in the modal.
		viewedYearTextHolder.innerHTML = ""; // Remove old year from Navigation bar div.
		if((LeapYear(year) === true) && (parseInt(year) > 1752)){ // adds (leap year) text to movable toolbar
			var leapYearSpan = document.createElement("span");
			leapYearSpan.setAttribute("id", "leapYearInToolbar"); // Assign an id to the span.
			leapYearSpan.appendChild(document.createTextNode("( leap year )")); // Assign text to span.
			viewedYearTextHolder.appendChild(leapYearSpan); // Add leap year span and text to "viewedYear" div on movable toolbar.
			viewedYearTextHolder.appendChild(document.createTextNode(year));
		}else{
			viewedYearTextHolder.appendChild(document.createTextNode(year));
		}
		var theOptions = {
			showMonth: true,
			showDaysOfWeek: true,
			showYear: true,
			clickHandler: function(e){ // e is the object MouseEvent click which is listened for from addEventListener method in line 185. Enclosed function call below builds the modal.
				createModal(e, todayDateObject);
			} // End anonymous clickHandler function that calls createModal method.
		}; // End theOptions

		months.forEach(function(a, b){ // a is complete date information for first of each month, while index b matches month number 0 through 11
			var monthElement = buildMonth(b, year, theOptions); // Third method call.
			divElement.appendChild(monthElement); // This is the ALL IMPORTANT line, that month by month, adds each of the twelve, all-constructed months, into the main div with id="calendar", in the html page. 
		}); // End nested function, and end forEach loop.
	} // end method buildYearCalendar()
		


	// Add days and place fillers for a given month
	function buildMonth(monthNum, year, theOptions){ // Third method called. Called second from buildYearCalendar method.
		"use strict";
		var MoonPhaseDatesArray = [];
		MoonPhaseDatesArray = generatePhaseDates(monthNum, year);
		currentCalendarYear = year; // Used in navigation script.
		var firstOfMonthDateObject = new Date(year, monthNum, 1);
		var calendarWhiteMonth = firstOfMonthDateObject.getMonth();
		var previousMonth = new Date(firstOfMonthDateObject.setMonth(calendarWhiteMonth - 1));
		var daysInMonth = getDaysInMonth(monthNum, year); // Fourth method call. Creates an array of date objects for every single day in the passed in month.
		var daysPreviousMonth = getDaysInMonth(previousMonth.getMonth(), previousMonth.getFullYear()); // Fourth method call.
		var monthElement = document.createElement('div');
		var titleElement = document.createElement('h3');
		var daysInFebruary = getDaysInMonth(1, year); // Fourth method call. Creates an array of date objects for every single day in February. Added on 11th of February 2023.
		var endDateOfFebruary = daysInFebruary[daysInFebruary.length - 1].getDate(); // Get end date of February month from last date object in array of numerically ordered date objects.
		var skipLength = daysInMonth[0].getDay(); // The first date object, index 0, in array of date objects is for the first of the month. Method getDay() returns a 0 based number, 0-6 representing each day of the week. This is intended to indicate in which counted day block number to place the first of the month.
		if((skipLength < 3) || ((parseInt(skipLength) === 3) && (parseInt(monthNum) === 1) && (parseInt(endDateOfFebruary) === 28))){ // Move month one row lower if first day of month falls earlier than Wednesday. Also, when a 28 day February starts on a Wednesday, skipLength === 3, to position gray week on top. It simply looks better. Fix added on 11th of February 2023.
			skipLength += 7; // By adding 7 to skipLength, it adds 7 days and places the 1st of the month, and therefore the whole month, one week lower in the six row month block.
		} // End if.
		if((parseInt(year) === 1752) && (parseInt(monthNum) < 8)){
			parseInt(skipLength -= 3); // Subtracting 3 here moves 1st of the affected months, three day-block positions earlier, as needed to depict Julian calendar section of 1752.
		}
		var preLength = daysInMonth.length + skipLength; // Corresponds to the block count, or the numeric position of the last white date of the currently named month.
		var postLength = function(){
			return 42 - preLength; // The number of blocks to add after month end date to make given month have the required 42 blocks.
		};
	
		monthElement.classList.add('month');

		// Add a Title to the month. The options settings determine whether to show the top month bar, the Title, or the year number after the month name.
		if(theOptions.showMonth){
			titleElement.innerText = monthNames[monthNum] + (theOptions.showYear ? " " + year : ''); // Show year number after month name? True, or false? Yes, or no?
			monthElement.appendChild(titleElement);
		} // End if block

		// Add Days of week to the top row. The options setting above for showDaysOfWeek determines whether, or not, to show the two letter abbreviated day names in the month's days of the week row.
		if(theOptions.showDaysOfWeek){
			dayFullNames.forEach(function(dayName, b){ // b is the array index 0 - 6.
				var dayOfWeekBlock = document.createElement('div');
				dayOfWeekBlock.classList.add('dow');
				dayOfWeekBlock.innerHTML = dayName.slice(0, 2); // Abbreviate day-names found in dayFullNames array to two letters.
				monthElement.appendChild(dayOfWeekBlock);
			}); // End nested anonymous function, and end forEach loop.
		} // End if block


		// Add blank days to fill in before first day
		for(var i = 0; i < skipLength; ++i){
			var dayBeforeBlock = document.createElement('div');
			dayBeforeBlock.classList.add('dummy-day');
			dayBeforeBlock.innerText = daysPreviousMonth.length - (skipLength - (i + 1)); // This line calculates date numbers for date boxes of previous month.
			monthElement.appendChild(dayBeforeBlock); // All gray date blocks of end of previous month are added to month div here. 
		} // end for loop


		// This forEach loop creates and places a day for each day of the month. The loop with nested, anonymous function cycles through every date of the year.
		daysInMonth.forEach(function(c, d){ // c is a complete date object for every date of every month. While d is a zero based index, which corresponds to a one-off, date of the month.
			var dow = c.getDay(); // Store day of the week number in variable dow.
			var dayElement = document.createElement('div');
			if((parseInt(d + 1) > 0) && (parseInt(d + 1) <= daysInMonth.length)){ // d + 1 is the date number.
				if(((dow === 2) || (dow === 3)) && (c.getFullYear() === 1752) && (c.getMonth() < 8)){ // dow is the day of the week.
					dayElement.classList.add("weekEnd");
				}else if(((dow === 0) || (dow === 6)) && (c.getFullYear() === 1752) && (c.getMonth() > 7)){
					dayElement.classList.add("weekEnd");
				}else if(((dow === 0) || (dow === 6)) && (c.getFullYear() > 1752)){
					dayElement.classList.add("weekEnd");
				}else{
					dayElement.classList.add("weekDay");
				}
			}
			if(createBirthdayStyles(c) !== ""){
				dayElement.classList.add(createBirthdayStyles(c)); // Where colour styles for birthdays are added to date blocks in calendar.
			}
			if(createOccasionStyles(c) !== ""){
				dayElement.classList.add(createOccasionStyles(c)); // Where colour styles for occasions are added to date blocks in calendar.
			}
			for(var t = 0; t < MoonPhaseDatesArray.length; ++t){
				if((c.getDate() === MoonPhaseDatesArray[t].phaseDate.getDate()) && (c.getMonth() === MoonPhaseDatesArray[t].phaseDate.getMonth())){
					dayElement.classList.add("eventMoonPhase"); // Where colour styles for moon phases are added to date blocks in calendar.
				}
			}
			if(c.setHours(12, 0, 0, 0) === checkForUpdateToToday().setHours(12, 0, 0, 0)){
				dayElement.classList.add('todaysDate'); // Where colour styles for today are added to single date block in calendar.
			}
			if((c.getFullYear() === 1752) && (c.getMonth() === 8)){
				if(d > 1){ // Since d is zero based, this only affects dates above the 2nd of September in 1752.
					parseInt(d += 11);  // Increases date number in September 1752 blocks greater than the 2nd, by 11 days. This causes the next date after the 2nd to be the 14th, as happened in Britian in September, of 1752 when they switched to the Gregorian Calendar.
				}
			}
			if((dayElement.className.indexOf("occasion") !== -1) && (c.getFullYear() === 1752) && (c.getMonth() < 8)){
				var arrayDayIndexForJulien = c.getDay() + 4; // Increase index by 4 to start pulling day names from array on Thursday for Julian Calendar section of 1752. This is to correct for day of week in "You clicked:" statement, viewable in modal window only.
				var dayNamesInJulianCalendar = "";
				if(arrayDayIndexForJulien > 6){ // The highest value in a date object array of days is 6, so if arrayDayIndexForJulien is higher, subtract 7.
					dayNamesInJulianCalendar = dayFullNames[arrayDayIndexForJulien - 7];
				}else{
					dayNamesInJulianCalendar = dayFullNames[arrayDayIndexForJulien];
				}
				dayElement.setAttribute("data-date", dayNamesInJulianCalendar +" "+ monthNames[c.getMonth()] +" "+ c.getDate() +" "+ c.getFullYear()); // // For Julian Calendar section of 1752 only, set "improvised" date information into day div using attribute "data-date". Unable to use date object c here because days of week don't match correctly with Julian dates. Day data must be passed seperately to work correctly in constructing January to September 2nd of 1752.
			}else if((dayElement.className.indexOf("occasion") !== -1) || (dayElement.className.indexOf("dateHoliday") !== -1) || (dayElement.className.indexOf("birthdayOccasion") !== -1) || (dayElement.className.indexOf("eventMoonPhase") !== -1) || (c.setHours(12,0,0,0) === checkForUpdateToToday().setHours(12,0,0,0))){
//			}else{  // uncomment and switch above to comment to display modal for all dates: location 1 of 3.
				dayElement.setAttribute("data-date", c); // Set output of date object, c, into day div with attribute "data-date".
			}  // End if for setting attribute data-date with contents of date object output.
			dayElement.innerHTML = parseInt(d + 1);  // This line calculates date numbers for white date boxes in all calendar months.
			if((theOptions.clickHandler) && (dayElement.hasAttribute("data-date"))){
//			if(theOptions.clickHandler){ // uncomment this line and switch with if evaluation line above to display modal for all dates: location 2 of 3.
				dayElement.addEventListener("click", theOptions.clickHandler); // The listener for the click that triggers the call to the function createModal() that creates the modal window. 
			}
			monthElement.appendChild(dayElement); // All white weekday and weekend date blocks of currently building month are added to month div here. 
		}); // End nested anonymous function, and end forEach loop.

		// Add in the dummy filler days at the end to make an even block
		for(var j = 0; j < postLength(); ++j){
			var dayAfterBlock = document.createElement('div');
			dayAfterBlock.classList.add('dummy-day');
			dayAfterBlock.innerText = j + 1; // This line calculates date numbers for grayed out "dummy-day" date boxes of next month.
			monthElement.appendChild(dayAfterBlock); // All gray date blocks of beginning of next month are added to month div here. 
		} // End for loop
	
		return monthElement;
	} // End method buildMonth()



	function toggleModal(theModalPassedIn){
		'use strict';
		theModalPassedIn.classList.toggle("show-modal"); // This line opens or closes the modal by adding or removing class "show-modal" thereby switching, on or off (toggling), the visibility of the modal which uses the availability of the css property "visibility:" visible; to show or hide it.
		if(theModalPassedIn.classList.contains("show-modal")){
			disableScroll();
	//		document.documentElement.style.overflowY = "hidden"; // Hides the scrollbar and prevents the background page from being scrolled while the modal is shown. The "documentElement" is a pointer to the html tag. In the global style sheet I've placed a couple styles on the html that now need to be over-ridden.
		}else{
		//	document.documentElement.style.overflow = "auto"; // Unhides the scrollbar and allows scrolling when the modal is hidden.
		//	document.documentElement.style.overflowY = "scroll"; // Used to force display of scroll bar in vertical direction, whether or not any content is overflowing or clipped. The is used to prevent scroll bars from appearing and disappearing as content changes.
			enableScroll();
		}
	} // end method toggleModal().
	
	
	
	function disableScroll(){
		"use strict";
		var scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Calculates the vertically scrolled position of the page in pixels. Two functions are used with OR (||) operator because one of them may return 0 value in some browsers.
		var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft; // Calculates the horizontally scrolled position of the page in pixels.
		window.onscroll = function(){
			window.scrollTo(scrollLeft, scrollTop); // If any scroll is attempted, set position back to the previous value, by passing the calculated values as arguments to fix the horizontal and vertical position of the webpage.
		};
	} // end method disableScroll().
   
	function enableScroll(){
		"use strict";
		window.onscroll = function(){
			positionNavigationBar(); // Must re-call the function that positions and allows the navigation bar to float down over the calendar, if not for that, the window.onscroll method could be left empty.
		};
	} // end method enableScroll().



	function createModal(theClickEvent, dateObjectToday){
		'use strict';
		var content = theClickEvent.target.getAttribute("data-date"); // Retrieve output of date object information stored as text in attribute data-date to create an array and use array items to create an actual date object. (Comment cont'd below.)
		var arrayOfContents = content.split(" "); // More accurate this way, as posting text from content variable directly into date object caused some weird errors.
		var monthNameIndex = -1;
		for(var f = 0; f < monthNames.length; ++f){
			if(arrayOfContents[1].slice(0, 3) === monthNames[f].slice(0, 3)){ // In Chrome on Windows, the date-object's output returns a month-name that defaults to a three-letter, abbreviated format, but this might not be the case with all browsers on all platforms, so I decided to set it that way.
				monthNameIndex = f;
			} // end if
		} // end for
		var modalDateObject = new Date(parseInt(arrayOfContents[3]), parseInt(monthNameIndex), parseInt(arrayOfContents[2])); // arrayOfContents[3] is the year, monthNameIndex is month number (0 to 11), and arrayOfContents[2] is  the date of the month.
		var modalYear = modalDateObject.getFullYear();
		var modalMonth = modalDateObject.getMonth();
		var modalDateOfMonth = modalDateObject.getDate();
		var yearToday = dateObjectToday.getFullYear();
		var monthToday = dateObjectToday.getMonth();
		var dateOfMonthToday = dateObjectToday.getDate();
		var moonPhaseName = "";
		var arrayOfMoonPhaseDates = [];
		arrayOfMoonPhaseDates = generatePhaseDates(modalMonth, modalYear);
		for(var m = 0; m < arrayOfMoonPhaseDates.length; ++m){
			if((modalDateOfMonth === arrayOfMoonPhaseDates[m].phaseDate.getDate()) && (modalMonth === arrayOfMoonPhaseDates[m].phaseDate.getMonth())){
				moonPhaseName = arrayOfMoonPhaseDates[m].phaseName;
			} // end if
		} // end for
		var theModal = document.querySelector(".modal"); // This is the transparent black full-window modal div. This line returns the clicked modal element within the document that matches the modal selector and stores it in varible theModal.
		theModal.innerHTML = ""; // Remove all content from div model before creating a new one.
		var xToCloseElement = document.createElement("span"); // Dynamically create class close-X span and append it inside class modal div.
		xToCloseElement.classList.add("close-X");
		xToCloseElement.innerHTML = "";
		xToCloseElement.innerHTML = "&times;"; // Add the closing X to the full-size, outer modal window.
	//	xToCloseElement.setAttribute("onClick", "toggleModal();"); // This line calls the function to toggle close the modal using the X by removing class "show-modal".
		xToCloseElement.addEventListener("click", function(){
			toggleModal(theModal); // This line calls the function to toggle close the modal using the X by removing class "show-modal".
		});
		theModal.appendChild(xToCloseElement); // Place span element inside modal div.
		var modalContentHolder = document.createElement("div"); // This is the centred white modal box. These two lines dynamically create it, and assign class "modal-content". 
		modalContentHolder.classList.add("modal-content");
		var insideGraphicHolder = document.createElement("div");
		insideGraphicHolder.setAttribute("id", "sideGraphicContainer");
		modalContentHolder.appendChild(insideGraphicHolder);
		var theDateClicked = document.createElement("div");
		theDateClicked.classList.add("dateClicked");
		var youClickedText = document.createElement("span");
		youClickedText.classList.add("whatYouClickedBolded");
		youClickedText.style.fontWeight = "bold";
		var theBigDateNumber = document.createElement("div");
		theBigDateNumber.classList.add("bigDateNumber");
		var theDateMemo = document.createElement("div");
		theDateMemo.classList.add("dateInfoHolder");
		theDateMemo.insertAdjacentHTML("afterbegin", createDateMemo(modalDateObject, yearToday, monthToday, dateOfMonthToday));
		var theMoonPhase = document.createElement("div");
		theMoonPhase.classList.add("nameOfMoonPhase");
		theMoonPhase.insertAdjacentHTML("beforeend", moonPhaseName);
		var buttonElement = document.createElement("button");
		buttonElement.classList.add("htmlCloseButton");
		buttonElement.appendChild(document.createTextNode("Close"));
//		buttonElement.setAttribute("onClick", "toggleModal();"); // This line calls the function to toggle close the modal using the Close button by removing class "show-modal".
		buttonElement.addEventListener("click", function(){
			toggleModal(theModal); // This line calls the function to toggle close the modal using the Close button by removing class "show-modal".
		});
		youClickedText.appendChild(document.createTextNode("You clicked: "));
		theBigDateNumber.appendChild(document.createTextNode(modalDateOfMonth));
		if((modalDateOfMonth === dateOfMonthToday) && (modalMonth === monthToday) && (modalYear === yearToday)){
			youClickedText.innerHTML = "";
			youClickedText.appendChild(document.createTextNode("Today: "));
			theDateClicked.appendChild(youClickedText);
			var theWordToday = document.createElement("div");
			theWordToday.classList.add("wordTodayMemo");
			theWordToday.appendChild(document.createTextNode("Today"));
			var todaysDayCountInfo = document.createElement("div");
			todaysDayCountInfo.setAttribute("id", "theDayCounter");
			todaysDayCountInfo.insertAdjacentHTML("beforeend", calculateDayPosition(modalYear, modalMonth, modalDateOfMonth));
			modalContentHolder.appendChild(theWordToday); // For today only, add items to modalContent div.
			modalContentHolder.appendChild(todaysDayCountInfo);
		} // end if
		theDateClicked.appendChild(youClickedText);
		theDateClicked.insertAdjacentHTML("beforeend", dayFullNames[modalDateObject.getDay()] +", the "+ modalDateOfMonth +"<sup>"+ determineDateSuffix(modalDateOfMonth) +"</sup> of "+ monthNames[modalMonth] +", "+ modalYear +".");
		if((modalYear === 1752) && (modalMonth < 8)){
			var dayName = arrayOfContents[0]; // The day of week here is correct for faux Julian section of calendar in 1752.
			var monthName = arrayOfContents[1];
			var dateNumber = parseInt(arrayOfContents[2]);
			var yearNumber = parseInt(arrayOfContents[3]);
			theDateClicked.innerHTML = "";
			theDateClicked.appendChild(youClickedText);
			theDateClicked.insertAdjacentHTML("beforeend", dayName +", the "+ dateNumber +"<sup>"+ determineDateSuffix(dateNumber) +"</sup> of "+ monthName +", "+ yearNumber +".");
		} // end if
		modalContentHolder.appendChild(theDateClicked); // Unless it's for today, adding items to modalContent div begins here.
		modalContentHolder.appendChild(theBigDateNumber);
		modalContentHolder.appendChild(theDateMemo);
		modalContentHolder.appendChild(theMoonPhase);
		modalContentHolder.appendChild(buttonElement); // End of adding items to modalContent div.
		theModal.appendChild(modalContentHolder); // Store contents of modal-content inside modal div below span for the closing X.
		createModalBackgroundStyles(theClickEvent.target.classList.item(0), theClickEvent.target.classList.item(1), theClickEvent.target.classList.item(2), theClickEvent.target.classList.item(3));
		createModalMemoStyles(theClickEvent.target.classList.item(0), theClickEvent.target.classList.item(1), theClickEvent.target.classList.item(2), theClickEvent.target.classList.item(3));
		if((modalDateOfMonth === dateOfMonthToday) && (modalMonth === monthToday) && (modalYear === yearToday)){
			createModalMemoTodayStyles(theClickEvent.target.classList.item(1), theClickEvent.target.classList.item(2), theClickEvent.target.classList.item(3), theClickEvent.target.classList.item(4));
		}
		if((theClickEvent.target.getAttribute("occasion") !== -1) || (theClickEvent.target.getAttribute("dateHoliday") !== -1) || (theClickEvent.target.getAttribute("birthdayOccasion") !== -1) || (theClickEvent.target.getAttribute("eventMoonPhase") !== -1) || (theClickEvent.target.getAttribute("todaysDate") !== -1)){ // Restrict which calendar dates can open a modal window here.  Comment out to display modal for all dates: location 3 of 3.
			toggleModal(theModal); // When a date box with an occasion is clicked, this call to the function will toggle open the modal by adding class "show-modal" which sets the css property "visibility:" to "visible;".
		} // End of if that restricts which calendar dates can open a modal window to only specified occasion dates.
	} // end method createModal()
	



	function determineDateSuffix(numberToCheck){
		"use strict";
		var theSuffix = "";
		var tenRemainder = numberToCheck % 10;
		var hundredRemainder = numberToCheck % 100;
		if((tenRemainder === 1) && (hundredRemainder !== 11)){
			theSuffix = "st";
		}else if((tenRemainder === 2) && (hundredRemainder !== 12)){
			theSuffix = "nd";
		}else if((tenRemainder === 3) && (hundredRemainder !== 13)){
			theSuffix = "rd";
		}else{
			theSuffix = "th";
		}
		return theSuffix;
	} // end method determineDateSuffix().




	document.addEventListener("DOMContentLoaded", function(){
		'use strict';
		var currentYear = new Date().getFullYear();			
		var theCalendarDiv = document.getElementById("calendar");
		navigationTools(currentYear);
		buildYearCalendar(theCalendarDiv, currentYear);
		createLegend();
	}); // end DOMContentLoaded listener method.


