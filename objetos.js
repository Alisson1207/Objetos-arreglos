//Alisson Viteri

//Pagina seleccionada: https://www.multicines.com.ec/

//Fundamentos

//Acceder a las claves
'use strict';
const pelicula = {
    titulo: "Sonríe",
    duracion: "2h 20min",
    horarios: ['19:00', '21:40'],
    genero: "Terror",
    horarioActual() {
        return `Función en este momento: ${this.horarios[0]}`;
    },
    enviarRecordatorio(cliente) {
        return `Recordatorio ${cliente} para la siguiente función: ${this.horarios[1]}`;
    }
}

console.log(pelicula.horarioActual());
console.log(pelicula.enviarRecordatorio("Juan"));


// Agregar un par de clave y valor al objeto
pelicula.imagen = "pelicula-sonrie.png";

// Eliminar un par de clave y valor del objeto
delete pelicula.duracion;

console.log(pelicula);

//----------------------------------------------------------------------------------------------------------------------------------------

//Destrucción de objetos

const producto = {
    nombre: "Combo 1",
    precio: 9.75,
    incluye: ['1 Canguil mediano', '1 Bebida de 32oz', '1 hot dog'],
    disponible: true,
    obtenerDetalles() {
        return `El combo incluye: ${this.incluye[0]}, ${this.incluye[1]} y ${this.incluye[2]}.`;
    },
    verificarDisponibilidad() {
        return this.disponible ? "Producto disponible" : "Producto no disponible";
    }
}

const { nombre, precio, disponible } = producto;

console.log(producto.obtenerDetalles());
console.log(producto.verificarDisponibilidad());
console.log(`Nombre: ${nombre}, Precio: ${precio}, Disponible: ${disponible}`);

//----------------------------------------------------------------------------------------------------------------------------------------

//Congelar un objeto

//Freeze

'use strict';
const usuario = {
    nombreUsuario: "Alisson",
    apellidoUsuario: "Viteri",
    telefono: "0998904589",
    correo: "alisson@gmail.com",
};


Object.freeze(usuario); //congela el objeto, impidiendo que se agreguen, eliminen o modifiquen propiedades.
console.log(Object.isFrozen(usuario)); //Verifica si el objeto está congelado, imprimiendo un booleano

// Intentar agregar una nueva propiedad no se debe agregar ya que esta congelado el objeto
usuario.cedula= "1290893789"; 

console.log(usuario);

//----------------------------------------------------------------------------------------------------------------------------------------

// Seal
// con seal no se puede agregar o eliminar propiedades, pero  si se puede modificar las propiedades
Object.seal(usuario)
console.log(Object.isSealed(usuario))
usuario.apellidoUsuario= "Castro"
console.log(usuario);

//----------------------------------------------------------------------------------------------------------------------------------------

// Spread Operator
'use strict';

const comboCanguil = {
    nombre: "Combo Canguil",
    precio: 7.50,
    incluye: ['Canguil grande', 'Bebida 32oz'],
};

const comboHotDog = {
    nombre2: "Combo Hot Dog",
    precio2: 8.00,
    incluye2: ['Hot Dog', 'Bebida 32oz'],
};

// Combinar los combos
const combosMulticines = {...comboCanguil, ...comboHotDog};

console.log(combosMulticines);

//----------------------------------------------------------------------------------------------------------------------------------------

// This
'use strict';

const snackNachos = {
    nombre: "Nachos",
    precio: 4.50,
    salsa: [ 'Queso', 'Chili','Mixta'],
    mostrarDetalles() {
        return `Snack: ${this.nombre}, Precio: $${this.precio}, Salsa: ${this.salsa[0]}.`;
    },
    disponibilidad() {
        return `El snack ${this.nombre} está disponible.`; //this, permite acceder a la información contenida en ese objeto
    }
};
console.log(snackNachos.mostrarDetalles());
console.log(snackNachos.disponibilidad());

//----------------------------------------------------------------------------------------------------------------------------------------

// Métodos para trabajar con objetos

'use strict';

const combo3 = {
    nombre: "Combo 3",
    precio: 14.05,
    incluye: ['1 canguil mediano', '2 bebidas 32oz', '2 snacks'],
    mostrarDetalles() {
        return `Combo: ${this.nombre}, Precio: $${this.precio}, Incluye: ${this.incluye}`;
    }
};

console.log(combo3.mostrarDetalles()); 

// Obtener claves, valores y entradas
console.log("Obtener las claves:", Object.keys(combo3)); // Obtiene las claves del objeto
console.log("Obtener los valores:", Object.values(combo3)); // Obtiene los valores de las propiedades 
console.log("Obtener las claves y valores en un array:", Object.entries(combo3)); // Obtiene un array de pares clave-valor del objeto.

//----------------------------------------------------------------------------------------------------------------------------------------

// (ES6) Nombres abreviados de propiedades 
'use strict';

const nombreVaso = "Vaso Marvels";
const precioVaso = 10.99;
const modelos = 3;

const newProduct = {
    nombreVaso,
    precioVaso,
    modelosEleccion: modelos
};

console.log(newProduct);




