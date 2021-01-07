let circles = document.querySelectorAll(".circle");
let progressBar = document.querySelector<HTMLDivElement>(
	"#progress-bar"
) as HTMLDivElement;
let prevBtn = document.querySelector<HTMLButtonElement>("#prev")!;
let nextBtn = document.querySelector<HTMLButtonElement>("#next")!;

let currentProgress = 1;

const updateProgress = (buttonType: string) => {
	// way I solved the problem originally
	if (buttonType === "next") {
		for (let i = 0; i < currentProgress; i++) {
			circles[i].classList.add("active");
		}
	} else if (buttonType === "prev") {
		circles[currentProgress].classList.remove("active");
	}

	// // forEach way to solve problem
	// circles.forEach((circle, index) => {
	// 	if (index < currentProgress) {
	// 		circle.classList.add("active");
	// 	} else {
	// 		circle.classList.remove("active");
	// 	}
	// });

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
		currentProgress--;
		updateProgress("prev");
	}
});

nextBtn.addEventListener("click", () => {
	if (currentProgress < circles.length) {
		currentProgress++;
		updateProgress("next");
	}
});
