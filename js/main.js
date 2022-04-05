const game = new Game()
let score = 0

function preload() {
	game.preload()
}

function setup() {
	// console.log('this is the setup')
	createCanvas(1000, 600)
}

function draw() {
    game.draw()
	text("Your Lifes " + score, 10, 550)
}

//function keyPressed() {
//    game.player.keyPressed()
//}