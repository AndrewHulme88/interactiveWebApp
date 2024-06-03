let blackjackGame = document.querySelector('.blackjack-game');

document.getElementById('blackjack').addEventListener('click', () => {
    blackjackGame.style.display = 'block';
});

let playerHand = [];
let dealerHand = [];
let playerScore = 0;
let dealerScore = 0;

function dealCard() {
    let card = Math.floor(Math.random() * 11) + 1;
    return card;
}

function calculateScore(hand) {
    let score = 0;
    for (let i = 0; i < hand.length; i++) {
        score += hand[i];
    }
    return score;
}

function updateUI() {
    document.getElementById('player-hand').textContent = `Player's hand: ${playerHand.join(', ')}`;
    document.getElementById('dealer-hand').textContent = `Dealer's hand: ${dealerHand.join(', ')}`;
}

document.getElementById('hit-button').addEventListener('click', () => {
    playerHand.push(dealCard());
    playerScore = calculateScore(playerHand);
    updateUI();
    if (playerScore > 21) {
        document.getElementById('result').textContent = 'Player busts! Dealer wins!';
    }
});

document.getElementById('stand-button').addEventListener('click', () => {
    dealerHand.push(dealCard());
    dealerScore = calculateScore(dealerHand);
    updateUI();
    if (dealerScore > 21) {
        document.getElementById('result').textContent = 'Dealer busts! Player wins!';
    } else if (dealerScore < playerScore) {
        document.getElementById('result').textContent = 'Player wins!';
    } else if (dealerScore > playerScore) {
        document.getElementById('result').textContent = 'Dealer wins!';
    } else {
        document.getElementById('result').textContent = 'Push!';
    }
});

document.getElementById('reset-button').addEventListener('click', () => {
    playerHand = [];
    dealerHand = [];
    playerScore = 0;
    dealerScore = 0;
    document.getElementById('player-hand').textContent = '';
    document.getElementById('dealer-hand').textContent = '';
    document.getElementById('result').textContent = '';
});

// Add event listeners for interactive elements
document.getElementById('rotating-diamond').addEventListener('click', function() {
    this.classList.add('rotate');
    setTimeout(() => {
        this.classList.remove('rotate');
    }, 2000);
});

document.getElementById('bouncing-club').addEventListener('click', function() {
    this.classList.add('bounce');
    setTimeout(() => {
        this.classList.remove('bounce');
    }, 2000);
});
