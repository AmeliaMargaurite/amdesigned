const urlStart = window.location.origin + window.location.pathname;

const copyLink = (event: Event, id: string) => {
	navigator.clipboard.writeText(urlStart + id);
	// get target onclick, add pop up that text has been copied
	const target = event?.target as HTMLElement;
	const parent = target?.parentElement;
	if (parent) {
		parent.classList.add("copied");
		setTimeout(() => parent.classList.remove("copied"), 2000);
	}
};

const closeOnEsc = (event: KeyboardEvent) => {
	if (event.key.toLowerCase() === "escape") {
		closeTagAside();
	}
};

const contentListAside = document.getElementById("content-list");

const toggleContentList = () => {
	if (contentListAside) {
		contentListAside.classList.toggle("open");
		document.body.addEventListener("keydown", closeOnEsc);

		if (contentListAside.ariaExpanded === "false") {
			contentListAside.ariaExpanded = "true";
		} else contentListAside.ariaExpanded = "false";
	}
};

// If open, close tag aside
const closeTagAside = (event?: MouseEvent) => {
	if (!contentListAside?.classList.contains("open")) return;

	const el = event?.target as HTMLElement;
	if (
		contentListAside &&
		contentListAside.contains(el) &&
		!(el instanceof HTMLAnchorElement)
	)
		return;

	contentListAside?.classList.toggle("open");
	document.body.removeEventListener("keydown", closeOnEsc);
};

document.body?.addEventListener("click", closeTagAside);

export {};

declare global {
	interface Window {
		copyLink: (event: Event, id: string) => void;
		toggleContentList: () => void;
	}
}

window.copyLink = copyLink;
window.toggleContentList = toggleContentList;
