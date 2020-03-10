//Um jeito mais simples para escrever data de um arquivo no outro, aqui eu joguei o que tinha no text.txt em text2.txt de uma maneira mais simples.
const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const readStream = fs.createReadStream("./text.txt", 'utf8');
const writeStream = fs.createWriteStream("text2.txt.gz");
readStream.pipe(gzip).pipe(writeStream);
//troque gzip pro gunzip e no zlib faça zlib.createGunzip, tira o enconding utf8 coloca o nome no createReadStream do arquivo text2.txt.gz, e no fs.createWriteStream coloca um nome qualquer pro arquivo que vai ser decompactado.