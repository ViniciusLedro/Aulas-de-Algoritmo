const entrada = prompt("Entre com os números separados por vírgula");
const nros = entrada.split(",");
let soma = 0;
for( let i = 0; i < nros.length; i++){
    soma += parseFloat(nros[i]);
}
console.log("Somatório:", soma);
