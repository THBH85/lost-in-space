const game = new Game()
let score = 5

function preload() {
	game.preload()
}

function setup() {
	createCanvas(1000, 600)
}

function draw() {
	game.draw()
	text("FRUSTRATION TOLERANCE:  " + score, 800, 20, fill(232, 26, 143))
}

function keyPressed() {		
	if (keyCode === 32) {
      	game.draw()
  	}
}  
