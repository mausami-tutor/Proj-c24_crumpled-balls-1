class Bin{
    constructor(x,y){
        this.x=x
        this.y=y
        this.width=200
        this.height=150
        this.wallthickness=20
        this.angle=0

        this.bottom=Bodies.rectangle(this.x,this.y,this.width,this.wallthickness,{isStatic: true})
        World.add(world,this.bottom)
        this.leftwall=Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.wallthickness,this.height,{isStatic: true})
        World.add(world,this.leftwall)
        Matter.Body.setAngle(this.leftwall,this.angle)
        this.rightwall=Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.wallthickness,this.height,{isStatic: true})
        World.add(world, this.rightwall)
        Matter.Body.setAngle(this.rightwall,this.angle)
    }
    display(){
        var posbottom=this.bottom.position
        var posleft=this.leftwall.position
        var posright=this.rightwall.position

        push()
        translate(posleft.x,posleft.y)
        //rotate(angle)
        rectMode(CENTER)
        rect(0,0,this.wallthickness,this.height)
        pop()
        push()
        translate(posright.x,posright.y)
        //rotate(angle)
        rectMode(CENTER)
        rect(0,0,this.wallthickness,this.height)
        pop()
        push()
        translate(posbottom.x,posbottom.y)
        //rotate(angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.wallthickness)
        pop()
    }
}