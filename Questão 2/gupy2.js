/*
Sequência de Fibonacci

A sequência será calculada até o número 14.930.352.
Caso o número seja encontrado, o cálculo da sequência será interrompido e o programa
exibirá uma mensagem dizendo que o número informado pertence à sequência.
Caso contrário, a sequência continuará até o fim e, ao final da execução, o programa
exibirá uma mensagem dizendo que o número informado não pertence à sequência.
*/

var numeroAtual = 1;
var numeroPassado = 0;
var soma;

var numeroAleatorio = 93; //Número a ser confirmado se existe na sequência.

console.log(numeroPassado);
console.log(numeroAtual);

while(numeroAtual < 14930352){
    soma = numeroAtual + numeroPassado;
    numeroPassado = numeroAtual;
    numeroAtual = soma;
    console.log(numeroAtual);
    if(numeroAtual == numeroAleatorio){
        console.log("O número fornecido pertence à sequência de Fibonacci.")
        break;
    }
}

if(numeroAtual != numeroAleatorio){
    console.log("O número fornecido não pertence à sequência de Fibonacci.")
}
