"use strict";
(self["webpackChunkamdesigned"] = self["webpackChunkamdesigned"] || []).push([["quote_page"],{

/***/ "./src/ts/quote_page.ts":
/*!******************************!*\
  !*** ./src/ts/quote_page.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Replaces span.company_name 's with input of company_name in form
 * @param event
 */
const updateCompanyName = (event) => {
    const nameSpans = document.querySelectorAll(".company_name");
    // const companyName = event.
    const input = event.target;
    if (input === null || input === void 0 ? void 0 : input.value) {
        nameSpans.forEach((span) => (span.textContent = input.value));
    }
};
window.updateCompanyName = updateCompanyName;
/**
 * On the form there are 'Other' checkboxes
 * This function triggers an input and label to become visible
 * to explain this 'Other' option
 * @param event
 * @param label_id
 */
const toggleCheckboxInputVisibility = (event, label_id) => {
    const label = document.getElementById(label_id);
    const checkbox = event.target;
    const politeAriaLive = document.querySelector('[aria-live="polite"]');
    if (label) {
        if (checkbox === null || checkbox === void 0 ? void 0 : checkbox.checked) {
            label.style.display = "inherit";
            label.setAttribute("aria-hidden", "false");
            const input = document.querySelector(`label#${label_id} > input`);
            if (politeAriaLive) {
                const p = document.createElement("p");
                p.innerHTML = "Please explain a little further";
                politeAriaLive.append(p);
            }
            else {
                console.error("Aria Live missing");
            }
            if (input) {
                input.setAttribute("type", "text");
                input.focus();
            }
        }
        else {
            label.style.display = "none";
            label.setAttribute("aria-hidden", "true");
            const input = document.querySelector(`label#${label_id} > input`);
            if (input) {
                input.setAttribute("type", "hidden");
            }
        }
    }
    else {
        console.error("Label with id: " + label_id + " not found");
    }
};
window.toggleCheckboxInputVisibility = toggleCheckboxInputVisibility;
// const validateCheckboxes = () => {
// 	const allCheckboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll(
// 		"input[type='checkbox']"
// 	);
// 	const sortedCheckboxes: SortedCheckboxes = {};
// 	allCheckboxes.forEach((checkbox) => {
// 		if (sortedCheckboxes[checkbox.name]) {
// 			sortedCheckboxes[checkbox.name].push(checkbox);
// 		} else {
// 			sortedCheckboxes[checkbox.name] = [checkbox];
// 		}
// 	});
// 	for (const key in sortedCheckboxes) {
// 		const checkboxes = sortedCheckboxes[key];
// 		const notCheckedBoxes = new Array();
// 		const checkedCheckboxes = new Array();
// 		checkboxes.forEach((box) => {
// 			box.checked === true
// 				? checkedCheckboxes.push(box)
// 				: notCheckedBoxes.push(box);
// 		});
// 		// If at least one box is checked, can remove required from others
// 		if (checkedCheckboxes.length > 0) {
// 			checkboxes.forEach((box) => {
// 				box.required = false;
// 				box.setAttribute("aria-required", "false");
// 			});
// 			// Need to add event listener incase the form fails and then the
// 			// currently checked boxes are unchecked.
// 			checkedCheckboxes.forEach((box) => {
// 				// box.addEventListener("change", () => {applyRequired(checkboxes)});
// 				box.addEventListener("change", () => {
// 					checkboxes.forEach((onChangeBox) => {
// 						onChangeBox.required = true;
// 						onChangeBox.setAttribute("aria-required", "true");
// 						onChangeBox.parentNode?.replaceChild(
// 							onChangeBox.cloneNode(true),
// 							onChangeBox
// 						);
// 					});
// 				});
// 			});
// 		} else {
// 			notCheckedBoxes.forEach((box) => {
// 				box.required = true;
// 				box.setAttribute("aria-required", "true");
// 			});
// 			return false;
// 		}
// 	}
// 	// Returning here means no checkbox section was invalid
// 	return true;
// };
// const applyRequired = (checkboxes: [HTMLInputElement]) => {
// 	checkboxes.forEach((box) => {
// 		box.required = true;
// 		box.setAttribute("aria-required", "true");
// 	});
// };
// window.validateCheckboxes = validateCheckboxes;
/**
 * Adding warnings to page
 */
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
for (const [key, value] of params.entries()) {
    const el = document.querySelector(`#${key}`);
    if (el) {
        el.classList.add("warning");
        const p = document.querySelector(`#${key} ~ p.warning`);
        if (p) {
            p.innerHTML = value;
            p.classList.add("active");
        }
    }
}
// Manually add input patterns
const patterns = {
    string: ".[-_'A-Za-zÀ-ÖØ-öø-ÿ\\s]+",
    email: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
};
const stringInputs = document.querySelectorAll("input[pattern=string]");
stringInputs.forEach((input) => input.setAttribute("pattern", patterns.string));
const emailInputs = document.querySelectorAll("input[pattern=email]");
emailInputs.forEach((input) => input.setAttribute("pattern", patterns.email));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/ts/quote_page.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2pzL3F1b3RlX3BhZ2UuYzBlZjI1YTIzMzM0MDhiNjI0YmMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsVUFBVTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxVQUFVO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSLE9BQU87QUFDUCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsSUFBSTtBQUM5QztBQUNBO0FBQ0EsNkNBQTZDLEtBQUs7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELEdBQUc7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FtZGVzaWduZWQvLi9zcmMvdHMvcXVvdGVfcGFnZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogUmVwbGFjZXMgc3Bhbi5jb21wYW55X25hbWUgJ3Mgd2l0aCBpbnB1dCBvZiBjb21wYW55X25hbWUgaW4gZm9ybVxyXG4gKiBAcGFyYW0gZXZlbnRcclxuICovXHJcbmNvbnN0IHVwZGF0ZUNvbXBhbnlOYW1lID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBuYW1lU3BhbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbXBhbnlfbmFtZVwiKTtcclxuICAgIC8vIGNvbnN0IGNvbXBhbnlOYW1lID0gZXZlbnQuXHJcbiAgICBjb25zdCBpbnB1dCA9IGV2ZW50LnRhcmdldDtcclxuICAgIGlmIChpbnB1dCA9PT0gbnVsbCB8fCBpbnB1dCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5wdXQudmFsdWUpIHtcclxuICAgICAgICBuYW1lU3BhbnMuZm9yRWFjaCgoc3BhbikgPT4gKHNwYW4udGV4dENvbnRlbnQgPSBpbnB1dC52YWx1ZSkpO1xyXG4gICAgfVxyXG59O1xyXG53aW5kb3cudXBkYXRlQ29tcGFueU5hbWUgPSB1cGRhdGVDb21wYW55TmFtZTtcclxuLyoqXHJcbiAqIE9uIHRoZSBmb3JtIHRoZXJlIGFyZSAnT3RoZXInIGNoZWNrYm94ZXNcclxuICogVGhpcyBmdW5jdGlvbiB0cmlnZ2VycyBhbiBpbnB1dCBhbmQgbGFiZWwgdG8gYmVjb21lIHZpc2libGVcclxuICogdG8gZXhwbGFpbiB0aGlzICdPdGhlcicgb3B0aW9uXHJcbiAqIEBwYXJhbSBldmVudFxyXG4gKiBAcGFyYW0gbGFiZWxfaWRcclxuICovXHJcbmNvbnN0IHRvZ2dsZUNoZWNrYm94SW5wdXRWaXNpYmlsaXR5ID0gKGV2ZW50LCBsYWJlbF9pZCkgPT4ge1xyXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsYWJlbF9pZCk7XHJcbiAgICBjb25zdCBjaGVja2JveCA9IGV2ZW50LnRhcmdldDtcclxuICAgIGNvbnN0IHBvbGl0ZUFyaWFMaXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2FyaWEtbGl2ZT1cInBvbGl0ZVwiXScpO1xyXG4gICAgaWYgKGxhYmVsKSB7XHJcbiAgICAgICAgaWYgKGNoZWNrYm94ID09PSBudWxsIHx8IGNoZWNrYm94ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjaGVja2JveC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIGxhYmVsLnN0eWxlLmRpc3BsYXkgPSBcImluaGVyaXRcIjtcclxuICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJmYWxzZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsYWJlbCMke2xhYmVsX2lkfSA+IGlucHV0YCk7XHJcbiAgICAgICAgICAgIGlmIChwb2xpdGVBcmlhTGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBcIlBsZWFzZSBleHBsYWluIGEgbGl0dGxlIGZ1cnRoZXJcIjtcclxuICAgICAgICAgICAgICAgIHBvbGl0ZUFyaWFMaXZlLmFwcGVuZChwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBcmlhIExpdmUgbWlzc2luZ1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXQuZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGFiZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGFiZWwjJHtsYWJlbF9pZH0gPiBpbnB1dGApO1xyXG4gICAgICAgICAgICBpZiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiTGFiZWwgd2l0aCBpZDogXCIgKyBsYWJlbF9pZCArIFwiIG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxufTtcclxud2luZG93LnRvZ2dsZUNoZWNrYm94SW5wdXRWaXNpYmlsaXR5ID0gdG9nZ2xlQ2hlY2tib3hJbnB1dFZpc2liaWxpdHk7XHJcbi8vIGNvbnN0IHZhbGlkYXRlQ2hlY2tib3hlcyA9ICgpID0+IHtcclxuLy8gXHRjb25zdCBhbGxDaGVja2JveGVzOiBOb2RlTGlzdE9mPEhUTUxJbnB1dEVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuLy8gXHRcdFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiXHJcbi8vIFx0KTtcclxuLy8gXHRjb25zdCBzb3J0ZWRDaGVja2JveGVzOiBTb3J0ZWRDaGVja2JveGVzID0ge307XHJcbi8vIFx0YWxsQ2hlY2tib3hlcy5mb3JFYWNoKChjaGVja2JveCkgPT4ge1xyXG4vLyBcdFx0aWYgKHNvcnRlZENoZWNrYm94ZXNbY2hlY2tib3gubmFtZV0pIHtcclxuLy8gXHRcdFx0c29ydGVkQ2hlY2tib3hlc1tjaGVja2JveC5uYW1lXS5wdXNoKGNoZWNrYm94KTtcclxuLy8gXHRcdH0gZWxzZSB7XHJcbi8vIFx0XHRcdHNvcnRlZENoZWNrYm94ZXNbY2hlY2tib3gubmFtZV0gPSBbY2hlY2tib3hdO1xyXG4vLyBcdFx0fVxyXG4vLyBcdH0pO1xyXG4vLyBcdGZvciAoY29uc3Qga2V5IGluIHNvcnRlZENoZWNrYm94ZXMpIHtcclxuLy8gXHRcdGNvbnN0IGNoZWNrYm94ZXMgPSBzb3J0ZWRDaGVja2JveGVzW2tleV07XHJcbi8vIFx0XHRjb25zdCBub3RDaGVja2VkQm94ZXMgPSBuZXcgQXJyYXkoKTtcclxuLy8gXHRcdGNvbnN0IGNoZWNrZWRDaGVja2JveGVzID0gbmV3IEFycmF5KCk7XHJcbi8vIFx0XHRjaGVja2JveGVzLmZvckVhY2goKGJveCkgPT4ge1xyXG4vLyBcdFx0XHRib3guY2hlY2tlZCA9PT0gdHJ1ZVxyXG4vLyBcdFx0XHRcdD8gY2hlY2tlZENoZWNrYm94ZXMucHVzaChib3gpXHJcbi8vIFx0XHRcdFx0OiBub3RDaGVja2VkQm94ZXMucHVzaChib3gpO1xyXG4vLyBcdFx0fSk7XHJcbi8vIFx0XHQvLyBJZiBhdCBsZWFzdCBvbmUgYm94IGlzIGNoZWNrZWQsIGNhbiByZW1vdmUgcmVxdWlyZWQgZnJvbSBvdGhlcnNcclxuLy8gXHRcdGlmIChjaGVja2VkQ2hlY2tib3hlcy5sZW5ndGggPiAwKSB7XHJcbi8vIFx0XHRcdGNoZWNrYm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XHJcbi8vIFx0XHRcdFx0Ym94LnJlcXVpcmVkID0gZmFsc2U7XHJcbi8vIFx0XHRcdFx0Ym94LnNldEF0dHJpYnV0ZShcImFyaWEtcmVxdWlyZWRcIiwgXCJmYWxzZVwiKTtcclxuLy8gXHRcdFx0fSk7XHJcbi8vIFx0XHRcdC8vIE5lZWQgdG8gYWRkIGV2ZW50IGxpc3RlbmVyIGluY2FzZSB0aGUgZm9ybSBmYWlscyBhbmQgdGhlbiB0aGVcclxuLy8gXHRcdFx0Ly8gY3VycmVudGx5IGNoZWNrZWQgYm94ZXMgYXJlIHVuY2hlY2tlZC5cclxuLy8gXHRcdFx0Y2hlY2tlZENoZWNrYm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XHJcbi8vIFx0XHRcdFx0Ly8gYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge2FwcGx5UmVxdWlyZWQoY2hlY2tib3hlcyl9KTtcclxuLy8gXHRcdFx0XHRib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbi8vIFx0XHRcdFx0XHRjaGVja2JveGVzLmZvckVhY2goKG9uQ2hhbmdlQm94KSA9PiB7XHJcbi8vIFx0XHRcdFx0XHRcdG9uQ2hhbmdlQm94LnJlcXVpcmVkID0gdHJ1ZTtcclxuLy8gXHRcdFx0XHRcdFx0b25DaGFuZ2VCb3guc2V0QXR0cmlidXRlKFwiYXJpYS1yZXF1aXJlZFwiLCBcInRydWVcIik7XHJcbi8vIFx0XHRcdFx0XHRcdG9uQ2hhbmdlQm94LnBhcmVudE5vZGU/LnJlcGxhY2VDaGlsZChcclxuLy8gXHRcdFx0XHRcdFx0XHRvbkNoYW5nZUJveC5jbG9uZU5vZGUodHJ1ZSksXHJcbi8vIFx0XHRcdFx0XHRcdFx0b25DaGFuZ2VCb3hcclxuLy8gXHRcdFx0XHRcdFx0KTtcclxuLy8gXHRcdFx0XHRcdH0pO1xyXG4vLyBcdFx0XHRcdH0pO1xyXG4vLyBcdFx0XHR9KTtcclxuLy8gXHRcdH0gZWxzZSB7XHJcbi8vIFx0XHRcdG5vdENoZWNrZWRCb3hlcy5mb3JFYWNoKChib3gpID0+IHtcclxuLy8gXHRcdFx0XHRib3gucmVxdWlyZWQgPSB0cnVlO1xyXG4vLyBcdFx0XHRcdGJveC5zZXRBdHRyaWJ1dGUoXCJhcmlhLXJlcXVpcmVkXCIsIFwidHJ1ZVwiKTtcclxuLy8gXHRcdFx0fSk7XHJcbi8vIFx0XHRcdHJldHVybiBmYWxzZTtcclxuLy8gXHRcdH1cclxuLy8gXHR9XHJcbi8vIFx0Ly8gUmV0dXJuaW5nIGhlcmUgbWVhbnMgbm8gY2hlY2tib3ggc2VjdGlvbiB3YXMgaW52YWxpZFxyXG4vLyBcdHJldHVybiB0cnVlO1xyXG4vLyB9O1xyXG4vLyBjb25zdCBhcHBseVJlcXVpcmVkID0gKGNoZWNrYm94ZXM6IFtIVE1MSW5wdXRFbGVtZW50XSkgPT4ge1xyXG4vLyBcdGNoZWNrYm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XHJcbi8vIFx0XHRib3gucmVxdWlyZWQgPSB0cnVlO1xyXG4vLyBcdFx0Ym94LnNldEF0dHJpYnV0ZShcImFyaWEtcmVxdWlyZWRcIiwgXCJ0cnVlXCIpO1xyXG4vLyBcdH0pO1xyXG4vLyB9O1xyXG4vLyB3aW5kb3cudmFsaWRhdGVDaGVja2JveGVzID0gdmFsaWRhdGVDaGVja2JveGVzO1xyXG4vKipcclxuICogQWRkaW5nIHdhcm5pbmdzIHRvIHBhZ2VcclxuICovXHJcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyk7XHJcbmZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIHBhcmFtcy5lbnRyaWVzKCkpIHtcclxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7a2V5fWApO1xyXG4gICAgaWYgKGVsKSB7XHJcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcIndhcm5pbmdcIik7XHJcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2tleX0gfiBwLndhcm5pbmdgKTtcclxuICAgICAgICBpZiAocCkge1xyXG4gICAgICAgICAgICBwLmlubmVySFRNTCA9IHZhbHVlO1xyXG4gICAgICAgICAgICBwLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIE1hbnVhbGx5IGFkZCBpbnB1dCBwYXR0ZXJuc1xyXG5jb25zdCBwYXR0ZXJucyA9IHtcclxuICAgIHN0cmluZzogXCIuWy1fJ0EtWmEtesOALcOWw5gtw7bDuC3Dv1xcXFxzXStcIixcclxuICAgIGVtYWlsOiBcIlthLXpBLVowLTkuXyUrLV0rQFthLXpBLVowLTkuLV0rXFxcXC5bYS16QS1aXXsyLH0kXCIsXHJcbn07XHJcbmNvbnN0IHN0cmluZ0lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFtwYXR0ZXJuPXN0cmluZ11cIik7XHJcbnN0cmluZ0lucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4gaW5wdXQuc2V0QXR0cmlidXRlKFwicGF0dGVyblwiLCBwYXR0ZXJucy5zdHJpbmcpKTtcclxuY29uc3QgZW1haWxJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbcGF0dGVybj1lbWFpbF1cIik7XHJcbmVtYWlsSW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJwYXR0ZXJuXCIsIHBhdHRlcm5zLmVtYWlsKSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==