/*Que es una api? Es una Interfaz de Programacion de aplicaciones, puede ser document, window, promp, etc
recibe los datos, los procesa y da un resultado qie desconocemos.
Las mas conocidas son las Apis Rest, que son las que en realidad no son internas de los lenguajes sino que se envian a otros sitios web a cambio de informacion*/

/*Objeto Date */
/*getDate(), es un constructor, al dejarlo sin el new solo tira la fecha, al agregarle el New ya se puede trabajar con 
metodos y propiedades */
const fecha = new Date();
console.log(fecha.getDate());
/*getDay() */
console.log(fecha.getDay());
/*getMonth */
console.log(fecha.getMonth());
/*getYear() */
console.log(fecha.getFullYear());
/*getHours() */
console.log(fecha.getHours());
/*getMinutes() */
console.log(fecha.getMinutes());
/*getSeconds() */
console.log(fecha.getSeconds());
/*Ejemplo de uso (Reloj) */
const addZeros = n=>{
    if(n.toString().lenght < 2) return "0".concat(n);
    return n;
}

const actualizarHora =()=>{
    const time = new Date();
    let hora = time.getHours();
    let minutos = time.getMinutes();
    let segundos = time.getSeconds();
    console.log(segundos)
    document.querySelector(".hora").textContent = hora;
    document.querySelector(".minutos").textContent = minutos;
    document.querySelector(".segundos").textContent = segundos;
}
actualizarHora();
setInterval(actualizarHora,1000);