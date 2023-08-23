// Canvas object
let canvas = new Canvas(
  {
    // Rectangle collider
    collider: new Rect(
      new Vector2D(
        0, // X position
        0 // Y position
      ),
      900, // Width
      600 // Height
    )
  }
);

// Main loop
function loop() {
  // Drawing the canvas
  canvas.rect(
    canvas.collider, // Rectangle collider
    new Color(0, 0, 0) // Color rgb(RED [0-255], GREEN [0-255], BLUE [0-255])
  );

  requestAnimationFrame(loop);
}

loop();