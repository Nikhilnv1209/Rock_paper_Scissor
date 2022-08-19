let firstimage = document.getElementById("first_image");
let secondimage = document.getElementById("second_image");

let firstplayerbtn = document.getElementById("firstbtn");
let secondplayerbtn = document.getElementById("secondbtn");

let winner = document.getElementById("winner_name");
let first_choice;
let second_choice;

let FirstScore = document.getElementById("player1");
let SecondScore = document.getElementById("player2");


function check(first_choice, second_choice) {
    if (first_choice == second_choice) {
        winner.innerHTML = "Draw";
    }
    else if (first_choice == 0 && second_choice == 1) {
        winner.innerHTML = "Paper Cover rock!!! Second player wins";
        SecondScore.innerHTML = parseInt(SecondScore.innerHTML) + 1;
    }
    else if (first_choice == 0 && second_choice == 2) {
        winner.innerHTML = "Rock Break Scissor!!! First player wins";
        FirstScore.innerHTML = parseInt(FirstScore.innerHTML) + 1;
    }
    else if (first_choice == 1 && second_choice == 0) {
        // 0 = rock, 1 = paper, 2 = scissor
        winner.innerHTML = "Paper Cover rock!!! First player wins";
        FirstScore.innerHTML = parseInt(FirstScore.innerHTML) + 1;
    }
    else if (first_choice == 1 && second_choice == 2) {
        winner.innerHTML = "Scissor cuts paper!!! Second player wins";
        SecondScore.innerHTML = parseInt(SecondScore.innerHTML) + 1;
    }
    else if (first_choice == 2 && second_choice == 0) {
        winner.innerHTML = "Rock Breaks Scissor!!! Second player wins";
        SecondScore.innerHTML = parseInt(SecondScore.innerHTML) + 1;
    }
    else if (first_choice == 2 && second_choice == 1) {
        winner.innerHTML = "Scissor Cuts paper!!! First player wins";
        FirstScore.innerHTML = parseInt(FirstScore.innerHTML) + 1;
    }
}

//onclick event for first player button
firstplayerbtn.onclick = () => {
    first_choice = Math.floor(Math.random() * 3)
    if (first_choice == 0) {
        firstimage.src = "rock.png";
    }
    else if (first_choice == 1) {
        firstimage.src = "paper.png";
    }
    else if (first_choice == 2) {
        firstimage.src = "scissor.png";
    }
}




//onclick event for second player button
secondplayerbtn.onclick = function () {
    second_choice = Math.floor(Math.random() * 3)
    if (second_choice == 0) {
        secondimage.src = "rock.png";
    }
    else if (second_choice == 1) {
        secondimage.src = "paper.png";
    }
    else if (second_choice == 2) {
        secondimage.src = "scissor.png";
    }
    update_score(FirstScore , SecondScore);
}


function update_score(FirstScore , SecondScore)
{
    check(first_choice, second_choice);
}



