const readline = require("readline-sync");
// Ejercicio 1: Cálculo de edad
// Pide al usuario su año de nacimiento y el año actual.
// Convierte los valores en números.
// Calcula y muestra su edad.
// Usa operadores para verificar si es mayor de edad.
// let nacimiento = readline.question("Por favor ingrese su año de nacimiento: ");
// let añoActual = readline.question("Por favor ingrese el año actual: ");

// let nacimientoNumerica = parseInt(nacimiento);
// let añoActualNumerico = parseInt(añoActual);
// console.log("tienes " + (añoActualNumerico - nacimientoNumerica) + " años");
// if (añoActualNumerico - nacimientoNumerica >= 18) {
//     console.log("Eres mayor de edad");
// } else {
//     console.log("Eres menor de edad");
// }

// Ejercicio 2: Cálculo de descuento
// Pide al usuario el precio de un producto y el porcentaje de descuento.
// Convierte los valores en números.
// Calcula el precio final después del descuento.
// Muestra el resultado con un mensaje adecuado.
// let precio = readline.question("Por favor ingrese el precio del producto: ");
// let descuento = readline.question("Ahora ingrese su cupon de descuento: ");
// let precioNumerico = parseInt(precio);
// let descuentoNumerico = parseInt(descuento);
// console.log(precioFinal = precioNumerico - (precioNumerico * (descuentoNumerico / 100)));
// console.log("su precio final es: " + precioFinal);


// Ejercicio 3: Número par o impar
// Pide al usuario un número.
// Usa el operador módulo (%) para determinar si es par o impar.
// Muestra el resultado.
// let numero1 = readline.question("Por favor ingrese un número: ");
// let numero1Numerico = parseInt(numero1);
// console.log(resultado = numero1Numerico % 2);
// if (resultado == 0) {
//     console.log("El número es par");
// } else { console.log("El número es impar"); }

// Ejercicio 4: Calculadora básica
// 📌 Objetivo:
// Pide al usuario dos números y una operación matemática (+, -, *, /). Realiza la operación y muestra el resultado.
// let numero2 = parseFloat(readline.question("por favor ingrese un numero: "));
// let numero3 = parseFloat(readline.question("por favor ingrese otro numero: "));
// let operacion = readline.question("seleccione una operacion (+, -, *, /): ");

// let resultado;

// if (operacion === "+") {
//     resultado = numero2 + numero3;
// } else if (operacion === "-") {
//     resultado = numero2 - numero3;
// } else if (operacion === "*") {
//     resultado = numero2 * numero3;
// } else if (operacion === "/") {
//     if (numero3 !== 0) { // Evitar la división por cero
//         resultado = numero2 / numero3;
//     } else {
//         resultado = "Error: No se puede dividir por 0.";
//     }
// } else {
//     resultado = "Operación no válida.";
// }

// console.log("El resultado es: " + resultado);

// Ejercicio 5: Cálculo de salario
// 📌 Objetivo:
// Pide al usuario las horas trabajadas y el pago por hora. Calcula su salario semanal y verifica si supera los $500. Si es así, muestra un mensaje indicando que ha ganado bien esta semana.
// let horasTrabajadas = parseFloat(readline.question("Por favor ingrese las horas trabajadas: "));
// let pagoPorHora = parseFloat(readline.question("Por favor ingrese el pago por hora: "));
// let salarioSemanal = horasTrabajadas * pagoPorHora;
// if (salarioSemanal > 500) {
//     console.log("Ha ganado bien esta semana");
//     } else {
//         console.log("No ha ganado bien esta semana");
//     };

// Ejercicio 6: Conversión de temperatura
// 📌 Objetivo:
// Pide al usuario una temperatura en grados Celsius y conviértela a Fahrenheit usando la fórmula:

// let celsius = parseFloat(readline.question("Ingrese la temperatura en celsius: "));
// let temperaturaFahrenheit = (celsius * 9/5) + 32;
// console.log("La temperatura en fahrenheit es: " + temperaturaFahrenheit);

// 📌 Objetivo:
// Pide al usuario tres números y determina cuál es el mayor y cuál es el menor.
// let numero1 = parseFloat(readline.question("Ingrese el primer número: "));
// let numero2 = parseFloat(readline.question("Ingrese el segundo número: "));
// let numero3 = parseFloat(readline.question("Ingrese el tercer número: "));

// let mayor;
// let menor;

// // Determinar el número mayor
// if (numero1 >= numero2 && numero1 >= numero3) {
//     mayor = numero1;
// } else if (numero2 >= numero1 && numero2 >= numero3) {
//     mayor = numero2;
// } else {
//     mayor = numero3;
// }

// // Determinar el número menor
// if (numero1 <= numero2 && numero1 <= numero3) {
//     menor = numero1;
// } else if (numero2 <= numero1 && numero2 <= numero3) {
//     menor = numero2;
// } else {
//     menor = numero3;
// }

// console.log("El número mayor es: " + mayor);
// console.log("El número menor es: " + menor);

// Ejercicio 7: Promedio de calificaciones
// 📌 Objetivo:
// Pide al usuario tres calificaciones, calcula el promedio y determina si aprobó (promedio mayor o igual a 6).

// let calificacion1 = 5;
// let calificacion2 = 2;
// let calificacion3 = 8;

// let promedio = parseFloat((calificacion1 + calificacion2 + calificacion3) / 3);

// if (promedio >= 6) {
//     console.log(`El promedio del alumno es de ${promedio.toFixed(2)} y esta aprobado`);
// } else {
//     console.log(`El promedio del alumno es de ${promedio.toFixed(2)} y esta desaprobado`);
// }

// Ejercicio 8: Cálculo de edad en días
// 📌 Objetivo:
// Pide al usuario su edad en años y convierte esa edad a días, considerando que un año tiene 365 días.

// let edad = parseInt(readline.question("Ingrese su edad: "));
// let dias = 365;
// let totalDias = edad * dias;

// console.log(`has vivido ${totalDias} días`);

// Ejercicio 7: Descuento por cantidad
// 📌 Objetivo:
// Pide al usuario el precio de un producto y la cantidad comprada. Si compra más de 10 unidades, aplica un 15% de descuento sobre el total.

// let precio = parseFloat(readline.question("Ingrese el precio del producto: "));
// let cantidad = parseInt(readline.question("Ingrese la cantidad comprada: "));
// let precioTotal = precio * cantidad;
// if (cantidad > 10) { 
//     descuentoAplicado = precioTotal * 15 / 100;
//     pagoTotal = precioTotal - descuentoAplicado;
//     console.log(`Total sin descuento: ${precioTotal}, descuento aplicado: ${descuentoAplicado}, total a pagar: ${pagoTotal}`);
// } else {
//     console.log(`El total a pagar es: ${precioTotal}`);
// }

// Ejercicio 8: Conversión de horas a minutos y segundos
// 📌 Objetivo:
// Pide al usuario una cantidad de horas y conviértelas a minutos y segundos.

// let horas = parseInt(readline.question("Ingrese la cantidad de horas: "));
// let minutos = horas * 60;
// let segundos = minutos * 60;

// console.log(`${horas} horas equivalen a ${minutos} minutos, y estos minutos equivalen a ${segundos} segundos`);

// Ejercicio 9: Calculadora de IMC (Índice de Masa Corporal)
// Pide al usuario su peso en kg y su altura en metros. Calcula su IMC con la fórmula:

// 𝐼𝑀𝐶 = peso/altura**2
// Si el IMC es:
// Menor a 18.5 → "Bajo peso"
// Entre 18.5 y 24.9 → "Peso normal"
// Entre 25 y 29.9 → "Sobrepeso"
// 30 o más → "Obesidad"
// Muestra el resultado con su respectiva categoría.

// let peso = parseFloat(readline.question("Ingrese su peso en kg: "));
// let altura = parseFloat(readline.question("Ingrese su altura en metros: "));
// let imc = peso / (altura * altura);

// if (imc < 18.5) {
//     console.log(`Su IMC es: ${imc.toFixed(2)}, categoría: Bajo peso, a ver si dejamos el veganismo y empezamos a comer de verdad crack`);
// } else if (imc >= 18.5 && imc <= 24.9) {
//     console.log(`Su IMC es: ${imc.toFixed(2)}, categoría: Peso normal, tas bien pibe no te hagas la cabeza`);
// } else if (imc >= 25 && imc <= 29.9) {
//     console.log(`Su IMC es: ${imc.toFixed(2)}, categoría: Sobrepeso, a ver si largas los postres gordito`);
// } else if (imc >30) {
//     console.log(`Su IMC es: ${imc.toFixed(2)}, categoría: Obesidad, vos tenes que dejar de comer una fabrica de alfajores y empezar a salir a caminar, gordo cementerio de patys`);
// }

// Ejercicio 10: Cálculo del salario con horas extra
// Pide al usuario cuántas horas trabajó y cuánto gana por hora.

// Si trabajó más de 40 horas, las horas extra se pagan al 150% del valor normal.
// Calcula el salario total incluyendo las horas extra.

let horasTrabajadas = parseInt(readline.question("Ingrese la cantidad de horas trabajadas: "));
let salario = parseFloat(readline.question("Ingrese su salario por hora: "));

let salarioTotal; // Declaramos la variable antes

if (horasTrabajadas <= 40) { 
    salarioTotal = salario * horasTrabajadas;
} else {
    let horasNormales = 40;
    let horasExtras = horasTrabajadas - 40;
    let pagoHorasExtras = horasExtras * (salario * 1.5);
    salarioTotal = (horasNormales * salario) + pagoHorasExtras;
}

console.log(`Su salario total es: ${salarioTotal.toFixed(2)} dólares`);
// Ejercicio 11: Comparador de edades
// Pide el nombre y la edad de dos personas. Muestra quién es mayor, quién es menor o si tienen la misma edad.
let nombre1 = readline.question("Ingrese el nombre de la primera persona: ");
let edad1 = parseInt(readline.question("Ingrese la edad de la primera persona: "));
let nombre2 = readline.question("Ingrese el nombre de la segunda persona: ");
let edad2 = parseInt(readline.question("Ingrese la edad de la segunda persona: "));

if (edad1 > edad2) {
    console.log(`${nombre1} es mayor que ${nombre2} por ${edad1 - edad2} años`);
} else if (edad1 < edad2) {
    console.log(`${nombre2} es mayor que ${nombre1} por ${edad2 - edad1} años`); // 🔹 Aquí estaba el error
} else {
    console.log(`${nombre1} y ${nombre2} tienen la misma edad`);
}

// Ejercicio 12: Conversor de unidades mixto
// Pide una cantidad en kilómetros y conviértela a:

// Metros
// Centímetros
// Milímetros
// Muestra los resultados.

let kilometros = parseFloat(readline.question("Ingrese una cantidad en kilómetros: "));
let metros = kilometros * 1000;
let centimetros = kilometros * 100000;
let milimetros = kilometros * 1000000;

let medidas = readline.question("Por favor seleccione a qué medida desea convertirlo: ").toLowerCase();

if (medidas === "metros") {
    console.log(`La distancia en metros es de: ${metros} m`);
} else if (medidas === "centímetros" || medidas === "centimetros") {
    console.log(`La distancia en centímetros es de: ${centimetros} cm`);
} else if (medidas === "milímetros" || medidas === "milimetros") {
    console.log(`La distancia en milímetros es de: ${milimetros} mm`);
} else {
    console.log("La opción seleccionada no es válida");
}

// Ejercicio 13: Ahorro mensual y anual
// Pide al usuario cuánto dinero ahorra por mes. Calcula y muestra:

// Cuánto ahorrará en 6 meses.
// Cuánto ahorrará en 1 año.
// Cuánto ahorrará en 5 años.

let ahorros = parseFloat(readline.question("Ingrese cuánto ahorra por mes: "));

let tiempo = readline.question("Ingrese el plazo en el que desea calcular el ahorro (6 meses, 1 año, 5 años): ").toLowerCase();

if (tiempo === "6 meses") {
    console.log(`En 6 meses ahorrará: $${ahorros * 6}`);
} else if (tiempo === "1 año") {
    console.log(`En 1 año ahorrará: $${ahorros * 12}`);
} else if (tiempo === "5 años") {
    console.log(`En 5 años ahorrará: $${ahorros * 60}`);
} else {
    console.log("La opción seleccionada no es válida");
}
