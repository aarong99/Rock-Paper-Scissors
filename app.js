let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice(){
    const choices = ['r', 'p', 's'];
    var randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function phrase(letter){
    if (letter === "r")
        return "Rock";
    if (letter === "p")
        return "Paper";
    if (letter === "s")
        return "Scissors";
}

function win(userChoice, compChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    const smallUser = "user".fontsize(3).sub();
    const smallComp = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = phrase(userChoice) + smallUser + " beats " + phrase(compChoice) + smallComp + "🤩😎. You win!";
    userChoice_div.classList.add('green-glow');
    setTimeout(function() {userChoice_div.classList.remove('green-glow')}, 1000);
}

function lose(userChoice, compChoice){
    compScore++;
    compScore_span.innerHTML = compScore;
    const smallUser = "user".fontsize(3).sub();
    const smallComp = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = phrase(userChoice) + smallUser + " loses to " + phrase(compChoice) + smallComp + "😪😬. You lose..";
    userChoice_div.classList.add('red-glow');
    setTimeout(function() {userChoice_div.classList.remove('red-glow')}, 1000);
}

function draw(userChoice){
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = "You both chose " + phrase(userChoice) + "!🙄😂";
    userChoice_div.classList.add('grey-glow');
    setTimeout(function() {userChoice_div.classList.remove('grey-glow')}, 1000);
}

function game(userChoice){
    const compChoice = getCompChoice();
    switch (userChoice + compChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    })
    paper_div.addEventListener('click', function(){
        game("p");
    })
    scissors_div.addEventListener('click', function(){
        game("s");
    })
}

main();