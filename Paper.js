
class Paper
{
    constructor(x,y,radius){
        var options={
            
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.radius=radius;
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(this.x,this.y,20,options);
        this.image=loadImage("paper.png");
        World.add(world,this.body);


    }
    display()
    { 
       var pos=this.body.position;
       imageMode (CENTER);
       image (this.image,pos.x,pos.y,this.radius,this.radius);
       
    }
}