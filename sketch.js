const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var fundo;
var torre;
var canhao;
var angle;
var bola;
var titanic;

var bolas = [];

function preload() {
  fundo = loadImage("assets/background.gif");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  angle = 20;

  var options = {
    isStatic: true,
  };

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  torre = new Torre(150, 350, 160, 310);
  canhao = new Canhao(180, 120, 130, 100, angle);

  titanic = new Titanic(width,height-100,200,200,-100);
}

function draw() {
  background(fundo);

  rect(ground.position.x, ground.position.y, width * 2, 1);

  torre.show();

  Engine.update(engine);

  for (var i = 0; i < bolas.length; i++) {
    showBalls(bolas[i], i);
  }

  titanic.show()
  Matter.Body.setVelocity(titanic.body,{x:-1,y:0})

  canhao.show();
}

function showBalls(ball, i) {
  if (ball) {
    ball.show();
    if (ball.body.position.x > width || ball.body.position.y >= height - 50) {
      World.remove(world, ball.body);
      bolas.splice(i, 1);
    }
  }
}

function keyReleased() {
  //codigo ascii do espaço = 32
  if (keyCode === 32) {
    bolas[bolas.length - 1].shoot();
  }
}

function keyPressed() {
  if (keyCode === 32) {
    var bola = new Bola(canhao.x, canhao.y);
    bolas.push(bola);
  }
}
