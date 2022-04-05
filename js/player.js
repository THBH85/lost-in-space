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

        if (this.y >= 600 - this.height) {
            this.y = 600 - this.height
        }

        if (this.y <= 0) {
            this.y = 0
        }

        image(game.playerImage, this.x, this.y, this.height, this.width)

        if (keyIsDown(LEFT_ARROW)) {
            this.x -= 10;
        }

        if (keyIsDown(RIGHT_ARROW)) {
            this.x += 10;
        }

        if (keyIsDown(UP_ARROW)) {
            this.y -= 10;
        }

        if (keyIsDown(DOWN_ARROW)) {
            this.y += 10;
        }
    }
    
    
}
