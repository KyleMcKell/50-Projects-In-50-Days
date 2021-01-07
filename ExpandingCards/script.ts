let cards = document.querySelectorAll(".card") as NodeListOf<HTMLDivElement>;
let activeCard = document.querySelector(".active") as HTMLDivElement;

cards.forEach((card) => {
	card.addEventListener("click", () => {
		activeCard.classList.remove("active");
		card.classList.add("active");
		activeCard = card;
	});
});
