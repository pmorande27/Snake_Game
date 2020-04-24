var height = 600;
var width = 600;
var scl = 20;
var fruit;
var s;
function setup(){
	createCanvas(height,width);
	s = new Snake();
	frameRate(10);
	pickLocation();
}
function draw(){
	background(51);
	s.die();
	s.update();
    s.show();
	if(s.eat(food)){
		pickLocation();
	}
    fill(255,0,100)
    rect(food.x,food.y,scl,scl);
	

}
function keyPressed(){
  if(keyCode === UP_ARROW){
    s.dir(0,-1);
  }
  if(keyCode === DOWN_ARROW){
    s.dir(0,1)}
  if(keyCode === LEFT_ARROW){
    s.dir(-1,0)
  }
  if(keyCode === RIGHT_ARROW){
    s.dir(1,0)
  }
}
function pickLocation(){
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	food = createVector(floor(random(cols)),floor(random(rows)));
	food.mult(scl);

}
