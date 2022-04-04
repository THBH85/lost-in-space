class Player {
    constructor() {
	    this.width = 100
		this.height = 100
		this.x = 450
		this.y = 20
    }

    draw() {
        // if he is moving out of the canvas on the bottom
		if (this.x >= 1000 - this.width) {
			// then we move him back to the starting position
			this.x = 1000 - this.width
        }

        if (this.x <= 0) {
			// then we move him back to the starting position
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
