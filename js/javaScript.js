const opciones = ['piedra', 'papel', 'tijera'];

function obtenerEleccionUsuario() {
    const eleccion = prompt('¿piedra, papel o tijera?').toLowerCase();
    if (opciones.includes(eleccion)) {
        return eleccion;
    } else {
        alert('Eso no es parte del juego! Vamos de nuevo');
        return obtenerEleccionUsuario(); 
    }
}

function obtenerEleccionComputadora() {
    return opciones[Math.floor(Math.random() * opciones.length)];
}

function mostrarResultado(eleccionUsuario, eleccionComputadora) {
    console.log('Elegiste ' + eleccionUsuario);

    console.log('Tu rival eligió ' + eleccionComputadora);

    alert('Tu rival eligió ' + eleccionComputadora);

    if (eleccionUsuario === eleccionComputadora) {
        alert('¡Empate! Esto no va a quedar así...');
        jugar();
    } else if (
        (eleccionUsuario === 'piedra' && eleccionComputadora === 'tijera') ||
        (eleccionUsuario === 'papel' && eleccionComputadora === 'piedra') ||
        (eleccionUsuario === 'tijera' && eleccionComputadora === 'papel')
    ) {
        alert('¡Ganaste!');
        let quiereJugarDeNuevo = confirm('Querés volver a jugar? Yo me quedaría con la victoria...');
        if (quiereJugarDeNuevo) {
            jugar ();
        } else {
            alert('Buena decisión! Hasta la próxima');
        }
    } else {
        alert('¡Perdiste! Defendé tu honor con la revancha');
        jugar();
    }
}

function jugar() {
    const eleccionUsuario = obtenerEleccionUsuario();
    const eleccionComputadora = obtenerEleccionComputadora();
    mostrarResultado(eleccionUsuario, eleccionComputadora);
}

jugar();

