	// Curtis' Yearly Calendar Events Script

	// format: (dd, mm, yyyy, "event", memoNumber, typeOfEvent)
	var eventsArray = [];
	eventsArray[0] = new makeEvent(20, 3, 1753, "Spring", 2, "occ");
	eventsArray[1] = new makeEvent(21, 6, 1753, "Summer", 2, "occ");
	eventsArray[2] = new makeEvent(22, 9, 1752, "Fall", 2, "occ");
	eventsArray[3] = new makeEvent(21, 12, 1752, "Winter", 2, "occ");
	eventsArray[4] = new makeEvent(1, 1, 1752, "New Year\'s Day", 1, "occ");
	eventsArray[5] = new makeEvent(11, 2, 1752, "Pancake Day (Shrove Tuesday)", 2, "occ");
	eventsArray[6] = new makeEvent(3, 3, 1974, "Treena\'s Birthday", 1, "bir");
	eventsArray[7] = new makeEvent(14, 2, 1752, "Valentine\'s Day", 1, "occ");
	eventsArray[8] = new makeEvent(10, 6, 1917, "Daylight Saving Time (DST) Begins", 2, "occ");
	eventsArray[9] = new makeEvent(27, 3, 1752, "Good Friday", 2, "occ");
	eventsArray[10] = new makeEvent(29, 3, 1752, "Easter Sunday", 2, "occ");
	eventsArray[11] = new makeEvent(10, 5, 1908, "Mother\'s Day", 2, "occ");
	eventsArray[12] = new makeEvent(24, 5, 1845, "Victoria Day", 1, "occ");
	eventsArray[13] = new makeEvent(19, 6, 1910, "Father\'s Day", 1, "occ");
	eventsArray[14] = new makeEvent(1, 7, 1867, "Dominion Day", 2, "occ");
	eventsArray[15] = new makeEvent(5, 8, 1818, "Regatta", 2, "occ");
	eventsArray[16] = new makeEvent(3, 9, 1894, "Statutory Holiday, Labour Day", 2, "hol");
	eventsArray[17] = new makeEvent(9, 10, 1752, "Thanksgiving Day", 2, "occ");
	eventsArray[18] = new makeEvent(31, 10, 1752, "Hallowe\'en", 1, "occ");
	eventsArray[19] = new makeEvent(30, 9, 1917, "Daylight Saving Time (DST) Ends", 2, "occ");
	eventsArray[20] = new makeEvent(11, 11, 1918, "Armistice Day", 1, "occ");
	eventsArray[21] = new makeEvent(27, 11, 1967, "Karen\'s Birthday", 1, "bir");
	eventsArray[22] = new makeEvent(30, 11, 1943, "Mudder\'s Birthday", 1, "bir");
	eventsArray[23] = new makeEvent(9, 12, 1937, "Dad\'s Birthday", 1, "bir");
	eventsArray[24] = new makeEvent(24, 12, 1752, "Xmas Eve", 1, "occ");
	eventsArray[25] = new makeEvent(25, 12, 1752, "Xmas Day", 1, "hol");
	eventsArray[26] = new makeEvent(26, 12, 1752, "Boxing Day", 1, "hol");
	eventsArray[27] = new makeEvent(17, 3, 1752, "St. Patrick\'s Day", 1, "occ");
	eventsArray[28] = new makeEvent(23, 4, 1752, "St. George\'s Day", 1, "occ");
	eventsArray[29] = new makeEvent(24, 6, 1962, "Discovery Day", 1, "occ");
	eventsArray[30] = new makeEvent(12, 7, 1752, "Orangeman\'s Day", 1, "occ");
	eventsArray[31] = new makeEvent(22, 8, 1962, "Mom and Dad\'s Wedding Day", 1, "wed");
	eventsArray[32] = new makeEvent(1, 7, 1916, "Beaumont Hamel", 1, "occ");
	eventsArray[33] = new makeEvent(29, 9, 1981, "Jennifer\'s Birthday", 1, "bir");
	eventsArray[34] = new makeEvent(13, 12, 1974, "Nicky\'s Birthday", 1, "bir");
	eventsArray[35] = new makeEvent(17, 7, 1969, "Andrea\'s Birthday", 1, "bir");
	eventsArray[36] = new makeEvent(3, 9, 1971, "Marleen\'s Birthday", 1, "bir");
	eventsArray[37] = new makeEvent(20, 10, 1994, "Cheryl\'s Birthday", 1, "bir");
	eventsArray[38] = new makeEvent(16, 8, 1968, "Jim\'s Birthday", 1, "bir");
	eventsArray[39] = new makeEvent(31, 12, 1752, "New Year\'s Eve", 1, "occ");
	eventsArray[40] = new makeEvent(1, 4, 1752, "April Fools\' Day", 1, "occ");
	eventsArray[41] = new makeEvent(2, 2, 1841, "Groundhog Day", 1, "occ");
	eventsArray[42] = new makeEvent(12, 3, 1986, "Jada\'s Birthday", 1, "bir");
	eventsArray[43] = new makeEvent(2, 9, 2008, "James and Evan\'s Birthday", 1, "bir");
	eventsArray[44] = new makeEvent(9, 8, 2018, "Karen and Rh&#233;al\'s Wedding Day", 1, "wed");
	eventsArray[45] = new makeEvent(5, 11, 1961, "Rh&#233;al\'s Birthday", 1, "bir");
	eventsArray[46] = new makeEvent(21, 2, 1968, "Dean\'s Birthday", 1, "bir");
	eventsArray[47] = new makeEvent(10, 10, 1964, "Terri\'s Birthday", 1, "bir");
	eventsArray[48] = new makeEvent(30, 9, 2021, "NDTR", 2, "occ");
	eventsArray[49] = new makeEvent(16, 7, 1987, "Brenda\'s Birthday", 1, "bir");
	eventsArray[50] = new makeEvent(6, 5, 1914, "Grandma\'s Birthday", 1, "bir");
	eventsArray[51] = new makeEvent(9, 11, 1908, "Grandfather\'s Birthday", 1, "bir");
	eventsArray[52] = new makeEvent(29, 5, 1967, "Mark\'s Birthday", 1, "bir");
	eventsArray[53] = new makeEvent(17, 5, 1962, "Richard\'s Birthday", 1, "bir");
	eventsArray[54] = new makeEvent(8, 5, 1960, "Stephen\'s Birthday", 1, "bir");
//	eventsArray[55] = new makeEvent(10, 6, 1971, "Testing\'s Birthday", 1, "bir");
	
	
	// create event object
	function makeEvent(date, month, year, memo, flag, type){
		'use strict';
		this.theDate = date;
		this.theMonth = month;
		this.theYear = year;
		this.theMemo = memo;
		this.theFlag = flag;
		this.theType = type;
	}

	function createOccasionStyles(theDateObjectIn){
		'use strict';
		var theOccasionStyle = "";
		var yearIn = theDateObjectIn.getFullYear();
		var dateIn = theDateObjectIn.getDate();
		var monthIn = theDateObjectIn.getMonth();
		for(var i = 0; i < eventsArray.length; ++i){
			if((eventsArray[i].theType === "occ") && (eventsArray[i].theDate === dateIn) && (eventsArray[i].theMonth === (monthIn + 1)) && (yearIn >= eventsArray[i].theYear)){
				theOccasionStyle = "occasion";
			}
		} // end for loop
		// Part 1: Due to its length, I split this if block into two seperate sections.
		if(((dateIn === 1)&&(monthIn === 0)&&(yearIn > 1866))||(dateIn === setNewYearsHolidayDate(monthIn, yearIn))||(dateIn === setPaddysDayHolidayDate(monthIn, yearIn))||(dateIn === setStGeorgesDayHolidayDate(monthIn, yearIn))||((dateIn === evaluateGoodFriday(yearIn).getDate())&&(monthIn === evaluateGoodFriday(yearIn).getMonth())&&(yearIn > 1866))||(dateIn === setVictoriaDayHolidayDate(monthIn, yearIn))||(dateIn === setDiscoveryDayHolidayDate(monthIn, yearIn))||((dateIn === 1)&&(monthIn === 6)&&(yearIn > 1878))||(dateIn === setCanadaDayHolidayDate(monthIn, yearIn))){
			if((dateIn === checkForUpdateToToday().getDate()) && (monthIn === checkForUpdateToToday().getMonth()) && (yearIn === checkForUpdateToToday().getFullYear())){
				theOccasionStyle = "dateTodayHoliday";
			}else{
				theOccasionStyle = "dateHoliday";
			}		
		}
		// Part 2
		if((dateIn === setOrangemansDayHolidayDate(monthIn, yearIn))||((dateIn === setRegattaDayHolidayDate(monthIn, yearIn))&&(yearIn !== 1940))||(dateIn === setLabourDayHolidayDate(monthIn, yearIn))||(dateIn === setNationalDayForTruthAndReconciliationHolidayDate(monthIn, yearIn))||(dateIn === setThanksgivingDayHolidayDate(monthIn, yearIn))||(((dateIn === 11)&&(monthIn === 10)&&(yearIn > 1918))||(dateIn === setRemembranceDayHolidayDate(monthIn, yearIn)))||(((dateIn === 25)&&(monthIn === 11)&&(yearIn > 1866))||(dateIn === setXmasDayHolidayDate(monthIn, yearIn)))||(((dateIn === 26)&&(monthIn === 11)&&(yearIn > 1866))||(dateIn === setBoxingDayHolidayDate(monthIn, yearIn)))){
			if((dateIn === checkForUpdateToToday().getDate()) && (monthIn === checkForUpdateToToday().getMonth()) && (yearIn === checkForUpdateToToday().getFullYear())){
				theOccasionStyle = "dateTodayHoliday";
			}else{
				theOccasionStyle = "dateHoliday";
			}
		}
		return theOccasionStyle;
	}

	function createBirthdayStyles(theDateObjectIn){
		'use strict';
		var theBirthdayStyle = "";
		var yearIn = theDateObjectIn.getFullYear();
		var dateIn = theDateObjectIn.getDate();
		var monthIn = theDateObjectIn.getMonth();
		for(var i = 0; i < eventsArray.length; ++i){
			if((eventsArray[i].theDate === dateIn) && (eventsArray[i].theMonth === (monthIn + 1)) && (yearIn >= eventsArray[i].theYear)){
				if((((yearIn <= parseInt(eventsArray[i].theYear + 100)) && (eventsArray[i].theMemo.indexOf("Wedding") !== -1)) || ((yearIn <= parseInt(eventsArray[i].theYear + 120)) && (eventsArray[i].theMemo.indexOf("Birthday") !== -1)))){
					theBirthdayStyle = "birthdayOccasion";
				}
			}
		} // end for loop
		return theBirthdayStyle;
	}

	// For Monthly calendar only:
	// The order of cell block classes indicating their maximum position when all events are active:
	// class 0: daysOfTheWeekend or daysOfTheWeek
	// class 1: birthdayOccasion
	// class 2: occasion, or dateHoliday, or dateTodayHoliday
	// class 3: todaysDate
	// class 4: eventMoonPhase
	// class 5: cellBackgroundFor"EventTypeWithMoonPhaseName"
	// For Monthly calendar only.

	// For Yearly calendar only:
	// The order of date div classes indicating their maximum position when all events are active:
	// class 0: weekEnd or weekDay
	// class 1: birthdayOccasion
	// class 2: occasion, or dateHoliday, or dateTodayHoliday
	// class 3: eventMoonPhase
	// class 4: todaysDate
	// For Yearly calendar only.

	// Sunday, the 12th of March, 2017 is a good date to view the entire class order. To see todaysDate in the list, obviously you'll need to temporarily roll back computer time to that date.

	function createModalBackgroundStyles(classItemZero, classItemOne, classItemTwo, classItemThree){ // Not used in code below just yet, but classItemFour created on 20th of March after BirthDayOccasions made seperate from regular occasions. 
		'use strict';
		if(classItemZero === "weekEnd"){
			document.getElementsByClassName("modal-content")[0].style.backgroundImage = "url('../../images/calendarRounded/roundedWeekendBackground.png')";
		}else{
			document.getElementsByClassName("modal-content")[0].style.backgroundImage = "url('../../images/calendarRounded/roundedWeekdayBackground.png')";
		}	
		if(classItemOne === "eventMoonPhase"){ // This stand-alone if-statement calls the function to set all the regular blue background moon phases for modal.
			setModalMoonPhaseBackground("");
		}
		if(classItemOne === "birthdayOccasion"){
			if(classItemTwo === "eventMoonPhase"){
				setModalMoonPhaseBackground("Birthday");
			}else{
				document.getElementsByClassName("modal-content")[0].style.backgroundImage = "url('../../images/calendarRounded/roundedBirthdayBackground.png')";
			}
		}
		if((classItemOne === "occasion") || (classItemTwo === "occasion")){
			if((classItemTwo === "eventMoonPhase") || (classItemThree === "eventMoonPhase")){
				setModalMoonPhaseBackground("Occasion"); // Capital letter in occasion is used to match camel-case structure used in .png filename.
			}else{
				document.getElementsByClassName("modal-content")[0].style.backgroundImage = "url('../../images/calendarRounded/roundedOccasionBackground.png')";
			}
		}
		if((classItemOne === "dateHoliday") || (classItemTwo === "dateHoliday")){
			if((classItemTwo === "eventMoonPhase") || (classItemThree === "eventMoonPhase")){
				setModalMoonPhaseBackground("Occasion");
			}else{
				document.getElementsByClassName("modal-content")[0].style.backgroundImage = "url('../../images/calendarRounded/roundedOccasionBackground.png')";
			}
		}
	} // end method createModalBackgroundStyles
	
	
	
	function createModalMemoStyles(classItemZero, classItemOne, classItemTwo, classItemThree){
		'use strict';
		document.getElementsByClassName("twoOccasion")[0].style.marginBottom = "5px";
		if((document.getElementsByClassName("twoOccasion")[0].innerHTML.indexOf("<br>") !== -1) && (document.getElementsByClassName("oneOccasion")[0].innerHTML === "")){
			document.getElementsByClassName("twoOccasion")[0].style.marginBottom = null; // Remove margin space when memo two appears by itself, without any memo one. This often happens with season-change dates.
		}else if(document.getElementsByClassName("oneOccasion")[0].innerHTML === ""){
			document.getElementsByClassName("twoOccasion")[0].style.marginBottom = null;
		}
		if(classItemZero === "weekEnd"){
			document.getElementsByClassName("bigDateNumber")[0].style.color = "#808080";
		}
		if((classItemOne === "dateHoliday") || (classItemTwo === "dateHoliday")){
			document.getElementsByClassName("bigDateNumber")[0].style.color = "magenta";						
			setModalMemoColour("oneOccasion");
			setModalMemoColour("twoOccasion");
		}
		// Styles for memos begin here.
		if((classItemTwo === "eventMoonPhase") || (classItemThree === "eventMoonPhase")){
			if((classItemOne === "birthdayOccasion") || (classItemOne === "occasion") || (classItemOne === "dateHoliday")){
				document.getElementsByClassName("dateInfoHolder")[0].style.bottom = "125px"; // 155px
			}
		}
		if((document.getElementsByClassName("twoOccasion")[0].innerHTML.indexOf("<br>") !== -1) && (document.getElementsByClassName("oneOccasion")[0].innerHTML !== "")){ // This if sets the line height, and the space beneth the memo for season change. Added February 21st, 2023.
			document.getElementsByClassName("twoOccasion")[0].style.lineHeight = "20px";
			document.getElementsByClassName("twoOccasion")[0].style.marginBottom = "15px";
		}else if((document.getElementsByClassName("twoOccasion")[0].innerHTML.indexOf("<br>") !== -1) && (document.getElementsByClassName("oneOccasion")[0].innerHTML === "")){
			document.getElementsByClassName("twoOccasion")[0].style.lineHeight = "20px";
		}
	} // end method createModalMemoStyles



	function createModalMemoTodayStyles(classItemOne, classItemTwo, classItemThree, classItemFour){
		'use strict';
		var balloonsGraphic = document.createElement("img");
		if((classItemOne === "todaysDate") || (classItemTwo === "todaysDate") || (classItemThree === "todaysDate") || (classItemFour === "todaysDate")){ // In the current setup, today's date can reach classItemFour.
			if(classItemOne === "birthdayOccasion"){
				balloonsGraphic.setAttribute("src", "../../images/calendarRounded/balloons.png");
				balloonsGraphic.setAttribute("id", "balloonsGraphic");
				balloonsGraphic.setAttribute("alt", "birthday balloons graphic");
				document.getElementById("sideGraphicContainer").appendChild(balloonsGraphic);
				setBalloonGraphicSizeAndPosition(balloonsGraphic, "200", "200", "20px", "80px");
				if((classItemOne === "birthdayOccasion") && (LeapYear(currentCalendarYear) === true) && (parseInt(currentCalendarYear) > 1752)){
					setBalloonGraphicSizeAndPosition(balloonsGraphic, "180", "180", "15px", "60px");
				}
			}
			document.getElementsByClassName("bigDateNumber")[0].style.color = "red";
			document.getElementsByClassName("modal-content")[0].style.backgroundImage = "url('../../images/calendarRounded/roundedTodayBackground.png')";
			document.getElementsByClassName("twoOccasion")[0].style.marginBottom = null;
			if((classItemOne === "dateTodayHoliday") || (classItemTwo === "dateTodayHoliday")){
				setModalMemoColour("oneOccasion");
				setModalMemoColour("twoOccasion");
				document.getElementsByClassName("bigDateNumber")[0].style.color = "magenta";
			}
			if((classItemOne === "birthdayOccasion") || (classItemTwo === "dateTodayHoliday")){
				document.getElementsByClassName("twoOccasion")[0].style.marginBottom = "10px";
			}
			// Styles for today's memos begin here.
			if((classItemTwo === "todaysDate") && ((classItemOne === "birthdayOccasion") || (classItemOne === "occasion") || (classItemOne === "dateTodayHoliday"))){
				document.getElementById("theDayCounter").style.bottom = "125px"; // Tested for stand-alone birthday the 16th of July, 2021.
				if((document.getElementsByClassName("oneOccasion")[0].innerHTML !== "") && (document.getElementsByClassName("twoOccasion")[0].innerHTML !== "")){
					document.getElementById("theDayCounter").style.bottom = "160px"; // Special case for Canada Day, as the program is set up so there's no "occasion" class allowed when there's a dateTodayHoliday. Added July 1st, 2022.
					document.getElementsByClassName("twoOccasion")[0].style.marginBottom = "5px";
				}
			}
			if((classItemThree === "todaysDate") && ((classItemTwo === "occasion") || (classItemTwo === "dateTodayHoliday"))){
				document.getElementById("theDayCounter").style.bottom = "160px"; // Tested for 12th of March, 2023. A birthday with single-line DST changeover event.
				if((classItemOne === "birthdayOccasion") && (LeapYear(currentCalendarYear) === true) && (parseInt(currentCalendarYear) > 1752)){
					setBalloonGraphicSizeAndPosition(balloonsGraphic, "150", "150", "15px", "70px");
				}else if(classItemOne === "birthdayOccasion"){
					setBalloonGraphicSizeAndPosition(balloonsGraphic, "200", "200", "20px", "85px");
				}
			}
			if((document.getElementsByClassName("twoOccasion")[0].innerHTML.indexOf("<br>") !== -1) && (document.getElementsByClassName("oneOccasion")[0].innerHTML !== "")){ // This if sets the line height, and the space beneth the memo for season change. Added February 21st, 2023.
				document.getElementsByClassName("twoOccasion")[0].style.lineHeight = "20px"; // Tested for the 20th of March, 2023 two-lined season change with holiday event.
				document.getElementsByClassName("twoOccasion")[0].style.marginBottom = "10px";
				document.getElementById("theDayCounter").style.bottom = "175px";
			}else if((document.getElementsByClassName("twoOccasion")[0].innerHTML.indexOf("<br>") !== -1) && (document.getElementsByClassName("oneOccasion")[0].innerHTML === "")){
				document.getElementsByClassName("twoOccasion")[0].style.lineHeight = "20px"; // Tested for 21st of December, 2022. A two-lined season change with no other event.
				document.getElementById("theDayCounter").style.bottom = "140px";
			}
			// Styles for today's memos with moon phases begin here.
			if((classItemOne === "eventMoonPhase") || (classItemTwo === "eventMoonPhase") || (classItemThree === "eventMoonPhase")){
				setModalMoonPhaseBackground("Today");
				document.getElementsByClassName("wordTodayMemo")[0].style.left = "210px";
				document.getElementsByClassName("dateInfoHolder")[0].style.bottom = "125px";
				if(classItemOne === "eventMoonPhase"){
					document.getElementById("theDayCounter").style.bottom = "125px";
				}else if(classItemTwo === "eventMoonPhase"){ // Whenever a moon phase occurs on a weekday with a holiday and a second event on today's date (such as, Monday, the 20th of March, 2023). If the event occurs on a two-line memo for season-change, which is occasion memo two, the nested if block below comes into play.
					if((classItemOne === "birthdayOccasion") && (LeapYear(currentCalendarYear) === true) && (parseInt(currentCalendarYear) > 1752)){
						setBalloonGraphicSizeAndPosition(balloonsGraphic, "150", "150", "20px", "90px");
					}else if(classItemOne === "birthdayOccasion"){
						setBalloonGraphicSizeAndPosition(balloonsGraphic, "180", "180", "25px", "95px");
					}
					if(document.getElementsByClassName("twoOccasion")[0].innerHTML !== ""){ // This if is needed to fix an issue where there can sometimes be a second event, dateTodayHoliday with an occasion, but this program is written so those two classes cannot both appear simultaneously, but in the case of Canada Day, two events can. ...and obviously, in here there's also a moon phase.
						document.getElementById("theDayCounter").style.bottom = "185px"; // Adjustment made for 1st of July, 2021. class="daysOfTheWeek dateTodayHoliday todaysDate eventMoonPhase cellBackgroundForTodayLastQuarter"
						document.getElementsByClassName("twoOccasion")[0].style.marginBottom = null;
						document.getElementsByClassName("numbers")[0].style.lineHeight = "25px";
						document.getElementsByClassName("numbers")[1].style.lineHeight = "25px";
						document.getElementsByClassName("numbers")[2].style.lineHeight = "25px";
					}else if(document.getElementsByClassName("twoOccasion")[0].innerHTML === ""){ // Tested for the 30th of November, 2020. Moon phase with birthday on today.
						document.getElementById("theDayCounter").style.bottom = "160px"; // 190px Adjustment made for the 31st of October, 2018. class="daysOfTheWeek occasion todaysDate eventMoonPhase cellBackgroundForTodayLastQuarter". Another good one to check is: 22nd of August 2021, Mom and dad's anniversary with moon phase on today's date.
					}
					if((document.getElementsByClassName("twoOccasion")[0].innerHTML.indexOf("<br>") !== -1) && (document.getElementsByClassName("oneOccasion")[0].innerHTML !== "")){
						document.getElementById("theDayCounter").style.bottom = "200px"; // Tested this if using the 20th of March, 2017 set to today, as-is, no birthday.
						document.getElementsByClassName("numbers")[0].style.lineHeight = "20px";
						document.getElementsByClassName("numbers")[1].style.lineHeight = "20px";
						document.getElementsByClassName("numbers")[2].style.lineHeight = "20px";
						document.getElementsByClassName("twoOccasion")[0].style.marginBottom = "5px";
						document.getElementsByClassName("dateInfoHolder")[0].style.bottom = "120px";
					}else if((document.getElementsByClassName("twoOccasion")[0].innerHTML.indexOf("<br>") !== -1) && (document.getElementsByClassName("oneOccasion")[0].innerHTML === "")){
						document.getElementById("theDayCounter").style.bottom = "175px"; // Tested using 21st December, 2020 without any birthday.
						document.getElementsByClassName("numbers")[0].style.lineHeight = "25px";
						document.getElementsByClassName("numbers")[1].style.lineHeight = "25px";
						document.getElementsByClassName("numbers")[2].style.lineHeight = "25px";
					}
				}else if(classItemThree === "eventMoonPhase"){ // If a birthday event is ever added near another movable event, add nested if block above found in classItemTwo === "eventMoonPhase" to this if block.
					if((classItemOne === "birthdayOccasion") && (LeapYear(currentCalendarYear) === true) && (parseInt(currentCalendarYear) > 1752)){
						setBalloonGraphicSizeAndPosition(balloonsGraphic, "120", "120", "20px", "90px");
					}else if(classItemOne === "birthdayOccasion"){
						setBalloonGraphicSizeAndPosition(balloonsGraphic, "160", "160", "15px", "90px");
					}
					document.getElementById("theDayCounter").style.bottom = "185px"; // Tested using 12th, March, 2017. All single-line events are, birthday, and DST with moon-phase on today. 
					document.getElementsByClassName("numbers")[0].style.lineHeight = "25px";
					document.getElementsByClassName("numbers")[1].style.lineHeight = "25px";
					document.getElementsByClassName("numbers")[2].style.lineHeight = "25px";
					document.getElementsByClassName("twoOccasion")[0].style.marginBottom = "5px";
					document.getElementsByClassName("dateInfoHolder")[0].style.bottom = "125px";
					if((document.getElementsByClassName("twoOccasion")[0].innerHTML.indexOf("<br>") !== -1) && (document.getElementsByClassName("oneOccasion")[0].innerHTML !== "")){
						if((classItemOne === "birthdayOccasion") && (LeapYear(currentCalendarYear) === true) && (parseInt(currentCalendarYear) > 1752)){
							setBalloonGraphicSizeAndPosition(balloonsGraphic, "100", "100", "30px", "100px");
						}else if(classItemOne === "birthdayOccasion"){
							setBalloonGraphicSizeAndPosition(balloonsGraphic, "140", "140", "20px", "85px");
						}
						document.getElementById("theDayCounter").style.bottom = "200px"; // Tested for two events using two-line "twoOccasion" event on 21st December, 2020. Using a test birthday, set computer date to today's date.
						document.getElementsByClassName("numbers")[0].style.lineHeight = "20px";
						document.getElementsByClassName("numbers")[1].style.lineHeight = "20px";
						document.getElementsByClassName("numbers")[2].style.lineHeight = "20px";
						document.getElementsByClassName("twoOccasion")[0].style.marginBottom = "5px";
						document.getElementsByClassName("dateInfoHolder")[0].style.bottom = "120px";
					}
				}
			} // end moon phases outer if
		}
	} // end method createModalMemoTodayStyles()
	
	function setBalloonGraphicSizeAndPosition(balloonsIn, heightIn, widthIn, topIn, leftIn){
		"use strict";
		balloonsIn.setAttribute("height", heightIn);
		balloonsIn.setAttribute("width", widthIn);
		document.getElementById("balloonsGraphic").style.position = "relative";
		document.getElementById("balloonsGraphic").style.top = topIn;
		document.getElementById("balloonsGraphic").style.left = leftIn;
	}

	function setModalMemoColour(theOccasionIn){
		'use strict';
		if(document.getElementsByClassName(theOccasionIn)[0].innerHTML.indexOf("Holiday") !== -1){
			document.getElementsByClassName(theOccasionIn)[0].style.color = "magenta";
			document.getElementsByClassName(theOccasionIn)[0].style.fontWeight = "bold";
		}else{
			document.getElementsByClassName(theOccasionIn)[0].style.color = "black";
		}
	}

	function setModalMoonPhaseBackground(eventClassTypeIn){
		'use strict';
		var moonPhaseNameText = document.getElementsByClassName("nameOfMoonPhase")[0].innerHTML;
		var phaseNameToColon = moonPhaseNameText.substring(0, moonPhaseNameText.indexOf(":"));
		var phaseForFileName = phaseNameToColon.replace(" ", "");
		document.getElementsByClassName("modal-content")[0].style.backgroundImage = "url('../../images/calendarRounded/rounded"+ phaseForFileName + eventClassTypeIn +"Background.png')";
	}

	function createDateMemo(dateObjectIn, yearOfTodayIn, monthOfTodayIn, dateOfMonthTodayIn){
		'use strict';
		var occasionMemoOne = "";
		var occasionMemoTwo = "";
		var concatenatedMemos = "";
		var yearIn = dateObjectIn.getFullYear();
		var dateIn = dateObjectIn.getDate();
		var monthIn = dateObjectIn.getMonth();
		var dayIn = dateObjectIn.getDay();
		var newYearsDayObject = new Date(yearIn, 0, 1);
		var newYearsDayDoW = newYearsDayObject.getDay();
		var canadaDayObject = new Date(yearIn, 6, 1);
		var canadaDayDoW = canadaDayObject.getDay();
		var nationalDayTruthReconciliationObject = new Date(yearIn, 8, 30);
		var dayTruthReconciliationDoW = nationalDayTruthReconciliationObject.getDay();
		var remembranceDayObject = new Date(yearIn, 10, 11);
		var remembranceDayDoW = remembranceDayObject.getDay();
		var xmasDayObject = new Date(yearIn, 11, 25);
		var xmasDayDoW = xmasDayObject.getDay();
		var boxingDayObject = new Date(yearIn, 11, 26);
		var boxingDayDoW = boxingDayObject.getDay();
		for(var m = 0; m < eventsArray.length; ++m){
			if((eventsArray[m].theMemo.indexOf("Wedding") !== -1) && (yearIn > eventsArray[m].theYear)){
				if((eventsArray[m].theDate === dateIn) && (eventsArray[m].theMonth === (monthIn + 1)) && (yearIn <= parseInt(eventsArray[m].theYear) + 100)){
					if((eventsArray[m].theDate === dateOfMonthTodayIn) && (eventsArray[m].theMonth === parseInt(monthOfTodayIn + 1) && (yearIn === yearOfTodayIn))){
						occasionMemoOne = "<span id=\"happyBirthday\">HAPPY "+ count(yearIn, parseInt(eventsArray[m].theYear), 1) +" WEDDING ANNIVERSARY</span>, "+ eventsArray[m].theMemo.substring(0, eventsArray[m].theMemo.indexOf("'")).replace(/\sand\s/, " & ") +" !";
					}else{
						occasionMemoOne = eventsArray[m].theMemo.substring(0, eventsArray[m].theMemo.indexOf("Wedding")) + count(yearIn, parseInt(eventsArray[m].theYear), 1) +"Wedding Anniversary.";
					}
				}
			}else if((eventsArray[m].theMemo.indexOf("Birthday") !== -1) && (yearIn >= eventsArray[m].theYear)){
				if((eventsArray[m].theDate === dateIn) && (eventsArray[m].theMonth === parseInt(monthIn + 1)) && (yearIn <= parseInt(eventsArray[m].theYear) + 120)){
					if((eventsArray[m].theDate === dateOfMonthTodayIn) && (eventsArray[m].theMonth === parseInt(monthOfTodayIn + 1) && (yearIn === yearOfTodayIn))){
						occasionMemoOne = "You\'re now "+ count(yearIn, parseInt(eventsArray[m].theYear), 2) +". <span id=\"happyBirthday\">HAPPY BIRTHDAY, "+ eventsArray[m].theMemo.substring(0, eventsArray[m].theMemo.indexOf("'")) +" !</span>";
					}else{
			//			occasionMemoOne = eventsArray[m].theMemo +"."; // display birthdays in modal without age count.
						occasionMemoOne = eventsArray[m].theMemo.substring(0, eventsArray[m].theMemo.indexOf("Birthday")) +" "+ count(yearIn, parseInt(eventsArray[m].theYear), 1) + eventsArray[m].theMemo.slice(-8) +"."; // Add age count to birthdays in modal.
					}
				}
			}else if((eventsArray[m].theFlag === 2) && (eventsArray[m].theDate === dateIn) && (eventsArray[m].theMonth === (monthIn + 1)) && (yearIn >= eventsArray[m].theYear)){
				occasionMemoTwo = eventsArray[m].theMemo +".";
			}else if((eventsArray[m].theDate === dateIn) && (eventsArray[m].theMonth === (monthIn + 1)) && (yearIn >= eventsArray[m].theYear)){
				occasionMemoOne = eventsArray[m].theMemo +".";
			}
		} // End for loop
		if((dateIn === setNewYearsHolidayDate(monthIn, yearIn)) && ((newYearsDayDoW === 0) || (newYearsDayDoW === 6))){
			occasionMemoOne = setHolidayMemos(yearIn, occasionMemoOne, 4); // Holiday memo for New Year's Day.
		}else if(dateIn === setPaddysDayHolidayDate(monthIn, yearIn)){
			occasionMemoOne = setHolidayMemos(yearIn, occasionMemoOne, 27); // Holiday memo for St. Patrick's Day.
		}else if((dateIn === evaluateGoodFriday(yearIn).getDate()) && (monthIn === evaluateGoodFriday(yearIn).getMonth()) && (yearIn > 1866)){ // Only append "Statutory Holiday" text to Good Friday memo from year 1867 onward.
			occasionMemoTwo = setHolidayMemos(yearIn, occasionMemoTwo, 9); // Holiday text for Good Friday.
		}else if(dateIn === setStGeorgesDayHolidayDate(monthIn, yearIn)){
			occasionMemoOne = setHolidayMemos(yearIn, occasionMemoOne, 28); // Holiday memo for St. George's Day.
		}else if(dateIn === setVictoriaDayHolidayDate(monthIn, yearIn)){
			occasionMemoOne = setHolidayMemos(yearIn, occasionMemoOne, 12); // Holiday memo for Victoria Day.
		}else if((dateIn === setDiscoveryDayHolidayDate(monthIn, yearIn))){
			occasionMemoOne = setHolidayMemos(yearIn, occasionMemoOne, 29); // Holiday memo for Discovery Day.
		}else if((dateIn === setCanadaDayHolidayDate(monthIn, yearIn)) && ((canadaDayDoW === 0) || (canadaDayDoW === 6))){
			//	occasionMemoOne = "Holiday for "+ eventsArray[14].theMemo.split(" ", 4).splice(-2).join(" ") +"."; // Method split() creates an array from the initial memo string, with space " " set here as the seperator. It starts from first space. By setting the number of splits to 4 (the limit parameter) it then throws away all text after fourth space. The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. Adding splice -2 takes two elements from the end of the given array. Adding join(), rejoins the two word string and substitutes in a space, replacing the comma from the array. This removes my year count and the word "celebration" for instances where there is no comma in the initial memo string.
				occasionMemoOne = setHolidayMemos(yearIn, eventsArray[14].theMemo.split(" ", 4).splice(-2).join(" ") +".", 14);
		}else if(dateIn === setOrangemansDayHolidayDate(monthIn, yearIn)){
			occasionMemoOne = setHolidayMemos(yearIn, occasionMemoOne, 30); // Holiday memo for Orangeman's Day.
		}else if((dateIn === setNationalDayForTruthAndReconciliationHolidayDate(monthIn, yearIn)) && ((dayTruthReconciliationDoW === 0) || (dayTruthReconciliationDoW === 6))){
			occasionMemoTwo = setHolidayMemos(yearIn, occasionMemoTwo, 48); // Holiday memo for National Day For Truth And Reconciliation. This only displays when NDTR falls on a weekend and holiday falls on Monday in October.
		}else if(dateIn === setThanksgivingDayHolidayDate(monthIn, yearIn)){
			occasionMemoTwo = setHolidayMemos(yearIn, occasionMemoTwo, 17); // Holiday memo for Thanksgiving Day.
		}else if((dateIn === setRemembranceDayHolidayDate(monthIn, yearIn)) && ((remembranceDayDoW === 0) || (remembranceDayDoW === 6))){
		//	occasionMemoOne = "Holiday for "+ eventsArray[20].theMemo.match(/Armistice|Remembrance/) +" Day.";
			occasionMemoOne = setHolidayMemos(yearIn, eventsArray[20].theMemo.match(/Armistice|Remembrance/), 20);
		}else if((dateIn === setXmasDayHolidayDate(monthIn, yearIn)) && ((xmasDayDoW === 0) || (xmasDayDoW === 6))){
			occasionMemoOne = setHolidayMemos(yearIn, occasionMemoOne, 25); // Holiday memo for Xmas Day.
		}else if((dateIn === setBoxingDayHolidayDate(monthIn, yearIn)) && ((boxingDayDoW === 0) || (boxingDayDoW === 6))){
			occasionMemoOne = setHolidayMemos(yearIn, occasionMemoOne, 26); // Holiday memo for Boxing Day.
		}
		var twoOccasionHolder = document.createElement("div");
		twoOccasionHolder.classList.add("twoOccasion");
		twoOccasionHolder.insertAdjacentHTML("afterbegin", occasionMemoTwo);
		var oneOccasionHolder = document.createElement("div");
		oneOccasionHolder.classList.add("oneOccasion");
		oneOccasionHolder.insertAdjacentHTML("beforeend", occasionMemoOne);
		concatenatedMemos = twoOccasionHolder.outerHTML + oneOccasionHolder.outerHTML;
//		concatenatedMemos = "<div class=\"twoOccasion\">"+ occasionMemoTwo +"</div><div class=\"oneOccasion\">"+ occasionMemoOne +"</div>";
		return concatenatedMemos;
	}

	function setHolidayMemos(yearPassedIn, theOccasionMemoIn, theEventsArrayIndexIn){
		'use strict';
		var theHolidayMemo = "";
		var theHolidayType = "";
		var occasionYear = yearPassedIn;
		var occasionMonth = eventsArray[theEventsArrayIndexIn].theMonth - 1;
		var occasionDate = eventsArray[theEventsArrayIndexIn].theDate;
		var occasionDateObject = new Date(occasionYear, occasionMonth, occasionDate);
		var occasionDay = occasionDateObject.getDay();
		if((theEventsArrayIndexIn === 9) && ((occasionDay > 0) && (occasionDay < 6)) && (yearPassedIn > 1866)){
			theHolidayType = "Statutory";
		}else if(((theEventsArrayIndexIn === 27) || (theEventsArrayIndexIn === 28) || (theEventsArrayIndexIn === 29) || (theEventsArrayIndexIn === 30)) && (yearPassedIn > 1866)){
			theHolidayType = "Provincial";
		}else if(((theEventsArrayIndexIn === 12) && (yearPassedIn > 1866)) || ((theEventsArrayIndexIn === 17) && (yearPassedIn > 1956))){
			theHolidayType = "Public";
		}
	//	alert("eventsArray[theEventsArrayIndexIn].theMemo: "+ eventsArray[theEventsArrayIndexIn].theMemo +"\n\ntheOccasionMemoIn: "+ theOccasionMemoIn);
		if(eventsArray[theEventsArrayIndexIn].theMemo +"." === theOccasionMemoIn){ // For when the holiday date and the occasion date are the same.
			theHolidayMemo = theHolidayType +" Holiday, "+ eventsArray[theEventsArrayIndexIn].theMemo +".";
		}else if(eventsArray[theEventsArrayIndexIn].theMemo.includes(eventsArray[theEventsArrayIndexIn].theMemo.match(/Dominion|Canada/))){
			theHolidayMemo = theHolidayType +" Holiday for "+ eventsArray[14].theMemo.match(/Dominion|Canada/) +" Day.";
		}else if(eventsArray[theEventsArrayIndexIn].theMemo.includes(eventsArray[theEventsArrayIndexIn].theMemo.match(/Armistice|Remembrance/))){
			theHolidayMemo = theHolidayType +" Holiday for "+ eventsArray[20].theMemo.match(/Armistice|Remembrance/) +" Day."
		}else if(eventsArray[theEventsArrayIndexIn].theMemo.includes(", ")){
			theHolidayMemo = theHolidayType +" Holiday for "+ eventsArray[theEventsArrayIndexIn].theMemo.split(", ").splice(1, 1).join(" ") +"."; // Removes all words like "Statutory Holiday, " before and including, a comma and space that are added to memo below in method reInitializeMainArrayItems(). When New Years Day Holiday was not on the 1st, text appended below needed to be removed from it. Added the 18th of March, 2023.
		}else{
			theHolidayMemo = theHolidayType +" Holiday for "+ eventsArray[theEventsArrayIndexIn].theMemo +".";
		}
		return theHolidayMemo;
	}

	function calculateDayPosition(yearPassedIn, monthPassedIn, dateOfMonthIn){ // This function displays the day count stats (in this year) for today's date in the modal window.
		'use strict';
		var dayNumbersForToday = "";
		var leapYearSentence = "";
		var daysPluralOrSingular = "";
		var theDayAtNoon = new Date(yearPassedIn, monthPassedIn, dateOfMonthIn, 12, 0, 0);
		var start = new Date(parseInt(theDayAtNoon.getFullYear() - 1), 11, 31, 12, 0, 0);
		var end = new Date(theDayAtNoon.getFullYear(), 11, 31, 12, 0, 0);
		var diffFromBeginningInMilliseconds = parseInt((theDayAtNoon - start) + ((start.getTimezoneOffset() - theDayAtNoon.getTimezoneOffset()) * 60 * 1000)); // Subtract out DST, if applicable.
		var diffFromEndInMilliseconds = parseInt((end - theDayAtNoon) + ((theDayAtNoon.getTimezoneOffset() - end.getTimezoneOffset()) * 60 * 1000));
		var oneDayInMilliseconds = 1000 * 60 * 60 * 24;
		var daysFromBeginning = Math.ceil(diffFromBeginningInMilliseconds / oneDayInMilliseconds);
		var daysFromEnd = Math.ceil(diffFromEndInMilliseconds / oneDayInMilliseconds);
		var totalDaysInYear = parseInt(daysFromBeginning + daysFromEnd);
		if(daysFromEnd === 1){
			daysPluralOrSingular = " day";
		}else{
			daysPluralOrSingular = " days";
		}
		if(totalDaysInYear === 366){
			var leapYearTextContainer = document.createElement("span");
			leapYearTextContainer.setAttribute("id", "leapYearModalSentence");
			var leapYearWords = document.createElement("span");
			leapYearWords.setAttribute("id", "leapYearModalWords");
			leapYearWords.appendChild(document.createTextNode("leap year")); // This "leap year" text is bolded. That's why it's handled seperately from the rest.
			leapYearTextContainer.appendChild(document.createTextNode("( "+ yearPassedIn +" is a "));
			leapYearTextContainer.appendChild(leapYearWords);
			leapYearTextContainer.appendChild(document.createTextNode(". )"));
			leapYearSentence = leapYearTextContainer.outerHTML;
		}else{
			leapYearSentence = "";
		}
		var elapsedDaysHolder = document.createElement("span");
		elapsedDaysHolder.classList.add("numbers");
		elapsedDaysHolder.appendChild(document.createTextNode(daysFromBeginning));
		var remainingDaysHolder = document.createElement("span");
		remainingDaysHolder.classList.add("numbers");
		remainingDaysHolder.appendChild(document.createTextNode(daysFromEnd));
		var totalDaysHolder = document.createElement("span");
		totalDaysHolder.classList.add("numbers");
		totalDaysHolder.appendChild(document.createTextNode(totalDaysInYear));
		var aBreak = document.createElement("br");
		dayNumbersForToday = "Today is day "+ elapsedDaysHolder.outerHTML +" of "+ yearPassedIn +"."+ aBreak.outerHTML +"This year has "+ remainingDaysHolder.outerHTML + daysPluralOrSingular +" left."+ aBreak.outerHTML +"Elapsed plus remaining &#61; "+ totalDaysHolder.outerHTML +" days. "+ leapYearSentence;
		return dayNumbersForToday;
	}

	function setNewYearsHolidayDate(monthIn, yearIn){
		'use strict';
		var newYearsDayHoliday;
		var newYearsDayCheckDate = NthDay(1, 1, 1, yearIn);						// New Years Day holiday date. It moves to Monday when 1st falls on a weekend.
		if((eventsArray[4]) && (newYearsDayCheckDate === 1) && (monthIn === 0) && (yearIn > 1866)){
			newYearsDayHoliday = 2;
		}else if((eventsArray[4]) && (NthDay(1, 7, 1, yearIn) === 1) && (monthIn === 0) && (yearIn > 1866)){
			newYearsDayHoliday = 3;
		}else if((eventsArray[4]) && (monthIn === 0) && (yearIn > 1866)){
			newYearsDayHoliday = 1;
		}else{
			return false;
		}
		return newYearsDayHoliday;
	}

	function setPaddysDayHolidayDate(monthIn, yearIn){
		'use strict';
		var paddysDayHoliday;	
		var paddysCheckDate = NthDay(2, 2, 3, yearIn);							// St Paddy's Day
		if((eventsArray[27]) && (paddysCheckDate === 14) && (monthIn === 2) && (yearIn > 1948)){
			paddysDayHoliday = paddysCheckDate;
		}else if((eventsArray[27]) && (monthIn === 2) && (yearIn > 1948)){
			paddysDayHoliday = NthDay(3, 2, 3, yearIn);
		}else{
			return false;
		}
		return paddysDayHoliday;
	}

	function setStGeorgesDayHolidayDate(monthIn, yearIn){
		'use strict';
		var stGeorgesDayHoliday;
		var stGeorgesDayCheckDate = NthDay(3, 2, 4, yearIn);					// St. George's Day
		if(((eventsArray[28]) && (stGeorgesDayCheckDate > 19) && (stGeorgesDayCheckDate < 22) && (monthIn === 3) && (yearIn > 1948)) || ((yearIn === 2010) && (monthIn === 3))){
			stGeorgesDayHoliday = stGeorgesDayCheckDate;
		}else if((eventsArray[28]) && (monthIn === 3) && (yearIn > 1948)){
			stGeorgesDayHoliday = NthDay(4, 2, 4, yearIn);
		}else{
			return false;
		}
		return stGeorgesDayHoliday;
	}

	function setVictoriaDayHolidayDate(monthIn, yearIn){
		'use strict';
		var victoriaDayHoliday;
		var victoriaDayCheckDate = NthDay(3, 2, 5, yearIn);						// Victoria Day
		if((eventsArray[12]) && (victoriaDayCheckDate > 17) && (victoriaDayCheckDate < 25) && (monthIn === 4) && (yearIn > 1951)){
			victoriaDayHoliday = victoriaDayCheckDate;
		}else if((eventsArray[12]) && (monthIn === 4) && (yearIn > 1951)){
			victoriaDayHoliday = NthDay(4, 2, 5, yearIn);
		}else{
			return false;
		}
		return victoriaDayHoliday;
	}

	function setDiscoveryDayHolidayDate(monthIn, yearIn){
		'use strict';
		var discoveryDayHoliday;
		var discoveryDayCheckDate = NthDay(3, 2, 6, yearIn);						// Discovery Day
		if((eventsArray[29]) && (discoveryDayCheckDate > 20) && (discoveryDayCheckDate < 22) && (monthIn === 5) && (yearIn > 1961)){
			discoveryDayHoliday = discoveryDayCheckDate;
		}else if((eventsArray[29]) && (monthIn === 5) && (yearIn > 1961)){
			discoveryDayHoliday = NthDay(4, 2, 6, yearIn);
		}else{
			return false;
		}
		return discoveryDayHoliday;
	}

	function setCanadaDayHolidayDate(monthIn, yearIn){
		'use strict';
		var canadaDayHoliday;
		var canadaDayCheckDate = NthDay(1, 1, 7, yearIn);							// Canada Day
		if(((eventsArray[14]) && (canadaDayCheckDate === 1) && (monthIn === 6)) && (yearIn > 1878)){
			canadaDayHoliday = 2;
		}else if((eventsArray[14]) && (NthDay(1, 7, 7, yearIn) === 1) && (monthIn === 6) && (yearIn > 1878)){
			canadaDayHoliday = 3;
		}else if((eventsArray[14]) && (monthIn === 6) && (yearIn > 1878)){
			canadaDayHoliday = 1;
		}else{
			return false;
		}
		return canadaDayHoliday;
	}

	function setOrangemansDayHolidayDate(monthIn, yearIn){
		'use strict';
		var orangemansDayHoliday;
		var orangemansCheckDate = NthDay(2, 2, 7, yearIn);						// Orangeman's Day
		if((eventsArray[30]) && (orangemansCheckDate > 8) && (monthIn === 6) && (yearIn > 1948)){
			orangemansDayHoliday = orangemansCheckDate;
		}else if((eventsArray[30]) && (monthIn === 6) && (yearIn > 1948)){
			orangemansDayHoliday = 15;
		}else{
			return false;
		}
		return orangemansDayHoliday;
	}

	function setRegattaDayHolidayDate(monthIn, yearIn){
		'use strict';
		var regattaDayHoliday;
		if((monthIn === 7) && (yearIn > 1870)){
			regattaDayHoliday = NthDay(1, 4, 8, yearIn);						// Regatta Day
		}else{
			return false;
		}
		return regattaDayHoliday;
	}

	function setLabourDayHolidayDate(monthIn, yearIn){
		'use strict';
		var labourDayHoliday;
		if((monthIn === 8) && (yearIn > 1893)){
			labourDayHoliday = NthDay(1, 2, 9, yearIn);							// Labour Day
		}else{
			return false;
		}
		return labourDayHoliday;
	}

	function setNationalDayForTruthAndReconciliationHolidayDate(monthIn, yearIn){ // NDTR holiday
		'use strict';
		var nationalDayHoliday;
		if((NthDay(-1, 1, 9, yearIn) === 30) && (monthIn === 9) && (yearIn > 2020)){ // if Sept 30 is Sunday, set holiday to Monday, October 1st.
			nationalDayHoliday = 1;
		}else if((NthDay(-1, 7, 9, yearIn) === 30) && (monthIn === 9) && (yearIn > 2020)){ // if Sept 30 is Saturday, set holiday to Monday, Oct 2.
			nationalDayHoliday = 2;
		}else if((NthDay(-1, 1, 9, yearIn) !== 30) && (NthDay(-1, 7, 9, yearIn) !== 30) && (monthIn === 8) && (yearIn > 2020)){ // Only allow days that are not a Saturday, or not a Sunday, on Sept 30 to be set as holiday.
			nationalDayHoliday = 30;
		}else{
			return false;
		}
		return nationalDayHoliday;
	}

	function setThanksgivingDayHolidayDate(monthIn, yearIn){
		'use strict';
		var thanksgivingDayHoliday;
		if((monthIn === 9) && (yearIn > 1956)){
			thanksgivingDayHoliday = NthDay(2, 2, 10, yearIn);						// Thanksgiving Day
		}else{
			return false;
		}
		return thanksgivingDayHoliday;
	}

	function setRemembranceDayHolidayDate(monthIn, yearIn){
		'use strict';
		var remembranceDayHoliday;
		var remembranceDayCheckDate = NthDay(2, 1, 11, yearIn);					// Remembrance Day
		if((eventsArray[20]) && (remembranceDayCheckDate === 11) && (monthIn === 10) && (yearIn > 1918)){
			remembranceDayHoliday = 12;
		}else if((eventsArray[20]) && (NthDay(2, 7, 11, yearIn) === 11) && (monthIn === 10) && (yearIn > 1918)){
			remembranceDayHoliday = 13;
		}else if((monthIn === 10) && (yearIn > 1918)){
			remembranceDayHoliday = 11;
		}else{
			return false;
		}
		return remembranceDayHoliday;
	}

	function setXmasDayHolidayDate(monthIn, yearIn){
		'use strict';
		var xmasDayHoliday;
		var xmasDayCheckDate = NthDay(4, 1, 12, yearIn);							// Xmas Day
		if((eventsArray[25]) && (xmasDayCheckDate === 25) && (monthIn === 11) && (yearIn > 1866)){
			xmasDayHoliday = 27;
		}else if((eventsArray[25]) && (NthDay(4, 7, 12, yearIn) === 25) && (monthIn === 11) && (yearIn > 1866)){
			xmasDayHoliday = 27;
		}else if((monthIn === 11) && (yearIn > 1866)){
			xmasDayHoliday = 25;
		}else{
			return false;
		}
		return xmasDayHoliday;
	}

	function setBoxingDayHolidayDate(monthIn, yearIn){
		'use strict';
		var boxingDayHoliday;
		var boxingDayCheckDate = NthDay(4, 1, 12, yearIn);							// Boxing Day
		if((eventsArray[26]) && (boxingDayCheckDate === 26) && (monthIn === 11) && (yearIn > 1866)){
			boxingDayHoliday = 28;
		}else if((eventsArray[26]) && (NthDay(4, 7, 12, yearIn) === 26) && (monthIn === 11) && (yearIn > 1866)){
			boxingDayHoliday = 28;
		}else if((monthIn === 11) && (yearIn > 1866)){
			boxingDayHoliday = 26;
		}else{
			return false;
		}
		return boxingDayHoliday;
	}


	function count(curYearIn, startYearIn, eventTypeFlagIn){
		'use strict';
		var countNumber = parseInt(curYearIn - startYearIn);
		var suffix = determineDateSuffix(countNumber);
		if(countNumber <= 0){
			countNumber = "";
			suffix = "";
		}
		var countHolder = document.createElement("span");
		countHolder.classList.add("anniversaryYearCount");
		countHolder.appendChild(document.createTextNode(countNumber));
		var suffixHolder = document.createElement("sup");
		suffixHolder.classList.add("anniversarySup");
		suffixHolder.appendChild(document.createTextNode(suffix +" "));
		if(eventTypeFlagIn === 1){
			countHolder.appendChild(suffixHolder);
		}
		return countHolder.outerHTML;
	}

	function evaluateDSTbegin(){
		'use strict';
		var beginDSTdateOfMonth;
		var beginDSTmonth;
		var calendarYear = document.getElementById("yearTextBox").value;
		if(calendarYear >= 2007){
			beginDSTdateOfMonth = NthDay(2, 1, 3, calendarYear);
			beginDSTmonth = 2;
		}else if((calendarYear >= 1987) && (calendarYear < 2007)){
			beginDSTdateOfMonth = NthDay(1, 1, 4, calendarYear);
			beginDSTmonth = 3;
		}else if((calendarYear >= 1952) && (calendarYear < 1987)){
			beginDSTdateOfMonth = NthDay(-1, 1, 4, calendarYear);
			beginDSTmonth = 3;
		}else if((calendarYear >= 1917) && (calendarYear < 1952)){
			beginDSTdateOfMonth = NthDay(2, 1, 6, calendarYear);
			beginDSTmonth = 5;
		}else{
			return false;
		}
		var  beginDSTdate = new Date(calendarYear, beginDSTmonth, beginDSTdateOfMonth);
		return beginDSTdate;
	}

	function evaluateDSTend(){
		'use strict';
		var endDSTdateOfMonth;
		var endDSTmonth;
		var calendarYear = document.getElementById("yearTextBox").value;
		if(parseInt(calendarYear) >= 2007){
			endDSTdateOfMonth = NthDay(1, 1, 11, calendarYear);
			endDSTmonth = 10;
		}else if((calendarYear >= 1970) && (calendarYear < 2007)){
			endDSTdateOfMonth = NthDay(-1, 1, 10, calendarYear);
			endDSTmonth = 9;
		}else if((calendarYear >= 1952) && (calendarYear < 1970)){
			endDSTdateOfMonth = NthDay(-1, 1, 9, calendarYear);
			endDSTmonth = 8;
		}else if((calendarYear >= 1917) && (calendarYear < 1952)){
			endDSTdateOfMonth = NthDay(-1, 1, 9, calendarYear);
			endDSTmonth = 8;
		}else{
			return false;
		}
		var endDSTdate = new Date(calendarYear, endDSTmonth, endDSTdateOfMonth);
		return endDSTdate;
	}


	function calculateNewfoundlandDaylightSavingBeginTimes(userYearIn){
		'use strict';
		var DSTstartNewfoundland = "";
		if(userYearIn < 1917){
		return false;
		}else if((userYearIn >= 1917) && (userYearIn < 1952)){
			DSTstartNewfoundland = new Date(userYearIn, 6 - 1, NthDay(2 ,1, 6, userYearIn), 0, 30, 0);
		}else if((userYearIn >= 1952) && (userYearIn < 1970)){
			DSTstartNewfoundland = new Date(userYearIn, 4 - 1, NthDay(-1, 1, 4, userYearIn), 3, 30, 0);
		}else if((userYearIn >= 1970) && (userYearIn < 1987)){
			DSTstartNewfoundland = new Date(userYearIn, 4 - 1, NthDay(-1, 1, 4, userYearIn), 3, 31, 0);
		}else if((userYearIn >= 1987) && (userYearIn < 2007)){
			DSTstartNewfoundland = new Date(userYearIn, 4 - 1, NthDay(1, 1, 4, userYearIn), 3, 31, 0);
		}else if((userYearIn >= 2007) && (userYearIn < 2012)){
			DSTstartNewfoundland = new Date(userYearIn, 3 - 1, NthDay(2, 1, 3, userYearIn), 3, 31, 0); // Set DST begin time: (year,monthnumber-1,NthDay(firstsecondthirdfourthday of month or negative number to count backwards firstsecondthirdfourthday from end of month,dayofweek 1 for Sunday,monthnumber),hour,minute,second)
		}else if(userYearIn >= 2012){
			DSTstartNewfoundland = new Date(userYearIn, 3 - 1, NthDay(2, 1, 3, userYearIn), 5, 30, 0);
		}
		return DSTstartNewfoundland;
	}

	function calculateNewfoundlandDaylightSavingEndTimes(userYearIn){
		'use strict';
		var DSTendNewfoundland = "";
		if(userYearIn < 1917){
		return false;
		}else if((userYearIn >= 1917) && (userYearIn < 1952)){
			DSTendNewfoundland = new Date(userYearIn, 9 - 1, NthDay(-1, 1, 9, userYearIn), 23, 30, 0);
		}else if((userYearIn >= 1952) && (userYearIn < 1970)){
			DSTendNewfoundland = new Date(userYearIn, 9 - 1, NthDay(-1, 1, 9, userYearIn), 2, 30, 0);
		}else if((userYearIn >= 1970) && (userYearIn < 1987)){
			DSTendNewfoundland = new Date(userYearIn, 10 - 1, NthDay(-1, 1, 10, userYearIn), 2, 31, 0);
		}else if((userYearIn >= 1987) && (userYearIn < 2007)){
			DSTendNewfoundland = new Date(userYearIn, 10 - 1, NthDay(-1, 1, 10, userYearIn), 2, 31, 0);
		}else if((userYearIn >= 2007) && (userYearIn < 2011)){
			DSTendNewfoundland = new Date(userYearIn, 11 - 1, NthDay(1, 1, 11, userYearIn), 2, 31, 0); // Set DST end time: (year,monthnumber-1,NthDay(firstsecondthirdfourthday of month or negative number to count backwards firstsecondthirdfourthday from end of month,dayofweek 1 for Sunday,monthnumber),hour,minute,second)
		}else if(userYearIn >= 2011){
			DSTendNewfoundland = new Date(userYearIn, 11 - 1, NthDay(1, 1, 11, userYearIn), 4, 30, 0);
		}
		return DSTendNewfoundland;
	}

	function getDSTbeginTimeOfDay(viewedYearIn){
		"use strict";
		var timeOfDayToBeginDST = 0;
		if((viewedYearIn >= 1917) && (viewedYearIn < 1952)){
			timeOfDayToBeginDST = "9:00 PM";
		}else if((viewedYearIn >= 1952) && (viewedYearIn < 1970)){
			timeOfDayToBeginDST = "12:00 AM";
		}else if((viewedYearIn >= 1970) && (viewedYearIn < 2011)){
			timeOfDayToBeginDST = "12:01 AM";
		}else if(viewedYearIn >= 2011){
			timeOfDayToBeginDST = "2:00 AM";
		}
		return timeOfDayToBeginDST;
	}

	function getDSTendTimeOfDay(viewedYearIn){
		"use strict";
		var timeOfDayToEndDST = 0;
		if((viewedYearIn >= 1917) && (viewedYearIn < 1952)){
			timeOfDayToEndDST = "9:00 PM";
		}else if((viewedYearIn >= 1952) && (viewedYearIn < 1970)){
			timeOfDayToEndDST = "12:00 AM";
		}else if((viewedYearIn >= 1970) && (viewedYearIn < 2011)){
			timeOfDayToEndDST = "12:01 AM";
		}else if(viewedYearIn >= 2011){
			timeOfDayToEndDST = "2:00 AM";
		}
		return timeOfDayToEndDST;
	}

	function getNewfoundlandTimeZoneName(theDateObjectPassedIn, flagIn){
		'use strict';
		var theTimeZoneName = "";
		var theYearForDST = theDateObjectPassedIn.getFullYear();
		var theMonthForDST = theDateObjectPassedIn.getMonth();
		var theDateForDST = theDateObjectPassedIn.getDate();
		var beginDSTinNLdateObject = calculateNewfoundlandDaylightSavingBeginTimes(theYearForDST);
		var endDSTinNLdateObject = calculateNewfoundlandDaylightSavingEndTimes(theYearForDST);
		if(flagIn === "short"){
			if((beginDSTinNLdateObject < theDateObjectPassedIn) && (theDateObjectPassedIn < endDSTinNLdateObject)){
				theTimeZoneName = "(NDT)";
			}else{
				theTimeZoneName = "(NST)";
			}
		}else if(flagIn === "long"){
			if((beginDSTinNLdateObject < theDateObjectPassedIn) && (theDateObjectPassedIn < endDSTinNLdateObject)){
				theTimeZoneName = "Newfoundland Daylight Time (NDT)";
			}else{
				theTimeZoneName = "Newfoundland Standard Time (NST)";
			}
		}
		return theTimeZoneName;
	}

	function evaluateTimeZoneName(seasonIn){
		'use strict';
		var calendarBuildingYear = document.getElementById("yearTextBox").value;
		var isTimeDST;
		if((seasonIn === 1) && (calendarBuildingYear >= 2007)){ // Spring
			isTimeDST = "Daylight Time (NDT)";
		}else if(((seasonIn === 2) && (calendarBuildingYear >= 1917)) || ((seasonIn === 3) && (calendarBuildingYear >= 1917))){	// Summer = 2,  Fall = 3
			isTimeDST = "Daylight Time (NDT)";		
		}else{
			isTimeDST = "Standard Time (NST)";
		}
		return isTimeDST;
	}

	function toFormattedTwelveHourClockTime(thisDateObjectIn){
		'use strict';
		var theDateObject = thisDateObjectIn;
		var theTwentyFourHour = theDateObject.getHours();
		var theUnformattedMinute = theDateObject.getMinutes();
		var theTimeTwelveTag = "";
		var theTwelveHour = "";
		var theFormattedMinute = "";
		if(theTwentyFourHour > 11){
			theTimeTwelveTag = "PM";
		}else{
			theTimeTwelveTag = "AM";
		}
		if(theTwentyFourHour < 1){
			theTwelveHour = parseInt(theTwentyFourHour + 12);
		}else if(theTwentyFourHour > 12){
			theTwelveHour = parseInt(theTwentyFourHour - 12);
		}else{
			theTwelveHour = theTwentyFourHour;
		}
		if(theUnformattedMinute < 10){
			theFormattedMinute = "0" + theUnformattedMinute;
		}else{
			theFormattedMinute = theUnformattedMinute;
		}
		return theTwelveHour +":"+ theFormattedMinute +" "+ theTimeTwelveTag;
	}

	function seasonsChangeTimeOfDay(seasonNumberIn, givenYearIn){
		'use strict';
		var theSeasonDateObject = calc(seasonNumberIn, givenYearIn);
		return toFormattedTwelveHourClockTime(theSeasonDateObject);
	}

	function createShroveTuesdayDate(yearPassedIn){
		'use strict';
		var checkYear = parseInt(yearPassedIn);
		var easterSundayDate = 0;
		if(parseInt(checkYear) === 1752){
			easterSundayDate = ShowEasters(checkYear, "Julian");
		}else{
			easterSundayDate = ShowEasters(checkYear, "Gregorian");
		}
		var theShroveTuesdayDateObject =  subtractDays(easterSundayDate, 47);
		return theShroveTuesdayDateObject;
	}

	function evaluateGoodFriday(theYearPassedIn){
		'use strict';
		var theEasterSundayDateObject = 0;
		if(parseInt(theYearPassedIn) === 1752){
			theEasterSundayDateObject = ShowEasters(theYearPassedIn, "Julian");
		}else{
			theEasterSundayDateObject = ShowEasters(theYearPassedIn, "Gregorian");
		}
		var theGoodFridayDateObject = subtractDays(theEasterSundayDateObject, 2);
		return theGoodFridayDateObject;
	}
	
	function subtractDays(dateObjectPassedIn, numberDaysToSubtractIn){
		"use strict";
		dateObjectPassedIn.setDate(dateObjectPassedIn.getDate() - numberDaysToSubtractIn);
		return dateObjectPassedIn;
	}
	
	function reInitializeMainArrayItems(theEventYearPassedIn){
		'use strict';
		// All repeating annual occurrences in the eventsArray that need to use nth day, or other methods to evaluate when they occur, must be updated here in order to have them repeat on dates or months other than the listed dates or months in the eventsArray.
		var theGivenYearIn = theEventYearPassedIn;
		eventsArray[0].theDate = calc(1, theGivenYearIn).getDate(); // Spring Equinox
		eventsArray[0].theMemo = "The Vernal Equinox (start of Spring) for "+ theGivenYearIn +", occurs at:<br />"+ seasonsChangeTimeOfDay(1, theGivenYearIn) +", Newfoundland "+ evaluateTimeZoneName(1);
		eventsArray[1].theDate = calc(2, theGivenYearIn).getDate(); // Summer Solstice
		eventsArray[1].theMemo = "The Summer Solstice for "+ theGivenYearIn +", occurs at:<br />"+ seasonsChangeTimeOfDay(2, theGivenYearIn) +", Newfoundland "+ evaluateTimeZoneName(2);
		eventsArray[2].theDate = calc(3, theGivenYearIn).getDate(); // Fall Equinox
		eventsArray[2].theMemo = "The Autumnal Equinox (start of Fall) for "+ theGivenYearIn +", occurs at:<br />"+ seasonsChangeTimeOfDay(3, theGivenYearIn) +", Newfoundland "+ evaluateTimeZoneName(3);
		eventsArray[3].theDate = calc(4, theGivenYearIn).getDate(); // Winter Solstice
		eventsArray[3].theMemo = "The Winter Solstice for "+ theGivenYearIn +", occurs at:<br />"+ seasonsChangeTimeOfDay(4, theGivenYearIn) +", Newfoundland "+ evaluateTimeZoneName(4);
		if(parseInt(theGivenYearIn) > 1866){ // New Year's Day
			eventsArray[4].theMemo = "Statutory Holiday, New Year\'s Day";
		}else if(parseInt(theGivenYearIn) < 1867){
			eventsArray[4].theMemo = "New Year\'s Day";
		}
		eventsArray[5].theMonth = parseInt(createShroveTuesdayDate(theGivenYearIn).getMonth() + 1); // Pancake Day	
		eventsArray[5].theDate = createShroveTuesdayDate(theGivenYearIn).getDate();
		if(theGivenYearIn > 1916){ // DST begins
			var beginDSTdateObject = evaluateDSTbegin();
			eventsArray[8].theMonth = parseInt(beginDSTdateObject.getMonth() + 1);
			eventsArray[8].theDate = beginDSTdateObject.getDate();
			eventsArray[8].theMemo = "Daylight Saving Time (DST) Begins: "+ getDSTbeginTimeOfDay(theGivenYearIn) +" "+ getNewfoundlandTimeZoneName(evaluateDSTbegin(), "short");
		}
		var theGoodFridayDateObject = evaluateGoodFriday(theGivenYearIn);
		eventsArray[9].theMonth = parseInt(theGoodFridayDateObject.getMonth() + 1); // Good Friday
		eventsArray[9].theDate = theGoodFridayDateObject.getDate();
		if(theGivenYearIn === 1752){ // Easter Sunday
			var theJulianEasterSundayDateObject = ShowEasters(theGivenYearIn, "Julian");
			eventsArray[10].theMonth = parseInt(theJulianEasterSundayDateObject.getMonth() + 1);
			eventsArray[10].theDate = theJulianEasterSundayDateObject.getDate();
		}else if(theGivenYearIn > 1752){ // Easter Sunday
			var theGregorianEasterSundayDateObject = ShowEasters(theGivenYearIn, "Gregorian");
			eventsArray[10].theMonth = parseInt(theGregorianEasterSundayDateObject.getMonth() + 1);
			eventsArray[10].theDate = theGregorianEasterSundayDateObject.getDate();
		}
		eventsArray[11].theDate = NthDay(2, 1, 5, theGivenYearIn); // Mother's Day
		eventsArray[13].theDate = NthDay(3, 1, 6, theGivenYearIn); // Father's Day
		if(theGivenYearIn === 1916){ // Beaumont Hamel
			eventsArray[32].theMemo = "The Battle of Beaumont Hamel";
		}else{
			eventsArray[32].theMemo = "Beaumont Hamel: "+ count(theGivenYearIn, parseInt(eventsArray[32].theYear), 1) +"anniversary";
		}
		var countForCanadaDay = count(theGivenYearIn, parseInt(eventsArray[14].theYear), 2); // Canada Day - Dominion Day
		if(theGivenYearIn === 1867){
			eventsArray[14].theMemo = "British North America Act (BNA Act) effected";
		}else if((theGivenYearIn > 1867) && (theGivenYearIn < 1879)){
			eventsArray[14].theMemo = "Dominion Day "+ countForCanadaDay +" celebration";
		}else if((theGivenYearIn >= 1879) && (theGivenYearIn < 1982)){
			eventsArray[14].theMemo = "Statutory Holiday, Dominion Day "+ countForCanadaDay +" celebration";
		}else if(theGivenYearIn >= 1982){
			eventsArray[14].theMemo = "Statutory Holiday, Canada Day "+ countForCanadaDay +" celebration";
		}
		var countForRegattaDayMinusOne = count(theGivenYearIn, parseInt(eventsArray[15].theYear - 1), 1); // Regatta Day
		var countForRegattaDayZeroBased = count(theGivenYearIn, eventsArray[15].theYear, 1);
		if(theGivenYearIn === 1818){
			eventsArray[15].theDate = 22;
			eventsArray[15].theMonth = 9;
			eventsArray[15].theMemo = "The "+ countForRegattaDayMinusOne +"official St. John\'s Regatta.<br />Held in September only that year to coincide with the<br />57th anniversary of King George III\'s official coronation";
		}else{
			eventsArray[15].theDate = NthDay(1, 4, 8, theGivenYearIn);
			eventsArray[15].theMonth = 8;
		}
		if(theGivenYearIn === 1940){
			eventsArray[15].theMemo = "Due to WWII, there was NO Regatta in 1940";
		}else if((theGivenYearIn > 1818) && (theGivenYearIn < 1871)){
			eventsArray[15].theMemo = "The "+ countForRegattaDayMinusOne +"St. John\'s Regatta";
		}else if((theGivenYearIn > 1870) && (theGivenYearIn < 1940)){
			eventsArray[15].theMemo = "Civic Holiday, the "+ countForRegattaDayMinusOne +"St. John\'s Regatta";
		}else if((theGivenYearIn > 1940) && (theGivenYearIn <= 1992)){
			eventsArray[15].theMemo = "Civic Holiday, the "+ countForRegattaDayZeroBased +"St. John\'s Regatta";
		}else if(theGivenYearIn > 1992){
			eventsArray[15].theMemo = "Civic Holiday, the "+ countForRegattaDayZeroBased.toString() +"Royal St. John\'s Regatta";
		}
		eventsArray[16].theDate = NthDay(1, 2, 9, theGivenYearIn); // Labour Day
		if(theGivenYearIn > 2020){ // National Day for Truth and Reconciliation
			if((NthDay(-1, 1, 9, theGivenYearIn) === 30) || (NthDay(-1, 7, 9, theGivenYearIn) === 30)){
				eventsArray[48].theMemo = "National Day for Truth and Reconciliation"; // Displays in black when 30th falls on a weekend only.
			}else{
				eventsArray[48].theMemo = "Holiday, National Day for Truth and Reconciliation"; // Displays whenever 30th falls from Monday - Friday.
			}
		}
		eventsArray[17].theDate = NthDay(2, 2, 10, theGivenYearIn); // Thanksgiving Day
		if(theGivenYearIn > 1916){ // DST ends
			eventsArray[19].theMonth = parseInt(evaluateDSTend().getMonth() + 1);
			eventsArray[19].theDate = evaluateDSTend().getDate();
			eventsArray[19].theMemo = "Daylight Saving Time (DST) Ends: "+ getDSTendTimeOfDay(theGivenYearIn) +" "+ getNewfoundlandTimeZoneName(evaluateDSTend(), "short");
		}
		if(theGivenYearIn < 1931){ // Remembrance Day
			var theThe = theGivenYearIn > 1918 ? "Public Holiday, the " : ""; // My condensed if using conditional operator ? to evaluate whether to place the word "the" in variable theThe.
			eventsArray[20].theMemo = theThe + count(theGivenYearIn, parseInt(eventsArray[20].theYear), 1) +"Armistice Day";
		}else if(theGivenYearIn >= 1931){	
			eventsArray[20].theMemo = "Public Holiday, the "+ count(theGivenYearIn, parseInt(eventsArray[20].theYear), 1) +"Day of Remembrance";
		}
		if(theGivenYearIn > 1866){ // Xmas Day
			eventsArray[25].theMemo = "Statutory Holiday, Xmas Day";
			eventsArray[26].theMemo = "Provincial Holiday, Boxing Day";
		}else if(theGivenYearIn <= 1866){
			eventsArray[25].theMemo = "Xmas Day";
			eventsArray[26].theMemo = "Boxing Day";
		}
	} // end method reInitializeMainArrayItems



