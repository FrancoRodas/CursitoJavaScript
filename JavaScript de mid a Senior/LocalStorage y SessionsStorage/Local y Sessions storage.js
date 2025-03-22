/*LocalStorage y Sessions Storage (SON APIS)*/
/*Diferencias, son lo mismo pero la segunda al cargar la pagina pierde la info que tiene, y la primera no la pierde */
/*setItem(), el primer valor es el nombre de la variable y el segundo el valor, con esta propiedad definimos valores */
localStorage.setItem("nombre","pedro");
/*getItem(), con este obtenemos valores */
console.log(localStorage.getItem("volume"));
/*removeItem(), remueve un valor */
setTimeout(()=>{
    let nombre = localStorage.removeItem("nombre");
}, 2000);
/*clear(), limpia todos los items */
/*ejemplo de uso (idioma) */
const modal = document.querySelector(".modal-overlay");

const definirIdioma =()=>{
    document.querySelector(".en").addEventListener("click",()=>{
        localStorage.setItem("idioma","en");
        cerrarModal();
    })
    document.querySelector(".es").addEventListener("click",()=>{
        localStorage.setItem("idioma","es")
        cerrarModal();
    })
}

const cerrarModal = ()=>{
    modal.styleAnimation = "desaparecer, 1s, forwards";
    setTimeout(()=>modal.style.display = "none", 1000);
}

const idioma = localStorage.getItem("idioma");

if (idioma === null) definirIdioma();
else {
    console.log(`Idioma: ${idioma}`);
    modal.style.display = "none";
}