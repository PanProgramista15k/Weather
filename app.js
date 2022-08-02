const min = -20;
const max = 55;
const celsius = Math.floor(Math.random() * max) + min;
const fahrenheit = Math.floor(celsius * (9 / 5) + 32);
console.log(celsius);
console.log(fahrenheit);
if (celsius > 30) {
	console.log(
		"Be careful! High temperature might be dangerous for your health"
	);
} else if (celsius > 24) {
	console.log("Enjoy hot summer temperature! Stay hydrated");
} else if (celsius > 21) {
	console.log("Ahhh! Perfect temperature! Not to warm, not to cold");
} else if (celsius > 15) {
	console.log(
		"Great temperture for a long walk! Remember about 10.000 steps"
	);
} else if (celsius > 10) {
	console.log("Good temperture for a short walk! But take sweater");
} else if (celsius > 0) {
	console.log("Don't forget your cap! ");
} else if (celsius > -5) {
	console.log("Wear warm coat and scarf! Watch out for ice");
} else if (celsius > -20) {
	console.log(
		"Brr! There is freezing! Gloves are important to protect your fingers before frostbite"
	);
} else {
	console.log("Invalid temperature");
}
