export {};
declare global {
	interface Window {
		updateCompanyName: (event: FocusEvent) => void;
		toggleCheckboxInputVisibility: (event: Event, label_id: string) => void;
	}
}

const updateCompanyName = (event: FocusEvent) => {
	const nameSpans = document.querySelectorAll(".company_name");
	// const companyName = event.
	const input = event.target as HTMLInputElement;
	console.log(input?.value);
	if (input?.value) {
		nameSpans.forEach((span) => (span.textContent = input.value));
	}
};

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

window.updateCompanyName = updateCompanyName;
window.toggleCheckboxInputVisibility = toggleCheckboxInputVisibility;
