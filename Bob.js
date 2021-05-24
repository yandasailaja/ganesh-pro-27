class Bob {
    constructor(x, y, r){
        var options = {
            isStatic: false,
            restitution: 1.2,
            friction: 0.4,
            density: 3,
        }
        this.body = Bodies.circle(x, y, r/2, options);
        World.add(world, this.body);
        this.r = r
        console.log(this.body);

    }

    display(){
        var pos = this.body.position
        push();
        translate(pos.x,pos.y)
        ellipseMode(RADIUS);
        fill("red");
        ellipse(0,0, this.r , this.r);
        pop();
    }
}