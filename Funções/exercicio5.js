function inverte(entrada){
    aux = "";
    i = 0;
    while(i < entrada.length){
        aux = entrada[i] + aux;
        i++;
    }
    return aux;
}

r = inverte("Pedro");
console.log("Invertido:", r);