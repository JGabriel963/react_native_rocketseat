const game = document.querySelector('.container')
const msg1 = document.getElementById('message1'),
msg2 = document.getElementById('message2'),
msg3 = document.getElementById('message3')
const answer = Math.floor(Math.random() * 100) + 1;
let noOfGuesses = 0
const guessedNums = []

document.getElementById('play').addEventListener('click', function() {
    game.classList.add('show');
})

document.getElementById('close').addEventListener('click', function() {
    const confirmar = confirm('Tem certeza que deseja sair do jogo?')

    if (confirmar) {
        game.classList.remove('show')
    }
})

document.getElementById('btn-guess').addEventListener('click', function() {
    const useGuess = document.getElementById('guess').value;
    if (useGuess < 1 || useGuess > 100) {
        alert("Please enter a number between 1 and 100")
    } else {
        guessedNums.push(useGuess);
        noOfGuesses += 1;

        if(useGuess < answer) {
            msg1.textContent = 'Your guess is too low'
            msg2.textContent = 'No. of guesses: ' + noOfGuesses
            msg3.textContent = "Guessed numbers are: " + guessedNums
        } else if (useGuess > answer){
            msg1.textContent = 'Your guess is too high'
            msg2.textContent = 'No. of guesses: ' + noOfGuesses
            msg3.textContent = "Guessed numbers are: " + guessedNums
        } else {
            msg1.textContent = 'Yipper Your Win!!';
            msg2.textContent = 'The number was: ' + answer;
            msg3.textContent = 'You guessed it in ' +
            noOfGuesses + ' guesses';
        }
    }
})