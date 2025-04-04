/*Crie um algoritmo que solicite ao usuário quantos números ele quiser somar. 
A cada novo número digitado, o valor deve ser acumulado. Ao final, exiba o resultado total da soma.
*/

let n = parseFloat (prompt('Quantos número você deseja somar?'))
let soma = 0;

for ( i = 0; i < n; i++) {
  let numero = parseFloat (prompt("Digite um numero: "));
  soma = soma + numero;
}

console.log("A soma dos números é: " + soma);
