/*Callbacks, son una funcion dentro de una funcion */

function prueba(callback){
    callback("Pedro");
}

function decirNombre(nombre){
    console.log(nombre);
}
/*como implementarlo como funcion flecha si tiene una sola linea de codigo
prueba(nombre=> console.log(nombre)) ;*/

class Persona {
    constructor(Apellido, Instagram){
        this.Apellido = Apellido;
        this.Instagram = Instagram;
    }
};

const datosPersonas = [
    ["Rodriguez", "@Rodz"],
    ["Jorge", "@jorgito"],
    ["Matias", "@matute01"],
    ["Fede", "@Fedeneitor2009"],
];

const personas = [];

for (var i = 0; i < datosPersonas.length; i++) {
    personas[i] = new Persona(datosPersonas [i][0], datosPersonas[i][1]);
}

console.log(personas);

const obtenerPersona = (id, callback) => {
    if (personas[id] == undefined) {
        callback("no se ha encontrado a la persona");
    }
    else {
        callback(null, personas[id]);
    }
}

obtenerPersona(3, (err, persona)=>{
    if (err) {
        console.log(err);
    }
    else {
        console.log(persona.Apellido);
        console.log(persona.Instagram);
    }
})