//O package.json file é que contém toda a metadata para o projeto, como o nome do projeto o numero etc.Para começar vamos usar o node package manager, digite no terminal na pasta que tu quer com um arquivo js, "npm init",aperte enter para definir o nome, o nome do package vai ser por default o nome do folder que você está no caso aqui 'createPackageJsonNpmInit, na versão do node em que estamos o nome com letras maisculas não é permitido então logo depois de digitar o comando "npm init", digite um nome tipo package, aperte enter novamente para adicionar uma descrição, enter novamente e definimos o ponto de entrada que nos deixa saber qual o arquivo que nossa aplicação do node vai começar, enter de novo e test comand, vamos ignorar por agora, enter de novo, nome do repositório do git, ou seja a url do git, keywords deixa em branco no momento, depois é o autor, coloque seu nome, licensa IOC deixa por enquanto, vai perguntar se tá ok deixar sem licensa, só vai!, PRONTO TU TEM UM PACOTE JSON!;

//Agora vamos instalar packages usando o nom, vamos lá! Vai no site www.nmpjs.com e copia o comando de instalar de qualquer pacote desejado no terminal.No meu caso foi o lodash o comando que usei foi esse por que uso Linux "sudo npm -g lodash", instala globalmente o lodash com privilegios de adm.

//Agora vamos usar o pacote como nosso projeto

const _ = require('lodash');
let example = _.fill([1, 2, 3, 4, 5], "RONALDO", 1, 4);
console.log(example);

//pra desinstalar npm uninstall lodash, faz vendo o pacote JSON e veja que nas dependencias vai desparecer.