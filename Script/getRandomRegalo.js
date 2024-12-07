export function getRandomRegalo(varlastRegalo) {
    let newRegalo;
    let attempts = 0; // Contador de intentos
    do {
        newRegalo = Math.floor(Math.random() * 4) + 1; // Generar un número aleatorio entre 1 y 4
        attempts++;
        // Salir del bucle si lleva demasiados intentos (evita un bucle infinito)
        if (attempts > 10) break;
    } while (newRegalo === varlastRegalo);
    // lastRegalo = newRegalo; // Actualizar el último número generado
    return newRegalo;
}
