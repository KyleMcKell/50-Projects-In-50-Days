let load = 0;

const blurring = () => {
	const loadText = document.querySelector(".loading-text") as HTMLFormElement;
	const bg = document.querySelector(".bg") as HTMLFormElement;
	load++;

	if (load > 99) {
		clearInterval();
	}

	loadText.innerText = `${load}%`;
	loadText.style.opacity = `${100 - load}%`;
	bg.style.filter = `blur(${25 - load / 4}px)`;
};

setInterval(blurring, 30);
