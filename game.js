var height = 600;
var width = 600;
var scl = 5;
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
function Snake(){
	this.x = 0;
	this.y=0;
	this.vx= 1;
	this.vy = 0;
	this.total = 0;
	this.tailPos = [];
	this.update = function(){
		if ( this.total === this.tailPos.length )
		for(var i = 0; i <this.total-1; i++){
			this.tailPos[i] = this.tailPos[i+1];
		}
		this.tailPos[this.total-1] = createVector(this.x,this.y);

		this.x += this.vx*scl;
		this.y += this.vy*scl;
		this.x = constrain(this.x,0,width-scl);
		this.y = constrain(this.y, 0 , height-scl);
	}
	this.die = function(){
		for(var i= 0; i<this.tailPos.length;i++){
			var pos = this.tailPos[i];
			var d = dist(this.x,this.y,pos.x,pos.y);
			if (d<1){
				this.total = 0;
				this.tailPos = [];
			}
		}

	}
	this.eat = function(pos){
		var distance = dist(this.x,this.y,pos.x,pos.y);
		if (distance<1){
            this.total++;
			return true;
		}
		else{
			return false;
		}
	}
	this.dir = function(x,y){
		this.vx = x;
		this.vy= y;
	}
	this.show = function(){
		fill(255);
		rect(this.x, this.y, scl, scl);
		for(var i = 0; i<this.tailPos.length; i++){
			rect(this.tailPos[i].x,this.tailPos[i].y,scl,scl);
		}
	}
}