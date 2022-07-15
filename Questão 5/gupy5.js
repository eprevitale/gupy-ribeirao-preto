function inverterString(string){
    var stringInvertida = ""; //Variável que armazenará a nova string (invertida).
 
    for (var i = string.length - 1; i >= 0; i--) { 
        stringInvertida = stringInvertida + string[i];
        /*
        Aqui, a ideia é que, começando pela última letra (sendo sua posição igual ao
        tamanho/quantidade de letras da string menos 1), o programa pegue, de trás para
        frente, cada letra da string original e adicione na nova string (stringInvertida).
        Ao final do loop, o programa terá pegado todas as letras da string original e
        adicionado, de trás para frente, à nova string.
        */
    }

    return stringInvertida; //Retorna a string invertida.
}
 
console.log(inverterString("Invertendo String!"));