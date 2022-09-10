const app = document.getElementById('app');
const S_mario = [
    [0,0,0,0,0,2,2,2,2,2,0,0,0,0,0,0],
    [0,0,0,0,2,2,2,2,2,2,2,2,2,0,0,0],
    [0,0,0,0,3,3,3,1,1,3,1,0,0,0,0,0],
    [0,0,0,3,1,3,1,1,1,3,1,1,1,0,0,0],
    [0,0,0,3,1,3,3,1,1,1,3,1,1,1,0,0],
    [0,0,0,3,3,1,1,1,1,3,3,3,3,0,0,0],
    [0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],
    [0,0,0,0,3,3,2,3,3,3,0,0,0,0,0,0],
    [0,0,0,3,3,3,2,3,3,2,3,3,3,0,0,0],
    [0,0,3,3,3,3,2,2,2,2,3,3,3,3,0,0],
    [0,0,1,1,3,2,1,2,2,1,2,3,1,1,0,0],
    [0,0,1,1,1,2,2,2,2,2,2,1,1,1,0,0],
    [0,0,1,1,2,2,2,2,2,2,2,2,1,1,0,0],
    [0,0,0,0,2,2,2,0,0,2,2,2,0,0,0,0],
    [0,0,0,3,3,3,0,0,0,0,3,3,3,0,0,0],
    [0,0,3,3,3,3,0,0,0,0,3,3,3,3,0,0],
] as number[][];

const J_mario = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
    [0,0,0,0,0,0,2,2,2,2,2,0,0,1,1,1],
    [0,0,0,0,0,2,2,2,2,2,2,2,2,2,1,1],
    [0,0,0,0,0,3,3,3,1,1,3,1,0,3,3,3],
    [0,0,0,0,3,1,3,1,1,1,3,1,1,1,3,3],
    [0,0,0,0,3,1,3,3,1,1,1,3,1,1,1,3],
    [0,0,0,0,3,3,1,1,1,1,3,3,3,3,3,0],
    [0,0,0,0,0,0,1,1,1,1,1,1,1,3,0,0],
    [0,0,0,3,3,3,3,2,3,3,3,2,3,0,0,0],
    [0,0,3,3,3,3,3,3,2,3,3,3,2,0,0,3],
    [0,1,1,3,3,3,3,3,2,3,3,3,2,0,0,3],
    [0,1,1,1,2,2,3,2,2,2,2,2,2,2,3,3],
    [0,1,1,0,2,2,2,2,2,2,2,2,2,2,3,3],
    [0,0,0,3,3,2,2,2,2,2,2,2,2,2,3,3],
    [0,0,3,3,2,2,2,2,2,2,2,0,0,0,0,0],
    [0,3,3,3,2,2,2,2,0,0,0,0,0,0,0,0],
] as number[][];

const R_B_mario = [
    [0,0,0,0,0,2,2,2,2,2,0,0,0,0,0,0],
    [0,0,0,0,2,2,2,2,2,2,2,2,2,0,0,0],
    [0,0,0,0,3,3,3,1,1,3,1,0,0,0,0,0],
    [0,0,0,3,1,3,1,1,1,3,1,1,1,0,0,0],
    [0,0,0,3,1,3,3,1,1,1,3,1,1,1,0,0],
    [0,0,0,3,3,1,1,1,1,3,3,3,3,0,0,0],
    [0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],
    [0,0,3,3,3,3,2,2,3,3,0,0,0,0,0,0],
    [1,1,3,3,3,3,2,2,2,3,3,3,1,1,1,0],
    [1,1,1,0,3,3,2,1,2,2,2,3,3,1,1,0],
    [1,1,0,0,2,2,2,2,2,2,2,0,0,3,0,0],
    [0,0,0,2,2,2,2,2,2,2,2,2,3,3,0,0],
    [0,0,2,2,2,2,2,2,2,2,2,2,3,3,0,0],
    [0,3,3,2,2,2,0,0,0,2,2,2,3,3,0,0],
    [0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0],
] as number[][]

const R_N_mario = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,2,2,2,2,2,0,0,0,0,0,0],
    [0,0,0,0,2,2,2,2,2,2,2,2,2,0,0,0],
    [0,0,0,0,3,3,3,1,1,3,1,0,0,0,0,0],
    [0,0,0,3,1,3,1,1,1,3,1,1,1,0,0,0],
    [0,0,0,3,1,3,3,1,1,1,3,1,1,1,0,0],
    [0,0,0,3,3,1,1,1,1,3,3,3,3,0,0,0],
    [0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],
    [0,0,0,0,3,3,2,3,3,3,0,0,0,0,0,0],
    [0,0,0,3,3,3,3,2,2,3,3,0,0,0,0,0],
    [0,0,0,3,3,3,2,2,1,2,2,1,0,0,0,0],
    [0,0,0,3,3,3,3,2,2,2,2,2,0,0,0,0],
    [0,0,0,2,3,3,1,1,1,2,2,2,0,0,0,0],
    [0,0,0,0,2,3,1,1,2,2,2,0,0,0,0,0],
    [0,0,0,0,0,2,2,2,3,3,3,0,0,0,0,0],
    [0,0,0,0,0,3,3,3,3,3,3,3,0,0,0,0],
    [0,0,0,0,0,3,3,3,3,0,0,0,0,0,0,0],
] as number[][]

const R_A_mario = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,2,2,2,2,2,0,0,0,0,0,0],
    [0,0,0,0,2,2,2,2,2,2,2,2,2,0,0,0],
    [0,0,0,0,3,3,3,1,1,3,1,0,0,0,0,0],
    [0,0,0,3,1,3,1,1,1,3,1,1,1,0,0,0],
    [0,0,0,3,1,3,3,1,1,1,3,1,1,1,0,0],
    [0,0,0,3,3,1,1,1,1,3,3,3,3,0,0,0],
    [0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],
    [0,0,0,0,3,3,3,3,2,3,0,1,0,0,0,0],
    [0,0,0,1,3,3,3,3,3,3,1,1,1,0,0,0],
    [0,0,1,1,2,3,3,3,3,3,1,1,1,0,0,0],
    [0,0,3,3,2,2,2,2,2,2,2,0,0,0,0,0],
    [0,0,3,2,2,2,2,2,2,2,2,0,0,0,0,0],
    [0,0,3,2,2,2,0,2,2,2,0,0,0,0,0,0],
    [0,0,3,0,0,0,3,3,3,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,3,3,3,3,0,0,0,0,0,0],
    [],
] as number[][]

const RunningBeforeMario = (mario: number[][]):void => {
    const elem = document.createElement('div');
    elem.setAttribute('id', 'mario');
    app?.appendChild(elem);
    for(let i = 0; i < mario.length; i++) {
        for(let j = 0; j < mario[i].length; j++) {
            const elem = document.createElement('p');
            const body = document.getElementById("mario");
            switch(mario[i][j] as number) {
                case 0:
                    elem.classList.add('disable-block');
                    body?.appendChild(elem);
                break;
    
                case 1:
                    elem.classList.add('skin-block');
                    body?.appendChild(elem);
                break;
    
                case 2:                
                    elem.classList.add('red-block');
                    body?.appendChild(elem);
                break;
    
                default:               
                    elem.classList.add('green-block');
                    body?.appendChild(elem);
                break;
            }
        }
    } 
}

const RunningNowMario = (mario: number[][]):void => {
    const elem = document.createElement('div');
    elem.setAttribute('id', 'mario');
    app?.appendChild(elem);
    for(let i = 0; i < mario.length; i++) {
        for(let j = 0; j < mario[i].length; j++) {
            const elem = document.createElement('p');
            const body = document.getElementById("mario");
            switch(mario[i][j] as number) {
                case 0:
                    elem.classList.add('disable-block');
                    body?.appendChild(elem);
                break;
    
                case 1:
                    elem.classList.add('skin-block');
                    body?.appendChild(elem);
                break;
    
                case 2:                
                    elem.classList.add('red-block');
                    body?.appendChild(elem);
                break;
    
                default:               
                    elem.classList.add('green-block');
                    body?.appendChild(elem);
                break;
            }
        }
    } 
}

const RunningAfterMario = (mario: number[][]):void => {
    const elem = document.createElement('div');
    elem.setAttribute('id', 'mario');
    app?.appendChild(elem);
    for(let i = 0; i < mario.length; i++) {
        for(let j = 0; j < mario[i].length; j++) {
            const elem = document.createElement('p');
            const body = document.getElementById("mario");
            switch(mario[i][j] as number) {
                case 0:
                    elem.classList.add('disable-block');
                    body?.appendChild(elem);
                break;
    
                case 1:
                    elem.classList.add('skin-block');
                    body?.appendChild(elem);
                break;
    
                case 2:                
                    elem.classList.add('red-block');
                    body?.appendChild(elem);
                break;
    
                default:               
                    elem.classList.add('green-block');
                    body?.appendChild(elem);
                break;
            }
        }
    } 
}

const StandMario = (mario: number[][]): void => {    
    const elem = document.createElement('div');
    elem.setAttribute('id', 'mario');
    app?.appendChild(elem);
    for(let i = 0; i < mario.length; i++) {
        for(let j = 0; j < mario[i].length; j++) {
            const elem = document.createElement('p');
            const body = document.getElementById("mario");
            switch(mario[i][j] as number) {
                case 0:
                    elem.classList.add('disable-block');
                    body?.appendChild(elem);
                break;
    
                case 1:
                    elem.classList.add('skin-block');
                    body?.appendChild(elem);
                break;
    
                case 2:                
                    elem.classList.add('red-block');
                    body?.appendChild(elem);
                break;
    
                default:               
                    elem.classList.add('green-block');
                    body?.appendChild(elem);
                break;
            }
        }
    } 
}
const JumpMario = (mario: number[][]): void => {    
    const elem = document.createElement('div');
    elem.setAttribute('id', 'mario');
    app?.appendChild(elem);
    for(let i = 0; i < mario.length; i++) {
        for(let j = 0; j < mario[i].length; j++) {
            const elem = document.createElement('p');
            const body = document.getElementById("mario");
            switch(mario[i][j] as number) {
                case 0:
                    elem.classList.add('disable-block');
                    body?.appendChild(elem);
                break;
    
                case 1:
                    elem.classList.add('skin-block');
                    body?.appendChild(elem);
                break;
    
                case 2:                
                    elem.classList.add('red-block');
                    body?.appendChild(elem);
                break;
    
                default:               
                    elem.classList.add('green-block');
                    body?.appendChild(elem);
                break;
            }
        }
    } 
}

let i = 0;
setInterval(function() {
    switch(i) {
        case 0:
            document.getElementById('mario')?.remove();
            RunningBeforeMario(R_B_mario);
            i += 1;
        break;

        case 1:
            document.getElementById('mario')?.remove();
            RunningNowMario(R_N_mario);
            i += 1;
        break;

        default:
            document.getElementById('mario')?.remove();
            RunningAfterMario(R_A_mario);
            i = 0;
        break;
    }
}, 100)