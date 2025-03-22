let frutas = ["manzana", "banana", "pera", "frutilla"];

/**ARRAYS ASOCIATIVOS**/

let empleado1 = {
    nombre:"Esteban",
    apellido:"Rodriguez",
    edad:"21",
    antiguedad:"2 años",
};


let nombre = empleado1["nombre"];
let apellido = empleado1["apellido"];
let edad = empleado1["edad"];
let antiguedad = empleado1["antiguedad"];

let frase = `El nombre completo del empleado es ${nombre} ${apellido} <br>
            tiene ${edad} años y lleva trabajando en la empresa ${antiguedad} <br>`;

document.write(frase);