const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

const blurring = () => {
	load++;

	if (load > 99) {
		clearInterval(int);
	}

	loadText.innerText = `${load}%`;
	loadText.style.opacity = `${100 - load}%`;
	bg.style.filter = `blur(${25 - load / 4}px)`;
};

setInterval(blurring, 30);
