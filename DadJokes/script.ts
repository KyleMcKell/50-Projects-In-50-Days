const getJoke = async (): Promise<void> => {
	const res = await fetch("https://icanhazdadjoke.com/", {
		method: "GET",
		headers: {
			Accept: "application/json",
		},
	});

	if (!res.ok) {
		throw new Error(`Error! Status: ${res.status}`);
	} else {
		const data = await res.json();
		const joke = await data.joke;
		jokeText.innerText = joke;
	}
};

const jokeButton = document.querySelector<HTMLButtonElement>(".joke-button")!;
const jokeText = document.querySelector<HTMLParagraphElement>(".joke-text")!;

jokeButton.addEventListener("click", () => {
	getJoke();
});

getJoke();
