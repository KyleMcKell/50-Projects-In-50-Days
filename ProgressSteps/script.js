let circles = document.querySelectorAll(".circle");
let activeCircles = document.querySelectorAll(".active");
let progressBar = document.querySelector("#progress");
let prevBtn = document.querySelector("#prev");
let nextBtn = document.querySelector("#next");

let currentProgress = 1;

const updateProgress = (type) => {
	if (type === "next") {
		currentProgress++;
		for (let i = 0; i < currentProgress; i++) {
			circles[i].classList.add("active");
		}
	} else {
		currentProgress--;
		circles[currentProgress].classList.remove("active");
	}

	const actives = document.querySelectorAll(".active");

	progressBar.style.width =
		((actives.length - 1) / (circles.length - 1)) * 100 + "%";
};

prevBtn.addEventListener("click", () => {
	if (currentProgress > 1) {
		updateProgress("prev");
	}
});

nextBtn.addEventListener("click", () => {
	if (currentProgress < 4) {
		updateProgress("next");
	}
});
