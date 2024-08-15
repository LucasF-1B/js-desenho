function setup() {
    createCanvas(400, 400);
    background ("rgb(0,255,61)")
  }
  
  function draw() {
    
    stroke ("rgb(0,0,0)")
    fill ("rgb(0,169,255)")
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 45);
  }
  }