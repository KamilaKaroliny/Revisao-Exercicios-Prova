/*1. Somador de Números  
Crie um algoritmo que solicite ao usuário quantos números ele quiser somar. 
A cada novo número digitado, o valor deve ser acumulado. Ao final, exiba o 
resultado total da soma.


let n = parseFloat (prompt('Quantos número você deseja somar?'))
let soma = 0;

for ( i = 0; i < n; i++) {
  let numero = parseFloat (prompt("Digite um numero: "));
  soma = soma + numero;
}

console.log("A soma dos números é: " + soma);
*/

/*2. Contagem Regressiva da NASA  
Simule uma contagem regressiva para o lançamento de um foguete, partindo de 
10 até 0, e ao final exiba a mensagem "Lançamento!".  
Dica: estude a função `setInterval()` do JavaScript.
*/

intervalID = setInterval(lancamento, 1000) 
let contagem = 10;
function lancamento() {
    if (contagem >= 0){
        console.log(contagem);
        contagem--;
    }else{
        console.log('Lançamento');
        clearInterval(intervalID);
    };

}
lancamento();

//S.O.S




