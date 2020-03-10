//Um jeito mais simples para escrever data de um arquivo no outro, aqui eu joguei o que tinha no text.txt em text2.txt de uma maneira mais simples.
const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const readStream = fs.createReadStream("./text.txt", 'utf8');
const writeStream = fs.createWriteStream("text2.txt.gz");
readStream.pipe(gzip).pipe(writeStream);