//_______________________________Nivell 1____________________________________

//Exercici 1

function procesar(nombre, callback) {
    return callback(nombre);
}

const cuadratDelNombre = (nombre)=> nombre * nombre;

console.log(procesar(5, cuadratDelNombre));

//Exercici 2

function calculadora(num1,num2,callback) {
    return callback(num1,num2);
}

const suma = (num1,num2) => num1 + num2;

console.log(`La suma de los números es: ${calculadora(6,3, suma)}`);

//_______________________________Nivell 2____________________________________

//Exercici 3

function esperarYSaludar (nombre,callback) {
    setTimeout(()=> callback(nombre), 2000);
}

const usuario = (nombre) => console.log(`Hola ${nombre}`);

esperarYSaludar("Silvia", usuario);

//Exercici 4

let portatiles = ["Apple","Asus","HP","Acer","samsung"];

function procesarElementos(arrayPC,callback) {
    arrayPC.forEach(elementos => callback(elementos));
}

const marcas = (elementos) => console.log(`Marcas en venta: ${elementos}`);

procesarElementos(portatiles,marcas);

//_______________________________Nivell 3____________________________________

//Exercici 5

const procesarCadena = (string, callback ) => callback(string.toUpperCase());

const aMayusculas = (string) => console.log(`La cadena transformada es: ${string}`);

procesarCadena("¡hola mundo!", aMayusculas);