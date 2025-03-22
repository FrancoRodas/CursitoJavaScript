let numero = 0;
let numero1 = 0;
let animales = ["perro", "gato", "loro"];

while (numero < 10) {
    numero++;
    document.write(numero + "<br>");
}

while (numero1 <10) {
    numero1++;
    document.write(numero1 + "<br>");
    if (numero1 == 6) {
        break;
    }
}
/**CREACION DE FOR, PRIMERO SE DECLARA LA VARIABLE, LUEGO LA CONDICION Y POR ULTIMO LA ITERACION**/
for (let i = 0; i < 7; i++) {
    document.write(i)
    if (i == 4) {
        break;
    }
}

for (animal in animales) {
    document.write(animal + "<br>");
}
for (animal of animales) {
    document.write(animal + "<br>");
}

array1 = ["gabo", "lucho", "nicolas"];
array2 = ["alvaro", "leandro", "gabcey"];

for (let array in array2) {
    if (array == 2) {
        for (let array of array1){
            if (array == "gabo") {
                continue;
            }
            document.write(array + "<br>")
        } 
    } else{
        document.write(array2[array] + "<br>")
    }
}