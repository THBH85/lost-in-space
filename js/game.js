class Game {
	constructor() {
		this.background = new Background()
		this.player = new Player()
		this.bugs = []
		this.backgroundImages = []
		this.playerImage = ''
		this.speed = 1
    }

    draw() {
        clear()
		this.background.draw()
		this.player.draw()
        if (frameCount % 20 === 0) {
            this.bugs.push(new Bugs(this.bugsImage))
        }

        this.bugs.forEach(function (bug) {
            bug.draw()
        })
		 if (frameCount % 99 === 0) {
            this.speed = this.speed += 0.2
        }
   
    }

    preload() {
		this.backgroundImages = [
			{ src: loadImage('../assets/background/Nebula Aqua-Pink.png'), y: 0, speed: 1 },
			{ src: loadImage('../assets/background/Stars Small_1.png'), y: 0, speed: 1.5 },
			{ src: loadImage('../assets/background/Stars-Big_1_1_PC.png'), y: 0, speed: 2 }
		]
		this.playerImage = loadImage('../assets/player/programming.png')
		this.bugsImage = loadImage('../assets/bugs/malware.png')
	}
}

