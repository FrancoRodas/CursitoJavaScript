/*-----FUNCIONES DE REGISTRO-----*/
/*assert(), aparece un mensaje de error en la consola si la afirmacion es falsa, si es verdadera no aparece nada.*/
console.assert(4 > 5);
/*clear(), limpia la consola.*/
console.clear();
/*error(), muestra un mensaje de error en la Consola Web.*/
console.error("QUE CAGADA HICISTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
/*info(), emite un mensaje informativo a la Consola Web. En FireFox y Chrome, se muestra un pequeño icono "i" junto a estos elementos en el registro de la Consola Web*/
console.info("Muy piola pero no te pregunte");
/*log(), muestra un mensaje en la Consola Web (o del interprete Java Script).*/
console.log("sae ese free jorge?");
/*table(), esta funcion toma un argumento obligatorio; data, que debe ser un array o un objeto, y un parametro adicional: columns y os muestra una tabla en consola.*/
console.table([1, 2, 3, 4, 5]);
/*warn(), imprime un mensaje de advertencia en la Consola Web.*/
console.warn("Para realizar esta acción se requieren permisos de administrador");
/*dir(), despliega una lista interactiva de las propiedades del objeto JavaScript especificado.*/
console.dir([1, 2, 3, 4, 5, 6]);


/*---------FUNCIONES DE CONTEO------------*/

/*count(), registra el numero de veces que se llama a count().Esta funcion toma como argumento opcional una etiqueta.*/
console.count();
console.count();
console.count();
console.count();
console.count();
console.count();
/*countReset(), resetea el contador de console.count().*/
console.countReset();

console.count();
console.count();


/*-----------FUNCIONES DE AGRUPACION---------*/
/*group(), crea un nuevo grupo en linea en el registro de la consola*/
console.group("frutas");
/*groupEnd(), remueve un grupo en linea en el registro de la consola*/
console.groupEnd();
/*groupCollapsed(), crea un grupo en linea pero contraido, el usuario debe expandir para verlo. */
console.groupCollapsed("verduras");
console.groupEnd();

/*-----------FUNCIONES DE TEMPORIZACION------------*/
/*time(), inicia un temporizador.*/
console.time();
/*timeEnd(), registra el valor actual de un temporizador.*/
console.timeEnd();
/*timeLog(), detiene un temporizador.*/
console.time();
console.timeLog();
console.timeEnd();