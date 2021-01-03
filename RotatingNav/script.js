const openNavBtn = document.getElementById("open");
const closeNavBtn = document.getElementById("close");
const content = document.querySelector(".content");
const navbar = document.querySelector(".navbar");

openNavBtn.addEventListener("click", () => {
	openNavBtn.classList.remove("active");
	closeNavBtn.classList.add("active");
	openNavBtn.disabled = true;
	closeNavBtn.disabled = false;
	content.classList.remove("hide-nav");
	content.classList.add("show-nav");

	navbar.classList.remove("hide-nav");
	navbar.classList.add("show-nav");
});

closeNavBtn.addEventListener("click", () => {
	openNavBtn.classList.add("active");
	closeNavBtn.classList.remove("active");
	closeNavBtn.disabled = true;
	openNavBtn.disabled = false;
	content.classList.add("hide-nav");
	content.classList.remove("show-nav");

	navbar.classList.remove("show-nav");
	navbar.classList.add("hide-nav");
});
