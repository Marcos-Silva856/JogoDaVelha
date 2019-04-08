var inicio;
function ClickX(inicio) {
    document.getElementById('Xizinho').style.backgroundColor = 'white';
    document.getElementById('Bolinha').style.backgroundColor = 'aquamarine';
    inicio = 'X';
    return inicio;

}
function ClickY(inicio) {
    inicio = 'O';
    document.getElementById('Bolinha').style.backgroundColor = 'white';
    document.getElementById('Xizinho').style.backgroundColor = 'aquamarine';
    return inicio;
}