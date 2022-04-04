class Background {
	draw() {
        game.backgroundImages.forEach(function (img) {
			img.y -= img.speed
			image(img.src, 0, img.y, width, height)
			image(img.src, 0, img.y + height, width, height)
			if (img.y <= - height) {
				img.y = 0
			}
		})
    }
}