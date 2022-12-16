function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        return 'You win!'
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        return 'You Win'
    }
    else if (playerSelection == 'Scissor' && computerSelection == 'Paper') {
        return 'You win'
    }
    else if (playerSelection === computerSelection) {
        return 'Tie'
    }
    else {
        return 'You lose'
    }
}

var getComputerChoice = () => {
    var resultado = Math.floor(Math.random() * 3+1);
    return resultado == 1 ? 'Rock' : resultado == 2 ? 'Paper' : 'Scissors'
 }

var playerSelection = (input) => input.toLowerCase().charAt(0).toUpperCase()+input.slice(1);

console.log(playRound(console.log(playerSelection('rock')), console.log(getComputerChoice())))