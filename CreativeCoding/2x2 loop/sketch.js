function setup() {
  createCanvas(720, 720);
    background('pink');
  strokeWeight(8);
  fill ('magenta');
}

function draw() {
  
  translate (60,60);//resets origin point

   for(var y = 0; y < 600; y = y + 300) {//loop to create a row of squares in the y direction
  
  for(var x = 0; x < 600; x = x + 300) {//loop to create a grid in the y direction
    quad (
  x,y,
  x + 300,y,
  x + 300,y + 300,
  x,y + 300
);
    
  }
  }
  quad (
  0,0,
  300,0,
  300,300,
  0,300
);//move 300 pixels in the y direction
}