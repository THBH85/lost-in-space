class Game {
	constructor() {
		this.background = new Background()
		this.player = new Player()
		this.backgroundImages = []
		this.bugs = []
		this.mate = []
		this.playerImage = ''
		this.bugsSpeed = 1
		this.mateSpeed = 0.5
	}


	draw() {
		clear()
		//console.log("hello", mode)	
		this.background.draw()
		this.player.draw()

		// DRAW BUGS
		if (frameCount % 40 === 0) {
			this.bugs.push(new Bugs(this.bugsImage))
		}
		this.bugs.forEach(function (bug) {
			bug.draw()
		})
		if (frameCount % 30 === 0) {
			this.bugsSpeed = this.bugsSpeed += 0.2
		}

		this.bugs = this.bugs.filter(bug => {
			if (bug.collision(this.player)) {
				return false
			} else {
				return true
			}
		})

		// DRAW MATE
		if (frameCount % 500 === 0) {
			this.mate.push(new Mate(this.mateImage))
		}
		this.mate.forEach(function (mat) {
			mat.draw()
		})
		if (frameCount % 50 === 0) {
			this.mateSpeed = this.mateSpeed += 0.2
		}

		this.mate = this.mate.filter(mat => {
			if (mat.collision(this.player)) {
				return false
			} else {
				return true
			}
		})

		// HOW TO SET SPEED BACK TO DEFAULT WHEN NEW GAME IS CALLED???
		//if (keyCode == 32 && mode != 1) {  
		//this.bugsSpeed = 1
		//this.mateSpeed = 0.5 
		//}
	}

	preload() {
		this.backgroundImages = [
			{ src: loadImage('assets/background/Nebula Aqua-Pink.png'), y: 0, speed: 1 },
			{ src: loadImage('assets/background/Stars Small_1.png'), y: 0, speed: 1.5 },
			{ src: loadImage('assets/background/Stars-Big_1_1_PC.png'), y: 0, speed: 2 }
		]
		this.playerImage = loadImage('assets/player/programming.png')
		this.bugsImage = loadImage('assets/bugs/malware.png')
		this.mateImage = loadImage('assets/mate/mate.jpeg')
	}
}

