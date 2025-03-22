let valor1 = true;
let valor2 = true;
num1= 12;
num2 = 23;
/**VERIFICA QUE AMBOS OPERADORES TENGAN EL MISMO VALOR BOLEANO**/
let resultado1 = valor1 && valor2;
/**CON QUE HAYA UN SOLO VALOR VERDADERO TE DEVUELVE TODO TRUE, DE LO CONTRARIO FALSE**/
let resultado2= valor1 ||  valor2;
/**REGRESA LO CONTRARIO DEL VALOR DEVUELTO*/
let resultado3 = !valor1; 

num3 = 45;
num4 = 56;
num5 = 91;

/**SE RESUELVEN PRIMERO LOS PARENTESIS, SEPARANDO EN TERMINOS**/
op = (num1 < num2 || num2 < num3) && (!(num1 != num2) && num5 != num3)

op2 = (num5 > num2 && num4 < num3) || (!(num1 === num2) || num3 != num3)

document.write (op2)