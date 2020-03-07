const sum = (num1, num2) => num1 + num2;
const PI = 3.141516;
class SomeMathObjects{
    constructor() {
        console.log('object created with success!');
    }
}
/* A mesma lógica para todos as classes do objeto, por que agora é um objeto */
/* module.exports.sum = sum;
module.exports.PI = PI; 
module.exports.SomeMathObjects = SomeMathObjects;    
 */
/* Exportando tudo em uma linha, como propriedades do objeto: */
module.exports = { sum: sum, PI: PI, SomeMathObjects: SomeMathObjects };