const readline = require("readline-sync");
// 🔹 Ejercicio 1: Clasificador de Números
// Pide al usuario un número y muestra si es positivo, negativo o cero.
// let numero = parseFloat(readline.question("Ingrese un número: "));

// if (numero > 0) {
//     console.log("El número es positivo");
// } else if (numero < 0) {
//     console.log("El número es negativo");
// } else {
//     console.log("El número es cero");
// }
// 🔹 Ejercicio 2: Evaluador de Notas
// Pide al usuario una calificación (0 a 100) y muestra la categoría:
// 90-100: Excelente
// 70-89: Aprobado
// 50-69: En recuperación
// 0-49: Reprobado

// let calificacion = parseFloat(readline.question("Por favor ingrese una calificacion: "));
// switch (true) {
//     case (calificacion >= 90):
//         console.log("Excelente");
//         break;
//     case (calificacion >= 70):
//         console.log("Aprobado");
//         break;
//     case (calificacion >= 50):
//         console.log("En recuperación");
//         break;
//     default:
//         console.log("Reprobado");
// }
// ¿Qué pasa acá?


// Como switch no puede evaluar rangos directamente, se usa true en switch().
// Cada case evalúa una condición booleana (true o false).
// La primera condición que sea true hace que el programa entre en ese case.
// 📌 Conclusión:
// Para comparar valores en un rango, usá if - else if.
// Si querés sí o sí usar switch, tenés que hacer ese truco de switch (true), pero en este caso if es más claro y directo.
// let calificacion = parseFloat(readline.question("Ingrese una calificación (0-100): "));

// if (calificacion < 0 || calificacion > 100) {
//     console.log("Error: La calificación debe estar entre 0 y 100.");
// } else if (calificacion >= 90) {
//     console.log("Excelente");
// } else if (calificacion >= 70) {
//     console.log("Aprobado");
// } else if (calificacion >= 50) {
//     console.log("En recuperación");
// } else {
//     console.log("Reprobado");
// }
// 🔹 Ejercicio 3: Contador con While
// Pide al usuario un número y usa un bucle while para contar desde 1 hasta ese número.
// let contador = parseInt(readline.question("Por favor ingrese un numero: "));

// let limite = parseInt(readline.question("Ingrese un número límite para contar: "));

// let contador = 1; // Comienza desde 1
// while (contador <= limite) {
//     console.log(contador);
//     contador++;
// }
// // 🔹 Ejercicio 4: Tabla de Multiplicar con For
// Pide un número y muestra su tabla de multiplicar del 1 al 10 usando un bucle for.

// let numero = parseInt(readline.question("Ingrese un número para ver su tabla de multiplicar: "));

// if (isNaN(numero)) {
//     console.log("Error: Debe ingresar un número válido.");
// } else {
//     console.log(`\nTabla del ${numero}:`);
//     console.log("--------------------");
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${numero} x ${i} = ${numero * i}`);
//     }
//     console.log("--------------------");
// }

// Ejercicio 5: Número Primo
// 📌 Pedir al usuario un número y decir si es primo o no.
// ✔ Un número es primo si solo es divisible entre 1 y él mismo.
// ✔ Usá un bucle for para verificarlo.

// let numero = parseInt(readline.question("Ingrese un número: "));
// let esPrimo = true;

// if (numero <= 1) {
//     esPrimo = false; // Los números menores o iguales a 1 no son primos
// } else {
//     for (let i = 2; i < numero; i++) {
//         if (numero % i === 0) {
//             esPrimo = false; // Si es divisible por otro número, no es primo
//             break; // Detenemos el bucle porque ya sabemos que no es primo
//         }
//     }
// }

// console.log(esPrimo ? "El número es primo" : "El número NO es primo");

// Ejercicio 6: Suma de Números Pares
// 📌 Pedir un número al usuario y mostrar la suma de todos los números pares desde 1 hasta ese número.
// ✔ Usá un bucle for o while.

// let numero = parseInt(readline.question("Por favor ingrese un numero que no sea menor a 1: "));

// if (numero <= 1) {
//     console.log("Error: Debe ingresar un número mayor a 1");
// } else {
//     let suma = 0; // Variable para acumular la suma de los pares
//     for (let i = 2; i <= numero; i += 2) {
//         suma += i; // Acumula los números pares
//     }
//     console.log(`La suma de los números pares hasta ${numero} es: ${suma}`);
// }

// Ejercicio 7: Inversor de Números
// 📌 Pedir un número y mostrarlo al revés.
// ✔ Ejemplo: 1234 → 4321
// ✔ Tip: Convertir el número a string y usar un bucle o métodos de string.

// let numero = parseInt(readline.question("Ingrese un número para invertir: "));

// // Convertir el número a string, separarlo en caracteres, invertirlo y unirlo de nuevo
// let numeroInvertido = parseInt(numero.toString().split('').reverse().join(''));

// console.log(`Número invertido: ${numeroInvertido}`);
// 🔹 Explicación del código
// numero.toString() → Convierte el número en un string para poder manipularlo.
// .split('') → Divide el string en un array de caracteres.
// 1234 → ['1', '2', '3', '4']
// .reverse() → Invierte el array.
// ['1', '2', '3', '4'] → ['4', '3', '2', '1']
// .join('') → Une los elementos del array en un solo string.
// ['4', '3', '2', '1'] → "4321"
// parseInt(...) → Convierte la cadena invertida de nuevo en número.}

// Ejercicio 8: Factorial
// 📌 Pedir un número y mostrar su factorial.
// ✔ Factorial de 5 = 5 × 4 × 3 × 2 × 1 = 120
// ✔ Usá un bucle for o while.

let numero = parseInt(readline.question("Por favor ingrese un número para ver su factorial: "));
if (isNaN(numero) || numero < 0) {
    console.log("Error: Debe ingresar un número válido mayor o igual a 0");
} else {
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    console.log(`El factorial de ${numero} es: ${factorial}`);
}