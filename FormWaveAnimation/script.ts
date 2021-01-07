const labels = document.querySelectorAll<HTMLLabelElement>(
	".form-control label"
);

labels.forEach((label: HTMLLabelElement) => {
	label.innerHTML = label.innerText
		.split("")
		.map(
			(letter: string, index: number) =>
				`<span style="transition-delay:${index * 30}ms">${letter}</span>`
		)
		.join("");
});
