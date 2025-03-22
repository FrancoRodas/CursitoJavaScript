/*Fetch */
/*Introduccion, es una forma de trabajart con el objeto XMLHttp, se usa mucho ya que es el reemplazo de AJAX y XMLHttp */
/*Basado en Promesas, siempre nos devuelve una promesa encapsulada. */
/*Objeto fetch, tiene el metodo GET por defecto */
/*res.text(), muestra lo mismo pero en forma de promesa desencapsulada con el valor que nosotros queremos*/
/*res.json(), muestra la promesa en formato JSON directo*/
/*res.blob(), muestra la promesa en formato codigo BLOB */
/*res.formData() */
/*res.arrayBuffer() */

fetch("http.example")
    .then(res=>res.text())
    .then(res=>console.log(res))

/*Libreria Axios */
/*Introduccion e Instalacion, es el reemplazo de fetch, ya que esta tan optimizado que no pesa mucho, a cambio de fetch no es para pocas peticiones especificas */
/*Basado en promesas, pero en forma XMLHttpRequest */
/*Objetos axios */
/*metodo get() y post() */
/*formas de enviar los datos */
/*ventajas */