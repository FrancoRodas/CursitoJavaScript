const readline = require("readline-sync");
//Ejercicio 1: Declaración de variables
//Crea tres variables:

//Un string con tu nombre.
let nombre = "Franco";
let apellido = "Rodas";
//Un número con tu edad.
let edad = 23;   
//Un booleano que indique si eres mayor de edad.
let esMayor = true;

//Ejercicio 2: Detectando Tipos de Datos
//Usa typeof para verificar los tipos de estas variables y muéstralos en consola, esto deberia aparecer en la consola al escribir typeof(nombre de la funcion):
typeof nombre === "string" ? console.log("La variable nombre es un string") : console.log("La variable nombre NO es un string");
typeof apellido === "string" ? console.log("La variable apellido es un string") : console.log("La variable apellido NO es un string");
typeof edad === "number" ? console.log("La variable edad es un number") : console.log("La variable edad NO es un numero");
typeof esMayor === "boolean" ? console.log("La variable esMayor es un boolean") : console.log("La variable esMayor NO es un booleano");

//Ejercicio 3: Operaciones con Tipos de Datos
//Crea una variable con el número "20" (como string).
//Convierte ese string a número y súmale 5.
//Convierte el número resultante en un string y concaténalo con " años". parseInt convierte un numero string a numero real
//Muestra el resultado en consola.

let numero = "20";
let numeroEntero = parseInt(numero) + 5;
console.log(numeroEntero + " años");

let numeroDecimal = "20.75";
let soloEntero = parseInt(numeroDecimal);
let conDecimal = parseFloat(numeroDecimal);
//parseInt convierte un numero string a numero real entero, mientras que parseFloat convierte a decimal
console.log("Número entero:", soloEntero);
console.log("Número con decimales:", conDecimal);

//Ejercicio 4: Coerción de Tipos
//¿Qué crees que imprimirán estas líneas de código? Prueba ejecutarlas y verifica:

console.log(10 + "5");  // Aquí la coerción convierte el número 10 en un string y lo concatena con "5", dando como resultado "105" (string).
console.log("10" - 5);  // Aquí la coerción convierte el string "10" en número y realiza la resta: 10 - 5 = 5.
console.log("10" * 2);  // Aquí la coerción convierte "10" en número y realiza la multiplicación: 10 * 2 = 20.
console.log("10" / "2");  // Aquí ambos strings se convierten en números porque la división solo se puede hacer con números, resultando en 5.
console.log("5" + true);  // Aquí el booleano true se convierte en string y se concatena con "5", resultando en "5true".
//Explica con comentarios en tu código por qué da ese resultado.

//Ejercicio 5: Operadores Lógicos, predice que va a pasar con los logs y como cambian los resultados
console.log(nombre + edad);  //Se va a convertir en Franco23 ya que se convierte el numero en un string y se concatenan
console.log(nombre - edad);  // Explicación: El operador `-` solo funciona con números.Como `nombre`es un string y `edad` es un número, JS intenta convertir "Franco" en número, pero no puede, por lo que devuelve NaN (Not a Number).
console.log(edad + " años"); // Se convierte la edad en un string y se concatena con el string años
console.log("10" * 2);  // Se multiplican los valores y se muestra el resultado 20  
console.log("50" / "5");  // Ambos se vuelven numeros y se divide dando 10 
console.log("10" + 5 + 3); // Se suma 5 y 3 y se concatenan con el 10 formando el string 1053, el `"10"` **convierte todo en string**.
console.log(5 + 3 + "10");  // - `5 + 3` → `8` (suma normal, porque ambos son números)- 8 + "10"` → `"810"` (se convierte en string y se concatena)

//Ejercicio 6: Completa el codigo para que todas las conversiones sean correctas.
let edadTexto = String(edad); // Convierte edad a string
console.log(typeof edadTexto); // ¿Qué tipo de dato tiene ahora?, Tiene un dato sting

let edadNumero = Number(edadTexto); // Convierte edadTexto a número
console.log(typeof edadNumero); // ¿Es un número ahora?, si, se convirtio en un numero

let verdadero = Boolean("Hola"); // ¿Qué crees que imprimirá esto? verdadero, ya que al detectar un caracter dentro del string va a valer 1, o sea verdadero
let falso = Boolean(""); // ¿Y esto? falso, ya que no hay ningun valor en el string
console.log(verdadero, falso);

//Ejercicio 7: Descubre la diferencia entre parseInt y parseFloat
let precio = "199.99";
let precioEntero = parseInt(precio);
let precioDecimal = parseFloat(precio);

console.log(precioEntero);  // ¿Qué imprimirá? este imprime solo 199 eliminando los decimales
console.log(precioDecimal); // ¿Y este? este imprime el precio tal como esta

// Desafio extra: Escribe un codigo que pida la edad del usuario, la convierta en numero y muestre en consola si el usuario es mayor de edad o no
let edadUsuario = "23";
let edadNum = Number(edadUsuario) //convierte la edad a número
if (edadNum >= 18) { // Completa la condición
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

// let edadUsuario = prompt("Ingresa tu edad:");

// if (!isNaN(edadUsuario) && edadUsuario.trim() !== "") {  
//     let edadNum = Number(edadUsuario);  
//     if (edadNum >= 18) {  
//         console.log("Eres mayor de edad.");  
//     } else {  
//         console.log("Eres menor de edad.");  
//     }  
// } else {  
//     console.log("Por favor, ingresa un número válido.");  
// }

// UNIDAD 2
console.log("-----------------AQUI EMPIEZA LA UNIDAD 2--------------------")
// 📌 Ejercicio 1:
// Declara dos variables num1 y num2 e imprime en consola:

// La suma de ambos números.
// La resta de ambos números.
// Si num1 es mayor o igual a num2.
// Si num1 es par (usa el operador %).
let num1 = 10;
let num2 = 6;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 >= num2);
console.log(num1 % 2 == 0);

// 📌 Ejercicio 2:
// Pide al usuario dos números con readline-sync y muestra si:
// Son iguales (== y ===).
// Su suma es mayor que 100.
// Uno de ellos es menor que 10.

let nombre2 = readline.question("Como te llamas?");
console.log("Hola, " + nombre2 + "!");
let edad2 = readline.question("Cuantos años tienes?");
edad2 = Number(edad2);
if (edad2 >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}
let respuesta = readline.question("¿Quieres seguir? (si/no): ");
let leGustaProgramar = respuesta.toLowerCase() === "si";
console.log("¿Te gusta programar?: " + leGustaProgramar);

// 1. Pedir números al usuario
let num3 = readline.question("Ingresa el primer numero: ");
let num4 = readline.question("Ingresa el segundo numero: ");

// 2. Convertirlos a números
num3 = Number(num3);
num4 = Number(num4);

// 3. Realizar las operaciones
console.log("Suma: " + (num3 + num4));
console.log("Resta: " + (num3 - num4));
console.log("Multiplicación: " + (num3 * num4));
console.log("División: " + (num3 / num4));
console.log("Módulo (resto de la división): " + (num3 % num4));