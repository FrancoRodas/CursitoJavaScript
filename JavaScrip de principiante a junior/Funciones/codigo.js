/**COMO DECLARAR UNA FUNCION**/
function saludar() {
    let pregunta = prompt ("hola Lucas, como fue tu dia?");
if (pregunta == "bien") {
    alert ("me alegro wachin");
}
else {
    alert("mal ahi ñeri");
}
}

saludar();

/*FUNCION CON RETURN*/

function bienvenida(){
    alert("hola");
    return "todo okay";
}

let saludo = bienvenida();

document.write(saludo);

//PARAMETROS

function suma(num1,num2){
    let resultado = num1 + num2;
    return resultado;
}
let res = suma(41,22);
document.write(res);

//FUNCIONES FLECHA

const despedida = (nombre)=>{
    document.write(`Adios ${nombre}, que tengas un buen dia`);
}

despedida("pedro");