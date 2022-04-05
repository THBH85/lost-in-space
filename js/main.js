const game = new Game()
//const speed = 1

function preload() {
	console.log('this is the preload')
	game.preload()
}

function setup() {
	// console.log('this is the setup')
	createCanvas(1000, 600)
}

function draw() {
    game.draw()
}

function keyPressed() {
    game.player.keyPressed()
}