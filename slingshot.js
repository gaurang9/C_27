class SlingShot {
    constructor(bodyA,bodyB){
        var constraint_option= {
            bodyA:bodyA ,
            bodyB:bodyB ,
            stiffness:0.15 ,
            length:10 
        }
        this.chain=Constraint.create(constraint_option)
        World.add(world,this.chain)
    
    }
    display(){
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.bodyB.position
        strokeWeight(7)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }

}