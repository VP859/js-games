document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        { name: 'discord', img: './discord.png' },
        { name: 'duolingo', img: './duolingo.png' },
        { name: 'github', img: './github.png' },
        { name: 'imdb', img: './imdb.png' },
        { name: 'instagram', img: './instagram.png' },
        { name: 'nvidia', img: './nvidia.png' },
        { name: 'python', img: 'python.png' },
        { name: 'tux', img: './tux.png' },

        { name: 'discord', img: './discord.png' },
        { name: 'duolingo', img: './duolingo.png' },
        { name: 'github', img: './github.png' },
        { name: 'imdb', img: './imdb.png' },
        { name: 'instagram', img: './instagram.png' },
        { name: 'nvidia', img: './nvidia.png' },
        { name: 'python', img: 'python.png' },
        { name: 'tux', img: './tux.png' },
    ];

    let score = 0;
    let lives = 10;

    cardArray.sort(() => 0.5 - Math.random());

    let cardsChosen = [];
    let cardsChosenId = [];

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', './blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);

            document.getElementById('board').appendChild(card);
            if (i % 4 === 3) {
                document.getElementById('board').appendChild(document.createElement('br'));
            }
        }
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);

        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    function checkForMatch() {
        let cards = document.getElementsByTagName('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if (optionOneId === optionTwoId) {
            cards[optionOneId].setAttribute('src', './blank.png');
            cards[optionTwoId].setAttribute('src', './blank.png');
            alert('You have clicked the same image!');

            return;
        }
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match!');
            score++;
            document.getElementById('score').textContent = score;
        } else {
            cards[optionOneId].setAttribute('src', './blank.png');
            cards[optionTwoId].setAttribute('src', './blank.png');
            alert('Sorry, try again');
            lives--;
            document.getElementById('lives').textContent = lives;

            if (lives === 0) {
                alert('Game Over! Your score: ' + score);
                location.reload();
            }
        }

        cardsChosen = [];
        cardsChosenId = [];
    }

    createBoard();

    document.getElementById('score').textContent = score;
    document.getElementById('lives').textContent = lives;

});