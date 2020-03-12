//Eu vou requerir o servidor para enviar os arquivos contidos dentro desta pasta pra mim
//Retorna a página html no caso no browser, não funfa não sei por quê.
const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    //Meu digníssimo colega Rhian falou pra colocar ../ em vez de ./, a justificativa disso é que o Vscode não tem file lint, no final de nossa conversação descobri que a sintaxe pros diretórios é diferente, no windons ./ no linux ../ você que está lendo essa maravilhosa documentação comentada se atente a isso.
    const readStream = fs.createReadStream('../servingStaticFilsHttp/exemplo.html');
    res.writeHead(200, { 'Content-type': 'text/html' });
    readStream.pipe(res);
}).listen(3000);
//para mudar o arquivo a ser enviado pelo server mude o content-type e o arquivo no createReadStream.