const audioButtons = document.querySelectorAll<HTMLButtonElement>(
	".sound-button"
);
const audios = document.querySelectorAll<HTMLAudioElement>("audio");

// loops through audio buttons, finds the index of the button in the nodelist
// sets that index to the audios node list
// to find the corresponding audio, then plays it on click
audioButtons.forEach((button: HTMLButtonElement) => {
	const audio = audios[Array.prototype.indexOf.call(audioButtons, button)]!;

	button.addEventListener("click", () => {
		audio.currentTime = 0;
		audio.play();
	});
});
