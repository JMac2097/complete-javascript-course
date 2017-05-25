
/*
Coding Challenge 3 

1. A player loses their entire score upon rolling two 6's in a row.  After that, it's the next player's turn.
(Hint: Always save the previous dice roll in a seperate variable.)

2. Add an input field to the html where players can set the winning score, so that they can change the predefined score of 100.
(Hint: You can read that value with the .value property in Javascript.  This is a good opportunity to use google to figure this out.)

3. Add another dice to the game, so that there are two die.  The player loses their current score when one of them is a 1.
(Hint: You will need css to position the second die, so take a look at the css code for the first one.)

*/


var scores, roundScore, activePlayer, gamePlaying, lastDice;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        //random number
        var dice = Math.floor(Math.random() * 6) + 1;
        //display result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-'+ dice + '.png';
        
        //update round score but only if the rolled number isnt a 1
        if(dice === 6 && lastDice === 6) {
            //player loses score
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = 0;
            nextPlayer();
        } else if(dice !== 1) {
            //add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //next Player
            nextPlayer();
        }
        lastDice = dice;
    }

});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying) {
        // Add current score to players global score
        scores[activePlayer] += roundScore;
        // Update UI 
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        //Set the win total in a variable
        var input = document.querySelector('.gameTotal').value;  
        var winTotal;
        // Undefined, 0, null or an empty string are COERCED to false
        // Anything else is coerced to true

        if(winTotal) {
            winTotal = input;
        } else {
            winTotal = 100;
        }

        //Check if player won the game
        if (scores[activePlayer] >= winTotal) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
        //next Player
            nextPlayer();
        }
    }
});


function nextPlayer() {
    //next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');
    
    document.querySelector('.dice').style.display = 'none';
};

// reference to init function, but don't call it here, only when its clicked do we call
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    //reset player scores
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    //hide the dice
    document.querySelector('.dice').style.display = 'none';
    //reset the scores
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    //reset the names
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    //remove winner class
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    //remove active class
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    //add active class to player 1 -- done this way so only one active class can exist at a time
    document.querySelector('.player-0-panel').classList.add('active');
    
    
};


//document.querySelector('#current-' + activePlayer).textContent = dice; //setter
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent; //getter
//console.log(x);









