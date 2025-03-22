/*¨CONCEPTOS IMPORTANTES PARA TRABAJAR CON NODE JS*/
/*window.location.href, devuelve el href (URL) de la pagina actual)*/
const href = window.location.href;
document.write(href);
/*window.location.hostname, devuelve el nombre de dominio del servidor web*/
const hostName = window.location.hostname;
document.write("<br>" + hostName);
/*window.location.pathname, devuelve la ruta y el nombre de archivo de la pagina actual*/
const pathName = window.location.pathname;
document.write("<br>" + pathName);
/*window.location.protocol, devuelve el protocolo web utiñizado (http: o https:)*/
const protocol = window.location.protocol;
document.write("<br>" + protocol);
/*window.location.assign(), carga un nuevo documento*/