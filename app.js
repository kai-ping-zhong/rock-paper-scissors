
// Caching the DOM - Like reference points!
let userScore = 0;
let computerScore = 0;
let numberofRounds = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3); //get random numbers between 0 and 3
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    numberofRounds++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice + "beats" + computerChoice + "You win";
    console.log(computer);
}
function lose() {
    console.log("User LOSES");
    numberofRounds++;
}
function draw() {
    console.log("DRAW");
    numberofRounds++;
}

//Main Game Function
function game(userChoice) {
    const computerChoice = getComputerChoice();
    const name = "testing";
    console.log("User chooses" + " " + userChoice);
    console.log("Computer chooses" + " " + computerChoice);
        switch (userChoice + computerChoice) {
            case "rs":    
            case "pr":
            case "sp":
                win(userChoice, computerChoice);
                break;
            case "rp":
            case "ps":
            case "sr":
                lose(userChoice, computerChoice);
                break;
            default:
                draw(userChoice, computerChoice);
                break;
        }
    }

 //When you click on pictures it will know which one :)
function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissor_div.addEventListener('click', function() {
        game("s");
    })
}

main();

