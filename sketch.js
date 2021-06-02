var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("background.jpg")
  bg2= loadImage("bg2.jpg");
 
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
  

   if(score === 4) {
    clear()
    background(bg2)
    textSize(50);
    fill("black");
    text("Woah!! Good Job",400,250);

  }

  drawSprites()
}