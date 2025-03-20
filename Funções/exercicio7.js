function inverte(entrada){
i = entrada.length-1;
while (i >= 0) {
    i = i - 1;
    console.log(i, ":",entrada[i])
}
}

console.log("Lista:");
numeros = [8,3,4,7,5];
inverte(numeros);

console.log("\nLista:");
numeros = [5,4,3];
inverte(numeros);

