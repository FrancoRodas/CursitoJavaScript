/*Drag and Drop*/
/*Eventos del objeto: */
/*-dragstart */
/*-drag */
/*-dragend */
const circulo = document.querySelector(".circulo");
circulo.addEventListener("dragstart",()=>console.log(1));
circulo.addEventListener("drag",()=>console.log(2));
circulo.addEventListener("dragend",()=>console.log(3));
/*Eventos de zona: */
/*-dragenter */
/*-dragover */
/*-drop */
/*-dragleave */
const rectangulo = document.querySelector(".rectangulo");
rectangulo.addEventListener("dragenter", ()=>console.log(1));
rectangulo.addEventListener("dragover", ()=>console.log(2));
rectangulo.addEventListener("drop", ()=>console.log(3));
rectangulo.addEventListener("dragleave", ()=>console.log(4));
/*Propiedad dataTransfer */
/*-getData() */
/*-setData() */
circulo.addEventListener("dragstart", (e)=>{
    e.dataTransfer.setData("text-plain",e.target.className)
});
rectangulo.addEventListener("dragover", (e)=>{
    e.preventDefault();
    console.log(2);
});
rectangulo.addEventListener("drop", (e)=>{
    console.log(e.dataTransfer.getData("clase"));
});

/*Ejemplo de uso (texturizador) */
