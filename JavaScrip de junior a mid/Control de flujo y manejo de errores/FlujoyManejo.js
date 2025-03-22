/* Control de Flujo y Manejo de errores*/
/*Sentencia de bloque, son los{}*/
/*Sentencias de control de flujo*, son los if/
/*Sentencias de manejo de excepciones*/
let nombre = "jorge";
{
    let nombre = "pedro";
alert(nombre);
}

/*sentencia Switch, sirve para cosas mas complejas, pero a nivel de rendimiento conviene mas el if y else if*/
/*sintaxis y clausula case*/
/*break*/
/*default*/
let expr = "manzana";

switch(expr) {
    case "banana":
        console.log("esta fruta es amarilla");
        break;
    case "manzana":
        console.log("esta fruta es roja");
        break;
    case "pera":
        console.log("esta fruta es verde");
        break;
}

/*Excepciones y tipos de excepciones, al lanzar o recibir una excepcion estamos enviando un error*/
/*Definicion y usos, sirven para que el desarrollador sepa que es lo que esta sucediendo*/
/*Excepciones ECMAScript, estan relacionadas a la tecnologia que esta detras de JavaScript*/
/*DOMException y DOMError*/

/*Try & Catch, eliminan los eventhandlers y se desactivan por completo del navegador, evitan que se muestren errores*/
/*Sintaxis, el try debe estar acompañado SI O SI de un Catch o un Finally*/
/*Objeto error*/
/*Catch incondicional, no tiene ni if y else*/
/*Catch condicional, tiene un if y else*/
/*Sentencia Throw, sirve para tirar un error*/
/*Finally, se ejecuta a toda costa*/

try{
    aklfnafbiajbf
}
catch(error){
    console.log("Ocurrio un error inesperado, iniciando reparacion automatica");
}

try {
    "jasfasola";
}
finally{
    console.log("aparecio un jasfasola en el codigo");
}

try {
    throw "verga verga pijaaaaaaaaaaa";
}
catch{
    console.log("lluvia de vergas");
}