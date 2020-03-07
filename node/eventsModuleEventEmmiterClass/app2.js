const EventEmmitter = require('events');
/* Cria uma nova instância do objeto. */
const eventEmmitter = new EventEmmitter();
/* Agora vamos ligar um Listenner ao objeto, nomeamos de "tutorial", metodo on precisa de 2 argumentos o primeiro é o listenner que você quer ligar e o outro é a funcão que você quer executar, quando o evento "tutorial ocorrer"*/
eventEmmitter.on('tutorial', (num1, num2) => {
    console.log('tutorial event has ocurred with succes, POZE DO RODO é tipo eventListenner?');
    console.log('saída com argumentos num1 e num 2 : ' + (num1 + num2));
});

/* O código acima só é chamado quando o tutorial é chamado, node app2.js, sempre que o .emit é instaciado na sentença de acordo com a sintaxe abaixo, isso é emitir o evento que nós chamamos de tutorial: */

eventEmmitter.emit('tutorial', 333, 333);
/* Como criar um objeto personalizado, um custom object, que é herdeiro da classe  EventEmmiter, vamos criar uma classe chamada "Person que é extendida da classe EventEmmiter"*/
class Person extends EventEmmitter{
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

/* saulo e rhian são instancias da classe EventEmmiter, são extendidas da mesma */
let saulo = new Person('Saulo');
let rhian = new Person('Rhian');
rhian.on('name', () => {
    console.log('Hey it is ' + rhian.name + ' here!');
})

rhian.emit('name');

saulo.on('name', () => {
    console.log('My name is ' + saulo.name +"!");
});

saulo.emit('name');

/* Note que no output eles vão ser emitidos em ordem de chamada pelo .emit*/