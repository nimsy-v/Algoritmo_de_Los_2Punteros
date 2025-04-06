const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarInvitado(nombre) {
  let izquierda = 0;
  let derecha = 1;

  while (derecha < nombre.length) {
    if (
      nombre[izquierda][0].toUpperCase() === nombre[derecha][0].toUpperCase()
    ) {
      return [nombre[izquierda], nombre[derecha]];
    }
    izquierda++;
    derecha++;
  }
  return null;
}

console.log(encontrarInvitado(invitados));
