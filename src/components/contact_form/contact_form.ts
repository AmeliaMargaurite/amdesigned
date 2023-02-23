const packageTypes = {
	low: ["design", "build"],
	mid: ["design", "build", "seo-accessibility", "analytics"],
	high: [
		"design",
		"build",
		"hosting",
		"domain-purchase",
		"seo-accessibility",
		"analytics",
		"maintenance",
	],
};

const queryString = window.location.search;
const params = new URLSearchParams(queryString);

// If user has come from privacy or tcs pages
// They likely don't want a website
const page = params.get("page");
if (page) {
	const subjectEl: HTMLInputElement | null =
		document.querySelector("input#subject");
	if (subjectEl) {
		subjectEl.value = page;
		const otherInput = document.querySelector(
			"input#other"
		) as HTMLInputElement;
		if (otherInput) {
			otherInput.checked = true;
		}
	}
}

// Check if user selected a website package
const websitePackage = params.get("package");

if (websitePackage) {
	const subjectEl: HTMLInputElement | null =
		document.querySelector("input#subject");
	if (subjectEl) {
		subjectEl.value = websitePackage;
	}

	// Check if type param has come through too
	const packageType: string | null = params.get("type");
	const hiddenTypeInput: HTMLInputElement | null =
		document.querySelector("input#package-type");
	if (
		packageType === "low" ||
		packageType === "mid" ||
		packageType === "high"
	) {
		if (hiddenTypeInput) {
			hiddenTypeInput.value = packageType;

			// check checkboxes associated with type
			const services = packageTypes[packageType];
			services.forEach((service) => {
				console.log(service);
				const checkbox: HTMLInputElement | null = document.querySelector(
					`input[type=checkbox]#${service}`
				);
				console.log(checkbox);
				if (checkbox) {
					checkbox.checked = true;
				}
			});
		}
	}
}

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

// validate checkboxes manually
// require at least one to be checked
// all checkboxes are originally set to required

export {};
declare global {
	interface Window {
		validateCheckboxes: () => boolean;
	}
}

const validateCheckboxes = () => {
	const checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll(
		"input[name^=services]"
	);
	const checkboxesArray = Array.from(checkboxes);

	const notCheckedBoxes = checkboxesArray.filter((box) => !box.checked);

	if (notCheckedBoxes.length === checkboxesArray.length) {
		notCheckedBoxes.forEach((box) => (box.required = true));
		return false;
	} else {
		notCheckedBoxes.forEach((box) => (box.required = false));
		return true;
	}
};

window.validateCheckboxes = validateCheckboxes;
