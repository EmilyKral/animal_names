function init() {
	let cats = document.querySelector("#cats");
	let dogs = document.querySelector("#dogs");
	let unicorns = document.querySelector("#unicorns");

	cats.addEventListener("click", displayNames);
	dogs.addEventListener("click", displayNames);
	unicorns.addEventListener("click", displayNames);
}

async function displayNames(event) {
	const animal = event.target.id;
	let descripPara = document.querySelector("#descripPara");
	let namesPara = document.querySelector("#namesPara");
	try {
		const url = `http://localhost:3002/${animal}`;
		const response = await fetch(url);
		const data = await response.json();
		descripPara.textContent = `Here are some great ${animal.slice(0, -1)} names!`;
		namesPara.textContent = ` ${data[animal].join(", ")}`;
	} catch (error) {
		console.log(error);
	}
}

init();
