const game = new Game()
let score = 5
let mode = 0

function preload() {
	game.preload()
}

function setup() {
	createCanvas(1000, 600)
}

function draw() {
	// INSTRUCTIONS
	if (mode == 0) {
		let instructionsInfo = document.getElementsByClassName("gameStatus")
		instructionsInfo[0].classList.add("show")
		console.log(instructionsInfo[0])
	}
	// GAME PLAY
	if (mode == 1) {
		game.draw()
		text("FRUSTRATION TOLERANCE:  " + score, 800, 20, fill(232, 26, 143))

		// GAME LOST
		if (score <= 0) {
			mode = 2
		}

		if (mode == 2) {
			let gameOverSound = document.getElementById("game-over-sound")
			let gameOverInfo = document.getElementsByClassName("gameStatus")
			gameOverInfo[1].classList.add("show")
			gameOverSound.play()
		}
		// GAME WON
	if (score >= 10) {
		mode = 3
	}

	if (mode == 3) {
		instructionsInfo[1].classList.remove("show")
		let gameWonSound = document.getElementById("game-won-sound")
		let gameWonInfo = document.getElementsByClassName("gameStatus")
		gameWonInfo[2].classList.add("show")
		gameWonSound.play()
	}

	}
}

function keyPressed() {
	if (keyCode == 32) {
		mode = 1
		console.log(mode)
	}

}


