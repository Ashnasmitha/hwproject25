class Dustbin
{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("dustbingreen.png");
        World.add(world,this.body);


    }
    display()
    {
      
        imageMode (CENTER);
        image (this.image,1100,470,this.width,this.height);
        
    }
}