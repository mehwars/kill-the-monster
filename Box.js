class Block{
    constructor(x,y,w,h){
        var options={
            friction:1.0

         }
       this.body=Bodies.rectangle(x, y, w, h,options)
       World.add(world,this.body);
       this.width=w;
       this.height=h;
    }
    display(){
       var pos=this.body.position
       push()
       translate(pos.x,pos.y)
       rotate(this.body.angle)
        rectMode(CENTER)
        fill("pink")
        stroke("red")
        rect(0,0,this.width,this.height)
        pop()
       
    }
    

}