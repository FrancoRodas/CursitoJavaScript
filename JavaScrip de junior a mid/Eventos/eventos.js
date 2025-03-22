/*Eventos */
/*Definicion de Eventos o Event Handlers, son utiles cuando se les asigna un codigo asociado hacia un evento,
ya que estos solos no aportan nada porque en criollo son todas las cosas que pasan en la pagina
, se llaman a los eventos con la palabra "on" y luego lo que sigue*/
const button = document.querySelector(".boton");
button.onclick = ()=>{
    alert("wachin rebelado");
}
/*Escucha de Eventos o Event Handlers, es lo mas actual y se los llama con .add, y se les da funcion como si fuera una funcion normal
en el primer parametro va el tipo de evento y el segundo lo que va a ser, si va a ser una variable o una funcion/funcion flecha*/
button.addEventListener("click", saludar);
function saludar() {
    alert("hola wachin");
    button.removeEventListener("click", saludar);
} 
/*El objeto Event, es el unico parametro que se les puede pasar a los eventos, sea como sea el nombre que lleve siempre va a ser un 
objeto event, y con console.log(nombre de evento) te muestra todo lo que esta ejecutando ese evento y todas sus propiedades */

/*Flujo de Eventos o Event Flow, es el orden en el que se van a ejecutar los eventos, se ejecuta primero el mas especifico (los hijos)
para que ejeute otro primero se le agrega "true" al final */
const contenedor = document.querySelector(".contenedor");
contenedor.addEventListener("click", (e)=>{
    alert("di click en un container insano")
}, true);
const boton2 = document.querySelector(".boton2");
boton2.addEventListener("click", (e)=>{
    alert("di click en un boton insano");
})
/*Event Bubbling vs Event Capturing, el primero viene por defecto y el segundo no */
/*event.stopPropagation(), evita que el evento se propague, se le añade al final de la funcion
un (nombre de evento.stopPropagation()*/

/*Eventos de Mouse */
/*click -  ocurren con un click */
/*dbclick - ocurren con doble click */
const boton3 = document.querySelector(".boton3");
boton3.addEventListener("dbclick", (e)=>{
    alert("MILLAN GORDO BACHICHA");
})
/*mouseover - ocure cuando el puntero se mueve sobre un elemento o sobre uno de sus hijos */
/*mouseout - ocurre cuando se mueve el puntero fuera de un elemento o de sus elementos secundarios */
/*contextmenu - ocurre cuando el puntero se mueve sobre un elemento */
/*mouseebter - ocurre cuando el puntero se mueve fuera de un elemento */
/*mouseup - ocurre cuando un usuario suelta un boton del mouse sobre un elemento */
/*mousemove - ocurre cuando el puntero se mueve mientras esta sobre un elemento */

/*Eventos de teclado */
/*keypress - ocurre cuando se presiona una tecla */
/*keydown - ocurre cuando se deja de presionar una tecla */
/*onkeyup - ocurre despues de que los dos eventos anteriores hayan concluido consecutivamente */

/*Eventos de interfaz, funciona con imagenes*/
/*abort - ocurre cuando un elemento madre elimina a su hijo */
/*error - ocurre cuando sucede un error durante la carga de un archivo multimedia
const imagen = document.querySelector(".imagen-prueba");
imagen.addEventListener("error", ()=>{
    console.log("ha ocurrido un error");
})*/
/*load - ocurre cuando un objeto se ha cargado */
/*beforeunload - ocurre antes de que el documento este a punto de descargarse */
/*unload -ocurre una vez que se ha descargado el documento */
/*resize - ocurre cuando se cambia el tamaño de la vista del documento */
/*scroll - ocurre cuando se desplaza la barra de desplazamiento de un elemento */
/*select - ocurre despues de que el ususario selecciona algun texto de <input> o <textarea> */

/*Timers, permiten hacer trabajos con tiempo*/
/*setTimeOut(), recibe una funcion como primer parametro y el segundo es en cuanto tiempo lo queremos ejecutar */
const despedida = ()=>{
    document.write("adios");
};
const temporizador = setTimeout(despedida, 20000);
clearTimeout(temporizador);
/*setInterval(), hace que cada x tiempo ejecute una funcion */
/*clearTimeOut() */
/*clearInterval() */