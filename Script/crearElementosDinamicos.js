import { getRandomRegalo } from "./getRandomRegalo.js";
document.addEventListener("DOMContentLoaded", () => {
    const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSA9wloJ7b284uYitoIwHAXfZ83pV_gbElcEy4PEaAeg1lmjJFPUeweKtvoE5qFJ14tpcFpL6s6A4fN/pub?gid=0&single=true&output=csv";

    fetch(url)
        .then(response => response.text())
        .then(data => {
            // console.log("Contenido del CSV:");
            // console.log(data); // Ver los datos sin procesarg
            // Separar por líneas
            const rows = data.split("\n").map(row => row.trim());
            // console.log("Filas después de separar por líneas:", rows);

            // Usar la primera fila como encabezado
            const headers = rows[0].split(",");
            // console.log("Encabezado detectado:", headers);

            // Crear los objetos con base en las filas restantes
            const contribuciones = rows.slice(1) // Evitar la primera fila (encabezado)
                .filter(row => row !== "") // Filtrar filas vacías
                .map(row => {
                    const values = row.split(","); // Dividir la fila en valores
                    // console.log("Valores de fila:", values);
                    return {
                        nombre: values[0] // Usar el primer valor de la fila como 'nombre'
                    };
                });

            console.log("Contribuciones:", contribuciones); // Ver las contribuciones

            const listaIndex = document.getElementById("listaIndex"); // Obtén el <ul>
            let lastRegalo = null; // Almacena el último número generado

            contribuciones.forEach(contribucion => {
                // Crear un <li> para cada contribución
                const li = document.createElement("li");
                li.classList.add("col-3", "col-m-5", "col-s-12");

                // Generar número aleatorio para la imagen del regalo
                lastRegalo = getRandomRegalo(lastRegalo);

                // Crear una imagen del regalo
                const img = document.createElement("img");
                img.src = `./Imagenes/Regalo/regalo${lastRegalo}.png`;
                img.alt = `Regalo ${lastRegalo}`;

                // Crear un título (<h3>) con el mensaje
                const h3 = document.createElement("h3");
                h3.textContent = `${contribucion.nombre}, Gracias por tu aporte al arbolito`;

                // Añadir la imagen y el título al <li>
                li.appendChild(img);
                li.appendChild(h3);

                // Añadir el <li> al <ul>
                listaIndex.appendChild(li);
            });
        });
});


// document.addEventListener("DOMContentLoaded", () => {

//             // Crear dinámicamente la lista
//             const listaIndex = document.getElementById("listaIndex");

//             contribuciones.forEach(contribucion => {
//                 const li = document.createElement("li");
//                 li.classList.add("col-3", "col-m-5", "col-s-12");

//                 const h3 = document.createElement("h3");
//                 h3.textContent = `${contribucion.nombre}, Gracias por tu aporte al arbolito`;

//                 li.appendChild(h3);
//                 listaIndex.appendChild(li);
//             });
//         })
//         .catch(error => console.error("Error al cargar los datos:", error));
// });
