//Alisson Viteri

//Pagina seleccionada: https://www.multicines.com.ec/

//Fundamentos

//Uso de propiedades

'use strict';

const peliculas = ["Sonríe", "MissFit", "Venom3"];
const combos = ["Combo 1", "Combo 2", "Combo 3"];
const horarios = ["19:00", "21:40", "22:00"];

console.log("Número de películas disponibles:", peliculas.length);
console.log("Número de combos disponibles:", combos.length);
horarios.length > 0 ? console.log("Horarios disponibles para las funciones") : console.log("No hay horarios disponibles");

//----------------------------------------------------------------------------------------------------------------------------------------

// Recorrido
const funciones = ["Acción", "Comedia", "Terror"];

// Primera forma de iterar sobre los elementos de un arreglo 
for (let i = 0; i < funciones.length; i++) {
    console.log(funciones[i]);
}

// Segunda forma de iterar sobre los elementos de un arreglo 
funciones.forEach((funcion, index) => console.log(`${index} - ${funcion}`));

// Tercera forma de iterar sobre los elementos de un arreglo 
const newFunciones = funciones.map(funcion => `Género: ${funcion}`); //Crea un nuevo arrglo
console.log(funciones);
console.log(newFunciones); // No altera el arreglo original

const horariosFunciones= [
    {
        hora: "17:00",
        sala: 1
    },
    {
        hora: "19:30",
        sala: 2
    }
];

horariosFunciones.forEach(horario => console.log(`Hora: ${horario.hora} - Sala: ${horario.sala}`));

//----------------------------------------------------------------------------------------------------------------------------------------

//Métodos
"use strict";

const peliculasEnCartelera = [
    { titulo: "Venom 3", duracion: "2h" },
    { titulo: "El gran aviso", duracion: "1h 40min" },
];

// Agregar una película al final
peliculasEnCartelera.push({ titulo: "Un panda en África", duracion: "1h 40min" });

// Agregar una película al inicio
peliculasEnCartelera.unshift({ titulo: "Joker 2", duracion: "2h 30min" });

// Remover la última película
peliculasEnCartelera.pop();

// Remover la primera película
peliculasEnCartelera.shift();

// Crear una copia del arreglo
const peliculasCopia = peliculasEnCartelera.slice();

// Comprobar si es un arreglo
console.log(Array.isArray(peliculasEnCartelera)); // true

// Determinar el tamaño del arreglo
console.log("Número de películas en cartelera:", peliculasEnCartelera.length);

// Mostrar las películas restantes
console.log(peliculasEnCartelera);

//----------------------------------------------------------------------------------------------------------------------------------------

//Destruturación de array
'use strict';

const datosSucursal = ["Multicines Quicentro Norte", "Sala 5", 150, true, {direccion: "Av. De La Prensa"}, ["Nachos", "Bebida", "Dulces"]];

const [nombreCine, sala, duracion, disponibilidad, ubicacion, snacks] = datosSucursal;

console.log(nombreCine);
console.log(sala);
console.log(duracion);
console.log(disponibilidad);
console.log(ubicacion);
console.log(snacks);

// Saltar el valor en un arreglo
const [bebida, , dulce1, dulce2] = ["Coca Cola", "Canguil", "Tic Tac", "Kit Kat"];
console.log(bebida);
console.log(dulce1);
console.log(dulce2);

// Desestructurando un arreglo anidado
const itemsSnack = ["Canguil", "Gomitas", "Galletas", ["Galak", "Crunch", "Ring pop"]];
const dulcesAnidados = itemsSnack[3];
const galak = dulcesAnidados[0];
console.log(galak);

//----------------------------------------------------------------------------------------------------------------------------------------

//Rest Operator

'use strict';
const bebidas = ["Agua sin gas", "Coca Cola", "Agua con gas", "Fanta", "Sprite"];

// Desestructuración del arreglo para asignar los primeros elementos a variables y los restantes a 'rest'
const [aguaSinGas, cocaCola, ...rest] = bebidas;

console.log(aguaSinGas);      
console.log(cocaCola); 
console.log(rest);      // Imprime el resto del arreglo: ["Agua sin gas", "Coca Cola", "Agua con gas", "Fanta", "Sprite]

//----------------------------------------------------------------------------------------------------------------------------------------

//Spread Operator

'use strict';
const peliculascar = ["Aventuras caninas", "Alas Blancas", "El candidato honesto"];
const generoscar = ["Animada", "Familiar", "Coomedia"];

// Usando el operador spread para combinar los dos arreglos en uno nuevo
const peliculasYGeneros = [...peliculascar, ...generoscar];

console.log(peliculasYGeneros);

