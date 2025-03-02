//_______________________________Nivell 1____________________________________

//Exercici 1

function potConduir (edat) {
    let resultat = edat > 17 ? "Pots conduir" : "No pots conduir";
    console.log(resultat);
}

potConduir(15); // comprobación
potConduir(24);

//Exercici 2

const bigNum = (num1,num2) => {
    let resultado = num1 > num2 ? "num1 és més gran" : "num2 és més gran";
    return resultado;
  }
  
  console.log(bigNum(12,9)); // comprobación

  //_______________________________Nivell 2____________________________________

  //Exercici 3 A
  let num = -3
  num < 0 ? console.log("es negatiu") : num === 0 ? console.log("es Zero") : console.log("es positiu"); 

  //Exercici 3 B
  function trobarMaxin(a,b,c) {
    const maxim = (a>b && a>c) ? a : 
                  (b>a && b>c) ? b : c; 
    return maxim;
  }
    
  console.log("The highest number is: " + trobarMaxin(12,54,13)); 

   //_______________________________Nivell 4____________________________________

  //Exercici 4
  let arrayEdades = [21,32,44,34,45,13,37,29];

  function parOImpar (arrayNum) {
    arrayNum.forEach(num =>
       num % 2 === 0 ?  console.log(`${num} es par`) : console.log(`${num} es impar`)
    );
  }

  parOImpar(arrayEdades);