const searchContainer = document.querySelector<HTMLDivElement>(
	".search-container"
)!;
const searchForm = document.querySelector<HTMLFormElement>(".search-form")!;
const searchButton = document.querySelector<HTMLDivElement>(".search-button")!;

searchButton.addEventListener("click", () => {
	searchContainer.classList.toggle("closed");
	searchForm.classList.toggle("closed");
});
