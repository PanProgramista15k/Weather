const min = -20;
const max = 55;
const celsius = Math.floor(Math.random() * max) + min;
const fahrenheit = Math.floor(celsius * (9 / 5) + 32);
console.log(celsius);
console.log(fahrenheit);

if (celsius > 30) {
	msg = "Be careful! High temperature might be dangerous for your health";
} else if (celsius > 24) {
	msg = "Enjoy hot summer temperature! Stay hydrated";
} else if (celsius > 21) {
	msg = "Ahhh! Perfect temperature! Not to warm, not to cold";
} else if (celsius > 15) {
	msg = "Great temperture for a long walk! Remember about 10.000 steps";
} else if (celsius > 10) {
	msg = "Good temperture for a short walk! But take sweater";
} else if (celsius > 0) {
	msg = "Don't forget your cap! ";
} else if (celsius > -5) {
	msg = "Wear warm coat and scarf! Watch out for ice";
} else if (celsius > -20) {
	msg =
		"Brr! There is freezing! Gloves are important to protect your fingers before frostbite";
} else {
	msg = "Invalid temperature";
}

const a = document.querySelector(".msg");
a.innerText = msg;

const cel = document.querySelector("#celsius");
cel.innerText = celsius;

const fah = document.querySelector("#fahrenheit");
fah.innerText = fahrenheit;
