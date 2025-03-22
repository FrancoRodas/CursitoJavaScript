/*Prototipos */
/*Definicion, es un estilo de programacion que los ojetos se crean a traves de su heredacion de prototipos en vez de crearlos manualmente*/
/*Prototype chain */
let objeto = {
    "propiedad" : "datos"
};
console.log(objeto.__proto__);
/*con .prototype accedemos a los prototipos que nosotros creamos, en cambio con el parametro de arriba accedemos a los prototipos que ya estan creados.
con .prototype.__proto__ accedemos a los que estan heredados */
/*Prototype object, TODOS LOS ELEMENTOS TIENEN EL PROTOTIPO OBJETO, pero luego hay prototipos que se crean.
LOS OBJETOS NO SON UN PROTOTIPO, todos los elementos eredan el Prototype object*/

/*Caracteristicas de los prototipos */
/*Un prototipo definido en su codigo fuente es mutable, cuando nosotros lo creamos lo podemos modificar */
/*Es en si mismo un objeto, asi como otros, tienen propiedades y funciones */
/*Tiene una existencia fisica en la memoria, */
/*Puede ser modificado y llamado */
/*Puede ser visto como un modelo ejemplar de una familia objeto, esta familia es la que mas jerarquia tiene */
/*Un objeto hereda propiedades (valores y metodos) de su protocolo, si yo creo un objeto ese objeto va a heredar las propiedades de su prototipo */

/*Propiedad proto (dunder Proto) */
let variable = ["Pedro", "Jorge", 234, null];
console.log(variable);

class Objeto {
    constructor(){};
    hablar (){
        console.log("hola")
    }
}

const objeto2 = new Objeto();
console.log(objeto2.__proto__);

/*Sobrescribir __proto__ vs sobrescribir metodo */
/*Estamos modificando el prototipo */
objeto2.__proto__.hablar = ()=>{
    console.log("modificado afuera");
}
console.log(objeto2);
/*De esta forma lo sobrescribimos */
let array = [];
array.__proto__ = objeto2;

array.hablar();