entrada = prompt("Entre com o menor valor");
i = parseInt(entrada);
entrada = prompt("Entre com o maior valor");
maior = parseInt(entrada);

if (i > maior) {
   temp = i;
   i = maior;
   maior = temp;
   //temp ou aux: São variaveis temporarias, nesse caso como não era possivel fazer a troca entre i e maior, eu precisei colocar uma variavel temp para substituir.
}

while (i < maior) {
    console.log(i);
    i = i + 1;
}