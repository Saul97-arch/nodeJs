//Vamos settar nosso primeiro server express hoje! Inicie seu package JSON com "npm init --yes, assim você pula todos os passos de nome, versão, descrição, agora que temos nossa package JSON podemos instalar o express"

//requirir o express no nosso projeto
const express = require('express');
const app = express();
//Aqui você dá uma saída no browser usando o express, lindo não?, lembrando que '/' é a rota index ou a home page
//digite localhost:3000 no navegador, aqui é um ROUTE PARAMETER
app.get('/', (req, res) => {
    res.send('O Rhian tá funfando o Framework?!?!');
});
//Pra sair abaixo, digite localhost:3000/exemplo no navegador
app.get('/exemplo', (req, res) => {
   res.send('Olha ai Rhian uma rota de exemplo!') 
});
//http://localhost:3000/exemplo/saulo/22 saulo e 22 foram os parâmetros passados no browser
//AQUI É UM QUERY PARAMETER
app.get('/exemplo/:name/:age', (req, res) => {
    //Quando é printado esse req.params temos um objeto que contem as propriedades name e age
    console.log(req.params);
    //req é o que o cliente está nos enviando
    //quando tu rodar pela primeira vez ou dar refresh vai ver que aparece no console um objeto vazio
    //ele é nosso req.query e está vazio por que não passamos nada pra ele
    console.log(req.query);
    //req.params é um objeto então você tem que referenciar as propriedades nome e age desse jeito abaixo
    //vai sair no browser nome : idade
    //http://localhost:3000/exemplo/saulo/22?universo=carlsagan adicionando uma interrogação e a sintaxe daquele jeito
    //você vai ver que o objeto foi preenchido!
    //para passar mais de uma query param http://localhost:3000/exemplo/saulo/22?universo=carlsagan&sort=byage
    //Um & comercial e nome e conteúdo da propriedade
    res.send(req.params.name + " : " + req.params.age);
});

//QUANDO USAR ROUTE X QUERY PARAMS? Se usa route params quando você precisa precisa ter os dados(data)
//o query você usa para interagir com a data do route params que é necessária, ou seja, eu preciso dar um sort
//na idade do unirverso que se chama carlsagan, para isso eu NECESSITO do parametro age!

app.listen(3000);