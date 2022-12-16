var getComputerChoice = () => {
    var resultado = Math.floor(Math.random() * 3 + 1);
    return resultado == 1 ? 'rock' : resultado == 2 ? 'paper' : 'scissors'
}

function playRound(playerSelection, computerSelection) {
    console.log(`Player selected: ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`)
    console.log(`Computer selected: ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`)
    if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log('You win')
        return 1
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log('You win')
        return 1
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log('You win')
        return 1
    }
    else if (playerSelection == computerSelection) {
        console.log('You tie')
        return 0
    }
    else {
        console.log('You Lose')
        return 2
    }
}

function game(playerSelection) {

    round = playRound(playerSelection, getComputerChoice());
    if (round == 1) {
        updateModal('Win');
    }
    else if (round == 2) {
        updateModal('Lose');
        youLose();
    }
    else {
        updateModal('Tie');
    }
}


const parentNode = document.getElementById('player-buttons');

for (let i = 0; i < parentNode.children.length; i++) {
    const childNode = parentNode.children[i];
    childNode.addEventListener('click', () => {
        game(childNode.id)
    })
}

function updateModal(conditon) {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
    const modalTitle = document.getElementById('modal-title')
    modalTitle.textContent = `You ${conditon}`;
}

function youLose() {
    const lose = document.getElementById('YOULOSEEEE')
    lose.classList.add('scaling-element')
}

const playAgain = document.getElementById('play-again');

playAgain.addEventListener(('click'), () => {
    const lose = document.getElementById('YOULOSEEEE');
    lose.classList.remove('scaling-element');
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
})