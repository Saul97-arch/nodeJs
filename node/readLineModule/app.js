/* O módulo ReadLine nos permite solicitar ao usuário um imput*/

const readline = require('readline');
/* Criamos uma instância do objeto readline e ela vai receber um objeto, os parâmetros são respectivamente propriedade input e o objeto process que é global você não precisa fazer o procedimento de requerir ele */
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
/* Gera números aleatórios de 1 à 10*/
let num1 = Math.floor((Math.random() * 10) + 1);             
let num2 = Math.floor((Math.random() * 10) + 1);             
let anwser = num1 + num2;
/* Agora podemos perguntar ao usuário ao que esses números são iguais, vamos usar a nossa interface readline definida na constante rl, usando o método .question com o primeiro argumento sendo uma string e o segundo sendo uma função */

rl.question(`Que caralhos são ${num1} + ${num2}? \n`, (userInput) => {
        if (userInput.trim() == anwser) {
            console.log('Acertou babacão KKKKKKKK')
            rl.close();
        } else {
            rl.setPrompt('Ohh miserávi cê é bom nas matemática hein??? Faz de novo pra eu ver!\n');
            rl.prompt();
            rl.on('line', (userInput) => {
                if (userInput.trim() == anwser) {
                    rl.close();
                } else {
                    rl.setPrompt(`Sua resposta que foi ${userInput} tá errada porra!, faz denovo pufavô :3\n`);
                    rl.prompt();
                }
            })
        }
});

rl.on('close', () => {
    console.log('Acertou miserávi!!!')
});