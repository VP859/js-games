function play(player_option) {
    let computer = Math.floor(Math.random() * 3);
    
    let options = ['rock', 'paper', 'scissors'];
    let computer_option = options[computer];
    
    document.getElementById('player').src = `./${player_option}.png`;
    document.getElementById('computer').src = `./${computer_option}.png`;

    if (computer_option == player_option) {
        document.getElementById('result').innerHTML = 'TIE';
    }
    else if (player_option == 'rock' && computer_option == 'scissors' ||
             player_option == 'paper' && computer_option == 'rock' ||
             player_option == 'scissors' && computer_option == 'paper') {
        document.getElementById('result').innerHTML = 'YOU WIN';
    }
    else {
        document.getElementById('result').innerHTML = 'YOU LOSE';
    }

}