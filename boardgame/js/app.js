const game = new Game();
const button = document.getElementById("begin-game");

/** 
 * Listens for click on `#begin-game` and calls startGame() on game object
 */
button.addEventListener("click", e => {
    game.startGame();
    button.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
});

/** 
 * Listen for keyboard presses
 */

document.addEventListener('keydown', e => {
    console.log(e.key); //outputs a string naming the pressed key 
    game.handleKeydown(e);
});
