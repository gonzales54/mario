let count = 0;
let intervalId: any;
let key = '' as string;

const app: HTMLElement|null = document.getElementById('app');
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
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
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

const Mario = (mario: number[][], key: string):void => {
    (document.getElementById(`${key}`) as HTMLElement|null)?.remove();
    const elem: HTMLDivElement = document.createElement('div');
    elem.setAttribute('id', `${key}`);
    app?.appendChild(elem);
    for(let i = 0; i < mario.length; i++) {
        for(let j = 0; j < mario[i].length; j++) {
            const elem: HTMLParagraphElement = document.createElement('p');
            const body: HTMLElement|null = document.getElementById(`${key as string}`);
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


Mario(S_mario, 'mario')

const run = (count: number, key: string) => {
    intervalId = setInterval(function(): void {
        switch(count) {
            case 0:
                Mario(R_B_mario, key);
                count += 1;
            break;

            case 1:
                Mario(R_N_mario, key);
                count += 1;
            break;

            default:
                Mario(R_A_mario, key);
                count = 0;
            break;
        }
    }, 100);
}

const destroy = (key1: string, key2: string|null) => {
    for(let i=0; i<(app as HTMLElement)?.childElementCount;i++) {
        if((app as HTMLElement).children[i].id === null) {
            (app as HTMLElement).children[i].remove();
        }
    }
    (document.getElementById(`${key1}`) as HTMLElement|null)?.remove();
    (document.getElementById(`${key2}`) as HTMLElement|null)?.remove();
    clearInterval(intervalId)
}


function keyPressEvent(e: KeyboardEvent) {
    if(e.key === 'ArrowRight') {
        destroy('mario', 'mario_reverse')
        key = 'mario'
        run(count, key)
    } else if(e.key === 'ArrowLeft') {
        destroy('mario', 'mario_reverse')
        key = 'mario_reverse'
        run(count, key)
    } else if(e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        return false;
    } else {
        destroy(key, '');
        Mario(S_mario, key)
        key = ''
    }
}

document.addEventListener('keydown', keyPressEvent);