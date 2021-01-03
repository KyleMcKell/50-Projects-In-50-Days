let circles = document.querySelectorAll(".circle");
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
	} else if (type === "prev") {
		currentProgress--;
		circles[currentProgress].classList.remove("active");
	}

	if (currentProgress === 4) {
		nextBtn.classList.add("disabled");
		nextBtn.disabled = true;
	} else if (currentProgress === 1) {
		prevBtn.classList.add("disabled");
		prevBtn.disabled = true;
	} else {
		nextBtn.classList.remove("disabled");
		prevBtn.classList.remove("disabled");
		nextBtn.disabled = false;
		prevBtn.disabled = false;
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
	if (currentProgress < circles.length) {
		updateProgress("next");
	}
});
