//_______________________________Nivell 1____________________________________

//Exercici 1

let noms = ['Anna', 'Bernat', 'Clara'];

noms.forEach(nom => console.log(nom));

//Exercici 2
let noms2 = ['Anna', 'Bernat', 'Clara'];

for (const nombres of noms2) {
    console.log(nombres);
}

//Exercici 3

let numeros = [1,2,3,4];

let filtro = numeros.filter(num => num % 2 === 0);

console.log(filtro);

//_______________________________Nivell 2____________________________________

//Exercici 4

let objeto = { nom: 'Ona', edat: 25, ciutat: 'Barcelona' };

for (let clave in objeto) {
    console.log(`${clave} : ${objeto[clave]}`);
}

//Exercici 5

let numeros5 = [1, 2, 3, 4, 5, 6];

for (const num of numeros5) {
    if (num == 5) {
        break;
    }
    console.log(num);
}

//_______________________________Nivell 3____________________________________

//Exercici 6

let noms6 = ['Anna', 'Bernat', 'Clara'];
let i = 0;

for (const nom of noms6) {
    console.log(`${nom} esta en el indice: ${i}`);
    i++;
}