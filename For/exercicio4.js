const entrada = prompt("Entre com os números separados por vírgula");
const nros = entrada.split(",");
for( var i = 0; i < nros.length; i++){
    console.log(nros[i]);
}