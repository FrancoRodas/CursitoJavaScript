/*---------------- METODOS TRANSFORMADORES---------------------*/


let nombres = ["Pedro", "María", "Jorge"];
/*POP(), ELIMINA EL ULTIMO ELEMENTO DE UN ARRAY Y LO DEVUELVE */
document.write("<br>" + nombres);
let resultado = nombres.pop();
document.write("<br>" + resultado);
document.write("<br>" + nombres);
/*SHIFT(), ELIMINA EL PRIMER ELEMENTO DE UN ARRAY Y LO DEVUELVE */
/*PUSH(), AGREGA UN ELEMENTO AL ARRAY */
let nombres2 = ["Monica", "Facundo", "Sebastian"];
document.write("<br>" + nombres2);
let resultado2 = nombres2.push("el bobo de Juan");
document.write("<br>" + nombres2);
/*REVERSE(), INVIERTE EL ORDEN DE LOS ELEMENTOS DEL ARRAY*/
let resultado3 = nombres2.reverse();
document.write("<br>" + resultado3);
/*UNSHIFT(), AGREGA UNO O MAS ELEMENTOS Y LOS DEVUELVE A LA LONGITUD DEL ARRAY */
let numeros = [3, 4, 5];
document.write("<br>" + numeros);
numeros.unshift(0, 1, 2);
document.write(numeros + "<br>");
/*SORT(), ORDENA LOS ELEMENTOS DE UN ARRAY LOCALMENTE Y LO DEVUELVE ARREGLADO*/
let numeros2 = [1, 5, 6, 3, 2, 0, 4];
document.write("<br>" + numeros2);
numeros2.sort();
document.write("<br>" + numeros2);
/*SPLICE(), CAMBIA EL CONTENIDO DE UN ARRAY ELIMINANDO CONTENIDO EXISTENTE Y/O AGREGANDO NUEVOS ELEMENTOS
PRIMERO SE PONE LA POSICION, LUEGO LA CANTIDAD DE ELEMENTOS A ELIMINAR Y POR ULTIMO SE AGREGAN*/
let palabras = ["Abecedario", "Rorke", "Gabo"];
document.write("<br>" + palabras);
palabras.splice(1, 3, "Roberto", "Gustavo", "anachi",);
document.write("<br>" + palabras);


/*-------------------METODOS ACCESORES--------------------*/


/*JOIN(), UNE TODOS LOS ELEMENTOS DE UNA MATRIZ EN UNA CADENA Y LA DEVUELVE, LA MATRIZ HACE REFERENCIA AL ESPACIO QUE LAS SEPARA*/
document.write("<br>" + numeros);
let resultado4 = numeros.join(" - ");
document.write("<br>" + resultado4);
/*SLICE(), DEVUELVE UNA PARTE DEL ARRAY DENTRO DE UN NUEVO ARRAY EMPEZANDO POR EL INICIO HASTA EL FINAL
PARA SELECCIONAR TODOS MENOS EL ULTIMO SE PONE UN -1 EN EL SEGUNDO PARAMETRO*/
let resultado5 = palabras.slice(0, 2);
document.write("<br>" + resultado5);
/*METODOS YA VISTOS EN CADENAS (FUNCIONAN IGUAL): toString(), indexOf(), lastIndexOf(), includes()*/


/*--------------------METODOS DE REPETICION--------------*/


/*FILTER(), CREA UN NUEVO ARRAY CON TODOS LOS ELEMENTOS QUE CUMPLAN LA CONDICION*/
let frutas = ["manzana", "banana", "frutilla", "kiwi", "naranja", "mandarina"];
let resultado6 = frutas.filter(frutas => frutas.length > 6);
document.write("<br>" + resultado6);
/*forEach(), ES LO MISMO QUE FILTER(), SOLO QUE ESTE EJECUTA UNA FUNCION POR CADA ELEMENTO DEL ARRAY
, Y FILTER LO EJECUTA SEGUN LA CONDICION QUE SE LE DICTE*/