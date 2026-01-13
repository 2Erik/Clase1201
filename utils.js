
function recuperarTexto(idCaja){
    let txtCaja = document.getElementById(idCaja);
    let valorCaja = txtCaja.value;
    return valorCaja;
}

function recuperarEntero(idCaja){
    let valorTexto=recuperarTexto(idCaja);
    let valorEntero=parseInt(valorTexto);
    return valorEntero;
}
