class Player {
    constructor() {
		this.width = 100
		this.height = 100
		this.x = 450
		this.y = 20
    }

    draw() {
        image(game.playerImage, this.x, this.y, this.height, this.width)
    }
}
