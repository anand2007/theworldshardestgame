var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["1336f18b-bc6d-4bcb-ae3d-776484e39836","1fb9148a-7c6b-4c6c-af34-67400d3f3ebc","c5fc1e5c-a8da-4f9b-bb68-5df4efb18ee8","5dd93fe6-5ea2-45ac-a1f3-4df7417a98fe","b6bd0a83-afed-46b1-b532-316df5a1e287","807b8be2-60fa-4426-b4a9-e50154fe8f53","e8501b78-d8c0-482e-a4cb-3212c3131d56","37c6ed73-8b4a-4010-8d8c-449bb1ab4081","7fd1c7d7-190d-4396-8dd8-ef4a19f8f798","f3f4e812-f011-4728-9900-20fc0061c478","c090cf58-21df-4496-9bbd-c29a77056a3a"],"propsByKey":{"1336f18b-bc6d-4bcb-ae3d-776484e39836":{"name":"g","sourceUrl":"assets/api/v1/animation-library/gamelab/RXJlYNKq5qsj6xTOG8RIxHLA7YUzOJkO/category_characters/alienYellow.png","frameSize":{"x":66,"y":82},"frameCount":1,"looping":true,"frameDelay":2,"version":"RXJlYNKq5qsj6xTOG8RIxHLA7YUzOJkO","loadedFromSource":true,"saved":true,"sourceSize":{"x":66,"y":82},"rootRelativePath":"assets/api/v1/animation-library/gamelab/RXJlYNKq5qsj6xTOG8RIxHLA7YUzOJkO/category_characters/alienYellow.png"},"1fb9148a-7c6b-4c6c-af34-67400d3f3ebc":{"name":"monster","sourceUrl":"assets/api/v1/animation-library/gamelab/l1Tw3aTKc6PuuNywYJB_6NE_D6xx68WP/category_characters/spike_bot_walk.png","frameSize":{"x":122,"y":161},"frameCount":2,"looping":true,"frameDelay":2,"version":"l1Tw3aTKc6PuuNywYJB_6NE_D6xx68WP","loadedFromSource":true,"saved":true,"sourceSize":{"x":122,"y":322},"rootRelativePath":"assets/api/v1/animation-library/gamelab/l1Tw3aTKc6PuuNywYJB_6NE_D6xx68WP/category_characters/spike_bot_walk.png"},"c5fc1e5c-a8da-4f9b-bb68-5df4efb18ee8":{"name":"wing_bot_1","sourceUrl":"assets/api/v1/animation-library/gamelab/quoa4.I3I2BmotFDbwakNBk9f39n50S_/category_characters/wing_bot.png","frameSize":{"x":218,"y":128},"frameCount":8,"looping":true,"frameDelay":2,"version":"quoa4.I3I2BmotFDbwakNBk9f39n50S_","loadedFromSource":true,"saved":true,"sourceSize":{"x":1744,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/quoa4.I3I2BmotFDbwakNBk9f39n50S_/category_characters/wing_bot.png"},"5dd93fe6-5ea2-45ac-a1f3-4df7417a98fe":{"name":"rocket","sourceUrl":"assets/v3/animations/IuUh5lxDzBVabb6gOXzWadrbDxtCld7jvEphp8TRd3o/5dd93fe6-5ea2-45ac-a1f3-4df7417a98fe.png","frameSize":{"x":528,"y":528},"frameCount":1,"looping":true,"frameDelay":4,"version":"kx5WIaCnCtysK1zxsL8_ywMKLwt6JJIn","loadedFromSource":true,"saved":true,"sourceSize":{"x":528,"y":528},"rootRelativePath":"assets/v3/animations/IuUh5lxDzBVabb6gOXzWadrbDxtCld7jvEphp8TRd3o/5dd93fe6-5ea2-45ac-a1f3-4df7417a98fe.png"},"b6bd0a83-afed-46b1-b532-316df5a1e287":{"name":"mars","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":".OAutg.ddRljVUAMJHvGptocAgli9KfF","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/b6bd0a83-afed-46b1-b532-316df5a1e287.png"},"807b8be2-60fa-4426-b4a9-e50154fe8f53":{"name":"alien","sourceUrl":"assets/api/v1/animation-library/gamelab/OutzB7xaVZZrD6mnUXTH2Vbqqz9j3981/category_characters/ghost.png","frameSize":{"x":51,"y":73},"frameCount":1,"looping":true,"frameDelay":2,"version":"OutzB7xaVZZrD6mnUXTH2Vbqqz9j3981","loadedFromSource":true,"saved":true,"sourceSize":{"x":51,"y":73},"rootRelativePath":"assets/api/v1/animation-library/gamelab/OutzB7xaVZZrD6mnUXTH2Vbqqz9j3981/category_characters/ghost.png"},"e8501b78-d8c0-482e-a4cb-3212c3131d56":{"name":"ghost1","sourceUrl":null,"frameSize":{"x":318,"y":406},"frameCount":2,"looping":true,"frameDelay":12,"version":"CyE4chu.1KV_i.VbJ76wZWhGDU0YTwJF","loadedFromSource":true,"saved":true,"sourceSize":{"x":636,"y":406},"rootRelativePath":"assets/e8501b78-d8c0-482e-a4cb-3212c3131d56.png"},"37c6ed73-8b4a-4010-8d8c-449bb1ab4081":{"name":"ghost","sourceUrl":"assets/api/v1/animation-library/gamelab/BtdOolxhjv11zoW5D_MUs9yQ9gsQ8018/category_characters/green_monster.png","frameSize":{"x":212,"y":287},"frameCount":1,"looping":true,"frameDelay":2,"version":"BtdOolxhjv11zoW5D_MUs9yQ9gsQ8018","loadedFromSource":true,"saved":true,"sourceSize":{"x":212,"y":287},"rootRelativePath":"assets/api/v1/animation-library/gamelab/BtdOolxhjv11zoW5D_MUs9yQ9gsQ8018/category_characters/green_monster.png"},"7fd1c7d7-190d-4396-8dd8-ef4a19f8f798":{"name":"meteor","sourceUrl":"assets/api/v1/animation-library/gamelab/mVlscciFx3AdNCGPLJDPMiYWc9.yhvJ_/category_obstacles/ore_gold.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"mVlscciFx3AdNCGPLJDPMiYWc9.yhvJ_","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/mVlscciFx3AdNCGPLJDPMiYWc9.yhvJ_/category_obstacles/ore_gold.png"},"f3f4e812-f011-4728-9900-20fc0061c478":{"name":"d","sourceUrl":"assets/api/v1/animation-library/gamelab/2VwRacNk540YhE3lSMV66K1NrzgydT7q/category_gameplay/powerupRed_bolt.png","frameSize":{"x":34,"y":33},"frameCount":1,"looping":true,"frameDelay":2,"version":"2VwRacNk540YhE3lSMV66K1NrzgydT7q","loadedFromSource":true,"saved":true,"sourceSize":{"x":34,"y":33},"rootRelativePath":"assets/api/v1/animation-library/gamelab/2VwRacNk540YhE3lSMV66K1NrzgydT7q/category_gameplay/powerupRed_bolt.png"},"c090cf58-21df-4496-9bbd-c29a77056a3a":{"name":"astro","sourceUrl":"assets/api/v1/animation-library/gamelab/RNV_AFndfpZCAO2WgYfTcGwk3K2SP_kb/category_characters/alienPink_walk.png","frameSize":{"x":72,"y":98},"frameCount":2,"looping":true,"frameDelay":2,"version":"RNV_AFndfpZCAO2WgYfTcGwk3K2SP_kb","loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":98},"rootRelativePath":"assets/api/v1/animation-library/gamelab/RNV_AFndfpZCAO2WgYfTcGwk3K2SP_kb/category_characters/alienPink_walk.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var wall1 = createSprite(75,50,50,3);
 var wall2 = createSprite(100,75,3,50);         
  var wall3 = createSprite(75,100,50,3);         
   var wall4 = createSprite(50,125,3,50);         
    var wall5 = createSprite(37.5,150,25,3);         
     var wall6 = createSprite(25,150,3,100);         
      var wall7 = createSprite(12.5,200,25,3);         
       var wall8 = createSprite(25,75,50,3);         
        var wall9 = createSprite(50,275,3,150);         
         var wall10 = createSprite(75,350,50,3);    
          var wall11 = createSprite(100,375,3,50);    
           var wall12 = createSprite(75,287.5,3,25);    
            var wall13 = createSprite(112.5,300,75,3);
             var wall14 = createSprite(150,350,3,100);   
              var wall15 = createSprite(125,137.5,3,75); 
               var wall16 = createSprite(112.5,175,25,3);              
                var wall17 = createSprite(100,212.5,3,75);
                 var wall18 = createSprite(137.5,250,75,3);
                  var wall19 = createSprite(125,262.5,3,25);
                   var wall20 = createSprite(175,275,100,3);
                    var wall21 = createSprite(200,312.5,3,75);
                     var wall22 = createSprite(225,237.5,3,75);
                      var wall23 = createSprite(212.5,200,25,3);
                       var wall24 = createSprite(200,175,3,50);
                        var wall25 = createSprite(237.5,150,75,3);
                         var wall26 = createSprite(137.5,200,25,3);
                          var wall27 = createSprite(150,150,3,200);
                           var wall28 = createSprite(200,125,100,3);
                           var wall29 = createSprite(250,112.5,3,25);
var wall30 = createSprite(225,50,150,3);
 var wall31 = createSprite(250,62.5,3,25);
  var wall32 = createSprite(275,200,3,100);
   var wall33 = createSprite(250,250,3,100);
    var wall34 = createSprite(275,300,50,3);
     var wall35 = createSprite(287.5,250,25,3);
      var wall36 = createSprite(300,125,3,50);
       var wall37 = createSprite(312.5,150,25,3);
        var wall38 = createSprite(325,187.5,3,75);
         var wall39 = createSprite(312.5,200,25,3);
          var wall40 = createSprite(350,75,3,50);
            var wall41 = createSprite(337.5,100,25,3);
             var wall42 = createSprite(325,112.5,3,25);
              var wall43 = createSprite(337.5,125,25,3);
               var wall44 = createSprite(350,162.5,3,75);
                var wall45 = createSprite(375,200,50,3);
                 var wall46 = createSprite(350,250,3,50);
                  var wall47 = createSprite(325,275,50,3);
                   var wall48 = createSprite(300,287.5,3,125);
                    var wall49 = createSprite(287.5,350,25,3);
                     var wall50 = createSprite(275,362.5,3,25);
                      var wall51 = createSprite(312.5,375,75,3);
                       var wall52 = createSprite(325,387.5,3,25);
                        var wall53 = createSprite(350,362.5,3,25);
                         var wall54 = createSprite(337.5,350,25,3);
                          var wall55 = createSprite(325,325,3,50);
                           var wall56 = createSprite(337.5,300,25,3);
                            var wall57 = createSprite(387.5,325,25,3);
                             var wall58 = createSprite(275,100,50,3);



wall1.shapeColor = "white";
wall2.shapeColor = "white";
wall3.shapeColor = "white";
wall4.shapeColor = "white";
wall5.shapeColor = "white";
wall6.shapeColor = "white";
wall7.shapeColor = "white";
wall8.shapeColor = "white";
wall9.shapeColor = "white";
wall10.shapeColor = "white";
wall11.shapeColor = "white";
wall12.shapeColor = "white";
wall13.shapeColor = "white";
wall14.shapeColor = "white";
wall15.shapeColor = "white";
wall16.shapeColor = "white";
wall17.shapeColor = "white";
wall18.shapeColor = "white";
wall19.shapeColor = "white";
wall20.shapeColor = "white";
wall21.shapeColor = "white";
wall22.shapeColor = "white";
wall23.shapeColor = "white";
wall24.shapeColor = "white";
wall25.shapeColor = "white";
wall26.shapeColor = "white";
wall27.shapeColor = "white";
wall28.shapeColor = "white";
wall29.shapeColor = "white";
wall30.shapeColor = "white";
wall31.shapeColor = "white";
wall32.shapeColor = "white";
wall33.shapeColor = "white";
wall34.shapeColor = "white";
wall35.shapeColor = "white";
wall36.shapeColor = "white";
wall37.shapeColor = "white";
wall38.shapeColor = "white";
wall39.shapeColor = "white";
wall40.shapeColor = "white";
wall41.shapeColor = "white";
wall42.shapeColor = "white";
wall43.shapeColor = "white";
wall44.shapeColor = "white";
wall45.shapeColor = "white";
wall46.shapeColor = "white";
wall47.shapeColor = "white";
wall48.shapeColor = "white";
wall49.shapeColor = "white";
wall50.shapeColor = "white";
wall51.shapeColor = "white";
wall52.shapeColor = "white";
wall53.shapeColor = "white";
wall54.shapeColor = "white";
wall55.shapeColor = "white";
wall56.shapeColor = "white";
wall57.shapeColor = "white";
wall58.shapeColor = "white";


var border1 = createSprite(400,200,5,400);
var border2 = createSprite(200,0,400,5);
var border3 = createSprite(0,200,5,400);
var border4 = createSprite(200,400,400,5);
var go1 = createSprite(385,212.5,5,5);
var go2 = createSprite(10,25,5,5);
var go3 = createSprite(62.5,345,5,5);
var go4 = createSprite(137.5,195,5,5);
go1.setAnimation("wing_bot_1");
go2.setAnimation("wing_bot_1");
go3.setAnimation("wing_bot_1");
go4.setAnimation("wing_bot_1");
go1.scale = 0.1;
go2.scale = 0.1;
go3.scale = 0.1;
go4.scale = 0.1;



var obstacle1 = createSprite(393,212.5,10,10);
var obstacle2 = createSprite(5,25,10,10);
var obstacle3 = createSprite(62.5,345,10,10);
var obstacle4 = createSprite(137.5,195,10,10);
var monster = createSprite(220,300,10,10);
var astronaut = createSprite(190,250,10,10);                            
var rocket = createSprite(250,375,10,10);
    var rockit = createSprite(200,375,10,10);
    rockit.setAnimation("rocket");
    rockit.scale = 0.1;
    var mars = createSprite(5,20,10,10);
    mars.setAnimation("mars");
    var laser1 = createSprite(387,200,10,3);
    
    var laser2 = createSprite(370,10,3,10);
    
    var ghost1 = createSprite(10,60,10,10);
    ghost1.setAnimation("ghost");
    ghost1.scale = 0.2;
    
    var meteor = createSprite(350,50,10,10);
    meteor.setAnimation("meteor");
    
    var alien = createSprite(200,10,10,10);
    alien.setAnimation("alien");
    alien.scale = 0.5;
   
    
    var alien2 = createSprite(300,200,10,10);
    alien2.setAnimation("ghost1");
    var laser3 = createSprite(40,10,3,10);
    
   
    alien2.scale = 0.15;
    laser1.shapeColor = "red";
    laser2.shapeColor = "red";
rocket.setAnimation("rocket");
astronaut.setAnimation("astro");
monster.setAnimation("monster");
obstacle1.setAnimation("d");
obstacle2.setAnimation("d");
obstacle3.setAnimation("d");
obstacle4.setAnimation("d");
obstacle1.scale = 0.32;
obstacle2.scale = 0.32;
obstacle3.scale = 0.32;
obstacle4.scale = 0.32;
astronaut.scale = 0.16;
monster.scale = 0.16;
rocket.scale = 0.1;
meteor.scale = 0.3;
mars.scale = 0.5;
monster.velocityY = 3;
go1.velocityX = -1.3;
go2.velocityX = 1.3;
go3.velocityY = -1.3;
go4.velocityY = -1.3;
laser3.velocityY  = 20;
laser1.velocityX  = -8;
 laser2.velocityY  =8;
 ghost1.velocityY = 15;
meteor.velocityX = -15;
 alien.velocityX = 15;
 alien2.velocityY = 15;
laser3.shapeColor = "red";
var gameState = "home";


playSound("assets/t.mp3",true);

function draw() {
 background("black");
    laser3.bounceOff(border1);
    laser3.bounceOff(border2);
    laser3.bounceOff(border3);
    laser3.bounceOff(border4);
    laser1.bounceOff(border1);
    laser1.bounceOff(border2);
    laser1.bounceOff(border3);
    laser1.bounceOff(border4);
    laser2.bounceOff(border1);
    laser2.bounceOff(border2);
    laser2.bounceOff(border3);
    laser2.bounceOff(border4);
    ghost1.bounceOff(border1);
    ghost1.bounceOff(border2);
    ghost1.bounceOff(border3);
    ghost1.bounceOff(border4);
    alien.bounceOff(border1);
    alien.bounceOff(border2);
    alien.bounceOff(border3);
    alien.bounceOff(border4);
    alien2.bounceOff(border1);
    alien2.bounceOff(border2);
    alien2.bounceOff(border3);
    alien2.bounceOff(border4);
    meteor.bounceOff(border1);
    meteor.bounceOff(border2);
    meteor.bounceOff(border3);
    meteor.bounceOff(border4);
    rockit.bounceOff(border1);
    rockit.bounceOff(border2);
    rockit.bounceOff(border3);
    rockit.bounceOff(border4);
    meteor.bounceOff(mars);
    alien.bounceOff(mars);
 astronaut.collide(border1);
astronaut.collide(border2);
  astronaut.collide(border3);
astronaut.collide(border4);
 monster.bounceOff(border1);
monster.bounceOff(border2);
  monster.bounceOff(border3);
monster.bounceOff(border4);
  monster.bounceOff(wall20);
go1.bounceOff(wall38);
  go1.bounceOff(obstacle1);
 go2.bounceOff(border1);
  go2.bounceOff(obstacle2);
 go3.bounceOff(wall3);
  go3.bounceOff(obstacle3);
 go4.bounceOff(border2);
  go4.bounceOff(obstacle4);
  
  if (gameState === "home"){
  
  
  story();
  invisible(); 
  alien2.visible = false;
   rockit.visible = false;
   mars.visible = false; 
   laser1.visible = false;
   laser2.visible = false;
   ghost1.visible = false;
   meteor.visible = false;
   alien.visible = false;
  laser3.visible = false;
  
   if (keyDown("space")) {
    gameState = "level1play";
  }
    
  }
  if (gameState==="level1play"){
   visible(); 
   astronaut.collide(border1);
  astronaut.collide(border2);
  astronaut.collide(border3);
  astronaut.collide(border4);
  monster.bounceOff(border1);
  monster.bounceOff(border2);
  monster.bounceOff(border3);
  monster.bounceOff(border4);
  monster.bounceOff(wall20);
  go1.bounceOff(wall38);
  go1.bounceOff(obstacle1);
  go2.bounceOff(border1);
  go2.bounceOff(obstacle2);
  go3.bounceOff(wall3);
  go3.bounceOff(obstacle3);
  go4.bounceOff(border2);
  go4.bounceOff(obstacle4);
  
laser3.visible = false;
  alien2.visible = false;
  laser2.visible = false;
  alien.visible = false;
   rockit.visible = false;
    mars.visible = false; 
   laser1.visible = false;
   ghost1.visible = false;
   meteor.visible = false;
  if (keyDown("left")) {
    astronaut.x = astronaut.x-2;
  }
  if (keyDown("right")) {
    astronaut.x = astronaut.x+2;
  }  
  if (keyDown("down")) {
    astronaut.y = astronaut.y+2;
  }
   if (keyDown("up")) {
    astronaut.y = astronaut.y-2;
  }
   
  
  if (astronaut.collide(wall1)
  ||astronaut.collide(wall2)
  ||astronaut.collide(wall3)
  ||astronaut.collide(wall4)
  ||astronaut.collide(wall5)
  ||astronaut.collide(wall6)
  ||astronaut.collide(wall7)
  ||astronaut.collide(wall8)
  ||astronaut.collide(wall9)
  ||astronaut.collide(wall10)
  ||astronaut.collide(wall11)
  ||astronaut.collide(wall12)
  ||astronaut.collide(wall13)
  ||astronaut.collide(wall14)
  ||astronaut.collide(wall15)
  ||astronaut.collide(wall16)
  ||astronaut.collide(wall17)
  ||astronaut.collide(wall18)
  ||astronaut.collide(wall19)
  ||astronaut.collide(wall20)
  ||astronaut.collide(wall21)
  ||astronaut.collide(wall22)
  ||astronaut.collide(wall23)
  ||astronaut.collide(wall24)
  ||astronaut.collide(wall25)
  ||astronaut.collide(wall26)
  ||astronaut.collide(wall27)
  ||astronaut.collide(wall28)
  ||astronaut.collide(wall29)
  ||astronaut.collide(wall30)
  ||astronaut.collide(wall31)
  ||astronaut.collide(wall32)
  ||astronaut.collide(wall33)
  ||astronaut.collide(wall34)
  ||astronaut.collide(wall35)
  ||astronaut.collide(wall36)
  ||astronaut.collide(wall37)
  ||astronaut.collide(wall38)
  ||astronaut.collide(wall39)
  ||astronaut.collide(wall40)
  ||astronaut.collide(wall41)
  ||astronaut.collide(wall42)
  ||astronaut.collide(wall43)
  ||astronaut.collide(wall44)
  ||astronaut.collide(wall45)
  ||astronaut.collide(wall46)
  ||astronaut.collide(wall47)
  ||astronaut.collide(wall48)
  ||astronaut.collide(wall49)
  ||astronaut.collide(wall50)
  ||astronaut.collide(wall51)
  ||astronaut.collide(wall52)
  ||astronaut.collide(wall53)
  ||astronaut.collide(wall54)
  ||astronaut.collide(wall55)
  ||astronaut.collide(wall56)
  ||astronaut.collide(wall57)
  ||astronaut.collide(wall58)
  ||astronaut.isTouching(go1)
  ||astronaut.isTouching(go2)
  ||astronaut.isTouching(go3)
  ||astronaut.isTouching(go4)
  ||astronaut.isTouching(monster) 
  )
  {
    astronaut.x = 190;
    astronaut.y = 250;
  }
  }
 if (astronaut.collide(rocket))
    {gameState = "level1end";}
    
  
 
   if (gameState==="level1end") {
    gameState = "level2home";
    
  }
  
  if (gameState==="level2home")
  {
  fill("cyan");
    text("YAY!! YOU HAVE REACHED YOUR SPACESHIP!!",80,200);
    fill("yellow");
    text("PRESS 'M' FOR MARS MISSION",110,230);
    fill("green");
    text("USE ARROW KEYS TO PLAY ",120,260);
    invisible();
  }
  if (gameState==="level2home"&&keyDown("m")) {
    gameState = "level2play";
  }
  
  if (gameState==="level2play"){
   
    alien2.visible = true;
   alien.visible = true;
   meteor.visible = true;
    mars.visible = true;
    rockit.visible = true;
    laser1.visible = true;
   laser2.visible = true;
   ghost1.visible = true;
   laser3.visible = true;
   invisible();
    
    
    border1.visible = true;
    border2.visible = true;
    border3.visible = true;
    border4.visible = true;
  }
  
  
  if (gameState==="level2play"){
  
    
  border1.visible = true;
    border2.visible = true;
    border3.visible = true;
    border4.visible = true;
    
 }
  
  if (rockit.collide(ghost1)||rockit.collide(alien)||rockit.collide(alien2)||rockit.collide(meteor)||rockit.collide(laser1)||rockit.collide(laser2)||rockit.collide(laser3))
  
  {
    gameState = "level2end";
  }
  
  
  
  if (rockit.collide(mars)){
     textSize(20);
    fill("white");
    text("MISSION ACCOMPLISHED!!!",50,100);
    laser1.visible = false;
    laser2.visible = false;
    meteor.visible = false;
   ghost1.visible = false;
   alien.visible = false;
    alien2.visible = false;
    rockit.visible = false;
   laser3.visible = false;
    
  }
  
  if (gameState === "level2end"){
    
     textSize(20);
    fill("red");
    text("MISSION FAILED😥😥!!!",100,200);
     laser1.visible = false;
    laser2.visible = false;
    meteor.visible = false;
   ghost1.visible = false;
   alien.visible = false;
    alien2.visible = false;
    rockit.visible = false;
   laser3.visible = false;
    
  }
  
 if (keyDown("up")&&gameState==="level2play") {
      rockit.y = rockit.y-2;
      
    }
    if (keyDown("down")&&gameState==="level2play") {
     
     rockit.y = rockit.y+2;
    }
    if (keyDown("left")&&gameState==="level2play") {
     rockit.x = rockit.x-2;
      
    }
    if (keyDown("right")&&gameState==="level2play") {
      rockit.x = rockit.x+2;
      
    }
    
      
  drawSprites();
}

function invisible(){
  wall1.visible = false;
  wall2.visible = false;
  wall3.visible = false;
  wall4.visible = false;
  wall5.visible = false;
  wall6.visible = false;
  wall7.visible = false;
  wall8.visible = false;
  wall9.visible = false;
  wall10.visible = false;
  wall11.visible = false;
  wall12.visible = false;
  wall13.visible = false;
  wall14.visible = false;
  wall15.visible = false;
  wall16.visible = false;
  wall17.visible = false;
  wall18.visible = false;
  wall19.visible = false;
  wall20.visible = false;
  wall21.visible = false;
  wall22.visible = false;
  wall23.visible = false;
  wall24.visible = false;
  wall25.visible = false;
  wall26.visible = false;
  wall27.visible = false;
  wall28.visible = false;
  wall29.visible = false;
  wall30.visible = false;
  wall31.visible = false;
  wall32.visible = false;
  wall33.visible = false;
  wall34.visible = false;
  wall35.visible = false;
  wall36.visible = false;
  wall37.visible = false;
  wall38.visible = false;
  wall39.visible = false;
  wall40.visible = false;
  wall41.visible = false;
  wall42.visible = false;
  wall43.visible = false;
  wall44.visible = false;
  wall45.visible = false;
  wall46.visible = false;
  wall47.visible = false;
  wall48.visible = false;
  wall49.visible = false;
  wall50.visible = false;
  wall51.visible = false;
  wall52.visible = false;
  wall53.visible = false;
  wall54.visible = false;
  wall55.visible = false;
  wall56.visible = false;
  wall57.visible = false;
  wall58.visible = false;
  astronaut.visible = false;
  rocket.visible = false;
  obstacle1.visible = false;
  obstacle2.visible = false;
  obstacle3.visible = false;
  obstacle4.visible = false;
  go1.visible = false;
  go2.visible = false;
  go3.visible = false;
  go4.visible = false;
  monster.visible = false;
   
}

function visible(){
 wall1.visible = true;
 wall2.visible = true; 
 wall3.visible = true;
 wall4.visible = true;
 wall5.visible = true;
 wall6.visible = true;
 wall7.visible = true;
 wall8.visible = true;
 wall9.visible = true;
 wall10.visible = true;
 wall11.visible = true;
 wall12.visible = true; 
 wall13.visible = true;
 wall14.visible = true;
 wall15.visible = true;
 wall16.visible = true;
 wall17.visible = true;
 wall18.visible = true;
 wall19.visible = true;
 wall20.visible = true;
 wall21.visible = true;
 wall22.visible = true; 
 wall23.visible = true;
 wall24.visible = true;
 wall25.visible = true;
 wall26.visible = true;
 wall27.visible = true;
 wall28.visible = true;
 wall29.visible = true;
 wall30.visible = true;
 wall31.visible = true;
 wall32.visible = true; 
 wall33.visible = true;
 wall34.visible = true;
 wall35.visible = true;
 wall36.visible = true;
 wall37.visible = true;
 wall38.visible = true;
 wall39.visible = true;
 wall40.visible = true;
 wall41.visible = true;
 wall42.visible = true; 
 wall43.visible = true;
 wall44.visible = true;
 wall45.visible = true;
 wall46.visible = true;
 wall47.visible = true;
 wall48.visible = true;
 wall49.visible = true;
 wall50.visible = true;
 wall51.visible = true;
 wall52.visible = true; 
 wall53.visible = true;
 wall54.visible = true;
 wall55.visible = true;
 wall56.visible = true;
 wall57.visible = true;
 wall58.visible = true;
 astronaut.visible = true;
 rocket.visible = true; 
 obstacle1.visible = true;
 obstacle2.visible = true;
 obstacle3.visible = true;
 obstacle4.visible = true;
 go1.visible = true;
 go2.visible = true;
 go3.visible = true;
 go4.visible = true;
 monster.visible = true;
}

function story(){
  background("turquoise");
  fill("darkgreen");
  textSize(30);
  textFont("algerian");
  text("Hi!! Astronaut!",100,50);
  fill("red");
  textSize(20);
  textFont("algerian");
  text("Welcome to the Mars Mission",65,100);
  textSize(15);
  textFont("algerian");
  fill("black");
  text("Reach your rocket by overcoming the obstacles,",20,150);
  text("in the maze, which are created by your",20,175); 
  text("enemy monsters (LEVEL 1)",20,200);
  text("Then complete your mission of going to Mars!!",20,225);
  text ("(LEVEL 2)",150,250);
  textFont("jokerman");
  fill("darkblue");
  text("PRESS SPACE TO START THE GAME",65,320);
  text("USE ARROW KEYS TO PLAY",90,350);
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
