import { throttleFunction } from "./helpers";

export {};

declare global {
	interface Window {
		toggleMenu: () => void;
		showLoading: () => void;
		showLoadingBtn: (e?: any) => void;
		closeMenu: () => void;
		scrollToTop: () => void;
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

	document.body.style.overflowY = "hidden";
	window.addEventListener("keydown", closeMenuOnEsc);
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

const showLoading = () => {
	const loadingWrapper = document.getElementById("loading__wrapper");
	loadingWrapper?.classList.add("active");
};

window.showLoading = showLoading;

const showLoadingBtn = (el: HTMLButtonElement | HTMLAnchorElement) => {
	if (el instanceof HTMLButtonElement && !el.form?.checkValidity()) {
		return;
	}

	el.classList.add("disabled");
	el.classList.add("btn-to-reset");

	const icon = el.querySelector("span.icon");
	if (icon) {
		icon.setAttribute("data-old-classes", icon.className);
		icon.className = "icon spinner spinner-active";
	}
};

const resetBtns = () => {
	const btns = document.querySelectorAll(".btn-to-reset");
	btns.forEach((btn) => {
		btn.classList.remove("disabled");
		btn.classList.remove("btn-to-reset");
		const icon = btn.querySelector(".icon") as HTMLSpanElement;
		if (icon) {
			const classes = icon.dataset.oldClasses;
			if (classes) {
				icon.className = classes;
			}
		}
	});
};
document.addEventListener("visibilitychange", resetBtns);

window.showLoadingBtn = showLoadingBtn;
window.closeMenu = closeMenu;

/**
 * Scroll To Top Button
 **/
const checkScrollHeight = () => {
	if (window.scrollY >= 600) {
		showScrollToTopButton();
	} else hideScrollToTopButton();
};
window.addEventListener("scroll", throttleFunction(checkScrollHeight));

const showScrollToTopButton = () => {
	const scrollToTopBtn = document.getElementById("scroll-to-top");

	scrollToTopBtn?.classList.add("active");
};

const hideScrollToTopButton = () => {
	const scrollToTopBtn = document.getElementById("scroll-to-top");

	scrollToTopBtn?.classList.remove("active");
};

const scrollToTop = () => {
	document.getElementById("skip-to-content-link")?.focus();
	hideScrollToTopButton();
};

window.addEventListener(
	"resize",
	throttleFunction(toggleMenuOnWindowSize, 1500)
);
window.scrollToTop = scrollToTop;
