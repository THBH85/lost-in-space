class Mate {
    constructor(image) {
        this.image = image
        this.y = 600
        this.x = (Math.random() * 1000) / 1
        this.width = 30
        this.height = 30
        
    }

    collision(playerInfo) {
        //console.log('collision', playerInfo)
		const mateX = this.x + this.width / 2
		const mateY = this.y + this.height / 2
		const playerX = playerInfo.x + playerInfo.width / 2
		const playerY = playerInfo.y + playerInfo.height / 2
		if (dist(mateX, mateY, playerX, playerY) > 25) {
			return false
		} else {
			// increment the life counter
			return true
		}
	}

    draw() {
        this.y-= game.mateSpeed
        image(this.image, this.x, this.y, this.height, this.width)
       
    }

}