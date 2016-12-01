var s = 1;
var r = 0;
var t = 0;
var shine = 1;
var ly = 0;
var ty = 0;
var sz = 50;
//var millis
function preload(){
soldier = loadImage("IMG/center_atom.png");
bullet = loadImage("IMG/Untitled-1.png")
//mySound = loadSound("music/Alan Walker - Fade[NCS Release].mp3");
}
function setup() {
  createCanvas(400, 400);

  angleMode(DEGREES);
  //mySound.loop();
}
//
function draw() {
  translate(width/2, height/2);
  r = r + 10;
  ///s = s + 1;
  if(t > 300) {
    shine = 0;
    r = r -1;
    ly = random(1, height/8);
    ty = random(height/2);
  }
  r = r -3;

  if (t < -200) {
    shine = 1;
    t = t -1;
    ly = random(0, height/10);
    ty = random(height/3);
  }
  if(shine == 1) {
  sz++;
} else {
  sz--;
}
  translate(t, ty);
  rotate(r);
  scale(s);
  println(t);
shine = .5;
image(soldier,0,ly,mouseX,200);
image(bullet,0,100,100,mouseY);
image(bullet,0,mouseX,sz,mouseY);

}
//riptime
