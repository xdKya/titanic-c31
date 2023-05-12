class Titanic{
    constructor(x,y,w,h,randomPosition){
        this.x = x,
        this.y = y;
        this.w = w;
        this.h = h;
        this.randomPosition = randomPosition;

        this.body = Bodies.rectangle(x,y,w,h);
        World.add(world,this.body)

        this.image = loadImage("assets/boat.png");


    }
    show(){
        var angle = this.body.angle;
        var pos = this.body.position;
      
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, this.randomPosition, this.w, this.h);
        noTint();
        pop();
      }

    
}