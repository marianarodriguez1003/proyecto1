class Tower{
    constructor(x, y, width, height){
        
        var options = {
            isStatic: true
        }

        this.image = loadImage("assets/tower.png")
        this.witdh = width 
        this.height = height; 
        this.body = Bodies.rectangle(x, y, this.width, this.eight, options)
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position
        push()
        translate(pos.x, pos.y)
        imageMode(CENTER)
        image(this.image, 0, this.witdh, this.height)
        pop()
    }

}
