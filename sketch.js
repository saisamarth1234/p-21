var sun, mercury, venus, earth, mars, jupiter, satern, uranus, neptune

function preload(){
  sunImg = loadImage("u.png");
  mercuryImg = loadImage("me.png");
  venusImg = loadImage("ve.png");
  earthImg = loadImage("e.png");
  marsImg = loadImage("m.png");
  jupeterImg = loadImage("ju.png");
  saturnImg = loadImage("s.jpg");
  uranusImg = loadImage("n.jpg");
  neptuneImg = loadImage("ep.png");
}

function setup() {
  createCanvas(800,400);
  sun=createSprite()
  sun.scale=0.1
  sun.addImage(sunImg)
  sun.setCollider("circle", -85, -60, 140);
  sun.debug=true;

  mercury=createSprite()
  mercury.scale=0.1
  mercury.addImage(mercuryImg)
  mercury.setCollider("circle", 0, 0, 300);
  mercury.debug = true;
  
  venus=createSprite(210, 60)
  venus.scale=0.1
  venus.addImage(venusImg)
  venus.debug = true;

  earth = createSprite(150, -18);
  earth.addImage(earthImg);
  earth.scale = 0.1;
  earth.debug=true

  mars = createSprite(30, 220);
  mars.addImage(marsImg);
  mars.scale = 0.1;
  mars.debug=true

  jupiter = createSprite(-180, 210);
  jupiter.addImage(jupeterImg);
  jupiter.scale = 0.1;
  jupiter.debug=true
  
  saturn = createSprite(340, -30);
  saturn.addImage(saturnImg);
  saturn.scale = 0.1;
  satern.debug=true

  uranus = createSprite(220, 350);
  uranus.addImage(uranusImg);
  uranus.scale = 0.1;

  neptune = createSprite(-340, -320);
  neptune.addImage(neptuneImg);
  neptune.scale = 0.1;
}

function draw() {
  background(255,255,255);  

  if (sun.collide(mercury)) {
    mercury.destroy();
  }

  if (sun.collide(venus)) {
    venus.destroy();
  }

  if (sun.collide(earth)) {
    earth.destroy();
  }


  if (sun.collide(mars)) {
    mars.destroy();
  }

  if (sun.collide(jupiter)) {
    jupiter.destroy();
  }

  if (sun.collide(satern)) {
    satern.destroy();
  } 

  if (sun.collide(uranus)) {
    uranus.destroy();
  }

  if (sun.collide(mercury)) {
    neptune.destroy();
  }

  if (frameCount % 1 === 0) {
    sun.scale = sun.scale + 0.01;
  } 


  drawSprites();
}