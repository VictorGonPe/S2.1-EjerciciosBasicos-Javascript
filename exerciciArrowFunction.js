//_______________________________Nivell 1____________________________________

//Exercici 1

const suma = (a, b) => a + b;

suma (3,6); // comprobación
console.log(suma);

//Exercici 2

const randomNumber = () => Math.floor(Math.random() * 100) + 1;


//Exercici 3

class Person {
  constructor(name){
    this.name = name;
  }
  greet = () => console.log(`Hola, ${this.name}`);
}

let user = new Person('Víctor'); // comprobación
user.greet();

//_______________________________Nivell 2______________________________________

//Exercici 4

const arrayNumbers = [6,3,4,8];

function printNumbers(arrayNum) {
    for (let i = 0; i < arrayNum.length; i++) {
      let print = () => console.log(arrayNum[i]);
      print();
    } 
}

printNumbers(arrayNumbers); 

//_______________________________Nivell 3______________________________________

//Exercici 5

setTimeout(() => console.log("Impreso después de 3 segundos"), 3000);