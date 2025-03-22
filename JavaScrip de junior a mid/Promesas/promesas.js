/*Promesas, son un objeto que tiene dos Callbacks, reject y resolve.
representan la terminacion y el fracaso de una operacion asincrona */
/*Estructura */
let nombre = "Pedro";

const promesa = new Promise((resolve, reject)=>{
    if (nombre !== "Pedro"){
        reject("lo siento, el nombre no es Pedro");
    }
    else resolve(nombre);
})
/*COMO OBTENER UN DATO DE REJECT O RESOLVE, SOLO FUNCIONA SI SE VE EL RESOLVE, EN CAMBIO HAY QUE CATCHEAR EL ERROR*/
promesa.then((resultado)=>{
    console.log(resultado);
}).catch((e)=>{
    console.log(e);
})