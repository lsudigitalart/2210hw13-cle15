var s = 1;
var r = 0;
var t = 0;
var shine = 1;
var ly = 0;
var ty = 0;
var sz = 50;
function preload(){
soldier = loadImage("IMG/center_atom.png");
bullet = loadImage("IMG/Untitled-1.png")
}
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
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
image(soldier,0,100,100,200);
fill(29,50);
rotate(180);
image(bullet,0,ty,sz,100);

}
