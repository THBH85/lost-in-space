const game = new Game()
let score = 5
let mode = 0

// SHOW INSTRUCTIONS
let instructionsInfo = document.getElementsByClassName("gameStatus")
// PRELOAD GAME ALERTS 
let gameWonInfo = document.getElementsByClassName("gameStatus")
let gameOverInfo = document.getElementsByClassName("gameStatus")

function preload() {
	game.preload()
}

function setup() {
	createCanvas(1000, 600)
}

function draw() {

	console.log(mode)

	// GAME PLAY
	if (mode === 1) {
		clear()
		game.draw()
		text("FRUSTRATION TOLERANCE:  " + score, 750, 20, fill(232, 26, 143))
		textSize(16)
		text("HIT -R- TO SEE INSTRUCTIONS", 20 , 20, fill(26, 222, 232))
	}
	// GAME LOST
	if (score === 0) {
		mode = 2
	}

	if (mode === 2) {
		gameOverInfo[1].classList.remove("hide")
		let gameOverSound = document.getElementById("game-over-sound")
		gameOverSound.play()	
	}
 
	// GAME WON
	if (score === 10) {
		mode = 3
	}

	if (mode == 3) {
		gameWonInfo[2].classList.remove("hide")
		let gameWonSound = document.getElementById("game-won-sound")
		gameWonSound.play()
		
	}

}
 

function keyPressed() {
	if (keyCode == 32 && mode != 1) {  
		score = 5 
		mode = 1
		instructionsInfo[0].classList.add("hide")
		gameOverInfo[1].classList.add("hide")  
		gameWonInfo[2].classList.add("hide")  
		game.bugsSpeed = 1 
		game.mateSpeed = 0.5
	}  
 
	if (keyCode == 82 && mode != 0) {
		mode = 0 
		clear()
		instructionsInfo[0].classList.remove("hide")
		gameOverInfo[1].classList.add("hide")  
		gameWonInfo[2].classList.add("hide")
	}
}
 

 