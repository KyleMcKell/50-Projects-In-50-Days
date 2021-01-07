const searchField = document.querySelector(".search-form") as Element;
const searchContainer = document.querySelector(".search-container") as Element;
const searchButton = document.querySelector(".search-button") as Element;

searchButton.addEventListener("click", () => {
	searchContainer.classList.toggle("closed");
	searchField.classList.toggle("closed");
});
