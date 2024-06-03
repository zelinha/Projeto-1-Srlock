function setup() {
    createCanvas(900, 900);
    background("white")
  }
  
  function draw() {
    stroke("blue");
    fill("red");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 60, 60);
    }
  }
  