let cantidad = prompt ("¿Cuantos alumnos son?");
let alumnosTotales = [];

for (i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("nombre del alumno" + (i + 1)), 0];
}

const tomarAsistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++;    
    }
}

for (i = 0; i < 30; i++){
    for (alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0], alumno);
    }
}

for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    _______Asistencias: ${alumnosTotales[alumno][1]} <br>
    _______Inasistencias: ${30 - parseInt(alumnosTotales[alumno][1])}`;
    if (30 - alumnosTotales[alumno][1] > 18) {
        resultado += " REPROBADO POR INASISTENCIA <br><br>";
}
    else {
        resultado += "<br><br>"
} document.write(resultado)
}