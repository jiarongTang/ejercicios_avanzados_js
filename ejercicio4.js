function findArrayIndex(array, text) {
    //Tu codigo
    let posicion = 0;
    let encontrado = false;

    while(!encontrado && posicion<array.length){
        if(array[posicion] == text){
            encontrado = true;
        }
        posicion++;
    }

    if(encontrado){
        return posicion;
    }else{
        return -1;
    }
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

//4.1
let texto = "Chewbacca";
let texto2 = "Sofia";
let respuesta = findArrayIndex(mainCharacters,texto);
let respuesta2 = findArrayIndex(mainCharacters,texto2);

if(respuesta == -1){
    console.log(`No se ha encontrado ${texto}`);
}else{
    console.log(`${texto} se encuentra en la posicion ${respuesta}`);
}

if(respuesta2 == -1){
    console.log(`No se ha encontrado ${texto2}`);
}else{
    console.log(`${texto} se encuentra en la posicion ${respuesta2 + 1}`);
}

//4.2

function removeItem(array,text){
    let posicion = findArrayIndex(array,text);
    array.splice((posicion-1),1);
    return array;
}

let nuevo = removeItem(mainCharacters,texto);
console.log(nuevo);