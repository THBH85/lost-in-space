class Bugs {
    constructor(image) {
        this.image = image
        this.y = 600
        this.x = (Math.random() * 1000) / 1
        this.width = 30
        this.height = 30
        
    }

    draw() {
        this.y-= game.speed
        image(this.image, this.x, this.y, this.height, this.width)
       
    }

}