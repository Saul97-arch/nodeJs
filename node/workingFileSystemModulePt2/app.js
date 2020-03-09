const fs = require('fs');

/* fs.mkdir('pastaCriada', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Criaste uma pasta my nibba!');
    }
}); */

//deletando o folder, parâmetors, nome da pasta a ser deletada, callback com err.

/* fs.rmdir('pastaCriada', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Ode ao Deus que cria e deleta só nos comando!');
    }
});
 */

//Mesmo comando do bash né? argumentos, nome da pasta, callback de erro, aqui você cria a pasta com um arquivo nela e especifica o data que vai dentro do arquivo, rode e veja a mágica acontecer!.
/* fs.mkdir("pastaCriada", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Criaste uma pasta my nibba!");
        fs.writeFile('./pastaCriada/arquivo.txt', 'Hello my nibba, i am the data created in the file wich is already in the folder!', (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Você fez um arquivo paê!!!');
            }
        });
    }
}); */

//deletando a pasta com arquivos nela, pra quem manja bash veja que tem que fazer paranauê a mais pra poder deletar pasta com arquivo dentro kkj o ./ para refenciar o que está dentro do arquivo.
//primeiro com o unlink deletamos o arquivo que está dentro do folder(pasta), e se der bom, com o rmdir deletamos o folder(pasta,diretório, o que você achar mais interessante de chamar.)
/* fs.unlink('./pastaCriada/arquivo.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        fs.rmdir('pastaCriada', (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('DELETOU PAI!');
            }
            
        });
        console.log('Deletou a pasta com sucesso cara!Com arquivo dentro! Sem firula!')
    }
}); */

//Deletar um folder com vários arquivos dentro, para fazer isso, cria um folder na interface gráfica do VScode ou do computador seu e uns arquivos dentro dele, e bora pro código!

//O metodo readdir retorna uma lista de files que estão dentro da pasta, no callback o primeiro parâmetro é o famigerado err, o segundo vai ser o files que vai ser um array com os nomes dos arquivos

fs.readdir('pastinha', (err, files) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Olha os arquivos que você deletou: ' + files);
        for (let file of files) {
            //o nome da pastatem que começar com ./ e terminar com / o por que eu não sei, só faz!!!
            fs.unlink('./pastinha/' + file, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Deletou vários arquivos em uma pasta!, tu manja hein?');
                }
            })
        }
    }
});
