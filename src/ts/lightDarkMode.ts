export {};

declare global {
	interface Window {
		toggleMode: () => void;
		isTestLDMode: () => void;
	}
}

/**
 * Light/Dark Mode
 */

const root = document.querySelector(":root") as HTMLElement;

// TOGGLE
const toggleMode = (forceMode = "dark") => {
	if (isLightMode()) {
		setMode("dark");
	} else {
		setMode("light");
	}
};

const setMode = (mode: "light" | "dark") => {
	const toggleText = document.getElementById("light-dark-toggle__label");
	const labelText = document.getElementById("light-dark-mode-btn__label");
	root.setAttribute("color-mode", mode);
	toggleText
		? (toggleText.innerHTML = mode === "light" ? "dark" : "light")
		: null;
	labelText
		? (labelText.innerHTML =
				mode === "light" ? "Switch to dark mode" : "Switch to light mode")
		: null;

	toggleText?.parentElement?.classList.add(mode);
	toggleText?.parentElement?.classList.remove(
		mode === "light" ? "dark" : "light"
	);
	root.className = mode + "Mode";
	localStorage.setItem("color-mode", mode);
};

window.toggleMode = toggleMode;

// CHECK MODE

const isLightMode = () => {
	const colorMode = root.getAttribute("color-mode");
	return colorMode === "light";
};
window.addEventListener("DOMContentLoaded", () => {
	if (isTestLDMode()) return;
	// WATCH
	window
		.matchMedia("(prefers-color-scheme: dark)")
		.addEventListener("change", () => toggleMode());

	// CHECK SAVED STATE
	const storedDataMode = localStorage.getItem("color-mode") as "light" | "dark";
	if (storedDataMode) {
		setMode(storedDataMode);
	} else if (
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: dark)").matches
	) {
		setMode("dark");
	}
});

// To use Google PageSpeed to test dark mode on url param (test)
const isTestLDMode = () => {
	const queryString = window.location.search;
	const params = new URLSearchParams(queryString);
	const isDarkModeTest = params.get("dark-mode");
	if (isDarkModeTest) {
		setMode("dark");
		return true;
	}
};

window.isTestLDMode = isTestLDMode;
