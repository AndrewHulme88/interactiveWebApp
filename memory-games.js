let cards = document.querySelectorAll('.card');
let flippedCards = [];

document.getElementById('card-match').addEventListener('click', () => {
    document.querySelector('.card-match-game').style.display = 'block';
});

cards.forEach(card => {
    card.addEventListener('click', () => {
        if (flippedCards.length < 2) {
            card.classList.add('flipped');
            flippedCards.push(card);
        }

        if (flippedCards.length === 2) {
            setTimeout(() => {
                if (flippedCards[0].querySelector('.back').style.backgroundColor === flippedCards[1].querySelector('.back').style.backgroundColor) {
                    flippedCards[0].style.visibility = 'hidden';
                    flippedCards[1].style.visibility = 'hidden';
                } else {
                    flippedCards[0].classList.remove('flipped');
                    flippedCards[1].classList.remove('flipped');
                }
                flippedCards = [];
            }, 1000);
        }
    });
});

// Add background colors to the cards
let colors = ['#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ff0000'];
let pairs = [];

for (let i = 0; i < 6; i++) {
    pairs.push(colors[i]);
    pairs.push(colors[i]);
}

pairs.sort(() => Math.random() - 0.5);

for (let i = 0; i < 12; i++) {
    cards[i].querySelector('.back').style.backgroundColor = pairs[i];
}
