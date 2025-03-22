/*¿Que es el DOM? Es el Document Object Model, una interfaz que contiene todos los objetos estandares que permiten representar los documentos html. */
/*NODO, un Nodo en el DOM es cualquier etiqueta del cuerpo, como un parrafo, el mismo body o incluso las etiquetas de una lista.
Existen varios tipos de nodos:
Document: el nodo document es el nodo raiz, a partir del cual derivan el resto de nodos.
Element: nodos definidos por etiquetas HTML.
Text: el texto dentro de un nodo Element se considera un nuevo nodo hijo de tipo texto (text).
Attribute: los atributos de las etiquetas definen nodos, ( en JavaScript no los veremos como nodos, sino como informacion asociada
al nodo de timpo Element).
Comentarios y otros: los comentarios y otros elementos como las declaraciones doctype en cabecera de los documentos HTML generan nodos.  */


/*--------METODOS DE SELECCION DE ELEMENTOS---------- */

/*document.getElementById(), selecciona un elemento por ID */
parrafo = document.getElementById("parrafo");
/*document.getElemenByTagName(), selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada */
document.getElementsByTagName("p");
/*document.querySelector(), devuelve el primer elemento que coincida con el grupo especificado de selectores */
parrafo1 = document.querySelector(".parrafo1");
/*document.querySelectorAll(), devuelve todos los elementos que coincidan con el grupo especificado de selectores */
document.querySelectorAll("p");


/*----------METODOS PARA DEFINIR, OBTENER Y ELIMINAR ATRIBUTOS-----------*/
/*setAttribute, modifica el valor de un atributo. el primer parametro es lo que se quiere modificar y el segundo a lo que se transforma*/
const rangoMovilidad = document.querySelector(".rangoDeMovilidad");
/*rangoMovilidad.setAttribute("type", "number");*/
document.write(rangoMovilidad);
/*getAttribute, obtiene el valor de un atributo*/
valorAtributo = rangoMovilidad.getAttribute("type");
document.write(valorAtributo)
/*removeAttribute, remueve el valor de un atributo*/


/*----------ATRIBUTOS GLOBALES------------*/
/*class, lista de clases del elemento separadas por espacios, son todos los elementos HTML*/
/*contentEditable, indica si el elemento puede ser modificable por el usuario(bool)*/
const titulo = document.querySelector(".TITULO");
titulo.setAttribute("contentEditable", "true");
/*dir, indica la direccionalidad del texto*/
const subtitulo = document.querySelector(".subtitulo");
subtitulo.setAttribute("dir", "rtl");
/*hidden, indica si el elemetno aun no es, o ya no es, relevante*/
const sigilo = document.querySelector(".parrafoSigiloso");
sigilo.setAttribute("hidden", "true");
/*id, define un identificador unico*/
/*style, contiene declaraciones de estilo CSS para ser aplicadas al elemento*/
/*tabindex, indica si el elemetno puede obtener un focus de input*/
const oso = document.querySelector(".focus");
oso.setAttribute("tabindex", "5");
/*title, contiene un texto con informacion relacionada al elemento al que pertenece*/
const anashi = document.querySelector(".subtitulo2");
anashi.setAttribute("title", "MOMO TE HACES EL PICANTE Y TE GANO UN JUGADOR DE CLASH ROYALE");


/*-----ATRIBUTOS DE INPUTS: className, value, type, accept, form, minlength, placeholder, required*/
const inputNormal = document.querySelector(".input-normal");
document.write(inputNormal.className);
document.write(inputNormal.value);
inputNormal.type = "color";
inputNormal.accept = "pdf/ png";/*FUNCIONA CON INPUTS TIPO FILE, SON LOS ARCHIVOS QUE VA A ACEPTAR EL NAVEGADOR */
inputNormal.setAttribute("minLength", "4");
inputNormal.ariaPlaceholder("mira que te como wacho");
inputNormal.required = ""; 



/*-------CLASES, CLASSLIST Y METODOS DE CLASSLIST---------*/
/*add(), añade una clase*/
const hermana = querySelector(".clase");
hermana.classList.remove("puta");
/*remove(), remueve una clase*/
/*item(), devuelve la clase del indice especificado*/
hermana.classList.item.a(0);
/*contains(), verifica si ese elemento posee o no, la case especificada*/
/*replace(), reemplaza una clase por otra*/
/*toggle(), si no tiene la clase especificada, la agrega, si ya la tiene la elimina*/


/*-------OBTENCION Y MODIFICACION DE ELEMENTOS--------*/
/*textContent, devuelve el texto de cualquier nodo*/
const titulo1 = document.querySelector(".titulo");
let resultado = titulo1.textContent;
document.write(resultado);
/*innerText, devuelve el texto visible de un node element*/
/*outerText, devuelve el texto incluidos en las etiquetas HTML*/
/*innerHTML, devuelve el contenido html de un elemento*/
/*outerHTML, devuelve el codigo html completo del elemento*/


/*----------CREACION DE ELEMENTOS-----------*/
/*createElements(), RECONOCE LOS ELEMENTOS SOLO EN MAYUSCULA*/
const container = document.querySelector(".contenedor");
const item = document.createElement("LI");
document.write(item);
console.log(item);
/*createTextNode(), crea un texto dentro del item*/
const textNode = document.createTextNode("Este es un item de la lista");
/*appenChild(), se modifica los hijos del elemento*/
item.appendChild(textNode);
container.appendChild(item);
/*createDocumentFragment()*/


/*----------OBTENCION Y CREACION DE CHILDS-------- */
/*firstChild */
/*lastChild */
/*firstElementChild */
/*lastElementChild */
/*childNodes */
/*children */


/*----------METODOS DE CHILDS---------- */
/*replaceChild() */
/*removeChild() */
/*hasChildNodes() */


/*---------PROPIEDADES DE PARENTS-------- */
/*parentElement */
/*parentNode */


/*----------PROPIEDADES DE SIBLINGS-------- */
/*nextSibling */
/*previousSibling */
/*nextElementSibling */
/*previousElementSibling */


/*----------NODOS EXTRAS--------- */
/*closest() */