function game() {

let playerSelection = "rock";
let result = " ";
let computerScore = 0;
let playerScore = 0;

function computerPlay() {
	let options = ["rock", "paper", "scissors"]
	return options[Math.floor(Math.random()*options.length)];
}

function playRound(playerSelection, computerSelection) {

	computerSelection = computerPlay();
	
	if	((playerSelection == "rock" && computerSelection == "scissors") ||
		(playerSelection == "paper" && computerSelection == "rock") ||
		(playerSelection == "scissors" && computerSelection == "paper")) {
		playerScore++;
		return result = ("You Won, " + playerSelection + " beats " + computerSelection 
		+ " " + playerScore + " " + computerScore);
	}

	else if (computerSelection === playerSelection) {
		return result = ("Draw, you both chose " + playerSelection)
	}

	else {
		computerScore++;
		return result = ("You Lost, " + computerSelection + " beats " + playerSelection
		+ " " + playerScore + " " + computerScore)
	}
}

for (let x = 0; x < 5; x++) { 

	playRound(playerSelection, computerPlay());
}

	if (playerScore > computerScore) {
		return result = ("Game Over, You Won! " + playerScore + " "
		+ computerScore);
	}

	else if (computerScore > playerScore) {
		return result = ("Game Over, You Lost! " + playerScore + " "
		+ computerScore)
	} else {
		return result = ("This game is a Draw!")
	}

}

game();

console.log(game());