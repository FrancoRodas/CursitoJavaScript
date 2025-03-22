/*---------METODOS--------*/


/*sqrt(), DEVUELVE LA RAIZ CUADRADA POSITIVA DE UN NUMERO*/
let numero0 = Math.sqrt(25);
document.write("<br>" + numero0);
/*cbrt(), DEVUELVE LA RAIZ CUBICA POSITIVA DE UN NUMERO*/
let numero1 = Math.cbrt(30);
document.write("<br>" + numero1);
/*max(), DEVUELVE EL MAYOR DE CERO A MAS NUMEROS*/
let numero2 = Math.max(1, 2, 4, 65, 23, 89);
document.write("<br>" + numero2);
/*min(), DEVUELVE EL MENOR DE CERO A MAS NUMEROS*/
let numero3 = Math.min(-1, 23, 50, -10);
document.write("<br>" + numero3);
/*random(), DEVUELVE UN NUMERO PSEUDO ALEATORIO ENTRE EL 0 Y EL -1*/
let numero4 = Math.random()*100;
numero4 = Math.floor(numero4);
document.write("<br>" + numero4);
/*round(), REDONDEA UN NUMERO AL ENTERO MAS CERCANO*/
/*floor(), REDONDEA A UN NUMERO QUE NO ES ENTERO HACIA EL VALOR MAS BAJO. EJ: 3,99 => 3*/
/*Fround(), DEVUELVE LA REPRESENTACION FLOTANTE DE PRECISION SIMPLE MAS CERCANO A UN NUMERO*/
let numero5 = Math.fround(3,2012);
document.write("<br>" + numero5);
/*trunc(), DEVUELVE LA PARTE ENTERA DEL NUMERO X Y ELIMINA LOS DIGITOS FRACCIONARIOS*/
let numero6 = Math.trunc(12,245);
document.write("<br>" + numero6);