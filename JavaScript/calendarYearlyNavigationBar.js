	// Curtis' Yearly Calendar Navigation Section Document

	window.onscroll = function(){
		'use strict';
		positionNavigationBar();
	};

	function positionNavigationBar(){
		'use strict';
		if((document.body.scrollTop > 20) || (document.documentElement.scrollTop > 20)){
			document.getElementById("navigationButtons").style.top = "0";
		}else{
			document.getElementById("navigationButtons").style.top = "85px";
		}
	}

	function backToToday(){
		'use strict';
		var calendarElement = document.getElementById("calendar");
		var thisYear = checkForUpdateToToday().getFullYear();
		document.getElementById("yearTextBox").value = thisYear;
		document.getElementById("calendar").innerHTML = "";
		document.getElementById("viewedYear").innerHTML = "";
		buildYearCalendar(calendarElement, parseInt(thisYear));
		document.getElementById("toToday").style.display = "none";
	}

	function checkForUpdateToToday(){
		'use strict';
		var todayAtNoon = new Date(new Date().setHours(12, 0, 0, 0)); // Create a reusable date object variable for 12 noon inside function. Among its many other uses, this function enables today's date to be updated from navigation buttons.
		return todayAtNoon;
	}

	function decodeSpecialCharacters(encodedString){
		"use strict";
		var textElement = new DOMParser().parseFromString(encodedString, "text/html");
		return textElement.documentElement.textContent;
	}

	function navigationTools(passedInYear){
		'use strict';
		var previousYearEncodedText = "&lt;&lt;&nbsp;Year";
		var previousYearText = decodeSpecialCharacters(previousYearEncodedText);
		var nextYearEncodedText = "Year&nbsp;&gt;&gt;";
		var nextYearText = decodeSpecialCharacters(nextYearEncodedText);
		var thisYear = new Date().getFullYear();
		document.getElementById("navigationButtons").innerHTML = "";
		var navigationForm = document.createElement("form");
		navigationForm.setAttribute("id", "calendarNavigation");
		navigationForm.setAttribute("method", "post");
		navigationForm.setAttribute("action" , "");
		createDynamicButton(navigationForm, "printButton", "Print", "window.print();return false;");
		createDynamicButton(navigationForm, "backOneYear", previousYearText, "previousYear();");
		var textBoxForYear = document.createElement("input");
		textBoxForYear.setAttribute("type", "text");
		textBoxForYear.setAttribute("id", "yearTextBox");
		textBoxForYear.setAttribute("value", passedInYear);
		textBoxForYear.setAttribute("maxlength", 4);
		textBoxForYear.setAttribute("onKeyPress", "return isKeyAllowed(event);");
		textBoxForYear.setAttribute("onKeyUp", "makeNewYearFromTextBox();");
		navigationForm.appendChild(textBoxForYear);
		createDynamicButton(navigationForm, "advanceOneYear", nextYearText, "nextYear();");
		if(thisYear !== passedInYear){
			createDynamicButton(navigationForm, "toToday", "Return To "+ thisYear, "backToToday();");
		}
		document.getElementById("navigationButtons").appendChild(navigationForm);
		var divForViewedYear = document.createElement("div");
		divForViewedYear.setAttribute("id", "viewedYear");
		document.getElementById("navigationButtons").appendChild(divForViewedYear);
	}

	function createDynamicButton(thisFormIn, idIn, valueIn, functionToCallIn){ // This method creates all navigation buttons in the form.
		"use strict";
		var aButton = document.createElement("input");
		aButton.setAttribute("type", "button");
		aButton.setAttribute("id", idIn);
		aButton.setAttribute("value", valueIn);
		aButton.setAttribute("onClick", functionToCallIn);
		thisFormIn.appendChild(aButton);
	}

	function makeNewYearFromTextBox(){ // Called by the text box.
		'use strict';
		var calendarElement = document.getElementById("calendar");
		var yearTyped = document.getElementById("yearTextBox").value;
 		if((yearTyped > 1751) && (yearTyped < 2201) && (yearTyped.length === 4)){
			navigationTools(parseInt(yearTyped));
			document.getElementById("calendar").innerHTML = "";
			buildYearCalendar(calendarElement, parseInt(yearTyped));
		}else if(yearTyped.length === 4){
			trapBadData(yearTyped);
		}
	}

	function previousYear(){ // Called by button: << Year
		"use strict";
		var calendarElement = document.getElementById("calendar");
		var yearInBox = parseInt(document.getElementById("yearTextBox").value);
		if(yearInBox > 1752){
			yearInBox -= 1;
			document.getElementById("calendar").innerHTML = "";
			navigationTools(parseInt(yearInBox));
			buildYearCalendar(calendarElement, parseInt(yearInBox));
		}else{
			trapBadData(yearInBox);
		}
	}

	function nextYear(){ // Called by button: Year >>
		'use strict';
		var calendarElement = document.getElementById("calendar");
		var yearInBox = parseInt(document.getElementById("yearTextBox").value);
		if((yearInBox > 1751) && (yearInBox < 2200)){
			yearInBox += 1;
			document.getElementById("calendar").innerHTML = "";
			navigationTools(parseInt(yearInBox));
			buildYearCalendar(calendarElement, parseInt(yearInBox));
		}else{
			trapBadData(yearInBox);
		}
	}

	function trapBadData(yearBoxPassedIn){
		"use strict";
		var intYearBoxValue = parseInt(yearBoxPassedIn);
		if(isNaN(intYearBoxValue)){ // Trap for button press when year box is empty.
			alert('Year box must not be empty.');
		}else if(intYearBoxValue <= 1752){
			alert('The year can be set to no earlier than 1752.\n\nThe Gregorian Calendar took effect in Britain that September.\nThis application\'s start-time has been limited in accordance, and its upper range truncates with the end of year 2200.');
		}else if(intYearBoxValue === 2200){
			alert('This calendar\'s year range is limited to no later than 2200.');
		}else if((intYearBoxValue < 1752) || (intYearBoxValue > 2200)){
			alert('Please enter a valid four digit year between 1752 and 2200.');
		}
		document.getElementById("yearTextBox").value = currentCalendarYear;
		document.getElementById("yearTextBox").select();
	} // end method trapBadData()

	function createLegend(){
		'use strict';
		var legendContainer = "";
		var legendDateBlock = "";
		var legendName = "";
		var legendDiv = document.getElementById("legend");
		var theLegendMainTitle = document.createElement("h3");
		theLegendMainTitle.setAttribute("id", "colourLegendTitle");
		theLegendMainTitle.appendChild(document.createTextNode("Date Box Colour Legend:"));
		legendDiv.appendChild(theLegendMainTitle); // Appends the title to the main legend div on the html page.
		for(var l = 0; l < 5; ++l){
			legendContainer = document.createElement("div");
			legendContainer.setAttribute("id", "legendBlockContainer"+ parseInt(l + 1));
			legendDateBlock = document.createElement("div");
			legendDateBlock.classList.add("legendDateBox");
			legendDateBlock.classList.add("weekDay");
			legendDateBlock.appendChild(document.createTextNode("00"));
			legendName = document.createElement("div");
			legendName.classList.add("legendDescription");
			if(l === 0){
				legendDateBlock.classList.add("todaysDate");
				legendName.setAttribute("id", "TodaysDateIdentifier");
				legendName.appendChild(document.createTextNode("Today's Date"));
			}else if(l === 1){
				legendDateBlock.classList.add("occasion");
				legendName.setAttribute("id", "OccasionIdentifier");
				legendName.appendChild(document.createTextNode("Occasion"));
			}else if(l === 2){
				legendDateBlock.classList.add("dateHoliday");
				legendName.setAttribute("id", "HolidayDateIdentifier");
				legendName.appendChild(document.createTextNode("Holiday Date"));
			}else if(l === 3){
				legendDateBlock.classList.add("birthdayOccasion");
				legendName.setAttribute("id", "BirthdayIdentifer");
				legendName.appendChild(document.createTextNode("Birthday"));
			}else if(l === 4){
				legendDateBlock.classList.add("eventMoonPhase");
				legendName.setAttribute("id", "MoonPhaseIdentifer");
				legendName.appendChild(document.createTextNode("Moon Phase"));
			} // end if
			legendContainer.appendChild(legendDateBlock);
			legendContainer.appendChild(legendName);
			document.getElementById("legend").appendChild(legendContainer);
			legendDateBlock.style.cursor = "auto";
		} // end for
	}

	// Section below from my rewrite. It detects key presses and locks out invalid characters and shift key combinations.
	function detectSpecificKeys(passedInEvent){ // Due to a couple of issues locking out keys using keycodes, I created this function to evaluate shift key presses and single quote key presses based on their symbols, charCodes, and/or their KeyboardEvent read-only properties.
		'use strict';
		var theEvent = passedInEvent;
		var characterCodeOfKey = theEvent.which; // Returns ASCII charCode of pressed key.
		var keyCharacterString = String.fromCharCode(characterCodeOfKey); // When there is no KeyboardEvent read-only property available for a specific key, use this method to convert given Unicode, or ASCII value, to the character itself.
		var isTrueOrFalse = true;
		if(theEvent.shiftKey){ // This if evaluates the event onKeyPress with the KeyboardEvent.shiftKey read-only property. Obviously, evaluates for a press of the shift key.
			isTrueOrFalse = false;
		}else if(keyCharacterString === "'"){ // Evaluates for a press of the single quote.
			isTrueOrFalse = false;
		}
		return isTrueOrFalse;
	}

	function getKeyCode(theEvent){ // When passed the onKeyPress event, this function will return a code for the pressed key, otherwise it returns false.
		'use strict';
		var anEvent = theEvent;
		var codeIfKeyPress = "";
		if(!anEvent || !anEvent.type){
			codeIfKeyPress = false;
		}else{
			var isPressedCode = (anEvent.keyCode)? anEvent.keyCode: ((anEvent.charCode)? anEvent.charCode: anEvent.which); // An if statement using two ternary operators to allow the possibility of evaluating all three ways, if necessary, to find a code and then assign it to isPressedCode variable.
			codeIfKeyPress = isPressedCode;
		} // End if
		return codeIfKeyPress;
	}

	// This function locks out all keyboard keys except navigation arrows, enter and number keys.
	function isKeyAllowed(textBoxEvent){ // This function called by textboxes in form using event onKeyPress="return isKeyAllowed(event);". If false is returned, it means character is not permitted.
		'use strict';
		var c = getKeyCode(textBoxEvent); // Call to this function returns keycode of pressed keyboard key, or false if there was no event.
		var keyAllowed = detectSpecificKeys(textBoxEvent); // Call to function above that evaluates whether shift, or single quote keys are pressed.
		var isTrueOrIsFalse = true; // Default is all keys being allowed.
		if ((c < 8) || ((c > 9) && (c < 37)) || (c === 38) || ((c > 39) && (c < 48)) || (c > 57) || (keyAllowed === false)){ // These are the blocked ranges. Allowed keys: backspace=8, tab=9, leftArrow=37(also used by percent, but shift is blocked), rightArrow=39(also used by single quote), and 0-9 which 0=48 through 9=57.
			isTrueOrIsFalse = false; // Any keycode that causes this if-block to evaluate as true, is a key that is NOT allowed, and its access is set to false.
		}
		return isTrueOrIsFalse; // If true is returned, key is allowed. If false, key is not allowed.
	}


