/* Vamos ver como trabalhar com o sistema de arquivos, "file system", criando arquivos, ler arquivos,  deletar arquivos, criar pastas e tudo mais, para começar vamos  vamos dar um require no module. */
/* abaixo nós temos o file System module, podemos começar a trabalhar com a aplicação agora. */
const fs = require('fs');
//Cria um arquivo, o terceiro parâmetro é se der erro ai pra imprimir a msg.
/* fs.writeFile('arquivo.txt', "Olá eu sou o texto no arquivo! Vamo estudar seu puto!", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Arquivo criado com sucesso! Você manja hein??');
        //parametros, nome do arquivo, encondig, callback com parâmetro err, e file;
        fs.readFile('arquivo.txt', 'utf8', (err, file) => {
            if (err) {
                console.log(err);
            } else {
                console.log(file);
            }
        });
   }
}); */

//método para renomear o file, parâmetros, nome do arquivo que vai mudar o nome, novo nome, callback com err caso dê errado imprime;

/* fs.rename('arquivo.txt', 'arquivoModificado.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Mano, tu cria o arquivo, depois renomeia, tu é o bixão mesmo hein??');
    }
}) */


//Append conteúdo no arquivo, toma três argumentos respectivamente

/* fs.appendFile('arquivoModificado.txt', 'Olá eu sou o texto que você add no arquivo', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Cria, renomeia agora adiciona? Chama o Bill pra ti benino!');
    }
}) */

//Deletar o arquivo, para refazer todos o passos vai rodando os passos, separados!

fs.unlink('arquivoModificado.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Tá se achando um Deus né?, cria, renomeia, deleta, meu Deus cara, tu é foda!');
   } 
});

//Para estudar nisso basta comentar tudo e descomentar a primeira parte, então quando tu rodar ela, comenta e vai pra próximo, roda a próxima comenta e assim por diante.