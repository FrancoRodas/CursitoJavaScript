const readline = require("readline-sync");

// 📌 Ejercicio 1:
// Crea un objeto llamado coche con las siguientes propiedades:

// marca: "Toyota"

// modelo: "Corolla"

// año: 2022

// Luego, imprime en consola el modelo del coche. 🚗

// let coche = {
//     marca : "Lamorgini",
//     modelo : "Huracan",
//     año : 2022,
// }
// coche.año = 2023
// coche.color = "Rojo";
// delete coche.modelo;
// console.log(coche);

// 📌 Ejercicio 2:

// Modifica el año de tu coche a 2023.

// Agrega una propiedad llamada color y asigna un valor de "rojo".

// Elimina la propiedad modelo.

// Muestra el objeto final en consola.

// ¡Inténtalo y me cuentas cómo te va! 🚗💨

// Ejercicio 3 : Crear un objeto con métodos
// Te propongo un ejercicio para que puedas practicar:

// Crea un objeto persona que tenga las siguientes propiedades:

// nombre

// edad

// pais

// Crea un método presentarse dentro del objeto persona, que imprima en consola una presentación de la persona con su nombre, edad y país.

// Usa this dentro del método presentarse para acceder a las propiedades del objeto.

// let ciudadano = {
//     nombre: "Jorgito",
//     edad: 45,
//     pais: "Argentina",
//     presentarse(){
//         console.log(`Hola, me llamo ${this.nombre}, tengo ${this.edad} años y vivo en ${this.pais}`);
//     }
// }
// ciudadano.presentarse();

// ✍ Ejercicio 4: 
// 🔹 Crea un objeto llamado libro con las propiedades: titulo, autor y año.
// 🔹 Usa for...in para recorrer el objeto y mostrar las propiedades con sus valores.
// 🔹 Usa Object.keys(), Object.values() y Object.entries() para mostrar la información en consola.

// ¡Dale, probá hacerlo y pasame tu código cuando lo tengas! 💪🔥

// let libro = {
//     titulo: "El Señor de los Anillos",
//     autor: "J.R.R. Tolkien",
//     año: 1954,
// }

// for (let propiedad in libro) {
//     console.log(`${propiedad}: ${libro[propiedad]}`);
// }

// // let propiedades = Object.keys(libro);
// // console.log(propiedades);

// // let propiedades = Object.values(libro);
// // console.log(propiedades);

// let propiedades = Object.entries(libro);
// console.log(propiedades);

// 💡 Ejercicio extra (opcional)
// 🔹 Crea un objeto llamado videojuego con las propiedades: nombre, plataforma y añoLanzamiento.
// 🔹 Usa for...in para recorrerlo y mostrar sus propiedades con sus valores.

// ¡Si te queda alguna duda, preguntame sin miedo! 🚀🔥

let videojuego = {
    nombre: "Trepang2",
    plataforma: "PC",
    añoLanzamiento: 2023,
    mostrarInfo(){
        console.log(`El juego ${this.nombre} salio en el año ${this.añoLanzamiento} para ${this.plataforma}, más adelante se porteo a otras plataformas`);} 
}

for (let propiedad in videojuego) {
    console.log(`${propiedad}: ${videojuego[propiedad]}`);
}

videojuego.mostrarInfo();   