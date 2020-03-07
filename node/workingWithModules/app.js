/* Para executar em node node nomeArquivo.js */
console.log("Ai Rhian estou no node porra! DARK TRYBE CARALHO!");
/* ./ mostra que o modulo está na mesma pasta, só preciso passar o nome do file no caso tutorial. */
const tutorial = require('./tutorial');
let an , a1= 10, n = 15, r = 7;

an = a1 + (n - 1) * r;

console.log("Resultado da PA de teste!"+ " " + an);
/* Com crase e placeholder mostra a função em si! */
/* console.log(`Aqui está o tipo da função tutorial: ${tutorial}`); */
/* Em vez de chamar o nome da função, chama do arquivo que contém ela */
/* console.log(tutorial(2, 3))  se tiver só uma func dentro a partir do passo abaixo já não sei*/
/* Quando tem mais de uma coisa no export, retorna um objeto, tutorial é retornado como objeto */
console.log(tutorial);
/* Vamos usar a notação de objetos para chamar a função sum, veja: */
console.log("Olha a mágica caralho!!!" + " " + tutorial.sum(333, 333));
console.log("Olha a mágica caralho!!!" + " " + tutorial.PI);
/* Vai criar uma nova instância do SomeMathObjects, usa o new, perguntar pro Rhian essa merda*/
console.log(new tutorial.SomeMathObjects());

