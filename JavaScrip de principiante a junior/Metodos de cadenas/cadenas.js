/*METODO CONCAT*/
let cadena = "cadena de prueba";
let cadena2 = "prueba";


resultado = cadena.concat(cadena2);

document.write( "<br>" +    resultado);
/*STARTS WITH*/
resultado2 = cadena.startsWith(cadena2);
document.write( "<br>" + resultado2);
/*ENDSWITH*/
resultado3 = cadena.endsWith(cadena2);
document.write("<br>" + resultado3);
/*INCLUDES*/
let cadena3 = "yo sigo a franco en kick kick kick kick kick";
let cadena4 = "kick";
resultado4 = cadena3.includes(cadena4);
document.write("<br>"+ resultado4);
/*INDEXOF*/
resultado5 = cadena3.indexOf(cadena4);
document.write("<br>" + resultado5);
/*LAST INDEXOF*/
resultado6 = cadena3.lastIndexOf(cadena4);
document.write("<br>" + resultado6);
/*PADSTART*/
let cadena5 = "anasi";
let cadena6 = " ";
resultado7 = cadena5.padStart(31,"buenardopolis");
document.write("<br>" + resultado7);
/*PADEND*/
resultado8 = cadena5.padEnd(12, "bb");
document.write("<br>" + resultado8);
/*REPEAT*/
resultado9 = cadena5.repeat(3);
document.write("<br>" + resultado9);
/*SPLIT*/
let cadena7 = "hola como estas?";
resultado10 = cadena7.split("como");
document.write("<br>" + resultado10[1]);
/*SUBSTRING, EL PRIMER NUMERO ES LA POSICION INICIAL Y EL SEGUNDO LA POSICION FINAL*/
resultado11 = cadena7.substring(0, 4);
document.write("<br>" + resultado11);
/*toLowerCase*/
let cadena8 = "TE LA RE COMES";
resultado12 = cadena8.toLowerCase();
document.write("<br>" + resultado12);
/*toUpperCase*/
let cadena9 = "a maria se le escapo un pedo";
resultado13 = cadena9.toUpperCase();
document.write("<br>" + resultado13);
/*toString*/
let numero1 = 50;
resultado14 = numero1.toString();
document.write("<br>"+ resultado14 + 100);
/*trim*/
let nombre1 = "        Lucho      ";
resultado15 = nombre1.trim();
document.write("<br>" + resultado15);