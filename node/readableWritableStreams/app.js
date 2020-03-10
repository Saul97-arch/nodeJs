/* Quer ler e escrever dados mais eficientemente? Então vem com o pai! */

const fs = require('fs');
//aqui tu lê o texto especificado, um cat do shell só que em nodeJS, chunk = pedaço!
const readStream = fs.createReadStream('./text.txt', 'utf8');
const writeStream = fs.createWriteStream('text2.txt');
//toda vez que lermos um pedaço de data, essa função callback vai ser chamada, a vantagem de ler um chunk(pedaço) da data, é que eu posso começar a trabalhar imediatamente, não preciso que o file inteiro de load(carregue) para manipular, ou não quero manipular esse chunk agora, quero enviar para um outro file, posso enviar a data para um novo file enquanto eu leio ela, isso é útil pra arquivos de gigas pra cima!; 
//Escreveu a data do text.txt em text2.txt!
readStream.on('data', (chunk) => {
    writeStream.write(chunk);
});