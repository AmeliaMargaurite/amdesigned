import { throttleFunction } from "./helpers";

export {};

declare global {
	interface Window {
		toggleMenu: () => void;
	}
}

const closeMenuOnEsc = (event: KeyboardEvent) => {
	if (event.key === "Escape") {
		closeMenu();
	}
};

const closeMenu = () => {
	const hamburger = document.getElementById("hamburger") as HTMLButtonElement;
	const nav = document.getElementById("main-menu");

	hamburger?.classList.remove("open");
	nav?.classList.remove("open");

	document.body.style.overflowY = "auto";
	hamburger.setAttribute("aria-expanded", "false");

	window.removeEventListener("keydown", closeMenuOnEsc);
};

const openMenu = () => {
	const hamburger = document.getElementById("hamburger") as HTMLButtonElement;
	const nav = document.getElementById("main-menu");

	hamburger?.classList.add("open");
	nav?.classList.add("open");

	document.body.style.overflowY = "auto";
	window.removeEventListener("keydown", closeMenuOnEsc);
	hamburger.setAttribute("aria-expanded", "true");
};

const toggleMenu = (openState = true) => {
	const nav = document.getElementById("main-menu");

	const isOpen = nav?.classList.contains("open");

	if (isOpen) {
		closeMenu();
	} else {
		openMenu();
	}
};

const toggleMenuOnWindowSize = (e: WindowEventHandlers) => {
	const hamburger = document.getElementById("hamburger") as HTMLButtonElement;

	if (window.innerWidth <= 768) {
		hamburger.setAttribute("aria-expanded", "false");
	} else {
		closeMenu();
		hamburger.setAttribute("aria-expanded", "true");
	}
};

window.addEventListener(
	"resize",
	throttleFunction(toggleMenuOnWindowSize, 1500),
	{ passive: true }
);

window.toggleMenu = toggleMenu;
