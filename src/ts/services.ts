const hash = window.location.hash;

if (hash) {
	const el = document.querySelector(hash);
	if (el) {
		el.classList.add("highlight");
	}
}
