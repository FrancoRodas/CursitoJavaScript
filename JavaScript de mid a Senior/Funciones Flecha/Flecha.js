/*Funciones Flecha */
/*¿Por que aparecieron? (funciones compactas y el uso de This) */
/*Si solo hay una expresion, la retornan */
const saludar = ()=>"string";
resultado = saludar();
console.log(resultado);
/*Parentesis opcionales ante un solo parametro(sin parametros se requiere parentesis) */
const resultado1 = res=> nombre = res; 
/*No son adecuadas para ser usadas como metodos y no pueden ser usadas como constructores */
/*This Contextual (no tienen propio this,sino que toman la funcion que lo envuelven, 
this hace referencia al objeto que esta llamando a la funcion que esta llamando a ese objeto) */
/*Funcion flecha invocada a traves de los metodos call, apply y bind */
/*No tienen objeto Arguments */
/*No tiene propiedad del del prototipo prototype */
/*No se puede usar Yield (por ende no se pueden usar como funciones generadoras) */
/*No puede contener saltos de linea entre sus parametros y su flecha */
/*Orden de parseo */
/*Retornan literales si su cuerpo esta entre() */

/*Funciones recursivas (recursividad), es cuando una funcion se llama a si misma */
const validarEdad = (err)=>{
    let edad;
    try{ 
    if(err) edad = prompt("papu, comentame tu edad");
    else edad = prompt("introduce tu edad");
    edad = parseInt(edad);
    if (isNaN(edad)) throw "introduce un numero para la edad";
    if (edad > 18) console.log("sos mayor de edad");
    else console.log("sos menor de edad");
} catch(e){
    validarEdad(e)
}
}

validarEdad();
/*Clausuras o cierres, son funciones que retornan otras funciones */
const despedida = (nombre)=>{
    return function(){
        console.log("adios " + nombre);
    }
}

let adios = despedida("Lautaro");
addEventListener("load", adios);
/*Parametros por defecto (validacion antigua vs actual) */
/*Parametros rest (...param), funciona como argument y siempre es el ultimo parametro */
const suma = (frase, ...num)=>{
    let resultado2 = 0;
    for (let i = 0; i < num.length; i++){
        resultado2 += num[i];
    }
    console.log(`${frase} ${resultado2}`);
}

suma(12,25,62,98);
/*Destructuracion */
/*Destructurar Arrays y objetos */
/*Funcion destructuradora */

/*Operador condicional (Ternario) */
/*Definicion */
/*Sintaxis */

let kilogramos = 87;

if (kilogramos > 20) {
    console.log("pesa mas de la media");
    console.log("no puede subirse")
}
else {console.log("pesa menos que la media")};

(kilogramos > 20)
                ?(
    console.log("pesa mas que el peso maximo establecido"),
    console.log("no puede subirse al juego")
)
                :(
                    console.log("pesa menos que el peso maximo establecido"),
                    console.log("puede subirse al juego")
                )

/*Operador Spread (spread operator) */
/*añadir arrays a otros arrays */
let array = ["manzana", "banana", "naranja"];
let array2 =["uva", "kiwi"];

array.push(...array2)
console.log(array);
/*concaternar arrays */
array3 = [...array, ...array2];
console.log(array3);
/*como argumento rest */
