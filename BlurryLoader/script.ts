const loadText = document.querySelector<HTMLDivElement>(".loading-text")!;
const bg = document.querySelector<HTMLDivElement>(".bg")!;

let load = 0;

const blurring = () => {
	load++;

	if (load > 99) {
		clearInterval();
	}

	loadText.innerText = `${load}%`;
	loadText.style.opacity = `${100 - load}%`;
	bg.style.filter = `blur(${25 - load / 4}px)`;
};

setInterval(blurring, 30);
