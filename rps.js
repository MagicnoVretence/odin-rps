const OPTIONS = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    return OPTIONS[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
    let choice = prompt('Choose from "Rock", "Paper" or "Scissors": ');
    let corrected = choice.at(0).toUpperCase().concat(choice.slice(1).toLowerCase());
    return corrected;
}

function playRound(computerSelection, playerSelection) {
    let computerIndex = OPTIONS.indexOf(computerSelection);
    let playerIndex = OPTIONS.indexOf(playerSelection);
    if (computerIndex == 2 && playerIndex == 0) {
        return `You Win! ${OPTIONS[playerIndex]} beats ${OPTIONS[computerIndex]}!`;
    } else if (computerIndex != 2 && playerIndex > computerIndex) {
        return `You Win! ${OPTIONS[playerIndex]} beats ${OPTIONS[computerIndex]}!`;
    } else if (computerIndex == playerIndex) {
        return `Tie! Both players chose ${OPTIONS[playerIndex]}`
    } else {
        return `You Lose! ${OPTIONS[computerIndex]} beats ${OPTIONS[playerIndex]}!`;
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    let ties = 0;
    for (let i = 0; i < 5; i++) {
        let computer = getComputerChoice();
        let player = getPlayerChoice();
        if (!OPTIONS.some(x => x == player)) {
            console.log('Not a valid choice! Quitting!');
            break;
        }
        let result = playRound(computer, player);
        if (result.startsWith('Win!', 4)) {
            playerWins++;
        } else if (result.startsWith('Loose!', 4)) {
            computerWins++;
        } else {
            ties++;
        }
        console.log(result);
    }
    console.log(`Overall result \nPlayer ${playerWins} : Computer ${computerWins} : ties ${ties}`);
}

game();