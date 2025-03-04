//_______________________________Nivell 1____________________________________

//Exercici 1

let promesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hola mundo"), 2000);

});

//Exercici 2

promesa.then(mensaje => console.log(mensaje));


//Exercici 3

let input = "Hola";

let promesa2 = new Promise((resolve, reject) => {
    input === "Hola"? setTimeout(() => resolve("Hola que tal?"), 2000) : 
                      setTimeout(() => reject("¡Error en la operación!"), 2000);
});

promesa2
  .then(mensaje2 => console.log(mensaje2))
  .catch(error => console.log(error)); 

//Exercici 4

async function promesaAsincrona() {
    let mensaje = await promesa;
    console.log(mensaje);
}

promesaAsincrona();

//_______________________________Nivell 2____________________________________

//Exercici 5

async function promesaAsincrona() {
    try {
        let mensaje = await promesa;
        console.log(mensaje);
    } catch(error) {
        console.log("Error: ", error);
    }
}

promesaAsincrona();

//_______________________________Nivell 3____________________________________

//Exercici 6

let promesa5 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("resuleta tras 2s"), 2000);
});

let promesa6 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("resuleta tras 3s"), 3000);
});

Promise.all([promesa5,promesa6]).then((values)=> {
    console.log(values);
});