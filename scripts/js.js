// Computer Choice
function randomBtnSelect(computerChoice) {
    const times = 30;

    const interval = setInterval(() => {
        const randomButton = pickRandomComputerBtn();
        highlightBtn(randomButton);

        setTimeout(() => {
            unhighlightBtn(randomButton);
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
            const pickedButton = pickComputerChoice(computerChoice);
            console.log(pickedButton)
            highlightBtn(pickedButton);
        }, 100)
    }, times * 100);
}

function pickRandomComputerBtn() {
    const ComputerBtns = document.getElementById('computer-buttons');
    ComputerBtns.disabled = false;
    const selectedBtn = ComputerBtns.children[Math.floor(Math.random() * ComputerBtns.children.length)];
    return selectedBtn;
}

function pickComputerChoice(computerChoice) {
    const ComputerBtns = document.getElementById('computer-buttons');
    ComputerBtns.disabled = false;
    const selectedBtn = ComputerBtns.children[computerChoice];
    return selectedBtn;
}

function highlightBtn(btn) {
    btn.classList.add('highlight');
}

function unhighlightBtn(btn) {
    btn.classList.remove('highlight');
}

function getComputerChoice() {
    var resultado = Math.floor(Math.random() * 3);
    randomBtnSelect(resultado);
    return resultado;
}

// ------------------ //

// Player Choice
const parentNode = document.getElementById('player-buttons');

for (let i = 0; i < parentNode.children.length; i++) {
    const childNode = parentNode.children[i];
    childNode.addEventListener('click', () => {
        childNode.classList.add('selected');
        game(childNode.id);
    })
}
// ------------------ //


// Play the game, Duh
function game(playerSelection) {
    var times = 31;
    const computerSelection = getComputerChoice()
    round = playRound(playerSelection, computerSelection);
    setTimeout(
        () => {
            if (round == 1) {
                updateModalOnCondition('Win');
            }
            else if (round == 2) {
                updateModalOnCondition('Lose');
                youLose();
            }
            else {
                updateModalOnCondition('Tie');
            }
        }, times * 100
    );
}

function updateModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
}

function updateModalOnCondition(condition) {
    const modalBody = document.getElementById('modal-body')
    console.log(modalBody)
    modalBody.style.display = 'flex';

    const modalTitle = document.getElementById('modal-title')
    modalTitle.textContent = `You ${condition}`;
}

function youLose() {
    const lose = document.getElementById('YOULOSEEEE')
    lose.classList.add('scaling-element')
}

const playAgain = document.getElementById('play-again');

playAgain.addEventListener(('click'), () => {
    window.location = window.location
})
// ------------------ //


// Play the round, Duh
function playRound(playerSelection, computerSelection) {
    updateModal()

    let computerS = computerSelection == 0 ? 'rock' : computerSelection == 1 ? 'paper' : 'scissors'

    console.log(`Player selected: ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`)
    console.log(`Player selected: ${computerS.charAt(0).toUpperCase() + computerS.slice(1)}`)

    if (playerSelection == 'rock' && computerS == 'scissors') {
        console.log('You win')
        return 1
    }
    else if (playerSelection == 'paper' && computerS == 'rock') {
        console.log('You win')
        return 1
    }
    else if (playerSelection == 'scissors' && computerS == 'paper') {
        console.log('You win');
        return 1
    }
    else if (playerSelection == computerS) {
        console.log('You tie')
        return 0
    }
    else {
        console.log('You Lose')
        return 2
    }
}
// ------------------ //

