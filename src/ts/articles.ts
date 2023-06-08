export {};

declare global {
	interface Window {
		toggleTagsAside: () => void;
	}
}

const closeOnEsc = (event: KeyboardEvent) => {
	if (event.key.toLowerCase() === "escape") {
		closeTagAside();
	}
};

const tagsAside = document.getElementById("tags");

const toggleTagsAside = () => {
	if (tagsAside) {
		tagsAside.classList.toggle("open");
		document.body.addEventListener("keydown", closeOnEsc);
		if (tagsAside.ariaExpanded === "false") {
			tagsAside.ariaExpanded = "true";
		} else tagsAside.ariaExpanded = "false";
	}
};

window.toggleTagsAside = toggleTagsAside;

const showOnlyTagged = (event: MouseEvent) => {
	if (
		event.target instanceof HTMLButtonElement &&
		event.target.classList.contains("tag")
	) {
		const id = event.target.id;

		const articles = document.querySelectorAll(
			"article.article"
		) as NodeListOf<HTMLElement>;
		articles.forEach((el) =>
			el.classList.contains(id)
				? el.classList.remove("hidden")
				: el.classList.add("hidden")
		);
		toggleTagsAside();
	}
};

document.body?.addEventListener("click", showOnlyTagged);

// If open, close tag aside
const closeTagAside = (event?: MouseEvent) => {
	if (!tagsAside?.classList.contains("open")) return;

	const el = event?.target as HTMLElement;
	if (tagsAside && tagsAside.contains(el)) return;

	tagsAside?.classList.toggle("open");
};

document.body?.addEventListener("click", closeTagAside);
