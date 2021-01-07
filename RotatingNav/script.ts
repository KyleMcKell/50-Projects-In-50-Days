const openNavBtn = document.querySelector<HTMLButtonElement>("#open")!;
const closeNavBtn = document.querySelector<HTMLButtonElement>("#close")!;
const content = document.querySelector<HTMLElement>(".content")!;
const navbar = document.querySelector<HTMLElement>(".navbar")!;

openNavBtn.addEventListener("click", () => {
	handleClick(openNavBtn, closeNavBtn, true);
});

closeNavBtn.addEventListener("click", () => {
	handleClick(closeNavBtn, openNavBtn, false);
});

const handleClick = (
	clickedButton: HTMLButtonElement,
	hiddenButton: HTMLButtonElement,
	navOpen: boolean
) => {
	clickedButton.classList.remove("active");
	hiddenButton.classList.add("active");

	clickedButton.disabled = true;
	hiddenButton.disabled = false;

	if (navOpen) {
		content.classList.add("show-nav");
		navbar.classList.add("show-nav");
		content.classList.remove("hide-nav");
		navbar.classList.remove("hide-nav");
	} else {
		content.classList.add("hide-nav");
		navbar.classList.add("hide-nav");
		content.classList.remove("show-nav");
		navbar.classList.remove("show-nav");
	}
};
