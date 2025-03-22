const suma = (num1, num2)=>{
    return parseInt(num1) + parseInt(num2);
}
const resta = (num1 , num2)=>{
    return parseInt(num1) - parseInt(num2);
}
const division = (num1, num2)=>{
    return parseInt(num1) / parseInt(num2);
}
const multiplicasion = (num1, num2)=>{
    return parseInt(num1) * parseInt(num2);
}

alert("¿Que operacion deseas hacer?")
let operacion = prompt("1: suma, 2: resta, 3: division, 4: multiplicacion");

if (operacion == 1) {
    let num1 = prompt("Primer numero para sumar");
    let num2 = prompt("Segundo numero para sumar");
    resultado = suma(num1, num2);
    alert(`Tu resultado es ${resultado}`)
}
else if (operacion == 2) {
    let num1 = prompt ("Primer numero para restar");
    let num2 = prompt ("Segundo numero para restar");
    resultado = resta(num1, num2);
    alert(`Tu resultado es ${resultado}`);
}
else if (operacion == 3) {
    let num1 = prompt ("Primer numero para dividir");
    let num2 = prompt ("Segundo numero para dividir");
    resultado = division(num1, num2);
    alert(`Tu resultado es ${resultado}`)
}else if (operacion == 4) {
    let num1 = prompt ("Primer numero para muliplicar");
    let num2 = prompt ("Segundo numero para multiplicar");
    resultado = multiplicasion(num1, num2);
    alert(`Tu resultado es ${resultado}`)
}
else {
    alert("No se ha encontrado una operacion valida");
}
