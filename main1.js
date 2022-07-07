img = "";

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function preload(){
 img = loadImage('ac.jpg');
}

function draw() 
{
  image(img, 0, 0, 640, 420);
  fill("red");
  text("AC Unit", 44, 130);
  noFill();
  stroke("red");
  rect(30, 100, 300, 200 );

  fill("red");
  text("Pillow", 444, 130);
  noFill();
  stroke("red");
  rect(410, 110, 250, 170 );
}
