/*Cargar galeria dinamicamente */
const archivo = document.getElementById('archivo');
archivo.addEventListener("change", ()=>{
    leerArchivo(archivo.files);
});


const leerArchivo = ar => {
    for (var i = 0; i < ar.length; i++){
        const reader = new FileReader();
        reader.readAsDataURL(ar[i]);
        reader.addEventListener("load", (e)=>{
        let newImg = `<img src='${e.currentTarget.result}'>`;
        document.querySelector(".resultado").innerHTML += newImg;
        })
    }
    
}