
function Snake(){
	this.x = 0;
	this.y=0;
	this.vx= 1;
	this.vy = 0;
	this.total = 0;
	this.tailPos = [];
	this.update = function(){
		if ( this.total ===this.tailPos.length )
		for(var i = 0; i <total-1; i++){
			tailPos[i] = tailPos[i+1];
		}
		tailPos[i-1] = createVector(this.x,this.y);

		this.x += this.vx*scl;
		this.y += this.vy*scl;
		this.x = constrain(this.x,0,width-scl);
		this.y = constrain(this.y, 0 , height-scl);
	}
	this.die = function(){
		for(var i= 0; i<this.tailPos-1;i++){
			var pos = tailPos[i];
			var d = dist(this.x,this.y,pos.x,pos.y);
			if (d<1){
				this.total = 0;
				this.tailPos = [];
			}
		}

	}
	this.eat = function(pos){
		var distance = dist(this.x,this.y,pos.x,pos.y);
		if (distance<i){
			return true;
		}
		else{
			return false;
		}
	}
	this.dir = function(x,y){
		this.x = x;
		this.y = y;
	}
	this.show = function(){
		fill(255);
		rect(this.x, this.y, scl, scl);
		for(var i = 0; i<this.tailPos.length; i++){
			rect(this.tailPos[i].x,this.tailPos[i].y,scl,scl);
		}
	}
}
var s = new Snake();
