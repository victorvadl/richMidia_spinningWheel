let buttonClicked = false;
function myFunction() {
	if (!buttonClicked) {
		let x = 1024; // min value
		let y = 9999; // max value

		let deg = Math.floor(Math.random() * (x - y)) + y;

		document.getElementById("box").style.transform = "rotate(" + deg + "deg)";
		let element = document.getElementById("mainbox");
		element.classList.remove("animate");
		setTimeout(function () {
			element.classList.add("animate");

			// Obter o número correspondente ao span em que a roleta parou
			let num = getStoppedNumber(deg);
			console.log("Número parado: " + num);
		}, 5000); // 5 seconds 5 seconds

		// Ativar estilo de botão clicado
		let button = document.getElementById("spinButton");
		button.classList.add("clicked");

		// Definir botão como clicado
		buttonClicked = true;
	}
}

function getStoppedNumber(deg) {
	console.log("O grau de giro vai ser: " + deg);
	let spanDeg = 360; // ângulo de cada span
	var restoDivisao = (deg % spanDeg) / spanDeg;
	console.log(restoDivisao);
	let num = (restoDivisao * 360) / 45 + 0.5; // calcular número com base no ângulo
	return num;
}
