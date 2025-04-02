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

// let numero = parseInt(readline.question("Por favor ingrese un número para ver su factorial: "));
// if (isNaN(numero) || numero < 0) {
//     console.log("Error: Debe ingresar un número válido mayor o igual a 0");
// } else {
//     let factorial = 1;
//     for (let i = 1; i <= numero; i++) {
//         factorial *= i;
//     }
//     console.log(`El factorial de ${numero} es: ${factorial}`);
// }

// Ejercicio 9: Sumatoria de Números:

// Pide al usuario un número y muestra la suma de todos los números del 1 hasta ese número.

// Ejemplo: Si el usuario ingresa 5, la suma sería 1 + 2 + 3 + 4 + 5 = 15.

// let numero = parseInt(readline.question("Ingrese un numero: "));
// let suma = 0;

// if (numero < 1) {
//     console.log("Error: Debe ingresar un número mayor o igual a 1.");
// } else {
//     for (let i = 1; i <= numero; i++) {
//         suma += i;
//     }
//     console.log(`La sumatoria de los números hasta ${numero} es: ${suma}`);
// }

// Ejercicio 10: Potencias de un Número:

// Pide al usuario un número y otro exponente, luego muestra todas sus potencias desde 1 hasta el exponente ingresado.

// Ejemplo: Si ingresa 2 y 4, debe mostrar 2^1 = 2, 2^2 = 4, 2^3 = 8, 2^4 = 16.

// let numero = parseInt(readline.question("Ingrese un número: "));
// let exponente = parseInt(readline.question("Ingrese un exponente: "));

// if (isNaN(numero) || isNaN(exponente) || numero < 0 || exponente < 0) {
//     console.log("Error: Debe ingresar números válidos y exponentes mayores o iguales a 0");
// } else {
//     let resultado = 1; // Comienza en 1 porque cualquier número elevado a 0 es 1
//     for (let i = 0; i <= exponente; i++) {
//         console.log(`${numero} elevado a la potencia ${i} es igual a ${resultado}`);
//         resultado *= numero; // Multiplica por la base en cada iteración
//     }
// };

// Ejercicio 11 Dibujar un triángulo con asteriscos:

// Pide al usuario un número y usa un for para dibujar un triángulo de asteriscos con esa altura.

// Si ingresa 5, el resultado debe ser:

// let filas = parseInt(readline.question("Ingrese el número de filas: "));

// if (isNaN(filas) || filas <= 0) {
//     console.log("Error: Ingrese un número válido y mayor a 0.");
// } else {
//     for (let i = 1; i <= filas; i++) {  // Maneja las filas
//         let linea = "";  // Almacena los asteriscos de cada línea
//         for (let j = 1; j <= i; j++) {  // Agrega los asteriscos
//             linea += "*";
//         }
//         console.log(linea);  // Imprime la línea con los asteriscos
//     }
// };

// Ejercicio 12: Número aleatorio adivinado por el usuario:

// Genera un número aleatorio entre 1 y 100 y haz que el usuario lo adivine.

// Usa un while para repetir la pregunta hasta que lo adivine.

// Da pistas diciendo si el número ingresado es mayor o menor.
// let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
// let pregunta;

// do {
//     pregunta = parseInt(readline.question("Ingrese un número entre 1 y 100: "));

//     if (isNaN(pregunta) || pregunta < 1 || pregunta > 100) {
//         console.log("Error: Debe ingresar un número válido entre 1 y 100.");
//     } else if (pregunta > numeroAleatorio) {
//         console.log("El número es menor, intenta nuevamente.");
//     } else if (pregunta < numeroAleatorio) {
//         console.log("El número es mayor, intenta nuevamente.");
//     }

// } while (pregunta !== numeroAleatorio);

// console.log(`🎉 ¡Felicidades! Adivinaste el número ${numeroAleatorio}.`);

// Ejercicio 13: Contador Simple
// Pide un número al usuario y usa un while para contar desde 1 hasta ese número.

// let numero = parseInt(readline.question("Por favor ingrese un numero mayor a 1:"));
// let contador = 1;

// while (contador <= numero) {
//     console.log(contador);
//     contador++;
// }

// Ejercicio 14: Suma Acumulativa
// Pide números al usuario y súmalos hasta que ingrese un 0. Luego, muestra el total de la suma.
// let numeros;
// let suma = 0; // Inicializar la suma

// do {
//     numeros = parseInt(readline.question("Ingrese un número (0 para terminar): "));
//     if (!isNaN(numeros)) { // Verificamos que el usuario no ingrese un valor no numérico
//         suma += numeros; // Acumulamos la suma
//     } else {
//         console.log("Error: Ingrese un número válido.");
//     }
// } while (numeros !== 0); // Se repite hasta que el usuario ingrese 0

// console.log(`La suma de los números ingresados es: ${suma}`);

// Ejercicio 15: Validar Entrada
// Pide al usuario que ingrese "Hola" exactamente como está escrito. Si no lo hace, vuelve a pedirlo hasta que lo escriba bien.
// let palabra;

// do {
//     palabra = readline.question("Ingrese la palabra 'Hola' exactamente como está escrita:");  
//     if (palabra !== "Hola") {
//         console.log("Error, ingrese la palabra solicitada");
//     }
// } while (palabra !== "Hola");

// console.log("La palabra ingresada coincide con la solicitada");

// 🔹 Ejercucio 16: Adivina el número
// El usuario debe adivinar un número aleatorio entre 1 y 10. Si ingresa algo fuera de rango o no es un número, muestra un error y pide nuevamente el número.
// const numeroSecreto = Math.floor(Math.random() * 10) + 1;
// let intento;

// do {
//     intento = parseInt(readline.question("Adivina el número (entre 1 y 10): "));

//     if (isNaN(intento) || intento < 1 || intento > 10) {
//         console.log("Error: Debes ingresar un número entre 1 y 10.");
//     } else if (intento !== numeroSecreto) {
//         console.log("Incorrecto, intenta de nuevo.");
//     }

// } while (intento !== numeroSecreto);

// console.log("🎉 ¡Felicidades! Adivinaste el número.");

// // 🔹 Ejercicio 2: Validador de contraseña
// // Pide al usuario una contraseña (mínimo 6 caracteres, sin espacios). Si la contraseña no cumple, muestra un error y la vuelve a pedir.

// let contraseña;

// do {
//     contraseña = readline.question("Crea una contraseña (mínimo 6 caracteres, sin espacios): ");

//     if (contraseña.length < 6) {
//         console.log("❌ Error: La contraseña debe tener al menos 6 caracteres.");
//     } else if (contraseña.includes(" ")) {
//         console.log("❌ Error: La contraseña no debe contener espacios.");
//     }

// } while (contraseña.length < 6 || contraseña.includes(" "));

// console.log("✅ Contraseña creada con éxito.");