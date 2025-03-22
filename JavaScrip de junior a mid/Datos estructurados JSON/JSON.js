/*Json, las propiedades las define con comillas*/
/*Definicion, usos y sintaxis */
/*Serializacion y Deserializacion, serializar es ser una cadena de texto con formato json*/
/*Metodo parse() - convierte un string con estructura json a formato json (deserializacion) */
/*Metodo stringify() - convierte un dato de Js en una cadena de texto JSON (serializar) */
/*JSON Polyfill - mas info en mozilla.developer/json, son funciones que simulan la funcionalidad de 
cualquier cosa en js porque el navegador no lo soporta*/
/*METODO PARA ENVIAR DATOS A OTRO SERVIDOR, PARA RECIBIRLOS HAY QUE INVERTIR ESTA FORMULA Y SE CAMBIA EL STRINGIFY POR UN PARSE*/
const deserializado = {"variable1" : "pedro", "variable2" : "jorge"};

const serializado = JSON.stringify(deserializado);
console.log(typeof serializado);

/*AJAX, significa Java Asincrono (Asincornimus Java and Xhttml)*/
/*Introduccion e instalacion del servidor , la peticion http se envia y la pagina se actualiza
cada vez que hacemos una operacion sincrona, AJAX cambia esto, la respuesta es enviada a Ajax, este la toma y se ejecuta en pararelo
y nos devuelve la data final que estamos buscando sin actualizar la pagina.
Se inicializa de forma nativa abriendo el panel de XAMPP y se le da start a Apache y MySQL. Luego se abre la carpeta de XAMPP y se busca 
la carpeta "htdocs"*/
/*Objeto XMLHttpRequest, podemos enviar peticiones/solicitudes GET y POST al servidor.
para que GET muestre resultado debe tener un codigo de respuesta de 3 a 4 y un estatus de 200 */
const request = new XMLHttpRequest
/*Enviar peticiones get */
/*Trabajar el resultado de las peticiones
request.addEventListener("readyStateChange",()=>{
    if (request.readyState == 4 && request.status == 200){
    console.log(request.readyState)
    }
    });
con este codigo cambiamos el codigo de respuesta, el 1 estado significa que el estado se genero correctamente, la 2 que se recibio correctamente,
la 3 es el proceso de la peticion y la 4 esta todo listo y nos dio una respuesta y se puede utilizar su resultado.
request.open("GET", "Http.example"); 
request.send()*/
/*Objeto Activexobject, es lo mismo qye XMLH pero para explorer
let peticion;
    if (window.XMLHttpRequest) {
    peticion = new XMLHttpRequest();
    else {
    peticion = new ActiveXObject("Microsoft.XMLHttp");}
}
*/
/*Nueva forma de trabajar el resultado
request.addEventListener("load",()=>{
    if (request.status == 200) respuesta = request.response;
    else respuesta = "lo siento, no se ha encontrado el recurso";
    console.log(respuesta); */
/*Enviar peticiones POST */
/*Objeto FormData */