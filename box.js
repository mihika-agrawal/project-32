class Box{
    constructor(x, y) {
        var options = {
          //isStatic:false,
          restitution:0.8,
            friction:1.0
           // density:1.0
          
        }
        this.body = Bodies.rectangle(x, y,40, 50, options);
        this.width = 40;
        this.height =50;
        World.add(world, this.body);
      }
  
      
display(){
  console.log(this.body.speed);
if(this.body.speed<3){
fill("grey")
var angle = this.body.angle;
push();
translate(this.body.position.x, this.body.position.y);
rotate(angle);
rectMode(CENTER);
rect(0, 0, this.width, this.height);
pop();
}
else{
World.remove(world,this.body);
push();
this.visibility=this.visibility-5;
tint(255,this.visibility);
rect(this.body,this.body.position.x,this.body.position.y,50,50);
pop();
}
}
  score(){
   if(this.visibility<0 && this.visibility>-105){
     score= score +1 ;
   }
 }
}
