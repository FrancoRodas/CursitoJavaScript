/*ES EL MAS IMPORTANTE DE LA JERARQUIA Y CONTIENE TODO PARA MANIPULAR LA VENTANA DEL NAVEGADOR,
hereda las propiedades del EventTarget(evento), todos los elementos dependen de este objeto */
/*open(), carga un recurso en el contexto de un nuevo navegador o uno que ya existe (abre una nueva pestaña)*/
let youtubeURL = "https://youtube.com";
let ventana = window.open(youtubeURL);
/*close(), cierra la ventana actual, o la ventana en la que se llamo (cierra una pestaña) */
ventana.close();
/*closed, indica si la ventana referenciada esta cerrada o no */
/*ventana.closed();*/
/*stop(), detiene la carga de recursos en el contexto de la navegacion actual (la X de la recarga de pagina) */
window.stop();
/*alert(), muestra un cuadre de alerta con el contenido especificado y un boton aceptar */
window.alert("rancio");
/*print(), abre el cuadro de dialogo con un mensaje que solicita al usuario un dato (string), imprime la pag */
print();
/*promp(), abre un cuadro de dialogo con un mensaje que solicita al usuario un dato (string) */
prompt("dame un dato");
/*confirm(), abre un cuadro de dialogo con un mensaje y dos botones: Aceptar y Cancelar */
confirm("estas seguro que sos un maldito nashi???");

/*screen, devuelve una referencia al objeto de pantalla asociado con la ventana */
const screen = window.screen;
console.log(screen);
document.write(screen.availHeight);
/*screenLeft, devuelve la distancia horizontal entre el borde izquierdo del navegador y el borde izquierdo de la pantalla */
const screenLeft = window.screenLeft;
document.write(screenLeft);
/*screenTop, devuelve la distancia vertical entre el borde superior del navegador y el borde superior de la pantalla */
const screenTop = window.screenTop;
document.write(screenTop);
/*scrollX, devuelve el numero de pixeles que el documento se desplaza actualmente horizontalmente */
const pitoCortoX = window.scrollX;
/*scrollY, devuelve el numero de pixeles que el documento se desplaza actualmente verticalmente */
const pitoCortoY = window.scrollY;
/*scroll(),desplaza la ventana a un lugar particular en el documento.(con options y con posiciones) */
const pitoCorto = window.scroll(0, 100);

/*resizeBy(), cambia el tamaño de la ventana actual en una cantidad especifica */
/*window.resizeBy*/
/*resizeTo(), redimensiona dinamicamente la ventana */
/*window.resizeTo*/
/*moveBy(), mueve la ventana en una ubicacion relativa */
/*window.moveBy*/
/*moveTo(), mueve la ventana en una ubicacion absoluta */
/*window.moveTo*/

/*objetos barprop: locationbar, menubar, personalbar, scrollsbars, statusbar, toolbar */