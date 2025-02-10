function rollDice(caras){
    let resultado = Math.floor((Math.random()*caras)+1);
    return resultado;
}

let tirada = rollDice(20);
console.log(tirada);