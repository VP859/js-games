document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("grid").addEventListener("click", hit_mole);

    document.getElementById('score').innerHTML = score;
    document.getElementById('time').innerHTML = time;

    draw_grid();    
    setInterval(move_mole, 650);
    setInterval(countdown, 1000);
});

let score = 0;
let time = 30;
let current_mole = 0;

function draw_grid() {
    let grid = document.getElementById("grid");
    for (let i = 0; i < 9; i++) {
        if (i % 3 === 0) {
            grid.innerHTML += "<br>";
        }
        grid.innerHTML += `<div class="square" id="${i}"></div>`;
    }

    let number = Math.floor(Math.random() * 9);
    document.getElementById(number).innerHTML = "<img src='mole.png' alt='mole' class='mole'>";
    current_mole = number;
}

function move_mole() {
    let number = Math.floor(Math.random() * 9);
    document.getElementById(current_mole).innerHTML = "";
    document.getElementById(number).innerHTML = "<img src='mole.png' alt='mole' class='mole'>";
    current_mole = number;
}

function hit_mole(event) {
    if (event.target.classList.contains("mole") && event.target.parentElement.id == current_mole) {
        score++;
        document.getElementById("score").innerHTML = score;
        event.target.classList.remove("mole");
    }
}

function countdown() {
    time--;
    document.getElementById("time").innerHTML = time;
    if (time === 0) {
        alert("Game Over! Your score is " + score);
        location.reload();
    }
}