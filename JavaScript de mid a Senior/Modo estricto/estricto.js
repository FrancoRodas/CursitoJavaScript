/*"use strict";*/
/*Modo estricto ("use strict"), es un modo para el interprete de codigo, con esta opcion no va a tolerar errores */
/*convierte errores de java en exepciones, */
/*Mejorando la optimizacion de los errores y consigue mejores tiempos de ejecucion */
/*Evita sintaxis usadas en posteriores a ES6*/
/*No permite que el programador realice una mala sintaxis */

/*Usando Modo Estricto, se puede usar en las funciones y en el bloque global,
para usarlo de forma global se pone en la primera linea "use strict". */
/*Variables declaradas */
let nombre1 = "Franco";
/*Modificar propiedades (defineProperty() y writeable), con el primero definimos una propiedad de un objeto y con la segunda establecemos si se puede sobrescribir o no */
const objeto = {};
Object.defineProperty(objeto,`nombre`, {value:"Pedro", writable: false});
console.log(nombre1);
/*Agregar propiedades, con Object.preventExtencions() evita que se añadan propiedades */
/*No se puede agregar propiedades a un string */
const string = "lucas dalto";
string.canal = "soy dalto";
console.log(string.canal);
/*No existen las multiples variables en una funcion */
/*Delete en objetos o variables, con delete "variableexample" se eliminan variables en el modo estricto y sirve para eliminar propiedades */
/*Las palabras reservadas no pueden ser usadas como variables, (todos los comandos como string,number, delete, etc) */
/*Cambio al This, puede funcionar como un constructor, puede crear funciones */
/*Numeros Octales con una "o" adelante y no existe el width ej: (0o25)*/
/*Arguments y Eval no pueden ser variables */
