//_______________________________Nivell 1____________________________________

//Exercici 1

const array1 = [1,2,3,4];
const array2 = [5,6,7,8];
const array3 = [...array1,...array2];

console.log(array3);

//Exercici 2

function suma(...numeros) {
    let resultado = 0;
   
    for(i=0; i < numeros.length; i++){
        resultado = resultado + numeros[i];
    }

    return resultado;
} 

console.log(suma(3,6,5,10));
console.log(suma(3,8,10,32));

//_______________________________Nivell 2____________________________________

//Exercici 3

let objeto1 = ['agua', 'vino', 'cerveza'];
let objeto2 = [...objeto1];

objeto2.push("cola");

console.log(objeto1);
console.log(objeto2);

//Exercici 4

let coches = ["audi", "seat", "opel", "renault","mazda","mercedes"];

let [primero, segundo, ...otros] = coches;

console.log(primero);
console.log(segundo);
console.log(otros);

//_______________________________Nivell 3____________________________________

//Exercici 5

function personas(nom1,nom2,nom3) {
    console.log(`${nom1}, ${nom2} y ${nom3}`);
}

let arrayPersonas = ["Silvia","Víctor","Laura"];

personas(...arrayPersonas);

//Exercici 6

let coche = {"marca": "Opel" , "potencia": "150 CV"};
let especificaciones = {"cilindrada": "1.4 CC", "velMax": "230 K/h"};

let vehiculo = {...coche, ...especificaciones};

console.log(vehiculo);