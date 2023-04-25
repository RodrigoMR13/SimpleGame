const runner = document.querySelector('.runner');
const stone = document.querySelector('.thunderStone');

const jump = () => {
    runner.classList.add('jump');

    setTimeout(() => {

        runner.classList.remove('jump');

    }, 500);

}

const loop = setInterval(() => {

    const stonePosition = stone.offsetLeft;
    const runnerPosition = +window.getComputedStyle(runner).bottom.replace('px', '');

    if (stonePosition <= 12 && stonePosition > 0 && runnerPosition < 65) {
        stone.style.animation = 'none';
        stone.style.left = `${stonePosition}px`;
        
        runner.style.animation = 'none';
        runner.style.bottom = `${runnerPosition}px`;

        runner.src = './img/raichu-removebg.png';
        runner.style.width = '75px'
        runner.style.marginLeft = '10px'
    
        clearInterval(loop);
    }

} , 10)

document.addEventListener('keydown', jump);