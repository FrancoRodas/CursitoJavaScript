/*getCurrentPosition() */
/*parametros (position, error, options) */
/*propiedades de option (enableHightAccuracy, timeout, maximumAge)*/
/*watchPosition() */

const geolocation = navigator.geolocation;
const posicion = (pos)=>{
    console.log(pos);
}

const err =()=> console.log(e);
const options = {
    maximumAge: 0,
    timeout: 3000,
    enableHightAccuracy: true,
}
console.log(geolocation.getCurrentPosition(posicion, err, options));