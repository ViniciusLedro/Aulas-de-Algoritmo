//Função é um bloco de código, função tem entrada e sáida
function exibir(){
    console.log("Olá!!");
}

exibir();

function maior(a, b){
    if(a < b){
        console.log(b,"é maior que",a);
    } else {
        console.log(a,"é maior que",b);
    }
}
maior(2,3);
maior(10,8);

function menor(a, b){
    if (a < b){
        return a;
    } else {
        return b;
    }
    console.log("aqui");
}
r = menor(2,3);
console.log("Menor:",r);
menor(10,8);