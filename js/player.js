class Player {
    constructor() {
	    this.width = 100
		this.height = 100
		this.x = 450
		this.y = 20
    }

    draw() {
		if (this.x >= 1000 - this.width) {
			this.x = 1000 - this.width
        }

        if (this.x <= 0) {
			this.x = 0
        }

        image(game.playerImage, this.x, this.y, this.height, this.width)
    }

    moveLeft() {
        this.x -= 50
    }

    moveRight() {
        this.x += 50
    }

    keyPressed() {
        if (keyIsDown(37)) {
            this.moveLeft()
        }

        if (keyIsDown(39)) {
            this.moveRight()
         }
    }
}
