/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 *   File:   DatePickerDialog.js
 */

"use strict";

interface DatePickerDiaglogType {}

const DatePickerDialog = function (this: any, datePickerEl: HTMLElement) {
	console.log(this);
	this.buttonLabelChoose = "Choose Date";
	this.buttonLabelChange = "Change Date";
	this.dayLabels = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	this.monthLabels = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	this.messageCursorKeys = "Cursor keys can navigate dates";
	this.lastMessage = "";

	this.textboxNode = datePickerEl.querySelector('input[type="text"]');
	this.buttonNode = datePickerEl.querySelector("button#calendar-btn");
	this.dialogNode = datePickerEl.querySelector('[role="dialog"]');
	this.messageNode = this.dialogNode.querySelector(".dialog-message");

	this.monthYearNode = this.dialogNode.querySelector(".month-year");

	this.prevYearNode = this.dialogNode.querySelector(".prev-year");
	this.prevMonthNode = this.dialogNode.querySelector(".prev-month");
	this.nextMonthNode = this.dialogNode.querySelector(".next-month");
	this.nextYearNode = this.dialogNode.querySelector(".next-year");

	this.okButtonNode = this.dialogNode.querySelector('button[value="ok"]');
	this.cancelButtonNode = this.dialogNode.querySelector(
		'button[value="cancel"]'
	);

	this.tbodyNode = this.dialogNode.querySelector("table.dates tbody");

	this.lastRowNode = null;

	this.days = [];

	this.focusDay = new Date();
	this.selectedDay = new Date(0, 0, 1);

	this.isMouseDownOnBackground = false;

	this.init();
} as any as { new (datePickerEl: HTMLElement): DatePickerDiaglogType };

DatePickerDialog.prototype.init = function () {
	this.textboxNode.addEventListener(
		"blur",
		this.setDateForButtonLabel.bind(this)
	);

	this.buttonNode.addEventListener(
		"keydown",
		this.handleButtonKeydown.bind(this)
	);
	this.buttonNode.addEventListener("click", this.handleButtonClick.bind(this));

	this.okButtonNode.addEventListener("click", this.handleOkButton.bind(this));
	this.okButtonNode.addEventListener("keydown", this.handleOkButton.bind(this));

	this.cancelButtonNode.addEventListener(
		"click",
		this.handleCancelButton.bind(this)
	);
	this.cancelButtonNode.addEventListener(
		"keydown",
		this.handleCancelButton.bind(this)
	);

	this.prevMonthNode.addEventListener(
		"click",
		this.handlePreviousMonthButton.bind(this)
	);
	this.nextMonthNode.addEventListener(
		"click",
		this.handleNextMonthButton.bind(this)
	);
	this.prevYearNode.addEventListener(
		"click",
		this.handlePreviousYearButton.bind(this)
	);
	this.nextYearNode.addEventListener(
		"click",
		this.handleNextYearButton.bind(this)
	);

	this.prevMonthNode.addEventListener(
		"keydown",
		this.handlePreviousMonthButton.bind(this)
	);
	this.nextMonthNode.addEventListener(
		"keydown",
		this.handleNextMonthButton.bind(this)
	);
	this.prevYearNode.addEventListener(
		"keydown",
		this.handlePreviousYearButton.bind(this)
	);
	this.nextYearNode.addEventListener(
		"keydown",
		this.handleNextYearButton.bind(this)
	);

	document.body.addEventListener(
		"mouseup",
		this.handleBackgroundMouseUp.bind(this),
		true
	);

	// Create Grid of Dates

	this.tbodyNode.innerHTML = "";
	for (var i = 0; i < 6; i++) {
		var row = this.tbodyNode.insertRow(i);
		this.lastRowNode = row;
		for (var j = 0; j < 7; j++) {
			var cell = document.createElement("td");

			cell.tabIndex = -1;
			cell.addEventListener("click", this.handleDayClick.bind(this));
			cell.addEventListener("keydown", this.handleDayKeyDown.bind(this));
			cell.addEventListener("focus", this.handleDayFocus.bind(this));

			cell.textContent = "-1";

			row.appendChild(cell);
			this.days.push(cell);
		}
	}

	this.updateGrid();
	this.close(false);
	this.setDateForButtonLabel();
};

DatePickerDialog.prototype.isSameDay = function (
	day1: Date,
	day2: Date
): boolean {
	return (
		day1.getFullYear() == day2.getFullYear() &&
		day1.getMonth() == day2.getMonth() &&
		day1.getDate() == day2.getDate()
	);
};

DatePickerDialog.prototype.isNotSameMonth = function (day1: Date, day2: Date) {
	return (
		day1.getFullYear() != day2.getFullYear() ||
		day1.getMonth() != day2.getMonth()
	);
};

DatePickerDialog.prototype.updateGrid = function () {
	var flag;
	var focusDay = this.focusDay;

	this.monthYearNode.textContent =
		this.monthLabels[focusDay.getMonth()] + " " + focusDay.getFullYear();

	var firstDayOfMonth = new Date(
		focusDay.getFullYear(),
		focusDay.getMonth(),
		1
	);
	const dayOfWeek = firstDayOfMonth.getDay();

	firstDayOfMonth.setDate(firstDayOfMonth.getDate() - dayOfWeek);

	const date = new Date(firstDayOfMonth);

	for (var i = 0; i < this.days.length; i++) {
		flag = date.getMonth() != focusDay.getMonth();

		this.updateDate(
			this.days[i],
			flag,
			date,
			this.isSameDay(date, this.selectedDay)
		);
		date.setDate(date.getDate() + 1);

		// Hide last row if all dates are disabled (e.g. in next month)
		if (i === 35) {
			if (flag) {
				this.lastRowNode.style.visibility = "hidden";
				this.lastRowNode.style.display = "none";
			} else {
				this.lastRowNode.style.visibility = "visible";
				this.lastRowNode.style.display = "table-row";
			}
		}
	}
};

DatePickerDialog.prototype.updateDate = function (
	domNode: HTMLTableCellElement,
	disable: boolean,
	day: Date,
	selected: boolean
) {
	let date = day.getDate().toString();
	if (day.getDate() <= 9) {
		date = "0" + date;
	}

	var month = (day.getMonth() + 1).toString();
	if (day.getMonth() < 9) {
		month = "0" + month;
	}

	domNode.tabIndex = -1;
	domNode.removeAttribute("aria-selected");
	domNode.setAttribute(
		"data-date",
		day.getFullYear() + "-" + month + "-" + date
	);

	if (disable) {
		domNode.classList.add("disabled");
		domNode.textContent = "";
	} else {
		domNode.classList.remove("disabled");
		domNode.textContent = day.getDate().toString();
		if (selected) {
			domNode.setAttribute("aria-selected", "true");
			domNode.tabIndex = 0;
		}
	}
};

DatePickerDialog.prototype.moveFocusToDay = function (day: Date) {
	const date = this.focusDay;

	this.focusDay = day;

	if (
		date.getMonth() != this.focusDay.getMonth() ||
		date.getFullYear() != this.focusDay.getFullYear()
	) {
		this.updateGrid();
	}
	this.setFocusDay();
};

DatePickerDialog.prototype.setFocusDay = function (flag?: boolean) {
	if (typeof flag !== "boolean") {
		flag = true;
	}

	for (var i = 0; i < this.days.length; i++) {
		const dayNode = this.days[i] as HTMLTableCellElement;
		const day = this.getDayFromDataDateAttribute(dayNode);
		console.log({ day });
		dayNode.tabIndex = -1;
		if (this.isSameDay(day, this.focusDay)) {
			dayNode.tabIndex = 0;
			if (flag) {
				dayNode.focus();
			}
		}
	}
};

DatePickerDialog.prototype.open = function () {
	// this.dialogNode.style.display = "inline-grid";
	// this.dialogNode.style.zIndex = 2;
	this.dialogNode.classList.add("open");

	this.getDateFromTextbox();
	this.updateGrid();
};

DatePickerDialog.prototype.isOpen = function () {
	return window.getComputedStyle(this.dialogNode).display !== "none";
};

DatePickerDialog.prototype.close = function (flag?: boolean) {
	if (typeof flag !== "boolean") {
		// Default is to move focus to combobox
		flag = true;
	}

	this.setMessage("");
	// this.dialogNode.style.display = "none";
	this.dialogNode.classList.remove("open");

	if (flag) {
		this.buttonNode.focus();
	}
};

DatePickerDialog.prototype.moveToNextYear = function () {
	this.focusDay.setFullYear(this.focusDay.getFullYear() + 1);
	this.updateGrid();
};

DatePickerDialog.prototype.moveToPreviousYear = function () {
	this.focusDay.setFullYear(this.focusDay.getFullYear() - 1);
	this.updateGrid();
};

DatePickerDialog.prototype.moveToNextMonth = function () {
	this.focusDay.setMonth(this.focusDay.getMonth() + 1);
	this.updateGrid();
};

DatePickerDialog.prototype.moveToPreviousMonth = function () {
	this.focusDay.setMonth(this.focusDay.getMonth() - 1);
	this.updateGrid();
};

DatePickerDialog.prototype.moveFocusToNextDay = function () {
	const date = new Date(this.focusDay);
	date.setDate(date.getDate() + 1);
	this.moveFocusToDay(date);
};

DatePickerDialog.prototype.moveFocusToNextWeek = function () {
	const date = new Date(this.focusDay);
	date.setDate(date.getDate() + 7);
	this.moveFocusToDay(date);
};

DatePickerDialog.prototype.moveFocusToPreviousDay = function () {
	const date = new Date(this.focusDay);
	date.setDate(date.getDate() - 1);
	this.moveFocusToDay(date);
};

DatePickerDialog.prototype.moveFocusToPreviousWeek = function () {
	const date = new Date(this.focusDay);
	date.setDate(date.getDate() - 7);
	this.moveFocusToDay(date);
};

DatePickerDialog.prototype.moveFocusToFirstDayOfWeek = function () {
	const date = new Date(this.focusDay);
	date.setDate(date.getDate() - date.getDay());
	this.moveFocusToDay(date);
};

DatePickerDialog.prototype.moveFocusToLastDayOfWeek = function () {
	const date = new Date(this.focusDay);
	date.setDate(date.getDate() + (6 - date.getDay()));
	this.moveFocusToDay(date);
};

// Day methods

DatePickerDialog.prototype.isDayDisabled = function (domNode: HTMLElement) {
	return domNode.classList.contains("disabled");
};

DatePickerDialog.prototype.getDayFromDataDateAttribute = function (
	domNode: HTMLElement
) {
	if (domNode !== null) {
		const dataDate = domNode.getAttribute("data-date");
		console.log({ dataDate });
		if (dataDate) {
			const parts = dataDate.split("-");
			console.log({ parts });
			// Different structure to previous date data
			const month = Number(parseInt(parts[1])) - 1;
			const day = Number(parseInt(parts[2]));
			let year = Number(parseInt(parts[0]));

			// if (parts[0] && parts[1])
			// 	return new Date(
			// 		Number(parts[0]), // year
			// 		parseInt(parts[1]) - 1, // month
			// 		Number(parts[2]) // day
			// 	);

			if (year && month)
				return new Date(
					year, // year
					month, // month
					day // day
				);
		}
	}
};
// Textbox methods

DatePickerDialog.prototype.setTextboxDate = function (domNode: HTMLElement) {
	let date = this.focusDay;

	if (domNode) {
		date = this.getDayFromDataDateAttribute(domNode);

		// updated aria-selected
		this.days.forEach((day: HTMLTableCellElement) =>
			day === domNode
				? day.setAttribute("aria-selected", "true")
				: day.removeAttribute("aria-selected")
		);
	}

	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();

	this.textboxNode.value = day + "/" + month + "/" + year;
	this.setDateForButtonLabel();
};

DatePickerDialog.prototype.getDateFromTextbox = function () {
	const parts = this.textboxNode.value.split("/");
	// OG
	// const month = parseInt(parts[0]);
	// const day = parseInt(parts[1]);
	// let year = parseInt(parts[2]);

	const month = parseInt(parts[1]);
	const day = parseInt(parts[0]);
	let year = parseInt(parts[2]);

	if (
		parts.length === 3 &&
		Number.isInteger(month) &&
		Number.isInteger(day) &&
		Number.isInteger(year)
	) {
		if (year < 100) {
			year = 2000 + year;
		}
		this.focusDay = new Date(year, month - 1, day);
		this.selectedDay = new Date(this.focusDay);
	} else {
		// If not a valid date (DD/MM/YY) initialize with todays date
		this.focusDay = new Date();
		this.selectedDay = new Date(0, 0, 1);
	}
};

DatePickerDialog.prototype.setDateForButtonLabel = function () {
	var parts = this.textboxNode.value.split("/");

	const month = parseInt(parts[1]);
	const day = parseInt(parts[0]);
	let year = parseInt(parts[2]);

	if (
		parts.length === 3 &&
		Number.isInteger(month) &&
		Number.isInteger(day) &&
		Number.isInteger(year)
	) {
		const date = new Date(year, month - 1, day);

		var label = this.buttonLabelChange;
		label += ", " + this.dayLabels[date.getDay()];
		label += " " + this.monthLabels[date.getMonth()];
		label += " " + date.getDate();
		label += ", " + date.getFullYear();
		this.buttonNode.setAttribute("aria-label", label);
	} else {
		// If not a valid date, initialize with "Choose Date"
		this.buttonNode.setAttribute("aria-label", this.buttonLabelChoose);
	}
};

DatePickerDialog.prototype.setMessage = function (str: string) {
	function setMessageDelayed(this: any) {
		this.messageNode.textContent = str;
	}

	if (str !== this.lastMessage) {
		setTimeout(setMessageDelayed.bind(this), 200);
		this.lastMessage = str;
	}
};

// Event handlers

DatePickerDialog.prototype.handleOkButton = function (event: KeyboardEvent) {
	var flag = false;

	switch (event.type) {
		case "keydown":
			switch (event.key) {
				case "Tab":
					if (!event.shiftKey) {
						this.prevYearNode.focus();
						flag = true;
					}
					break;

				case "Esc":
				case "Escape":
					this.close();
					flag = true;
					break;

				default:
					break;
			}
			break;

		case "click":
			this.setTextboxDate();
			this.close();
			flag = true;
			break;

		default:
			break;
	}

	if (flag) {
		event.stopPropagation();
		event.preventDefault();
	}
};

DatePickerDialog.prototype.handleCancelButton = function (
	event: KeyboardEvent
) {
	var flag = false;

	switch (event.type) {
		case "keydown":
			switch (event.key) {
				case "Esc":
				case "Escape":
					this.close();
					flag = true;
					break;

				default:
					break;
			}
			break;

		case "click":
			this.close();
			flag = true;
			break;

		default:
			break;
	}

	if (flag) {
		event.stopPropagation();
		event.preventDefault();
	}
};

DatePickerDialog.prototype.handleNextYearButton = function (
	event: KeyboardEvent
) {
	var flag = false;

	switch (event.type) {
		case "keydown":
			switch (event.key) {
				case "Esc":
				case "Escape":
					this.close();
					flag = true;
					break;

				case "Enter":
					this.moveToNextYear();
					this.setFocusDay(false);
					flag = true;
					break;
			}

			break;

		case "click":
			this.moveToNextYear();
			this.setFocusDay(false);
			break;

		default:
			break;
	}

	if (flag) {
		event.stopPropagation();
		event.preventDefault();
	}
};

DatePickerDialog.prototype.handlePreviousYearButton = function (
	event: KeyboardEvent
) {
	var flag = false;

	switch (event.type) {
		case "keydown":
			switch (event.key) {
				case "Enter":
					this.moveToPreviousYear();
					this.setFocusDay(false);
					flag = true;
					break;

				case "Tab":
					if (event.shiftKey) {
						this.okButtonNode.focus();
						flag = true;
					}
					break;

				case "Esc":
				case "Escape":
					this.close();
					flag = true;
					break;

				default:
					break;
			}

			break;

		case "click":
			this.moveToPreviousYear();
			this.setFocusDay(false);
			break;

		default:
			break;
	}

	if (flag) {
		event.stopPropagation();
		event.preventDefault();
	}
};

DatePickerDialog.prototype.handleNextMonthButton = function (
	event: KeyboardEvent
) {
	var flag = false;

	switch (event.type) {
		case "keydown":
			switch (event.key) {
				case "Esc":
				case "Escape":
					this.close();
					flag = true;
					break;

				case "Enter":
					this.moveToNextMonth();
					this.setFocusDay(false);
					flag = true;
					break;
			}

			break;

		case "click":
			this.moveToNextMonth();
			this.setFocusDay(false);
			break;

		default:
			break;
	}

	if (flag) {
		event.stopPropagation();
		event.preventDefault();
	}
};

DatePickerDialog.prototype.handlePreviousMonthButton = function (
	event: KeyboardEvent
) {
	var flag = false;

	switch (event.type) {
		case "keydown":
			switch (event.key) {
				case "Esc":
				case "Escape":
					this.close();
					flag = true;
					break;

				case "Enter":
					this.moveToPreviousMonth();
					this.setFocusDay(false);
					flag = true;
					break;
			}

			break;

		case "click":
			this.moveToPreviousMonth();
			this.setFocusDay(false);
			flag = true;
			break;

		default:
			break;
	}

	if (flag) {
		event.stopPropagation();
		event.preventDefault();
	}
};

DatePickerDialog.prototype.handleDayKeyDown = function (event: KeyboardEvent) {
	var flag = false;

	switch (event.key) {
		case "Esc":
		case "Escape":
			this.close();
			break;

		case " ":
			this.setTextboxDate(event.currentTarget);
			flag = true;
			break;

		case "Enter":
			this.setTextboxDate(event.currentTarget);
			this.close();
			flag = true;
			break;

		case "Tab":
			this.cancelButtonNode.focus();
			if (event.shiftKey) {
				this.nextYearNode.focus();
			}
			this.setMessage("");
			flag = true;
			break;

		case "Right":
		case "ArrowRight":
			this.moveFocusToNextDay();
			flag = true;
			break;

		case "Left":
		case "ArrowLeft":
			this.moveFocusToPreviousDay();
			flag = true;
			break;

		case "Down":
		case "ArrowDown":
			this.moveFocusToNextWeek();
			flag = true;
			break;

		case "Up":
		case "ArrowUp":
			this.moveFocusToPreviousWeek();
			flag = true;
			break;

		case "PageUp":
			if (event.shiftKey) {
				this.moveToPreviousYear();
			} else {
				this.moveToPreviousMonth();
			}
			this.setFocusDay();
			flag = true;
			break;

		case "PageDown":
			if (event.shiftKey) {
				this.moveToNextYear();
			} else {
				this.moveToNextMonth();
			}
			this.setFocusDay();
			flag = true;
			break;

		case "Home":
			this.moveFocusToFirstDayOfWeek();
			flag = true;
			break;

		case "End":
			this.moveFocusToLastDayOfWeek();
			flag = true;
			break;
	}

	if (flag) {
		event.stopPropagation();
		event.preventDefault();
	}
};

DatePickerDialog.prototype.handleDayClick = function (event: MouseEvent) {
	if (
		!this.isDayDisabled(event.currentTarget as HTMLElement) &&
		event.which !== 3
	) {
		this.setTextboxDate(event.currentTarget);
		this.close();
	}

	event.stopPropagation();
	event.preventDefault();
};

DatePickerDialog.prototype.handleDayFocus = function () {
	this.setMessage(this.messageCursorKeys);
};

DatePickerDialog.prototype.handleButtonKeydown = function (
	event: KeyboardEvent
) {
	if (event.key === "Enter" || event.key === " ") {
		this.open();
		this.setFocusDay();

		event.stopPropagation();
		event.preventDefault();
	}
};

DatePickerDialog.prototype.handleButtonClick = function (event: MouseEvent) {
	if (this.isOpen()) {
		this.close();
	} else {
		this.open();
		this.setFocusDay();
	}

	event.stopPropagation();
	event.preventDefault();
};

DatePickerDialog.prototype.handleBackgroundMouseUp = function (
	event: MouseEvent
) {
	if (
		!this.buttonNode.contains(event.target) &&
		!this.dialogNode.contains(event.target)
	) {
		if (this.isOpen()) {
			this.close(false);
			event.stopPropagation();
			event.preventDefault();
		}
	}
};

// Initialize menu button date picker

window.addEventListener("load", function () {
	const datePickerEl = document.querySelector(
		"div#a11y_date_picker"
	) as HTMLElement;
	if (datePickerEl) {
		new DatePickerDialog(datePickerEl);
	}
});
