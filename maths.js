export default function pakeltiKvadratu(skaicius) {
	return skaicius * skaicius;
}

function suma(skaicius1, skaicius2) {
	return skaicius1 + skaicius2;
}

function atimtis(skaicius1, skaicius2) {
	return skaicius1 - skaicius2;
}

export { suma as sum, atimtis };
