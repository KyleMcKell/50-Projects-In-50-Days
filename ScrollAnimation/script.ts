const boxes = document.querySelectorAll<HTMLDivElement>(".box");

const checkBoxes = () => {
	const triggerBottom = (window.innerHeight / 10) * 9;

	boxes.forEach((box: HTMLDivElement) => {
		const boxTop = box.getBoundingClientRect().top;

		if (boxTop < triggerBottom) {
			box.classList.add("show");
		} else {
			box.classList.remove("show");
		}
	});
};

window.addEventListener("scroll", checkBoxes);

checkBoxes();
