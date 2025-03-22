/*FileReader */
/*ReadAsText() */
/*ReadAsDataURL() */
const archivo = document.getElementById(`archivo`);
archivo.addEventListener("change",(e)=>{
    leerArchivo(archivo.files[0]);
});

const leerArchivo = ar =>{
    const reader = new FileReader();
    reader.readAsText(ar);
    reader.addEventListener("load", (e)=>console.log(e))
}

/*para leer mas de un archivo */
/*const leerArchivo = ar => {
    for (var i = 0; i < ar.length; i++){
        const reader = new FileReader();
        reader.readAsText(ar[i]);
        reader.addEventListener("load", (e)=>{
            console.log(JSON.parse(e.currentTarget.result))
        })
    }
}*/
const reader = new FileReader();
console.log(reader);