const OPTIONS = ['Rock', 'Paper', 'Scissors'];
let playerWins = 0;
let computerWins = 0;
let ties = 0;
let gamesPlayed = 0;

const glavniDiv = document.getElementById('main-container');
const ispis = document.getElementById('result-text');
const ispis2 = document.getElementById('result-summary');

function playRound(event) {
    let computerIndex = Math.floor(Math.random() * 3);
    let playerIndex = OPTIONS.indexOf(event.target.textContent);
    let resultText = '';
    if (computerIndex == 2 && playerIndex == 0) {
        resultText = `You Win! ${OPTIONS[playerIndex]} beats ${OPTIONS[computerIndex]}!`;
        playerWins++;
    } else if (computerIndex != 2 && playerIndex > computerIndex) {
        resultText = `You Win! ${OPTIONS[playerIndex]} beats ${OPTIONS[computerIndex]}!`;
        playerWins++;
    } else if (computerIndex == playerIndex) {
        resultText = `Tie! Both players chose ${OPTIONS[playerIndex]}`;
    } else {
        resultText = `You Lose! ${OPTIONS[computerIndex]} beats ${OPTIONS[playerIndex]}!`;
        computerWins++;
    };
    ispis.textContent = resultText;
    ispis2.textContent = `Player: ${playerWins} | Computer: ${computerWins} | Games played: ${gamesPlayed}`;
    if ((playerWins > 4) || (computerWins > 4)) {
        let winner = '';
        if (playerWins > computerWins) {
            winner = 'Player';
        } else {
            winner = 'Computer';
        }
        gamesPlayed++;
        showEnding(winner);
    };
}

function showEnding(winner) {
    while (glavniDiv.firstChild) {
        glavniDiv.firstChild.removeEventListener('click');
        glavniDiv.removeChild(glavniDiv.firstChild);
    };
    glavniDiv.classList.replace('playing', 'ended');

    let endText1 = document.createElement('p');
    endText1.classList.add('veliki-text');
    endText1.innerText = `${winner} won!`
    glavniDiv.appendChild(endText1);
    let buttonReset = document.createElement('button');
    buttonReset.innerText = 'Play again';
    buttonReset.addEventListener('click', setupGame);
}

function setupGame() {
    playerWins = 0;
    computerWins = 0;
    ties = 0;

    while (glavniDiv.firstChild) {
        glavniDiv.firstChild.removeEventListener('click');
        glavniDiv.removeChild(glavniDiv.firstChild);
    };
    glavniDiv.classList.replace('ended', 'playing');

    let buttonRock = document.createElement('button');
    buttonRock.setAttribute('id', 'buttonRock');
    buttonRock.textContent = 'Rock';
    buttonRock.setAttribute('class', 'buttons');
    buttonRock.addEventListener('click', playRound)
    let buttonPaper = document.createElement('button');
    buttonPaper.setAttribute('id', 'buttonPaper');
    buttonPaper.textContent = 'Paper';
    buttonPaper.setAttribute('class', 'buttons');
    buttonPaper.addEventListener('click', playRound)
    let buttonScissors = document.createElement('button');
    buttonScissors.setAttribute('id', 'buttonScissors');
    buttonScissors.textContent = 'Scissors';
    buttonScissors.setAttribute('class', 'buttons');
    buttonScissors.addEventListener('click', playRound)
    glavniDiv.appendChild(buttonRock);
    glavniDiv.appendChild(buttonPaper);
    glavniDiv.appendChild(buttonScissors);
}
