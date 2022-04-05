class Bugs {
    constructor(image) {
        this.image = image
        this.y = 600
        this.x = (Math.random() * 1000) / 1
        this.width = 30
        this.height = 30
    }

    collision(playerInfo) {
		//console.log('collision', playerInfo)
		// get the middle of the obstacle
		const bugsX = this.x + this.width / 2
		const bugsY = this.y + this.height / 2
		// get the middle of the player
		const playerX = playerInfo.x + playerInfo.width / 2
		const playerY = playerInfo.y + playerInfo.height / 2
		// measure the distance
		// dist() is a p5 function
		if (dist(bugsX, bugsY, playerX, playerY) > 25) {
			return false
		} else {
			score--
			return true
		}
	}

    draw() {
        this.y-= game.bugsSpeed
        image(this.image, this.x, this.y, this.height, this.width)
       
    }

}