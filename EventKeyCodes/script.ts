const eventKey = document.querySelector<HTMLDivElement>(".event-key")!;
const eventKeyCode = document.querySelector<HTMLDivElement>(".event-keycode")!;
const eventCode = document.querySelector<HTMLDivElement>(".event-code")!;

const clickAKeyDiv = document.querySelector<HTMLDivElement>("#clickAKey")!;
const keyClickedDiv = document.querySelector<HTMLDivElement>("#keyClicked")!;

document.addEventListener("keydown", (key) => {
	clickAKeyDiv.classList.add("hidden");
	keyClickedDiv.classList.remove("hidden");
	eventKey.innerText = key.key;
	eventKeyCode.innerText = key.keyCode.toString();
	eventCode.innerText = key.code;

	if (key.key === " ") {
		eventKey.innerText = '"     "';
	}
});
