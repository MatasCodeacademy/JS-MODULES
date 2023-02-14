import { sum, atimtis } from "./maths.js";
import pakeltiKvadratu from "./maths.js";

// import * as matematika from "./maths.js";

// document.querySelector("button").addEventListener("click", () => {
// 	alert(matematika.pakeltiKvadratu(document.querySelector("input").value));
// });

// console.log(matematika.suma(1, 5));
// matematika.atimtis();

document.querySelector("button").addEventListener("click", () => {
	alert(pakeltiKvadratu(document.querySelector("input").value));
});

console.log(sum(1, 5));
console.log(pakeltiKvadratu(6));

//Sukurkite modulį (t.y. file'ą - multi.js), kuriame būtų viena eksportuota (default) funkcija - multiplikacija. Ji priims du skaičius kaip parametrus ir grąžins šiuos skaičius sudaugintus. Pagrindiniame JS file'e (script.js) importuokite ir panaudokite šį modulį.

//Įkelti šitą kodą į github repositoriją, sukurti github Pages ir įkelti link'ą į chat'ą
