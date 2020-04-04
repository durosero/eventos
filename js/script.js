var btnRojo = document.getElementById('btnRojo');
var btnVerde = document.getElementById('btnVerde');
var btnAzul = document.getElementById('btnAzul');
var btnAmarillo = document.getElementById('btnAmarillo');

var caja = document.getElementById('caja');

btnRojo.onmouseover = function() {
    console.log("Boton rojo");
    caja.style.background = "red"

}