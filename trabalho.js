const opcoes={
    1:{nome: 'pedra ', img:'pedra.png', pedra: 'EMPATE', papel: 'PERDEU' ,tesoura:'GANHOU'},
    1:{nome: 'papel ', img:'papel.png',pedra: 'GANHOU', papel: 'EMPATE' ,tesoura:'PERDEU'},
    1:{nome: 'tesoura ', img:'tesoura.png',pedra: 'PERDEU', papel: 'GANHOU' ,tesoura:'EMPATE'},
}

let escolhaJogador={}
let escolhaComputador={}


function escolherJogada(num){
    return opcoes[num]
}

let numComp = Math.floor((Math.random()*3)+1)
escolhaComputador = opcoes[numComp]


