let free = false;

const validarCliente = (time)=>{
    let edad = prompt("¿Cual es tu edad?");
    if (edad > 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert("Pasas gratis facha, sos la primera fiera que entra despues de las 2 AM");
            free = true;
        }
        else {
            alert(`Son las ${time}:00 hs y podes pasar, pero tenes que pagar la entrada`);
        }
    }
    else {
        alert("Capo, sos menor de edad, raja de aca");
    }
}

validarCliente(22);
validarCliente(23);
validarCliente(0.1);
validarCliente(0.3);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);
validarCliente(3);
validarCliente(21);
validarCliente(1);