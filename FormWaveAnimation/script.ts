const labels: NodeListOf<HTMLLabelElement> = document.querySelectorAll(
	".form-control label"
);

labels.forEach((label: HTMLLabelElement) => {
	label.innerHTML = label.innerText
		.split("")
		.map(
			(letter, index) =>
				`<span style="transition-delay:${index * 30}ms">${letter}</span>`
		)
		.join("");
});
