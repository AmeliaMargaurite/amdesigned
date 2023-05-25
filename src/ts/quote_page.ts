export {};
declare global {
	interface Window {
		updateCompanyName: (event: FocusEvent) => void;
		toggleCheckboxInputVisibility: (event: Event, label_id: string) => void;
		// validateCheckboxes: () => boolean;
	}
}

/**
 * Replaces span.company_name 's with input of company_name in form
 * @param event
 */

const updateCompanyName = (event: FocusEvent) => {
	const nameSpans = document.querySelectorAll(".company_name");
	// const companyName = event.
	const input = event.target as HTMLInputElement;
	console.log(input?.value);
	if (input?.value) {
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

const toggleCheckboxInputVisibility = (event: Event, label_id: string) => {
	const label = document.getElementById(label_id);
	const checkbox = event.target as HTMLInputElement;
	const politeAriaLive = document.querySelector('[aria-live="polite"]');
	console.log(label_id);
	if (label) {
		if (checkbox?.checked) {
			label.style.display = "inherit";
			label.setAttribute("aria-hidden", "false");
			const input = document.querySelector(
				`label#${label_id} > input`
			) as HTMLInputElement;

			if (politeAriaLive) {
				const p = document.createElement("p");
				p.innerHTML = "Please explain a little further";
				politeAriaLive.append(p);
			} else {
				console.error("Aria Live missing");
			}
			if (input) {
				input.setAttribute("type", "text");
				input.focus();
			}
		} else {
			label.style.display = "none";
			label.setAttribute("aria-hidden", "true");
			const input = document.querySelector(`label#${label_id} > input`);
			if (input) {
				input.setAttribute("type", "hidden");
			}
		}
	} else {
		console.error("Label with id: " + label_id + " not found");
	}
};

window.toggleCheckboxInputVisibility = toggleCheckboxInputVisibility;

/**
 *
 * @returns
 */

type SortedCheckboxes = { [key: string]: [HTMLInputElement] };

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

// Manually add input patterns
const patterns = {
	string: ".[-_'A-Za-zÀ-ÖØ-öø-ÿ\\s]+",
	email: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
};

const stringInputs = document.querySelectorAll("input[pattern=string]");
stringInputs.forEach((input) => input.setAttribute("pattern", patterns.string));

const emailInputs = document.querySelectorAll("input[pattern=email]");
emailInputs.forEach((input) => input.setAttribute("pattern", patterns.email));
