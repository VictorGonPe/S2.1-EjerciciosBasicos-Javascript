//_______________________________Nivell 1____________________________________

//Exercici 1

let numeros = [1,2,3,4];
let cuadrado = numeros.map(num => num * 2);

console.log(cuadrado);

//Exercici 2

numeros = [1,2,3,4];
let pares = numeros.filter(num => num%2 === 0);

console.log(pares);

//Exercici 3

let otrosNum = [1,10,8,11];
let mayorDiez = otrosNum.find(num => num > 10);

console.log(mayorDiez);

//Exercici 4

let newArray = [13,7,8,21];
let suma = newArray.reduce((sumatorio, num) => sumatorio + num, 0);

console.log(suma);

//_______________________________Nivell 2____________________________________

//Exercici 5

let arrayNumeros = [1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9];

const operaciones = (arrayNumeros) =>  arrayNumeros.filter(num => num >= 10)
                                       .map(num => num * 2)
                                       .reduce((sumatorio,num) => sumatorio + num, 0);

console.log(operaciones(arrayNumeros));

//_______________________________Nivell 3____________________________________

//Exercici 6

let array6 = [11, 12, 13, 14];

let upTen = array6.every(num => num > 10);
let downTen = array6.some(num => num > 10);

console.log(`Todos los números son mayores de diez: ${upTen}`);
console.log(`Hay número menores o igual a diez: ${downTen}`);

