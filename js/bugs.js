class Bugs {
    constructor(image) {
        this.image = image
        this.y = 600
        this.x = (Math.random() * 1000) / 1
        this.width = 60
        this.height = 60
    }

    collision(playerInfo) {
		// provide bug sound
		let bugSound = document.getElementById("bug-sound")
		// get the middle of the obstacle
		const bugsX = this.x + this.width / 2
		const bugsY = this.y + this.height / 2
		// get the middle of the player
		const playerX = playerInfo.x + playerInfo.width / 2
		const playerY = playerInfo.y + playerInfo.height / 2
		// measure the distance
		if (dist(bugsX, bugsY, playerX, playerY) > 50) {
			return false
		} else {
			score-- && bugSound.play()
			return true
		}
		// console.log('collision', playerInfo)
	}

    draw() {
        this.y-= game.bugsSpeed
        image(this.image, this.x, this.y, this.height, this.width)
       
    }

}