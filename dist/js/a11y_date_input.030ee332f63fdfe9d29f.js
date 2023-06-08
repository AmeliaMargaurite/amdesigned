"use strict";(self.webpackChunkamdesigned=self.webpackChunkamdesigned||[]).push([[534],{25607:()=>{const t=function(t){this.buttonLabelChoose="Choose Date",this.buttonLabelChange="Change Date",this.dayLabels=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],this.monthLabels=["January","February","March","April","May","June","July","August","September","October","November","December"],this.messageCursorKeys="Cursor keys can navigate dates",this.lastMessage="",this.textboxNode=t.querySelector('input[type="text"]'),this.buttonNode=t.querySelector("button#calendar-btn"),this.dialogNode=t.querySelector('[role="dialog"]'),this.messageNode=this.dialogNode.querySelector(".dialog-message"),this.monthYearNode=this.dialogNode.querySelector(".month-year"),this.prevYearNode=this.dialogNode.querySelector(".prev-year"),this.prevMonthNode=this.dialogNode.querySelector(".prev-month"),this.nextMonthNode=this.dialogNode.querySelector(".next-month"),this.nextYearNode=this.dialogNode.querySelector(".next-year"),this.okButtonNode=this.dialogNode.querySelector('button[value="ok"]'),this.cancelButtonNode=this.dialogNode.querySelector('button[value="cancel"]'),this.tbodyNode=this.dialogNode.querySelector("table.dates tbody"),this.lastRowNode=null,this.days=[],this.focusDay=new Date,this.selectedDay=new Date(0,0,1),this.isMouseDownOnBackground=!1,this.init()};t.prototype.init=function(){this.textboxNode.addEventListener("blur",this.setDateForButtonLabel.bind(this)),this.buttonNode.addEventListener("keydown",this.handleButtonKeydown.bind(this)),this.buttonNode.addEventListener("click",this.handleButtonClick.bind(this)),this.okButtonNode.addEventListener("click",this.handleOkButton.bind(this)),this.okButtonNode.addEventListener("keydown",this.handleOkButton.bind(this)),this.cancelButtonNode.addEventListener("click",this.handleCancelButton.bind(this)),this.cancelButtonNode.addEventListener("keydown",this.handleCancelButton.bind(this)),this.prevMonthNode.addEventListener("click",this.handlePreviousMonthButton.bind(this)),this.nextMonthNode.addEventListener("click",this.handleNextMonthButton.bind(this)),this.prevYearNode.addEventListener("click",this.handlePreviousYearButton.bind(this)),this.nextYearNode.addEventListener("click",this.handleNextYearButton.bind(this)),this.prevMonthNode.addEventListener("keydown",this.handlePreviousMonthButton.bind(this)),this.nextMonthNode.addEventListener("keydown",this.handleNextMonthButton.bind(this)),this.prevYearNode.addEventListener("keydown",this.handlePreviousYearButton.bind(this)),this.nextYearNode.addEventListener("keydown",this.handleNextYearButton.bind(this)),document.body.addEventListener("mouseup",this.handleBackgroundMouseUp.bind(this),!0),this.tbodyNode.innerHTML="";for(var t=0;t<6;t++){var e=this.tbodyNode.insertRow(t);this.lastRowNode=e;for(var o=0;o<7;o++){var s=document.createElement("td");s.tabIndex=-1,s.addEventListener("click",this.handleDayClick.bind(this)),s.addEventListener("keydown",this.handleDayKeyDown.bind(this)),s.addEventListener("focus",this.handleDayFocus.bind(this)),s.textContent="-1",e.appendChild(s),this.days.push(s)}}this.updateGrid(),this.close(!1),this.setDateForButtonLabel()},t.prototype.isSameDay=function(t,e){return t.getFullYear()==e.getFullYear()&&t.getMonth()==e.getMonth()&&t.getDate()==e.getDate()},t.prototype.isNotSameMonth=function(t,e){return t.getFullYear()!=e.getFullYear()||t.getMonth()!=e.getMonth()},t.prototype.updateGrid=function(){var t,e=this.focusDay;this.monthYearNode.textContent=this.monthLabels[e.getMonth()]+" "+e.getFullYear();var o=new Date(e.getFullYear(),e.getMonth(),1);const s=o.getDay();o.setDate(o.getDate()-s);const a=new Date(o);for(var i=0;i<this.days.length;i++)t=a.getMonth()!=e.getMonth(),this.updateDate(this.days[i],t,a,this.isSameDay(a,this.selectedDay)),a.setDate(a.getDate()+1),35===i&&(t?(this.lastRowNode.style.visibility="hidden",this.lastRowNode.style.display="none"):(this.lastRowNode.style.visibility="visible",this.lastRowNode.style.display="table-row"))},t.prototype.updateDate=function(t,e,o,s){let a=o.getDate().toString();o.getDate()<=9&&(a="0"+a);var i=(o.getMonth()+1).toString();o.getMonth()<9&&(i="0"+i),t.tabIndex=-1,t.removeAttribute("aria-selected"),t.setAttribute("data-date",o.getFullYear()+"-"+i+"-"+a),e?(t.classList.add("disabled"),t.textContent=""):(t.classList.remove("disabled"),t.textContent=o.getDate().toString(),s&&(t.setAttribute("aria-selected","true"),t.tabIndex=0))},t.prototype.moveFocusToDay=function(t){const e=this.focusDay;this.focusDay=t,e.getMonth()==this.focusDay.getMonth()&&e.getFullYear()==this.focusDay.getFullYear()||this.updateGrid(),this.setFocusDay()},t.prototype.setFocusDay=function(t){"boolean"!=typeof t&&(t=!0);for(var e=0;e<this.days.length;e++){const o=this.days[e],s=this.getDayFromDataDateAttribute(o);console.log({day:s}),o.tabIndex=-1,this.isSameDay(s,this.focusDay)&&(o.tabIndex=0,t&&o.focus())}},t.prototype.open=function(){this.dialogNode.classList.add("open"),this.getDateFromTextbox(),this.updateGrid()},t.prototype.isOpen=function(){return"none"!==window.getComputedStyle(this.dialogNode).display},t.prototype.close=function(t){"boolean"!=typeof t&&(t=!0),this.setMessage(""),this.dialogNode.classList.remove("open"),t&&this.buttonNode.focus()},t.prototype.moveToNextYear=function(){this.focusDay.setFullYear(this.focusDay.getFullYear()+1),this.updateGrid()},t.prototype.moveToPreviousYear=function(){this.focusDay.setFullYear(this.focusDay.getFullYear()-1),this.updateGrid()},t.prototype.moveToNextMonth=function(){this.focusDay.setMonth(this.focusDay.getMonth()+1),this.updateGrid()},t.prototype.moveToPreviousMonth=function(){this.focusDay.setMonth(this.focusDay.getMonth()-1),this.updateGrid()},t.prototype.moveFocusToNextDay=function(){const t=new Date(this.focusDay);t.setDate(t.getDate()+1),this.moveFocusToDay(t)},t.prototype.moveFocusToNextWeek=function(){const t=new Date(this.focusDay);t.setDate(t.getDate()+7),this.moveFocusToDay(t)},t.prototype.moveFocusToPreviousDay=function(){const t=new Date(this.focusDay);t.setDate(t.getDate()-1),this.moveFocusToDay(t)},t.prototype.moveFocusToPreviousWeek=function(){const t=new Date(this.focusDay);t.setDate(t.getDate()-7),this.moveFocusToDay(t)},t.prototype.moveFocusToFirstDayOfWeek=function(){const t=new Date(this.focusDay);t.setDate(t.getDate()-t.getDay()),this.moveFocusToDay(t)},t.prototype.moveFocusToLastDayOfWeek=function(){const t=new Date(this.focusDay);t.setDate(t.getDate()+(6-t.getDay())),this.moveFocusToDay(t)},t.prototype.isDayDisabled=function(t){return t.classList.contains("disabled")},t.prototype.getDayFromDataDateAttribute=function(t){if(null!==t){const e=t.getAttribute("data-date");if(console.log({dataDate:e}),e){const t=e.split("-");console.log({parts:t});const o=Number(parseInt(t[1]))-1,s=Number(parseInt(t[2]));let a=Number(parseInt(t[0]));if(a&&o)return new Date(a,o,s)}}},t.prototype.setTextboxDate=function(t){let e=this.focusDay;t&&(e=this.getDayFromDataDateAttribute(t),this.days.forEach((e=>e===t?e.setAttribute("aria-selected","true"):e.removeAttribute("aria-selected"))));const o=e.getDate(),s=e.getMonth()+1,a=e.getFullYear();this.textboxNode.value=o+"/"+s+"/"+a,this.setDateForButtonLabel()},t.prototype.getDateFromTextbox=function(){const t=this.textboxNode.value.split("/"),e=parseInt(t[1]),o=parseInt(t[0]);let s=parseInt(t[2]);3===t.length&&Number.isInteger(e)&&Number.isInteger(o)&&Number.isInteger(s)?(s<100&&(s=2e3+s),this.focusDay=new Date(s,e-1,o),this.selectedDay=new Date(this.focusDay)):(this.focusDay=new Date,this.selectedDay=new Date(0,0,1))},t.prototype.setDateForButtonLabel=function(){var t=this.textboxNode.value.split("/");const e=parseInt(t[1]),o=parseInt(t[0]);let s=parseInt(t[2]);if(3===t.length&&Number.isInteger(e)&&Number.isInteger(o)&&Number.isInteger(s)){const t=new Date(s,e-1,o);var a=this.buttonLabelChange;a+=", "+this.dayLabels[t.getDay()],a+=" "+this.monthLabels[t.getMonth()],a+=" "+t.getDate(),a+=", "+t.getFullYear(),this.buttonNode.setAttribute("aria-label",a)}else this.buttonNode.setAttribute("aria-label",this.buttonLabelChoose)},t.prototype.setMessage=function(t){t!==this.lastMessage&&(setTimeout(function(){this.messageNode.textContent=t}.bind(this),200),this.lastMessage=t)},t.prototype.handleOkButton=function(t){var e=!1;switch(t.type){case"keydown":switch(t.key){case"Tab":t.shiftKey||(this.prevYearNode.focus(),e=!0);break;case"Esc":case"Escape":this.close(),e=!0}break;case"click":this.setTextboxDate(),this.close(),e=!0}e&&(t.stopPropagation(),t.preventDefault())},t.prototype.handleCancelButton=function(t){var e=!1;switch(t.type){case"keydown":switch(t.key){case"Esc":case"Escape":this.close(),e=!0}break;case"click":this.close(),e=!0}e&&(t.stopPropagation(),t.preventDefault())},t.prototype.handleNextYearButton=function(t){var e=!1;switch(t.type){case"keydown":switch(t.key){case"Esc":case"Escape":this.close(),e=!0;break;case"Enter":this.moveToNextYear(),this.setFocusDay(!1),e=!0}break;case"click":this.moveToNextYear(),this.setFocusDay(!1)}e&&(t.stopPropagation(),t.preventDefault())},t.prototype.handlePreviousYearButton=function(t){var e=!1;switch(t.type){case"keydown":switch(t.key){case"Enter":this.moveToPreviousYear(),this.setFocusDay(!1),e=!0;break;case"Tab":t.shiftKey&&(this.okButtonNode.focus(),e=!0);break;case"Esc":case"Escape":this.close(),e=!0}break;case"click":this.moveToPreviousYear(),this.setFocusDay(!1)}e&&(t.stopPropagation(),t.preventDefault())},t.prototype.handleNextMonthButton=function(t){var e=!1;switch(t.type){case"keydown":switch(t.key){case"Esc":case"Escape":this.close(),e=!0;break;case"Enter":this.moveToNextMonth(),this.setFocusDay(!1),e=!0}break;case"click":this.moveToNextMonth(),this.setFocusDay(!1)}e&&(t.stopPropagation(),t.preventDefault())},t.prototype.handlePreviousMonthButton=function(t){var e=!1;switch(t.type){case"keydown":switch(t.key){case"Esc":case"Escape":this.close(),e=!0;break;case"Enter":this.moveToPreviousMonth(),this.setFocusDay(!1),e=!0}break;case"click":this.moveToPreviousMonth(),this.setFocusDay(!1),e=!0}e&&(t.stopPropagation(),t.preventDefault())},t.prototype.handleDayKeyDown=function(t){var e=!1;switch(t.key){case"Esc":case"Escape":this.close();break;case" ":this.setTextboxDate(t.currentTarget),e=!0;break;case"Enter":this.setTextboxDate(t.currentTarget),this.close(),e=!0;break;case"Tab":this.cancelButtonNode.focus(),t.shiftKey&&this.nextYearNode.focus(),this.setMessage(""),e=!0;break;case"Right":case"ArrowRight":this.moveFocusToNextDay(),e=!0;break;case"Left":case"ArrowLeft":this.moveFocusToPreviousDay(),e=!0;break;case"Down":case"ArrowDown":this.moveFocusToNextWeek(),e=!0;break;case"Up":case"ArrowUp":this.moveFocusToPreviousWeek(),e=!0;break;case"PageUp":t.shiftKey?this.moveToPreviousYear():this.moveToPreviousMonth(),this.setFocusDay(),e=!0;break;case"PageDown":t.shiftKey?this.moveToNextYear():this.moveToNextMonth(),this.setFocusDay(),e=!0;break;case"Home":this.moveFocusToFirstDayOfWeek(),e=!0;break;case"End":this.moveFocusToLastDayOfWeek(),e=!0}e&&(t.stopPropagation(),t.preventDefault())},t.prototype.handleDayClick=function(t){this.isDayDisabled(t.currentTarget)||3===t.which||(this.setTextboxDate(t.currentTarget),this.close()),t.stopPropagation(),t.preventDefault()},t.prototype.handleDayFocus=function(){this.setMessage(this.messageCursorKeys)},t.prototype.handleButtonKeydown=function(t){"Enter"!==t.key&&" "!==t.key||(this.open(),this.setFocusDay(),t.stopPropagation(),t.preventDefault())},t.prototype.handleButtonClick=function(t){this.isOpen()?this.close():(this.open(),this.setFocusDay()),t.stopPropagation(),t.preventDefault()},t.prototype.handleBackgroundMouseUp=function(t){this.buttonNode.contains(t.target)||this.dialogNode.contains(t.target)||this.isOpen()&&(this.close(!1),t.stopPropagation(),t.preventDefault())},window.addEventListener("load",(function(){const e=document.querySelector("div#a11y_date_picker");e&&new t(e)}))}},t=>{t(t.s=25607)}]);