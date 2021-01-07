const circles = document.querySelectorAll<HTMLDivElement>(".circle");
const progressBar = document.querySelector<HTMLDivElement>("#progress-bar")!;
const prevBtn = document.querySelector<HTMLButtonElement>("#prev")!;
const nextBtn = document.querySelector<HTMLButtonElement>("#next")!;
let actives = document.querySelectorAll<HTMLDivElement>(".active");

let currentProgress = 1;

const updateProgress = () => {
	circles.forEach((circle: HTMLDivElement, index: number) => {
		if (index < currentProgress) {
			circle.classList.add("active");
		} else {
			circle.classList.remove("active");
		}
	});

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

	actives = document.querySelectorAll<HTMLDivElement>(".active");

	progressBar.style.width =
		((actives.length - 1) / (circles.length - 1)) * 100 + "%";
};

prevBtn.addEventListener("click", () => {
	if (currentProgress > 1) {
		currentProgress--;
		updateProgress();
	}
});

nextBtn.addEventListener("click", () => {
	if (currentProgress < circles.length) {
		currentProgress++;
		updateProgress();
	}
});
