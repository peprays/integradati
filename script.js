let contador = 1;

setInterval(function () {
    proximaImagem();
}, 5000);

function proximaImagem() {
    contador++;
    if (contador > 6) {
        contador = 1;
    }

    document.getElementById("radio" + contador).checked = true;
}