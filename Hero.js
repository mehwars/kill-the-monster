class Hero{
    constructor(x,y,w,h){
       
        this.body=Bodies.rectangle(x, y, w, h,options)
        World.add(world,this.body);
    }
    display(){
       var pos=this.body.position
        rectMode(CENTER)
        fill("white");
        rect(pos.x,pos.y,this.width,this.height)
    }
    

}
