window.onload = function() {

    var btnRojo = document.getElementById('btnRojo');
    var btnVerde = document.getElementById('btnVerde');
    var btnAzul = document.getElementById('btnAzul');
    var btnAmarillo = document.getElementById('btnAmarillo');

    var caja = document.getElementById('caja');

    btnRojo.onmouseover = function() {
        console.log("Boton rojo");
        caja.style.background = "red";
    }

    btnVerde.onmouseover = function() {
        caja.style.background = "green";
    }
    btnAzul.onmousemove = function() {
        console.log("Boton Azul");
        caja.style.background = "blue";
    }
    btnAmarillo.ondblclick = function() {
        caja.style.background = "yellow";
    }
    caja.onmousemove = quitarColor;


    //quitr colores 
    // btnRojo.onmouseout = quitarColor;
    // btnVerde.onmouseout = quitarColor;
    // btnAzul.onmouseout = quitarColor;
    // btnAmarillo.onmouseout = quitarColor;

    function quitarColor() {
        console.log("Quitando color..");
        caja.style.background = null;
    }


}