const OPTIONS = ['Rock', 'Paper', 'Scissors'];
let playerWins = 0;
let computerWins = 0;
let ties = 0;
let gamesPlayed = 0;

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
    const ispis = document.getElementById('result-text');
    ispis.textContent = resultText;
}

function setupGame() {
    playerWins = 0;
    computerWins = 0;
    ties = 0;

    const glavniDiv = document.getElementById('main-container');
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


    while ((playerWins < 5) || (computerWins < 5)) {
        if (result.startsWith('Win!', 4)) {
            playerWins++;
        } else if (result.startsWith('Lose!', 4)) {
            computerWins++;
        } else {
            ties++;
        }
        console.log(result);
    }
    console.log(`Overall result \nPlayer ${playerWins} : Computer ${computerWins} : ties ${ties}`);
}

