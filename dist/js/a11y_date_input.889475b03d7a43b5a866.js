"use strict";
(self["webpackChunkamdesigned"] = self["webpackChunkamdesigned"] || []).push([["a11y_date_input"],{

/***/ "./src/components/a11y_date_input/a11y_date_input.ts":
/*!***********************************************************!*\
  !*** ./src/components/a11y_date_input/a11y_date_input.ts ***!
  \***********************************************************/
/***/ (() => {

/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 *   File:   DatePickerDialog.js
 */

const DatePickerDialog = function (datePickerEl) {
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
    this.cancelButtonNode = this.dialogNode.querySelector('button[value="cancel"]');
    this.tbodyNode = this.dialogNode.querySelector("table.dates tbody");
    this.lastRowNode = null;
    this.days = [];
    this.focusDay = new Date();
    this.selectedDay = new Date(0, 0, 1);
    this.isMouseDownOnBackground = false;
    this.init();
};
DatePickerDialog.prototype.init = function () {
    this.textboxNode.addEventListener("blur", this.setDateForButtonLabel.bind(this));
    this.buttonNode.addEventListener("keydown", this.handleButtonKeydown.bind(this));
    this.buttonNode.addEventListener("click", this.handleButtonClick.bind(this));
    this.okButtonNode.addEventListener("click", this.handleOkButton.bind(this));
    this.okButtonNode.addEventListener("keydown", this.handleOkButton.bind(this));
    this.cancelButtonNode.addEventListener("click", this.handleCancelButton.bind(this));
    this.cancelButtonNode.addEventListener("keydown", this.handleCancelButton.bind(this));
    this.prevMonthNode.addEventListener("click", this.handlePreviousMonthButton.bind(this));
    this.nextMonthNode.addEventListener("click", this.handleNextMonthButton.bind(this));
    this.prevYearNode.addEventListener("click", this.handlePreviousYearButton.bind(this));
    this.nextYearNode.addEventListener("click", this.handleNextYearButton.bind(this));
    this.prevMonthNode.addEventListener("keydown", this.handlePreviousMonthButton.bind(this));
    this.nextMonthNode.addEventListener("keydown", this.handleNextMonthButton.bind(this));
    this.prevYearNode.addEventListener("keydown", this.handlePreviousYearButton.bind(this));
    this.nextYearNode.addEventListener("keydown", this.handleNextYearButton.bind(this));
    document.body.addEventListener("mouseup", this.handleBackgroundMouseUp.bind(this), true);
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
DatePickerDialog.prototype.isSameDay = function (day1, day2) {
    return (day1.getFullYear() == day2.getFullYear() &&
        day1.getMonth() == day2.getMonth() &&
        day1.getDate() == day2.getDate());
};
DatePickerDialog.prototype.isNotSameMonth = function (day1, day2) {
    return (day1.getFullYear() != day2.getFullYear() ||
        day1.getMonth() != day2.getMonth());
};
DatePickerDialog.prototype.updateGrid = function () {
    var flag;
    var focusDay = this.focusDay;
    this.monthYearNode.textContent =
        this.monthLabels[focusDay.getMonth()] + " " + focusDay.getFullYear();
    var firstDayOfMonth = new Date(focusDay.getFullYear(), focusDay.getMonth(), 1);
    const dayOfWeek = firstDayOfMonth.getDay();
    firstDayOfMonth.setDate(firstDayOfMonth.getDate() - dayOfWeek);
    const date = new Date(firstDayOfMonth);
    for (var i = 0; i < this.days.length; i++) {
        flag = date.getMonth() != focusDay.getMonth();
        this.updateDate(this.days[i], flag, date, this.isSameDay(date, this.selectedDay));
        date.setDate(date.getDate() + 1);
        // Hide last row if all dates are disabled (e.g. in next month)
        if (i === 35) {
            if (flag) {
                this.lastRowNode.style.visibility = "hidden";
                this.lastRowNode.style.display = "none";
            }
            else {
                this.lastRowNode.style.visibility = "visible";
                this.lastRowNode.style.display = "table-row";
            }
        }
    }
};
DatePickerDialog.prototype.updateDate = function (domNode, disable, day, selected) {
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
    domNode.setAttribute("data-date", day.getFullYear() + "-" + month + "-" + date);
    if (disable) {
        domNode.classList.add("disabled");
        domNode.textContent = "";
    }
    else {
        domNode.classList.remove("disabled");
        domNode.textContent = day.getDate().toString();
        if (selected) {
            domNode.setAttribute("aria-selected", "true");
            domNode.tabIndex = 0;
        }
    }
};
DatePickerDialog.prototype.moveFocusToDay = function (day) {
    const date = this.focusDay;
    this.focusDay = day;
    if (date.getMonth() != this.focusDay.getMonth() ||
        date.getFullYear() != this.focusDay.getFullYear()) {
        this.updateGrid();
    }
    this.setFocusDay();
};
DatePickerDialog.prototype.setFocusDay = function (flag) {
    if (typeof flag !== "boolean") {
        flag = true;
    }
    for (var i = 0; i < this.days.length; i++) {
        const dayNode = this.days[i];
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
DatePickerDialog.prototype.close = function (flag) {
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
DatePickerDialog.prototype.isDayDisabled = function (domNode) {
    return domNode.classList.contains("disabled");
};
DatePickerDialog.prototype.getDayFromDataDateAttribute = function (domNode) {
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
                return new Date(year, // year
                month, // month
                day // day
                );
        }
    }
};
// Textbox methods
DatePickerDialog.prototype.setTextboxDate = function (domNode) {
    let date = this.focusDay;
    if (domNode) {
        date = this.getDayFromDataDateAttribute(domNode);
        // updated aria-selected
        this.days.forEach((day) => day === domNode
            ? day.setAttribute("aria-selected", "true")
            : day.removeAttribute("aria-selected"));
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
    if (parts.length === 3 &&
        Number.isInteger(month) &&
        Number.isInteger(day) &&
        Number.isInteger(year)) {
        if (year < 100) {
            year = 2000 + year;
        }
        this.focusDay = new Date(year, month - 1, day);
        this.selectedDay = new Date(this.focusDay);
    }
    else {
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
    if (parts.length === 3 &&
        Number.isInteger(month) &&
        Number.isInteger(day) &&
        Number.isInteger(year)) {
        const date = new Date(year, month - 1, day);
        var label = this.buttonLabelChange;
        label += ", " + this.dayLabels[date.getDay()];
        label += " " + this.monthLabels[date.getMonth()];
        label += " " + date.getDate();
        label += ", " + date.getFullYear();
        this.buttonNode.setAttribute("aria-label", label);
    }
    else {
        // If not a valid date, initialize with "Choose Date"
        this.buttonNode.setAttribute("aria-label", this.buttonLabelChoose);
    }
};
DatePickerDialog.prototype.setMessage = function (str) {
    function setMessageDelayed() {
        this.messageNode.textContent = str;
    }
    if (str !== this.lastMessage) {
        setTimeout(setMessageDelayed.bind(this), 200);
        this.lastMessage = str;
    }
};
// Event handlers
DatePickerDialog.prototype.handleOkButton = function (event) {
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
DatePickerDialog.prototype.handleCancelButton = function (event) {
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
DatePickerDialog.prototype.handleNextYearButton = function (event) {
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
DatePickerDialog.prototype.handlePreviousYearButton = function (event) {
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
DatePickerDialog.prototype.handleNextMonthButton = function (event) {
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
DatePickerDialog.prototype.handlePreviousMonthButton = function (event) {
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
DatePickerDialog.prototype.handleDayKeyDown = function (event) {
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
            }
            else {
                this.moveToPreviousMonth();
            }
            this.setFocusDay();
            flag = true;
            break;
        case "PageDown":
            if (event.shiftKey) {
                this.moveToNextYear();
            }
            else {
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
DatePickerDialog.prototype.handleDayClick = function (event) {
    if (!this.isDayDisabled(event.currentTarget) &&
        event.which !== 3) {
        this.setTextboxDate(event.currentTarget);
        this.close();
    }
    event.stopPropagation();
    event.preventDefault();
};
DatePickerDialog.prototype.handleDayFocus = function () {
    this.setMessage(this.messageCursorKeys);
};
DatePickerDialog.prototype.handleButtonKeydown = function (event) {
    if (event.key === "Enter" || event.key === " ") {
        this.open();
        this.setFocusDay();
        event.stopPropagation();
        event.preventDefault();
    }
};
DatePickerDialog.prototype.handleButtonClick = function (event) {
    if (this.isOpen()) {
        this.close();
    }
    else {
        this.open();
        this.setFocusDay();
    }
    event.stopPropagation();
    event.preventDefault();
};
DatePickerDialog.prototype.handleBackgroundMouseUp = function (event) {
    if (!this.buttonNode.contains(event.target) &&
        !this.dialogNode.contains(event.target)) {
        if (this.isOpen()) {
            this.close(false);
            event.stopPropagation();
            event.preventDefault();
        }
    }
};
// Initialize menu button date picker
window.addEventListener("load", function () {
    const datePickerEl = document.querySelector("div#a11y_date_picker");
    if (datePickerEl) {
        new DatePickerDialog(datePickerEl);
    }
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/a11y_date_input/a11y_date_input.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2pzL2ExMXlfZGF0ZV9pbnB1dC44ODk0NzViMDNkN2E0M2I1YTg2Ni5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0E7QUFDQSxzQkFBc0IsS0FBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsVUFBVTtBQUNoQztBQUNBO0FBQ0EsMEJBQTBCLE9BQU87QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW1kZXNpZ25lZC8uL3NyYy9jb21wb25lbnRzL2ExMXlfZGF0ZV9pbnB1dC9hMTF5X2RhdGVfaW5wdXQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogICBUaGlzIGNvbnRlbnQgaXMgbGljZW5zZWQgYWNjb3JkaW5nIHRvIHRoZSBXM0MgU29mdHdhcmUgTGljZW5zZSBhdFxyXG4gKiAgIGh0dHBzOi8vd3d3LnczLm9yZy9Db25zb3J0aXVtL0xlZ2FsLzIwMTUvY29weXJpZ2h0LXNvZnR3YXJlLWFuZC1kb2N1bWVudFxyXG4gKlxyXG4gKiAgIEZpbGU6ICAgRGF0ZVBpY2tlckRpYWxvZy5qc1xyXG4gKi9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcbmNvbnN0IERhdGVQaWNrZXJEaWFsb2cgPSBmdW5jdGlvbiAoZGF0ZVBpY2tlckVsKSB7XHJcbiAgICB0aGlzLmJ1dHRvbkxhYmVsQ2hvb3NlID0gXCJDaG9vc2UgRGF0ZVwiO1xyXG4gICAgdGhpcy5idXR0b25MYWJlbENoYW5nZSA9IFwiQ2hhbmdlIERhdGVcIjtcclxuICAgIHRoaXMuZGF5TGFiZWxzID0gW1xyXG4gICAgICAgIFwiU3VuZGF5XCIsXHJcbiAgICAgICAgXCJNb25kYXlcIixcclxuICAgICAgICBcIlR1ZXNkYXlcIixcclxuICAgICAgICBcIldlZG5lc2RheVwiLFxyXG4gICAgICAgIFwiVGh1cnNkYXlcIixcclxuICAgICAgICBcIkZyaWRheVwiLFxyXG4gICAgICAgIFwiU2F0dXJkYXlcIixcclxuICAgIF07XHJcbiAgICB0aGlzLm1vbnRoTGFiZWxzID0gW1xyXG4gICAgICAgIFwiSmFudWFyeVwiLFxyXG4gICAgICAgIFwiRmVicnVhcnlcIixcclxuICAgICAgICBcIk1hcmNoXCIsXHJcbiAgICAgICAgXCJBcHJpbFwiLFxyXG4gICAgICAgIFwiTWF5XCIsXHJcbiAgICAgICAgXCJKdW5lXCIsXHJcbiAgICAgICAgXCJKdWx5XCIsXHJcbiAgICAgICAgXCJBdWd1c3RcIixcclxuICAgICAgICBcIlNlcHRlbWJlclwiLFxyXG4gICAgICAgIFwiT2N0b2JlclwiLFxyXG4gICAgICAgIFwiTm92ZW1iZXJcIixcclxuICAgICAgICBcIkRlY2VtYmVyXCIsXHJcbiAgICBdO1xyXG4gICAgdGhpcy5tZXNzYWdlQ3Vyc29yS2V5cyA9IFwiQ3Vyc29yIGtleXMgY2FuIG5hdmlnYXRlIGRhdGVzXCI7XHJcbiAgICB0aGlzLmxhc3RNZXNzYWdlID0gXCJcIjtcclxuICAgIHRoaXMudGV4dGJveE5vZGUgPSBkYXRlUGlja2VyRWwucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInRleHRcIl0nKTtcclxuICAgIHRoaXMuYnV0dG9uTm9kZSA9IGRhdGVQaWNrZXJFbC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uI2NhbGVuZGFyLWJ0blwiKTtcclxuICAgIHRoaXMuZGlhbG9nTm9kZSA9IGRhdGVQaWNrZXJFbC5xdWVyeVNlbGVjdG9yKCdbcm9sZT1cImRpYWxvZ1wiXScpO1xyXG4gICAgdGhpcy5tZXNzYWdlTm9kZSA9IHRoaXMuZGlhbG9nTm9kZS5xdWVyeVNlbGVjdG9yKFwiLmRpYWxvZy1tZXNzYWdlXCIpO1xyXG4gICAgdGhpcy5tb250aFllYXJOb2RlID0gdGhpcy5kaWFsb2dOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIubW9udGgteWVhclwiKTtcclxuICAgIHRoaXMucHJldlllYXJOb2RlID0gdGhpcy5kaWFsb2dOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIucHJldi15ZWFyXCIpO1xyXG4gICAgdGhpcy5wcmV2TW9udGhOb2RlID0gdGhpcy5kaWFsb2dOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIucHJldi1tb250aFwiKTtcclxuICAgIHRoaXMubmV4dE1vbnRoTm9kZSA9IHRoaXMuZGlhbG9nTm9kZS5xdWVyeVNlbGVjdG9yKFwiLm5leHQtbW9udGhcIik7XHJcbiAgICB0aGlzLm5leHRZZWFyTm9kZSA9IHRoaXMuZGlhbG9nTm9kZS5xdWVyeVNlbGVjdG9yKFwiLm5leHQteWVhclwiKTtcclxuICAgIHRoaXMub2tCdXR0b25Ob2RlID0gdGhpcy5kaWFsb2dOb2RlLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt2YWx1ZT1cIm9rXCJdJyk7XHJcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbk5vZGUgPSB0aGlzLmRpYWxvZ05vZGUucXVlcnlTZWxlY3RvcignYnV0dG9uW3ZhbHVlPVwiY2FuY2VsXCJdJyk7XHJcbiAgICB0aGlzLnRib2R5Tm9kZSA9IHRoaXMuZGlhbG9nTm9kZS5xdWVyeVNlbGVjdG9yKFwidGFibGUuZGF0ZXMgdGJvZHlcIik7XHJcbiAgICB0aGlzLmxhc3RSb3dOb2RlID0gbnVsbDtcclxuICAgIHRoaXMuZGF5cyA9IFtdO1xyXG4gICAgdGhpcy5mb2N1c0RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICB0aGlzLnNlbGVjdGVkRGF5ID0gbmV3IERhdGUoMCwgMCwgMSk7XHJcbiAgICB0aGlzLmlzTW91c2VEb3duT25CYWNrZ3JvdW5kID0gZmFsc2U7XHJcbiAgICB0aGlzLmluaXQoKTtcclxufTtcclxuRGF0ZVBpY2tlckRpYWxvZy5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMudGV4dGJveE5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgdGhpcy5zZXREYXRlRm9yQnV0dG9uTGFiZWwuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLmJ1dHRvbk5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVCdXR0b25LZXlkb3duLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5idXR0b25Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5va0J1dHRvbk5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlT2tCdXR0b24uYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLm9rQnV0dG9uTm9kZS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmhhbmRsZU9rQnV0dG9uLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5jYW5jZWxCdXR0b25Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUNhbmNlbEJ1dHRvbi5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMuY2FuY2VsQnV0dG9uTm9kZS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmhhbmRsZUNhbmNlbEJ1dHRvbi5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMucHJldk1vbnRoTm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVQcmV2aW91c01vbnRoQnV0dG9uLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5uZXh0TW9udGhOb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZU5leHRNb250aEJ1dHRvbi5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMucHJldlllYXJOb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZVByZXZpb3VzWWVhckJ1dHRvbi5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMubmV4dFllYXJOb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZU5leHRZZWFyQnV0dG9uLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5wcmV2TW9udGhOb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlUHJldmlvdXNNb250aEJ1dHRvbi5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMubmV4dE1vbnRoTm9kZS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmhhbmRsZU5leHRNb250aEJ1dHRvbi5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMucHJldlllYXJOb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlUHJldmlvdXNZZWFyQnV0dG9uLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5uZXh0WWVhck5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVOZXh0WWVhckJ1dHRvbi5iaW5kKHRoaXMpKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5oYW5kbGVCYWNrZ3JvdW5kTW91c2VVcC5iaW5kKHRoaXMpLCB0cnVlKTtcclxuICAgIC8vIENyZWF0ZSBHcmlkIG9mIERhdGVzXHJcbiAgICB0aGlzLnRib2R5Tm9kZS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA2OyBpKyspIHtcclxuICAgICAgICB2YXIgcm93ID0gdGhpcy50Ym9keU5vZGUuaW5zZXJ0Um93KGkpO1xyXG4gICAgICAgIHRoaXMubGFzdFJvd05vZGUgPSByb3c7XHJcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCA3OyBqKyspIHtcclxuICAgICAgICAgICAgdmFyIGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgIGNlbGwudGFiSW5kZXggPSAtMTtcclxuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVEYXlDbGljay5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmhhbmRsZURheUtleURvd24uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIHRoaXMuaGFuZGxlRGF5Rm9jdXMuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBcIi0xXCI7XHJcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcclxuICAgICAgICAgICAgdGhpcy5kYXlzLnB1c2goY2VsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVHcmlkKCk7XHJcbiAgICB0aGlzLmNsb3NlKGZhbHNlKTtcclxuICAgIHRoaXMuc2V0RGF0ZUZvckJ1dHRvbkxhYmVsKCk7XHJcbn07XHJcbkRhdGVQaWNrZXJEaWFsb2cucHJvdG90eXBlLmlzU2FtZURheSA9IGZ1bmN0aW9uIChkYXkxLCBkYXkyKSB7XHJcbiAgICByZXR1cm4gKGRheTEuZ2V0RnVsbFllYXIoKSA9PSBkYXkyLmdldEZ1bGxZZWFyKCkgJiZcclxuICAgICAgICBkYXkxLmdldE1vbnRoKCkgPT0gZGF5Mi5nZXRNb250aCgpICYmXHJcbiAgICAgICAgZGF5MS5nZXREYXRlKCkgPT0gZGF5Mi5nZXREYXRlKCkpO1xyXG59O1xyXG5EYXRlUGlja2VyRGlhbG9nLnByb3RvdHlwZS5pc05vdFNhbWVNb250aCA9IGZ1bmN0aW9uIChkYXkxLCBkYXkyKSB7XHJcbiAgICByZXR1cm4gKGRheTEuZ2V0RnVsbFllYXIoKSAhPSBkYXkyLmdldEZ1bGxZZWFyKCkgfHxcclxuICAgICAgICBkYXkxLmdldE1vbnRoKCkgIT0gZGF5Mi5nZXRNb250aCgpKTtcclxufTtcclxuRGF0ZVBpY2tlckRpYWxvZy5wcm90b3R5cGUudXBkYXRlR3JpZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBmbGFnO1xyXG4gICAgdmFyIGZvY3VzRGF5ID0gdGhpcy5mb2N1c0RheTtcclxuICAgIHRoaXMubW9udGhZZWFyTm9kZS50ZXh0Q29udGVudCA9XHJcbiAgICAgICAgdGhpcy5tb250aExhYmVsc1tmb2N1c0RheS5nZXRNb250aCgpXSArIFwiIFwiICsgZm9jdXNEYXkuZ2V0RnVsbFllYXIoKTtcclxuICAgIHZhciBmaXJzdERheU9mTW9udGggPSBuZXcgRGF0ZShmb2N1c0RheS5nZXRGdWxsWWVhcigpLCBmb2N1c0RheS5nZXRNb250aCgpLCAxKTtcclxuICAgIGNvbnN0IGRheU9mV2VlayA9IGZpcnN0RGF5T2ZNb250aC5nZXREYXkoKTtcclxuICAgIGZpcnN0RGF5T2ZNb250aC5zZXREYXRlKGZpcnN0RGF5T2ZNb250aC5nZXREYXRlKCkgLSBkYXlPZldlZWspO1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGZpcnN0RGF5T2ZNb250aCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGF5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGZsYWcgPSBkYXRlLmdldE1vbnRoKCkgIT0gZm9jdXNEYXkuZ2V0TW9udGgoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZURhdGUodGhpcy5kYXlzW2ldLCBmbGFnLCBkYXRlLCB0aGlzLmlzU2FtZURheShkYXRlLCB0aGlzLnNlbGVjdGVkRGF5KSk7XHJcbiAgICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgMSk7XHJcbiAgICAgICAgLy8gSGlkZSBsYXN0IHJvdyBpZiBhbGwgZGF0ZXMgYXJlIGRpc2FibGVkIChlLmcuIGluIG5leHQgbW9udGgpXHJcbiAgICAgICAgaWYgKGkgPT09IDM1KSB7XHJcbiAgICAgICAgICAgIGlmIChmbGFnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RSb3dOb2RlLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0Um93Tm9kZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RSb3dOb2RlLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFJvd05vZGUuc3R5bGUuZGlzcGxheSA9IFwidGFibGUtcm93XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbkRhdGVQaWNrZXJEaWFsb2cucHJvdG90eXBlLnVwZGF0ZURhdGUgPSBmdW5jdGlvbiAoZG9tTm9kZSwgZGlzYWJsZSwgZGF5LCBzZWxlY3RlZCkge1xyXG4gICAgbGV0IGRhdGUgPSBkYXkuZ2V0RGF0ZSgpLnRvU3RyaW5nKCk7XHJcbiAgICBpZiAoZGF5LmdldERhdGUoKSA8PSA5KSB7XHJcbiAgICAgICAgZGF0ZSA9IFwiMFwiICsgZGF0ZTtcclxuICAgIH1cclxuICAgIHZhciBtb250aCA9IChkYXkuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCk7XHJcbiAgICBpZiAoZGF5LmdldE1vbnRoKCkgPCA5KSB7XHJcbiAgICAgICAgbW9udGggPSBcIjBcIiArIG1vbnRoO1xyXG4gICAgfVxyXG4gICAgZG9tTm9kZS50YWJJbmRleCA9IC0xO1xyXG4gICAgZG9tTm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIpO1xyXG4gICAgZG9tTm9kZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWRhdGVcIiwgZGF5LmdldEZ1bGxZZWFyKCkgKyBcIi1cIiArIG1vbnRoICsgXCItXCIgKyBkYXRlKTtcclxuICAgIGlmIChkaXNhYmxlKSB7XHJcbiAgICAgICAgZG9tTm9kZS5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgZG9tTm9kZS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBkb21Ob2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICBkb21Ob2RlLnRleHRDb250ZW50ID0gZGF5LmdldERhdGUoKS50b1N0cmluZygpO1xyXG4gICAgICAgIGlmIChzZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBkb21Ob2RlLnNldEF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICBkb21Ob2RlLnRhYkluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbkRhdGVQaWNrZXJEaWFsb2cucHJvdG90eXBlLm1vdmVGb2N1c1RvRGF5ID0gZnVuY3Rpb24gKGRheSkge1xyXG4gICAgY29uc3QgZGF0ZSA9IHRoaXMuZm9jdXNEYXk7XHJcbiAgICB0aGlzLmZvY3VzRGF5ID0gZGF5O1xyXG4gICAgaWYgKGRhdGUuZ2V0TW9udGgoKSAhPSB0aGlzLmZvY3VzRGF5LmdldE1vbnRoKCkgfHxcclxuICAgICAgICBkYXRlLmdldEZ1bGxZZWFyKCkgIT0gdGhpcy5mb2N1c0RheS5nZXRGdWxsWWVhcigpKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVHcmlkKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldEZvY3VzRGF5KCk7XHJcbn07XHJcbkRhdGVQaWNrZXJEaWFsb2cucHJvdG90eXBlLnNldEZvY3VzRGF5ID0gZnVuY3Rpb24gKGZsYWcpIHtcclxuICAgIGlmICh0eXBlb2YgZmxhZyAhPT0gXCJib29sZWFuXCIpIHtcclxuICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kYXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgZGF5Tm9kZSA9IHRoaXMuZGF5c1tpXTtcclxuICAgICAgICBjb25zdCBkYXkgPSB0aGlzLmdldERheUZyb21EYXRhRGF0ZUF0dHJpYnV0ZShkYXlOb2RlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh7IGRheSB9KTtcclxuICAgICAgICBkYXlOb2RlLnRhYkluZGV4ID0gLTE7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTYW1lRGF5KGRheSwgdGhpcy5mb2N1c0RheSkpIHtcclxuICAgICAgICAgICAgZGF5Tm9kZS50YWJJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIGlmIChmbGFnKSB7XHJcbiAgICAgICAgICAgICAgICBkYXlOb2RlLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbkRhdGVQaWNrZXJEaWFsb2cucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyB0aGlzLmRpYWxvZ05vZGUuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWdyaWRcIjtcclxuICAgIC8vIHRoaXMuZGlhbG9nTm9kZS5zdHlsZS56SW5kZXggPSAyO1xyXG4gICAgdGhpcy5kaWFsb2dOb2RlLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xyXG4gICAgdGhpcy5nZXREYXRlRnJvbVRleHRib3goKTtcclxuICAgIHRoaXMudXBkYXRlR3JpZCgpO1xyXG59O1xyXG5EYXRlUGlja2VyRGlhbG9nLnByb3RvdHlwZS5pc09wZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5kaWFsb2dOb2RlKS5kaXNwbGF5ICE9PSBcIm5vbmVcIjtcclxufTtcclxuRGF0ZVBpY2tlckRpYWxvZy5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoZmxhZykge1xyXG4gICAgaWYgKHR5cGVvZiBmbGFnICE9PSBcImJvb2xlYW5cIikge1xyXG4gICAgICAgIC8vIERlZmF1bHQgaXMgdG8gbW92ZSBmb2N1cyB0byBjb21ib2JveFxyXG4gICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRNZXNzYWdlKFwiXCIpO1xyXG4gICAgLy8gdGhpcy5kaWFsb2dOb2RlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIHRoaXMuZGlhbG9nTm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcclxuICAgIGlmIChmbGFnKSB7XHJcbiAgICAgICAgdGhpcy5idXR0b25Ob2RlLmZvY3VzKCk7XHJcbiAgICB9XHJcbn07XHJcbkRhdGVQaWNrZXJEaWFsb2cucHJvdG90eXBlLm1vdmVUb05leHRZZWFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5mb2N1c0RheS5zZXRGdWxsWWVhcih0aGlzLmZvY3VzRGF5LmdldEZ1bGxZZWFyKCkgKyAxKTtcclxuICAgIHRoaXMudXBkYXRlR3JpZCgpO1xyXG59O1xyXG5EYXRlUGlja2VyRGlhbG9nLnByb3RvdHlwZS5tb3ZlVG9QcmV2aW91c1llYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLmZvY3VzRGF5LnNldEZ1bGxZZWFyKHRoaXMuZm9jdXNEYXkuZ2V0RnVsbFllYXIoKSAtIDEpO1xyXG4gICAgdGhpcy51cGRhdGVHcmlkKCk7XHJcbn07XHJcbkRhdGVQaWNrZXJEaWFsb2cucHJvdG90eXBlLm1vdmVUb05leHRNb250aCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuZm9jdXNEYXkuc2V0TW9udGgodGhpcy5mb2N1c0RheS5nZXRNb250aCgpICsgMSk7XHJcbiAgICB0aGlzLnVwZGF0ZUdyaWQoKTtcclxufTtcclxuRGF0ZVBpY2tlckRpYWxvZy5wcm90b3R5cGUubW92ZVRvUHJldmlvdXNNb250aCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuZm9jdXNEYXkuc2V0TW9udGgodGhpcy5mb2N1c0RheS5nZXRNb250aCgpIC0gMSk7XHJcbiAgICB0aGlzLnVwZGF0ZUdyaWQoKTtcclxufTtcclxuRGF0ZVBpY2tlckRpYWxvZy5wcm90b3R5cGUubW92ZUZvY3VzVG9OZXh0RGF5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRoaXMuZm9jdXNEYXkpO1xyXG4gICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgMSk7XHJcbiAgICB0aGlzLm1vdmVGb2N1c1RvRGF5KGRhdGUpO1xyXG59O1xyXG5EYXRlUGlja2VyRGlhbG9nLnByb3RvdHlwZS5tb3ZlRm9jdXNUb05leHRXZWVrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRoaXMuZm9jdXNEYXkpO1xyXG4gICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgNyk7XHJcbiAgICB0aGlzLm1vdmVGb2N1c1RvRGF5KGRhdGUpO1xyXG59O1xyXG5EYXRlUGlja2VyRGlhbG9nLnByb3RvdHlwZS5tb3ZlRm9jdXNUb1ByZXZpb3VzRGF5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRoaXMuZm9jdXNEYXkpO1xyXG4gICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gMSk7XHJcbiAgICB0aGlzLm1vdmVGb2N1c1RvRGF5KGRhdGUpO1xyXG59O1xyXG5EYXRlUGlja2VyRGlhbG9nLnByb3RvdHlwZS5tb3ZlRm9jdXNUb1ByZXZpb3VzV2VlayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLmZvY3VzRGF5KTtcclxuICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIDcpO1xyXG4gICAgdGhpcy5tb3ZlRm9jdXNUb0RheShkYXRlKTtcclxufTtcclxuRGF0ZVBpY2tlckRpYWxvZy5wcm90b3R5cGUubW92ZUZvY3VzVG9GaXJzdERheU9mV2VlayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLmZvY3VzRGF5KTtcclxuICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRhdGUuZ2V0RGF5KCkpO1xyXG4gICAgdGhpcy5tb3ZlRm9jdXNUb0RheShkYXRlKTtcclxufTtcclxuRGF0ZVBpY2tlckRpYWxvZy5wcm90b3R5cGUubW92ZUZvY3VzVG9MYXN0RGF5T2ZXZWVrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRoaXMuZm9jdXNEYXkpO1xyXG4gICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgKDYgLSBkYXRlLmdldERheSgpKSk7XHJcbiAgICB0aGlzLm1vdmVGb2N1c1RvRGF5KGRhdGUpO1xyXG59O1xyXG4vLyBEYXkgbWV0aG9kc1xyXG5EYXRlUGlja2VyRGlhbG9nLnByb3RvdHlwZS5pc0RheURpc2FibGVkID0gZnVuY3Rpb24gKGRvbU5vZGUpIHtcclxuICAgIHJldHVybiBkb21Ob2RlLmNsYXNzTGlzdC5jb250YWlucyhcImRpc2FibGVkXCIpO1xyXG59O1xyXG5EYXRlUGlja2VyRGlhbG9nLnByb3RvdHlwZS5nZXREYXlGcm9tRGF0YURhdGVBdHRyaWJ1dGUgPSBmdW5jdGlvbiAoZG9tTm9kZSkge1xyXG4gICAgaWYgKGRvbU5vZGUgIT09IG51bGwpIHtcclxuICAgICAgICBjb25zdCBkYXRhRGF0ZSA9IGRvbU5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1kYXRlXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHsgZGF0YURhdGUgfSk7XHJcbiAgICAgICAgaWYgKGRhdGFEYXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gZGF0YURhdGUuc3BsaXQoXCItXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7IHBhcnRzIH0pO1xyXG4gICAgICAgICAgICAvLyBEaWZmZXJlbnQgc3RydWN0dXJlIHRvIHByZXZpb3VzIGRhdGUgZGF0YVxyXG4gICAgICAgICAgICBjb25zdCBtb250aCA9IE51bWJlcihwYXJzZUludChwYXJ0c1sxXSkpIC0gMTtcclxuICAgICAgICAgICAgY29uc3QgZGF5ID0gTnVtYmVyKHBhcnNlSW50KHBhcnRzWzJdKSk7XHJcbiAgICAgICAgICAgIGxldCB5ZWFyID0gTnVtYmVyKHBhcnNlSW50KHBhcnRzWzBdKSk7XHJcbiAgICAgICAgICAgIC8vIGlmIChwYXJ0c1swXSAmJiBwYXJ0c1sxXSlcclxuICAgICAgICAgICAgLy8gXHRyZXR1cm4gbmV3IERhdGUoXHJcbiAgICAgICAgICAgIC8vIFx0XHROdW1iZXIocGFydHNbMF0pLCAvLyB5ZWFyXHJcbiAgICAgICAgICAgIC8vIFx0XHRwYXJzZUludChwYXJ0c1sxXSkgLSAxLCAvLyBtb250aFxyXG4gICAgICAgICAgICAvLyBcdFx0TnVtYmVyKHBhcnRzWzJdKSAvLyBkYXlcclxuICAgICAgICAgICAgLy8gXHQpO1xyXG4gICAgICAgICAgICBpZiAoeWVhciAmJiBtb250aClcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCAvLyB5ZWFyXHJcbiAgICAgICAgICAgICAgICBtb250aCwgLy8gbW9udGhcclxuICAgICAgICAgICAgICAgIGRheSAvLyBkYXlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG4vLyBUZXh0Ym94IG1ldGhvZHNcclxuRGF0ZVBpY2tlckRpYWxvZy5wcm90b3R5cGUuc2V0VGV4dGJveERhdGUgPSBmdW5jdGlvbiAoZG9tTm9kZSkge1xyXG4gICAgbGV0IGRhdGUgPSB0aGlzLmZvY3VzRGF5O1xyXG4gICAgaWYgKGRvbU5vZGUpIHtcclxuICAgICAgICBkYXRlID0gdGhpcy5nZXREYXlGcm9tRGF0YURhdGVBdHRyaWJ1dGUoZG9tTm9kZSk7XHJcbiAgICAgICAgLy8gdXBkYXRlZCBhcmlhLXNlbGVjdGVkXHJcbiAgICAgICAgdGhpcy5kYXlzLmZvckVhY2goKGRheSkgPT4gZGF5ID09PSBkb21Ob2RlXHJcbiAgICAgICAgICAgID8gZGF5LnNldEF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIiwgXCJ0cnVlXCIpXHJcbiAgICAgICAgICAgIDogZGF5LnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIikpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XHJcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgdGhpcy50ZXh0Ym94Tm9kZS52YWx1ZSA9IGRheSArIFwiL1wiICsgbW9udGggKyBcIi9cIiArIHllYXI7XHJcbiAgICB0aGlzLnNldERhdGVGb3JCdXR0b25MYWJlbCgpO1xyXG59O1xyXG5EYXRlUGlja2VyRGlhbG9nLnByb3RvdHlwZS5nZXREYXRlRnJvbVRleHRib3ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBwYXJ0cyA9IHRoaXMudGV4dGJveE5vZGUudmFsdWUuc3BsaXQoXCIvXCIpO1xyXG4gICAgLy8gT0dcclxuICAgIC8vIGNvbnN0IG1vbnRoID0gcGFyc2VJbnQocGFydHNbMF0pO1xyXG4gICAgLy8gY29uc3QgZGF5ID0gcGFyc2VJbnQocGFydHNbMV0pO1xyXG4gICAgLy8gbGV0IHllYXIgPSBwYXJzZUludChwYXJ0c1syXSk7XHJcbiAgICBjb25zdCBtb250aCA9IHBhcnNlSW50KHBhcnRzWzFdKTtcclxuICAgIGNvbnN0IGRheSA9IHBhcnNlSW50KHBhcnRzWzBdKTtcclxuICAgIGxldCB5ZWFyID0gcGFyc2VJbnQocGFydHNbMl0pO1xyXG4gICAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMyAmJlxyXG4gICAgICAgIE51bWJlci5pc0ludGVnZXIobW9udGgpICYmXHJcbiAgICAgICAgTnVtYmVyLmlzSW50ZWdlcihkYXkpICYmXHJcbiAgICAgICAgTnVtYmVyLmlzSW50ZWdlcih5ZWFyKSkge1xyXG4gICAgICAgIGlmICh5ZWFyIDwgMTAwKSB7XHJcbiAgICAgICAgICAgIHllYXIgPSAyMDAwICsgeWVhcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5mb2N1c0RheSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5KTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkRGF5ID0gbmV3IERhdGUodGhpcy5mb2N1c0RheSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAvLyBJZiBub3QgYSB2YWxpZCBkYXRlIChERC9NTS9ZWSkgaW5pdGlhbGl6ZSB3aXRoIHRvZGF5cyBkYXRlXHJcbiAgICAgICAgdGhpcy5mb2N1c0RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZERheSA9IG5ldyBEYXRlKDAsIDAsIDEpO1xyXG4gICAgfVxyXG59O1xyXG5EYXRlUGlja2VyRGlhbG9nLnByb3RvdHlwZS5zZXREYXRlRm9yQnV0dG9uTGFiZWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcGFydHMgPSB0aGlzLnRleHRib3hOb2RlLnZhbHVlLnNwbGl0KFwiL1wiKTtcclxuICAgIGNvbnN0IG1vbnRoID0gcGFyc2VJbnQocGFydHNbMV0pO1xyXG4gICAgY29uc3QgZGF5ID0gcGFyc2VJbnQocGFydHNbMF0pO1xyXG4gICAgbGV0IHllYXIgPSBwYXJzZUludChwYXJ0c1syXSk7XHJcbiAgICBpZiAocGFydHMubGVuZ3RoID09PSAzICYmXHJcbiAgICAgICAgTnVtYmVyLmlzSW50ZWdlcihtb250aCkgJiZcclxuICAgICAgICBOdW1iZXIuaXNJbnRlZ2VyKGRheSkgJiZcclxuICAgICAgICBOdW1iZXIuaXNJbnRlZ2VyKHllYXIpKSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5KTtcclxuICAgICAgICB2YXIgbGFiZWwgPSB0aGlzLmJ1dHRvbkxhYmVsQ2hhbmdlO1xyXG4gICAgICAgIGxhYmVsICs9IFwiLCBcIiArIHRoaXMuZGF5TGFiZWxzW2RhdGUuZ2V0RGF5KCldO1xyXG4gICAgICAgIGxhYmVsICs9IFwiIFwiICsgdGhpcy5tb250aExhYmVsc1tkYXRlLmdldE1vbnRoKCldO1xyXG4gICAgICAgIGxhYmVsICs9IFwiIFwiICsgZGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgICAgbGFiZWwgKz0gXCIsIFwiICsgZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uTm9kZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIGxhYmVsKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIElmIG5vdCBhIHZhbGlkIGRhdGUsIGluaXRpYWxpemUgd2l0aCBcIkNob29zZSBEYXRlXCJcclxuICAgICAgICB0aGlzLmJ1dHRvbk5vZGUuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCB0aGlzLmJ1dHRvbkxhYmVsQ2hvb3NlKTtcclxuICAgIH1cclxufTtcclxuRGF0ZVBpY2tlckRpYWxvZy5wcm90b3R5cGUuc2V0TWVzc2FnZSA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgIGZ1bmN0aW9uIHNldE1lc3NhZ2VEZWxheWVkKCkge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZU5vZGUudGV4dENvbnRlbnQgPSBzdHI7XHJcbiAgICB9XHJcbiAgICBpZiAoc3RyICE9PSB0aGlzLmxhc3RNZXNzYWdlKSB7XHJcbiAgICAgICAgc2V0VGltZW91dChzZXRNZXNzYWdlRGVsYXllZC5iaW5kKHRoaXMpLCAyMDApO1xyXG4gICAgICAgIHRoaXMubGFzdE1lc3NhZ2UgPSBzdHI7XHJcbiAgICB9XHJcbn07XHJcbi8vIEV2ZW50IGhhbmRsZXJzXHJcbkRhdGVQaWNrZXJEaWFsb2cucHJvdG90eXBlLmhhbmRsZU9rQnV0dG9uID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICB2YXIgZmxhZyA9IGZhbHNlO1xyXG4gICAgc3dpdGNoIChldmVudC50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcImtleWRvd25cIjpcclxuICAgICAgICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJUYWJcIjpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWV2ZW50LnNoaWZ0S2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJldlllYXJOb2RlLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJFc2NcIjpcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJFc2NhcGVcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJjbGlja1wiOlxyXG4gICAgICAgICAgICB0aGlzLnNldFRleHRib3hEYXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgaWYgKGZsYWcpIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG59O1xyXG5EYXRlUGlja2VyRGlhbG9nLnByb3RvdHlwZS5oYW5kbGVDYW5jZWxCdXR0b24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIHZhciBmbGFnID0gZmFsc2U7XHJcbiAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcclxuICAgICAgICBjYXNlIFwia2V5ZG93blwiOlxyXG4gICAgICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkVzY1wiOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkVzY2FwZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImNsaWNrXCI6XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgaWYgKGZsYWcpIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG59O1xyXG5EYXRlUGlja2VyRGlhbG9nLnByb3RvdHlwZS5oYW5kbGVOZXh0WWVhckJ1dHRvbiA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgdmFyIGZsYWcgPSBmYWxzZTtcclxuICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJrZXlkb3duXCI6XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiRXNjXCI6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiRXNjYXBlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkVudGVyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9OZXh0WWVhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Rm9jdXNEYXkoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJjbGlja1wiOlxyXG4gICAgICAgICAgICB0aGlzLm1vdmVUb05leHRZZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Rm9jdXNEYXkoZmFsc2UpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGlmIChmbGFnKSB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxufTtcclxuRGF0ZVBpY2tlckRpYWxvZy5wcm90b3R5cGUuaGFuZGxlUHJldmlvdXNZZWFyQnV0dG9uID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICB2YXIgZmxhZyA9IGZhbHNlO1xyXG4gICAgc3dpdGNoIChldmVudC50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcImtleWRvd25cIjpcclxuICAgICAgICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJFbnRlclwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvUHJldmlvdXNZZWFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRGb2N1c0RheShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiVGFiXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2tCdXR0b25Ob2RlLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJFc2NcIjpcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJFc2NhcGVcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJjbGlja1wiOlxyXG4gICAgICAgICAgICB0aGlzLm1vdmVUb1ByZXZpb3VzWWVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEZvY3VzRGF5KGZhbHNlKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBpZiAoZmxhZykge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbn07XHJcbkRhdGVQaWNrZXJEaWFsb2cucHJvdG90eXBlLmhhbmRsZU5leHRNb250aEJ1dHRvbiA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgdmFyIGZsYWcgPSBmYWxzZTtcclxuICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJrZXlkb3duXCI6XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiRXNjXCI6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiRXNjYXBlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkVudGVyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9OZXh0TW9udGgoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEZvY3VzRGF5KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiY2xpY2tcIjpcclxuICAgICAgICAgICAgdGhpcy5tb3ZlVG9OZXh0TW9udGgoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRGb2N1c0RheShmYWxzZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgaWYgKGZsYWcpIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG59O1xyXG5EYXRlUGlja2VyRGlhbG9nLnByb3RvdHlwZS5oYW5kbGVQcmV2aW91c01vbnRoQnV0dG9uID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICB2YXIgZmxhZyA9IGZhbHNlO1xyXG4gICAgc3dpdGNoIChldmVudC50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcImtleWRvd25cIjpcclxuICAgICAgICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJFc2NcIjpcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJFc2NhcGVcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiRW50ZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVUb1ByZXZpb3VzTW9udGgoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEZvY3VzRGF5KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiY2xpY2tcIjpcclxuICAgICAgICAgICAgdGhpcy5tb3ZlVG9QcmV2aW91c01vbnRoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Rm9jdXNEYXkoZmFsc2UpO1xyXG4gICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBpZiAoZmxhZykge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbn07XHJcbkRhdGVQaWNrZXJEaWFsb2cucHJvdG90eXBlLmhhbmRsZURheUtleURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIHZhciBmbGFnID0gZmFsc2U7XHJcbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xyXG4gICAgICAgIGNhc2UgXCJFc2NcIjpcclxuICAgICAgICBjYXNlIFwiRXNjYXBlXCI6XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIiBcIjpcclxuICAgICAgICAgICAgdGhpcy5zZXRUZXh0Ym94RGF0ZShldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJFbnRlclwiOlxyXG4gICAgICAgICAgICB0aGlzLnNldFRleHRib3hEYXRlKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiVGFiXCI6XHJcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsQnV0dG9uTm9kZS5mb2N1cygpO1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFllYXJOb2RlLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZXRNZXNzYWdlKFwiXCIpO1xyXG4gICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIlJpZ2h0XCI6XHJcbiAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcclxuICAgICAgICAgICAgdGhpcy5tb3ZlRm9jdXNUb05leHREYXkoKTtcclxuICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJMZWZ0XCI6XHJcbiAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxyXG4gICAgICAgICAgICB0aGlzLm1vdmVGb2N1c1RvUHJldmlvdXNEYXkoKTtcclxuICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJEb3duXCI6XHJcbiAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxyXG4gICAgICAgICAgICB0aGlzLm1vdmVGb2N1c1RvTmV4dFdlZWsoKTtcclxuICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJVcFwiOlxyXG4gICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUZvY3VzVG9QcmV2aW91c1dlZWsoKTtcclxuICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJQYWdlVXBcIjpcclxuICAgICAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVUb1ByZXZpb3VzWWVhcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9QcmV2aW91c01vbnRoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZXRGb2N1c0RheSgpO1xyXG4gICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIlBhZ2VEb3duXCI6XHJcbiAgICAgICAgICAgIGlmIChldmVudC5zaGlmdEtleSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9OZXh0WWVhcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9OZXh0TW9udGgoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNldEZvY3VzRGF5KCk7XHJcbiAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiSG9tZVwiOlxyXG4gICAgICAgICAgICB0aGlzLm1vdmVGb2N1c1RvRmlyc3REYXlPZldlZWsoKTtcclxuICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJFbmRcIjpcclxuICAgICAgICAgICAgdGhpcy5tb3ZlRm9jdXNUb0xhc3REYXlPZldlZWsoKTtcclxuICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgaWYgKGZsYWcpIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG59O1xyXG5EYXRlUGlja2VyRGlhbG9nLnByb3RvdHlwZS5oYW5kbGVEYXlDbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgaWYgKCF0aGlzLmlzRGF5RGlzYWJsZWQoZXZlbnQuY3VycmVudFRhcmdldCkgJiZcclxuICAgICAgICBldmVudC53aGljaCAhPT0gMykge1xyXG4gICAgICAgIHRoaXMuc2V0VGV4dGJveERhdGUoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG59O1xyXG5EYXRlUGlja2VyRGlhbG9nLnByb3RvdHlwZS5oYW5kbGVEYXlGb2N1cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuc2V0TWVzc2FnZSh0aGlzLm1lc3NhZ2VDdXJzb3JLZXlzKTtcclxufTtcclxuRGF0ZVBpY2tlckRpYWxvZy5wcm90b3R5cGUuaGFuZGxlQnV0dG9uS2V5ZG93biA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiIHx8IGV2ZW50LmtleSA9PT0gXCIgXCIpIHtcclxuICAgICAgICB0aGlzLm9wZW4oKTtcclxuICAgICAgICB0aGlzLnNldEZvY3VzRGF5KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxufTtcclxuRGF0ZVBpY2tlckRpYWxvZy5wcm90b3R5cGUuaGFuZGxlQnV0dG9uQ2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGlmICh0aGlzLmlzT3BlbigpKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgICAgdGhpcy5zZXRGb2N1c0RheSgpO1xyXG4gICAgfVxyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG59O1xyXG5EYXRlUGlja2VyRGlhbG9nLnByb3RvdHlwZS5oYW5kbGVCYWNrZ3JvdW5kTW91c2VVcCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgaWYgKCF0aGlzLmJ1dHRvbk5vZGUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJlxyXG4gICAgICAgICF0aGlzLmRpYWxvZ05vZGUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzT3BlbigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoZmFsc2UpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbi8vIEluaXRpYWxpemUgbWVudSBidXR0b24gZGF0ZSBwaWNrZXJcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGRhdGVQaWNrZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjYTExeV9kYXRlX3BpY2tlclwiKTtcclxuICAgIGlmIChkYXRlUGlja2VyRWwpIHtcclxuICAgICAgICBuZXcgRGF0ZVBpY2tlckRpYWxvZyhkYXRlUGlja2VyRWwpO1xyXG4gICAgfVxyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9