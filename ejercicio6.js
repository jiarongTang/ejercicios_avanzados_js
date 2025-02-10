const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ];

function swap(array,indice1,indice2){
    let aux = array[indice1];
    array[indice1] = array[indice2];
    array[indice2] = aux;
    return array;
}
console.log(fantasticFour);

let cambio = swap(fantasticFour,3,1);
console.log(cambio);