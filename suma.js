//Ejemplo puntero suma de dos números
function encontrarPares(arreglo, target) {
  let izquierda = 0;
  let derecha = arreglo.length - 1;

  while (izquierda < derecha) {
    let suma = arreglo[izquierda] + arreglo[derecha];
    if (suma === target) {
      console.log(
        `Encontrado ${arreglo[izquierda]} + ${arreglo[derecha]} = ${target}`
      );
      return true;
    }
    if (suma < target) {
      izquierda++;
    } else {
      derecha--;
    }
  }
  return false;
}

let arregloParaSumar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
encontrarPares(arregloParaSumar, 7); // Se espera encontrar dos números que al sumar de como resultado 7
