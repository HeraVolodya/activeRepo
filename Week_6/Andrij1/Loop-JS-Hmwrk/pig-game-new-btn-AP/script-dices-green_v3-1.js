'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');  
const diceEl1 = document.querySelector('.dice1');
const diceEl2 = document.querySelector('.dice2');
const btnNew = document.querySelector('.btn--new');
const btnRoll1 = document.querySelector('.btn--roll1');
const btnRoll2 = document.querySelector('.btn--roll2');
const btnHold = document.querySelector('.btn--hold');
  
let scores, currentScore, activePlayer, playing;

btnRoll1.addEventListener('click', function () {
    if (playing) {
        
        // 1. Generating a random dice roll
        const dice1 = Math.trunc(Math.random() * 6) + 1;

        // 2. Display dice
        diceEl1.classList.remove('hidden');
        diceEl1.src = `dice-${dice1}.png`;
    
        // 3. Check for rolled 1
        if (dice1 !== 1) {
        
        // Add dice to current score
        currentScore += dice1;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {    
        // Switch to next player
        switchPlayer();
        }
    }
    });

btnRoll2.addEventListener('click', function () {
    if (playing) {
        
        // 1. Generating a random dice roll
        const dice2 = Math.trunc(Math.random() * 6) + 1;

        // 2. Display dice

        diceEl2.classList.remove('hidden');
        diceEl2.src = `dice-${dice2}.png`;
    
        // 3. Check for rolled 1
        if (dice2 !==1) {
        
        // Add dice to current score
        currentScore += dice2;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {        
        // Switch to next player
        switchPlayer();
        }
    }
    });

    
const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    diceEl1.classList.add('hidden');
    diceEl2.classList.add('hidden');
    };

        
btnHold.addEventListener('click', function () {
    if (playing) {
        
        // 1. Add current score to active player's score
        scores[activePlayer] += currentScore;
        // scores[1] = scores[1] + currentScore
    
        document.getElementById(`score--${activePlayer}`)
        .textContent = scores[activePlayer];
    
        // 2. Check if player's score is >= 100
        if (scores[activePlayer] >= 21) {
        
        // Finish the game
        playing = false;
        diceEl1.classList.add('hidden');
        diceEl2.classList.add('hidden');
    
        document
            .querySelector(`.player--${activePlayer}`)
            .classList.add('player--winner');
        document
            .querySelector(`.player--${activePlayer}`)
            .classList.remove('player--active');
        } else {
        
        // Switch to the next player
        switchPlayer();
        }
    }
    });

    
const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    
    diceEl1.classList.add('hidden');
    diceEl2.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    };
    init();
        
    btnNew.addEventListener('click', init);
