let randSeed = 0;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  //background(48,50,52);
  stroke(242);
}

function draw() {
background(13);
randomSeed(randSeed);
 
  let points = map(mouseX, 0, width, 0, width*0.5);
  let maxSize = map(mouseY, 0, height, 0, height*0.5);
  for(let i=0; i<points; i++){
    let ptSize = random(0, maxSize);
    strokeWeight(ptSize);
    let x = random(width);
    let y = random(height);
    point(x, y);
  }
}