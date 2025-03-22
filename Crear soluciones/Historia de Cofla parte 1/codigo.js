dineroCofla = prompt("cuanto dinero tienes Cofla?");
dineroPedro = prompt("cuanto dinero tienes Pedro?");
dineroRoberto = prompt("cuanto dinero tienes Roberto?");

/**CON parseInt SE CONVIERTE UNA CADENA DE TEXTO EN UN NUMERO EN ENTERO**/
dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Cofla, comprate el helado de agua");
    alert("y te sobran" + (dineroCofla -0.6));
}
else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("Cofla, comprate el helado de crema");
    alert("y te sobran" + (dineroCofla -1.6));
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("Cofla, comprate el de marca Heladix");
    alert("y te sobran" + (dineroCofla -1.7));
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("Cofla, comprate el de marca Helardo Anashe");
    alert("y te sobran" + (dineroCofla -1.8));
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("Cofla, comprate el helado con confites");
    alert("y te sobran" + (dineroCofla -2.9));
}
else if (dineroCofla >= 2.9) {
    alert("Cofla, comprate el helado con confites o el pote de 1/4 Kg");
    alert("y te sobran" + (dineroCofla -2.6));
}
else {
    alert("lo siento Cofla, pobre de mierda, no te alcanza para una mierda");
}
/**PLATA DE PEDRO**/
if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Pedro, comprate el helado de agua");
}
else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("Pedro, comprate el helado de crema");
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("Pedro, comprate el de marca Heladix");
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("Pedro, comprate el de marca Helardo Anashe");
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("Pedro, comprate el helado con confites");
}
else if (dineroPedro >= 2.9) {
    alert("Pedro, comprate el helado con confites o el pote de 1/4 Kg");
}
else {
    alert("lo siento Pedro, pobre de mierda, no te alcanza para una mierda");
}
/**PLATA DE ROBERTO**/
if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Roberto, comprate el helado de agua");
}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("Roberto, comprate el helado de crema");
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("Roberto, comprate el de marca Heladix");
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert("Roberto, comprate el de marca Helardo Anashe");
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert("Roberto, comprate el helado con confites");
}
else if (dineroRoberto >= 2.9) {
    alert("Roberto, comprate el helado con confites o el pote de 1/4 Kg");
}
else {
    alert("lo siento Roberto, pobre de mierda, no te alcanza para una mierda");
}

