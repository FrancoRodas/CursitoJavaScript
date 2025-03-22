/*CREACION DE UN OBJETO*/

class Animal {
    constructor(especie, edad, color){
        this.esp = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy un ${especie}, tengo ${edad} años y soy de color ${color}`;
    }
/*CREACION DE UN METODO*/
    verInfo(){
        document.write(this.info + "<br>");
    }
    ladrar(){
        if (this.esp == "perro") {
            document.write("WAW!" + "<br>");
        }
        else {
            document.write("No puede ladrar ya que es un " + this.esp + "<br>");
        }
    }
}
/*HERENCIA*/
class Perro extends Animal {
    constructor(especie, edad, color, raza) {
        super (especie,edad,color);
        this.raza = null;
    }   
    static ladrar(){
        alert("WAW!");
    }
    set setRaza(newName){
        this.raza = newName;
    }
    get getRaza(){
        return this.raza;
    }
}

/*LAS CLASES SE DEFINEN CON CONST*/
const perro = new Perro ("perro", 5, "marron", "Doberman");
const gato = new Animal ("gato", 2, "negro");
const pajaro = new Animal ("ave", 3, "rojo");

perro.verInfo();
gato.verInfo();
pajaro.verInfo();
perro.setRaza = "Pedro";

document.write(perro.getRaza);