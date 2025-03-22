const objeto = {
    propiedad1 : "valor1",
    propiedad2 : "valor2",
    propiedad3 : "valor3",
}

const obtenerInfo = (text)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {resolve(text)}, Math.random() *200);
    })
}

const mostrarData = async()=>{
    data1 = await obtenerInfo("1: pito");
    data2 = await obtenerInfo("2: anashe");
    data3 = await obtenerInfo("3: bernardo");
    console.log(data1);
    console.log(data2);
    console.log(data3)
}

mostrarData();