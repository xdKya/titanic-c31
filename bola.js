class Bola {
  constructor(x, y) {
    this.r = 30;
    this.body = Bodies.circle(x, y, this.r, { isStatic: true });
    World.add(world, this.body);

    this.image = loadImage("assets/bala.png");

    this.trajetoria = [];
  }

  shoot() {
    var newAngle = canhao.angle - 30;
    newAngle = newAngle * (3.14 / 180);
    var velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(0.5);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, {
      x: velocity.x * (180 / 3.14),
      y: velocity.y * (180 / 3.14),
    });
  }

  show() {
    push();

    imageMode(CENTER);
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    image(this.image, 0, 0, this.r, this.r);
    pop();

   if(this.body.position.x > 250 && this.body.velocity.x > 0){
    var position = [this.body.position.x, this.body.position.y];
    this.trajetoria.push(position);
   }



    for (var i = 0; i < this.trajetoria.length; i++) {
      fill("white")
      noStroke()
      ellipseMode( RADIUS)
      ellipse(this.trajetoria[i][0],this.trajetoria[i][1],3)
    }
  }
}
