const opcoes={
    1:{nome: 'pedra', img:'pedra.png', pedra: 'EMPATE', papel: 'PERDEU' ,tesoura:'GANHOU'},
    2:{nome: 'papel', img:'papel.png',pedra: 'GANHOU', papel: 'EMPATE' ,tesoura:'PERDEU'},
    3:{nome: 'tesoura', img:'tesoura.png',pedra: 'PERDEU', papel: 'GANHOU' ,tesoura:'EMPATE'},
}

let imgJogador= document.getElementById('imgUser')
let pJogador= document.getElementById('escolhaUsuario')

let imgComputador= document.getElementById('imgComput')
let pComputador= document.getElementById('escolhaComputador')

let resultadofinal= document.getElementById('resultado')

let contagemPontosComputador= document.getElementById('pontosComputador')
let contagemPontosJogador= document.getElementById('pontosUsuario')

let btnPedra=document.getElementsByTagName('button')[0]
let btnPapel=document.getElementsByTagName('button')[1]
let btnTesoura=document.getElementsByTagName('button')[2]

let escolhaJogador={}
let escolhaComputador={}

let pontosJogador=0
let pontosComputador=0


function escolherJogada(num){
    return opcoes[num]
}

function montarJogadas(numJogador) {
    let numComp = Math.floor((Math.random()*3)+1)
    escolhaJogador=escolherJogada(numJogador)
    escolhaComputador=escolherJogada(numComp)
}

function avaliarGanhador(){
    if(escolhaJogador[escolhaComputador.nome] == 'GANHOU'){
        pontosJogador +=1
    }
    else if(escolhaJogador[escolhaComputador.nome] == 'PERDEU'){
        pontosComputador +=1
    }
        
    
}

function montarTela(){
    imgJogador.src=escolhaJogador.img
    imgComputador.src=escolhaComputador.img
    
    imgJogador.alt=escolhaJogador.nome
    imgComputador.alt=escolhaComputador.nome

    pJogador.innerHTML=`Você escolheu ${escolhaJogador.nome}`
    pComputador.innerHTML=`O computador escolheu ${escolhaComputador.nome}`

    contagemPontosComputador.innerHTML=pontosComputador
    contagemPontosJogador.innerHTML= pontosJogador

    resultadofinal.innerHTML=escolhaJogador[escolhaComputador.nome]

    switch(escolhaJogador[escolhaComputador.nome]){
        case 'GANHOU':
            resultadofinal.classList='ganhou'
            break
        case 'PERDEU':
            resultadofinal.classList='perdeu'
            break
        default:
            resultadofinal.classList='empatou'
            break

    }

}

function jogar(num){
    montarJogadas(num)
    avaliarGanhador()
    montarTela()
}
jogar(2)

btnPapel.addEventListener('click',()=>jogar(1))
btnPedra.addEventListener('click',()=>jogar(2))
btnTesoura.addEventListener('click',()=>jogar(3))

