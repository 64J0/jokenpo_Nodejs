/*  
    https://nodejs.org/api/readline.html
    The readline module provides an interface for reading data from a Readable stream (such as process.stdin) one line at a time.
*/
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let continua = 1;

function introducao() {
    console.log('Bem-vindo ao jogo de Jokenpo');
    console.log('Convenções:');
    console.log('pe - Pedra');
    console.log('pa - Papel');
    console.log('te - Tesoura');

    jogada();
    //segueOJogo();
}

/*
    I want to use a structure to call the initial function when the game has ended.
*/
/*
do {

    introducao();
    rl.question('Deseja jogar de novo? \n1-SIM, Qualquer outra tecla- NÃO', resposta => {
        continua = resposta;
        rl.close();
    });

} while(continua == 1);
*/

introducao();

function jogadaDoComputador() {
    let jogadaDoComputador = Math.round(Math.random()*2);

    if (jogadaDoComputador === 0) {
        console.log('A máquina escolheu pedra!');
        return('pe'); 
    } else if (jogadaDoComputador === 1) {
        console.log('A máquina escolheu papel!');
        return('pa');
    } else {
        console.log('A máquina escolheu tesoura!');
        return('te');
    }
}

function jogada() {
    rl.question('Qual a sua jogada? ', resposta => {
        console.log('\n\n\n\n');
        if (resposta === 'pe') {
            console.log('Você escolheu pedra!');
        } else if (resposta === 'pa') {
            console.log('Você escolheu papel!');
        }else if(resposta === 'te') {
            console.log('Você escolheu tesoura!');
        } else {
            console.log('Comando inválido!');
        }

        rl.close();
    
        verifica(resposta, jogadaDoComputador());
    });
}

function verifica(jogador, maquina) {

    if(jogador == maquina) {
        console.log('Empatou!');
    } else if((jogador === 'pa') && (maquina === 'pe')) {
        console.log('Você venceu!');
    } else if((jogador === 'pa') && (maquina === 'te')) {
        console.log('A máquina venceu!');
    } else if((jogador === 'pe') && (maquina === 'te')) {
        console.log('Você venceu!');
    } else if((jogador === 'pe') && (maquina === 'pa')) {
        console.log('A máquina venceu!');
    } else if((jogador === 'te') && (maquina === 'pa')) {
        console.log('Você venceu!');
    } else if((jogador === 'te') && (maquina === 'pe')) {
        console.log('A máquina venceu!');
    } else {
        console.log('Não foi possível determinar o vencedor!');
    }
}

/*
function segueOJogo() {
    rl.question('Deseja jogar de novo? \n1-SIM, \nQualquer outra tecla- NÃO', resposta => {
        continua = resposta;
        rl.close();

        if (continua == 1) {
            introducao();
        }
    });
}
*/