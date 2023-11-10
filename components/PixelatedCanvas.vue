<script setup>

const canvasRef = ref(null);

let img;
let cells = 10;

const sketch = (p5) => {
    p5.preload = () => {
        img = p5.loadImage("/images/bluesky.jpg");
    }
    p5.setup = () => {
        p5.createCanvas(3000, 2500);
        // Resize the image to fit the canvas
        img.resize(p5.width, p5.height);
        // Disable the stroke
        p5.noStroke();
    }
    p5.draw = () => {
        // Map the mouse X from [0-width] to [10-80]
        cells = p5.map(p5.mouseX, 0, p5.width, 10, 400);

        // Round to the nearest 10
        cells = p5.ceil(cells / 30) * 10;
        // Loop through the pixels X and Y
        for (let y = 0; y < img.height; y += cells) {
            for (let x = 0; x < img.width; x += cells) {

                // Get the color at (x, y)
                p5.fill(img.get(x, y));

                // Draw a rectangle at (x, y) and the size of a cell
                p5.rect(x, y, cells, cells);
            }
        }
    }
}
</script>
<template>
    <div ref="canvasRef" class="canvas-wrapper">
        <P5Wrapper ref="p5wrapper" :sketch="sketch" />
    </div>
</template>
<style scoped>

.canvas-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    display: block;
    width: 100%;
    height: 100%;
    overflow:hidden;
}
</style>