const getJoke = async (): Promise<string> => {
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
		return joke;
	}
};

const jokeButton = document.querySelector<HTMLButtonElement>(".joke-button")!;
const jokeText = document.querySelector<HTMLParagraphElement>(".joke-text")!;

jokeButton.addEventListener("click", async () => {
	jokeText.innerText = await getJoke();
});

getJoke().then((joke: string) => (jokeText.innerText = joke));
