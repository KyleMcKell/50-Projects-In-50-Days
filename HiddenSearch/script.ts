const searchContainer = document.querySelector(
	".search-container"
) as HTMLDivElement;
const searchForm = document.querySelector(".search-form") as HTMLDivElement;
const searchButton = document.querySelector(".search-button") as HTMLDivElement;

searchButton.addEventListener("click", () => {
	searchContainer.classList.toggle("closed");
	searchForm.classList.toggle("closed");
});
