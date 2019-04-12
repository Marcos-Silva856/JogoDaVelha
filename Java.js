var vez = "nada";
var n1;
var jogo = [];
var bool = false;
var img;
var contx = 0;
var conto = 0;
var fim = false;
var velha;
var colorX = false;
var colorY = false;

for (var i = 0; i < 3; i++) {
    jogo[i] = [];
}
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        jogo[i][j] = "A";
    }
}
function ClickX() {
    if (bool == false) {
        document.getElementById('Xizinho').style.backgroundColor = '#212121';
        document.getElementById('EscX').src = 'XISFoco.png';
        document.getElementById('Bolinha').style.backgroundColor = '#BDBDBD';
        document.getElementById('EscO').src = 'Bola.png';
        vez = "X";
        colorX = true;
        colorY = false;

        return vez;

    }


}
function ClickY() {
    if (bool == false) {
        vez = "O";
        document.getElementById('Bolinha').style.backgroundColor = '#212121';
        document.getElementById('EscO').src = 'BolaFoco.png';
        document.getElementById('Xizinho').style.backgroundColor = '#BDBDBD';
        document.getElementById('EscX').src = 'XIS.png';
        colorY = true;
        colorX = false;
        return vez;
    }
}
function vencedor() {
    velha = 0;
    for (var i = 0; i < 3; i++) {

        if ((jogo[0][i] != "A") && (jogo[0][i] == jogo[1][i]) && (jogo[2][i] == jogo[1][i]) && (fim == false)) {
            if (jogo[0][i] == "X") {
                for (var j = 0; j < 3; j++) {
                    document.getElementById('A'+j.toString() + i.toString()).style.backgroundColor = '#E0E0E0';
                }
                contx = contx + 1;
                document.getElementById('PX').innerHTML = contx;
                fim = true;
                document.getElementById('Bolinha').style.backgroundColor = '#BDBDBD';
                document.getElementById('EscO').src = 'Bola.png';
                document.getElementById('Xizinho').style.backgroundColor = '#E0E0E0';
                document.getElementById('res').style.display = 'block';
                document.getElementById('res').style.backgroundImage = "url('XVence.png')";
                document.getElementById('res').style.backgroundRepeat = "no-repeat";
                document.getElementById('res').style.backgroundPosition = "center";
                document.getElementById('newG').style.display = 'none';
                document.getElementById('newGV').style.display = 'block';

            } else if (jogo[0][i] == "O") {
                for (var j = 0; j < 3; j++) {
                    document.getElementById('A'+j.toString() + i.toString()).style.backgroundColor = '#E0E0E0';
                }
                conto = conto + 1;
                document.getElementById('PO').innerHTML = conto;
                fim = true;
                document.getElementById('Bolinha').style.backgroundColor = '#E0E0E0';
                document.getElementById('Xizinho').style.backgroundColor = '#BDBDBD';
                document.getElementById('EscX').src = 'XIS.png';
                document.getElementById('res').style.display = 'block';
                document.getElementById('res').style.backgroundImage = "url('OVence.png')";
                document.getElementById('res').style.backgroundRepeat = "no-repeat";
                document.getElementById('res').style.backgroundPosition = "center";
                document.getElementById('newG').style.display = 'none';
                document.getElementById('newGV').style.display = 'block';
            }

        } else if ((jogo[i][0] != "A") && (jogo[i][0] == jogo[i][1]) && (jogo[i][2] == jogo[i][1]) && (fim == false)) {
            if (jogo[i][0] == "X") {
                for (var j = 0; j < 3; j++) {
                    document.getElementById('A'+i.toString() + j.toString()).style.backgroundColor = '#E0E0E0';
                }
                contx = contx + 1;
                document.getElementById('PX').innerHTML = contx;
                fim = true;
                document.getElementById('Bolinha').style.backgroundColor = '#BDBDBD';
                document.getElementById('EscO').src = 'Bola.png';
                document.getElementById('Xizinho').style.backgroundColor = '#E0E0E0';
                document.getElementById('res').style.display = 'block';
                document.getElementById('res').style.backgroundImage = "url('XVence.png')";
                document.getElementById('res').style.backgroundRepeat = "no-repeat";
                document.getElementById('res').style.backgroundPosition = "center";
                document.getElementById('newG').style.display = 'none';
                document.getElementById('newGV').style.display = 'block';


            } else if (jogo[i][0] == "O") {
                for (var j = 0; j < 3; j++) {
                    document.getElementById('A'+i.toString() + j.toString()).style.backgroundColor = '#E0E0E0';
                }
                conto = conto + 1;
                document.getElementById('PO').innerHTML = conto;
                fim = true;
                document.getElementById('Bolinha').style.backgroundColor = '#E0E0E0';
                document.getElementById('Xizinho').style.backgroundColor = '#BDBDBD';
                document.getElementById('EscX').src = 'XIS.png';
                document.getElementById('res').style.display = 'block';
                document.getElementById('res').style.backgroundImage = "url('OVence.png')";
                document.getElementById('res').style.backgroundRepeat = "no-repeat";
                document.getElementById('res').style.backgroundPosition = "center";
                document.getElementById('newG').style.display = 'none';
                document.getElementById('newGV').style.display = 'block';

            }

        }
    }
    if ((jogo[0][0] != "A") && (jogo[0][0] == jogo[1][1]) && (jogo[2][2] == jogo[1][1]) && (fim == false)) {
        if (jogo[0][0] == "X") {
            document.getElementById('A00').style.backgroundColor = '#E0E0E0';
            document.getElementById('A11').style.backgroundColor = '#E0E0E0';
            document.getElementById('A22').style.backgroundColor = '#E0E0E0';
            contx = contx + 1;
            document.getElementById('PX').innerHTML = contx;
            fim = true;
            document.getElementById('Bolinha').style.backgroundColor = '#BDBDBD';
            document.getElementById('EscO').src = 'Bola.png';
            document.getElementById('Xizinho').style.backgroundColor = '#E0E0E0';
            document.getElementById('res').style.display = 'block';
            document.getElementById('res').style.backgroundImage = "url('XVence.png')";
            document.getElementById('res').style.backgroundRepeat = "no-repeat";
            document.getElementById('res').style.backgroundPosition = "center";
            document.getElementById('newG').style.display = 'none';
            document.getElementById('newGV').style.display = 'block';

        } else if (jogo[0][0] == "O") {
            document.getElementById('A00').style.backgroundColor = '#E0E0E0';
            document.getElementById('A11').style.backgroundColor = '#E0E0E0';
            document.getElementById('A22').style.backgroundColor = '#E0E0E0';
            conto = conto + 1;
            document.getElementById('PO').innerHTML = conto;
            fim = true;
            document.getElementById('Bolinha').style.backgroundColor = '#E0E0E0';
            document.getElementById('Xizinho').style.backgroundColor = '#BDBDBD';
            document.getElementById('EscX').src = 'XIS.png';
            document.getElementById('res').style.display = 'block';
            document.getElementById('res').style.backgroundImage = "url('OVence.png')";
            document.getElementById('res').style.backgroundRepeat = "no-repeat";
            document.getElementById('res').style.backgroundPosition = "center";
            document.getElementById('newG').style.display = 'none';
            document.getElementById('newGV').style.display = 'block';

        }

    } else if ((jogo[0][2] != "A") && (jogo[1][1] == jogo[0][2]) && (jogo[2][0] == jogo[0][2]) && (fim == false)) {
        if (jogo[1][1] == "X") {
            document.getElementById('A11').style.backgroundColor = '#E0E0E0';
            document.getElementById('A02').style.backgroundColor = '#E0E0E0';
            document.getElementById('A20').style.backgroundColor = '#E0E0E0';
            contx = contx + 1;
            document.getElementById('PX').innerHTML = contx;
            fim = true;
            document.getElementById('Bolinha').style.backgroundColor = '#BDBDBD';
            document.getElementById('EscO').src = 'Bola.png';
            document.getElementById('Xizinho').style.backgroundColor = '#E0E0E0';
            document.getElementById('res').style.display = 'block';
            document.getElementById('res').style.backgroundImage = "url('XVence.png')";
            document.getElementById('res').style.backgroundRepeat = "no-repeat";
            document.getElementById('res').style.backgroundPosition = "center";
            document.getElementById('newG').style.display = 'none';
            document.getElementById('newGV').style.display = 'block';

        } else if (jogo[1][1] == "O") {
            document.getElementById('A11').style.backgroundColor = '#E0E0E0';
            document.getElementById('A02').style.backgroundColor = '#E0E0E0';
            document.getElementById('A20').style.backgroundColor = '#E0E0E0';
            conto = conto + 1;
            document.getElementById('PO').innerHTML = conto;
            fim = true;
            document.getElementById('Bolinha').style.backgroundColor = '#E0E0E0';
            document.getElementById('Xizinho').style.backgroundColor = '#BDBDBD';
            document.getElementById('EscX').src = 'XIS.png';
            document.getElementById('res').style.display = 'block';
            document.getElementById('res').style.backgroundImage = "url('OVence.png')";
            document.getElementById('res').style.backgroundRepeat = "no-repeat";
            document.getElementById('res').style.backgroundPosition = "center";
            document.getElementById('newG').style.display = 'none';
            document.getElementById('newGV').style.display = 'block';

        }

    } else if (fim == false) {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (jogo[i][j] != "A") {
                    velha = velha + 1;
                }
            }
        }

    }
    if (velha == 9) {
        document.getElementById('Bolinha').style.backgroundColor = '#BDBDBD';
        document.getElementById('EscO').src = 'Bola.png';
        document.getElementById('Xizinho').style.backgroundColor = '#BDBDBD';
        document.getElementById('EscX').src = 'XIS.png';
        document.getElementById('res').style.display = 'block';
        document.getElementById('res').style.backgroundImage = "url('velhas.gif')";
        document.getElementById('res').style.backgroundRepeat = "no-repeat";
        document.getElementById('res').style.backgroundPosition = "center";
        document.getElementById('newG').style.display = 'none';
        document.getElementById('newGV').style.display = 'block';
    }

}
function ClickE(n1) {
    var mat = (n1.id).toString();
    if (fim == false) {
        colorX = true;
        colorY = true;
        if (jogo[mat[1]][mat[2]] == "A") {
            img = document.getElementById('img' + n1.id);
            if (vez == "X") {
                bool = true;
                jogo[mat[1]][mat[2]] = "X";
                img.src = "XIS.png"
                vez = 'O';
                document.getElementById('Bolinha').style.backgroundColor = '#212121';
                document.getElementById('EscO').src = 'BolaFoco.png';
                document.getElementById('Xizinho').style.backgroundColor = '#BDBDBD';
                document.getElementById('EscX').src = 'XIS.png';
            } else if (vez == "O") {
                bool = true;
                jogo[mat[1]][mat[2]] = "O";
                img.src = "Bola.png"
                vez = 'X';
                document.getElementById('Bolinha').style.backgroundColor = '#BDBDBD';
            document.getElementById('EscO').src = 'Bola.png';
                document.getElementById('Xizinho').style.backgroundColor = '#212121';
            document.getElementById('EscX').src = 'XISFoco.png';
            } else if (vez == "nada") {
                document.getElementById('Trat').style.display = 'block';
                document.getElementById('Trat').style.backgroundImage = "url('Tratamento.png')";
                document.getElementById('Trat').style.backgroundRepeat = "no-repeat";
                document.getElementById('Trat').style.backgroundPosition = "center";
                document.getElementById('newG').style.display = 'none';
                document.getElementById('newT').style.display = 'block';

            }
        }
        vencedor();
    }
}
function NewGame() {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            jogo[i][j] = "A";
            img = 'A' + i.toString() + j.toString();
            img = document.getElementById('img' + img);
            img.src = "Branco.png";
            document.getElementById('A' + j.toString() + i.toString()).style.backgroundColor = '#BDBDBD';
            document.getElementById('Trat').style.display = 'none';
            document.getElementById('newT').style.display = 'none';
        }
    }
    fim = false;
    bool = false;
    colorX = false;
    colorY = false;
    vez = "nada";
    document.getElementById('Bolinha').style.backgroundColor = '#BDBDBD';
    document.getElementById('Xizinho').style.backgroundColor = '#BDBDBD';
    document.getElementById('res').style.display = 'none';
    document.getElementById('newG').style.display = 'block';
    document.getElementById('newGV').style.display = 'none';
    document.getElementById('EscO').src = 'Bola.png';
    document.getElementById('EscX').src = 'XIS.png';
}
function Recomeco() {
    NewGame()
    conto = 0;
    contx = 0;
    document.getElementById('PO').innerHTML = conto;
    document.getElementById('PX').innerHTML = contx;
}
function Foco(Localizar) {
    if (colorX == false) {
        if (Localizar.id == "Xizinho") {
            document.getElementById('Xizinho').style.backgroundColor = '#212121';
            document.getElementById('EscX').src = 'XISFoco.png';
        }
    }
    if (colorY == false) {
        if (Localizar.id == "Bolinha") {
            document.getElementById('Bolinha').style.backgroundColor = '#212121';
            document.getElementById('EscO').src = 'BolaFoco.png';
        }
    }


}
function NoFoco(Local) {
    if (colorX == false) {
        if (Local.id == "Xizinho") {
            document.getElementById('Xizinho').style.backgroundColor = '#BDBDBD';
            document.getElementById('EscX').src = 'XIS.png';
        }
    } if (colorY == false) {
        if (Local.id == "Bolinha") {
            document.getElementById('Bolinha').style.backgroundColor = '#BDBDBD';
            document.getElementById('EscO').src = 'Bola.png';

        }
    }
}
function MouseUp(Selecao){
if (colorX == false) {
    if (Selecao.id == "Xizinho") {
        document.getElementById('Xizinho').style.top='-1px';
    }
}if (colorY == false) {
    if (Selecao.id == "Bolinha") {
        document.getElementById('Bolinha').style.top='-1px';

    }
}
}
function MouseDown(Selec){
    if (colorX == false) {
        if (Selec.id == "Xizinho") {
            document.getElementById('Xizinho').style.top='1px';
        }
    }if (colorY == false) {
        if (Selec.id == "Bolinha") {
            document.getElementById('Bolinha').style.top='1px';
    
        }
    }
}
