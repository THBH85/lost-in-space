class Mate {
    constructor(image) {
        this.image = image
        this.y = 600
        this.x = (Math.random() * 1000) / 1
        this.width = 60
        this.height = 60
        
    }

    collision(playerInfo) {
        let mateSound = document.getElementById("mate-sound")
		const mateX = this.x + this.width / 2
		const mateY = this.y + this.height / 2
		const playerX = playerInfo.x + playerInfo.width / 2
		const playerY = playerInfo.y + playerInfo.height / 2
		if (dist(mateX, mateY, playerX, playerY) > 50) {
			return false
		} else {
			score++ && mateSound.play();
			return true
		}
	}

    draw() {
        this.y-= game.mateSpeed
        image(this.image, this.x, this.y, this.height, this.width)
       
    }

}