const game = new Game()
let score = 5

function preload() {
	game.preload()
}

function setup() {
	// console.log('this is the setup')
	createCanvas(1000, 600)
}

function draw() {
    game.draw()
	text("FRUSTRATION TOLERANCE:  " + score, 20, 550, fill(232, 26, 143))
}

//function keyPressed() {
//    game.player.keyPressed()
//}