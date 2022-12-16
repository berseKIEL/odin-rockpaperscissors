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

function game() {
    let playerWins = 0;
    let computerWins = 0;
    for (var i = 0; i < 5; i++) {
        win = playRound(getPlayerChoice(), getComputerChoice());
        win == 1 ? playerWins++ : win == 2 ? computerWins++ : 0;
        console.log(playerWins, computerWins)
    }
}

var getComputerChoice = () => {
    var resultado = Math.floor(Math.random() * 3 + 1);
    return resultado == 1 ? 'rock' : resultado == 2 ? 'paper' : 'scissors'
}

var getPlayerChoice = () => {
    let input;
    while (true) {
        input = prompt("Choose 'rock', 'paper' or 'scissors'").toLowerCase();
        if (input !== '' && (input == 'rock' || input == 'paper' || input == 'scissors')) {
            return input
        }
        alert("Empty or invalid response")
    }
}