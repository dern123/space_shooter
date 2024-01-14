// import * as PIXI from 'pixi.js';

const Application = PIXI.Application;
const app = new Application({
    width: 500,
    height: 500,
    transparent: false,
    antialias: true
});

app.renderer.backgroundColor = 0x23395D;

app.renderer.resize(window.innerWidth, window.innerHeight);

app.renderer.view.style.position = 'absolute';

document.body.appendChild(app.view);

const Graphics = PIXI.Graphics;
const rectangle = new Graphics();
rectangle.beginFill(0xAA33BB)
.lineStyle(4, 0xFFEA00, 1)
.drawRect(200, 200, 100, 120)
.endFill();

app.stage.addChild(rectangle);

const poly = new Graphics();
poly.beginFill(0xFF66FF)
.lineStyle(4, 0xFFEA00, 1)
.drawPolygon([
    600, 50,
    800, 150,
    900, 300,
    400, 400
])
.endFill();

app.stage.addChild(poly);

const circle = new Graphics();
circle.beginFill(0x22AACC)
.drawCircle(440, 200, 80)
.endFill();

app.stage.addChild(circle);

const line = new Graphics();
line.lineStyle(5, 0xFFEA00, 1)
.moveTo(1500, 100)
.lineTo(1500, 800);

app.stage.addChild(line);

const torus = new Graphics();
torus.beginFill(0xFFFDDD)
.drawTorus(100, 700, 80, 100, 0, Math.PI / 2)
.endFill();

app.stage.addChild(torus);

const star = new Graphics();
star.beginFill(0xADADAD)
.drawStar(900, 700, 30, 80)
.endFill();

app.stage.addChild(star);

// const style = new PIXI.TextStyle({
//     fontFamily: 'Montserrat',
//     fontSize: 48,
//     fill: 'deepskyblue',
//     stroke: '#ffffff',
//     strokeThickness: 4,
//     drawShadow: true,
//     drawShadowdistance: 4,
//     drawShadowAngle: Math.PI / 2,
//     drawShadowBlur: 4,
//     drawShadowColor: '#000000'
// })

// const myText = new PIXI.Text("Hello World!" , style);

// app.stage.addChild(myText);

// myText.text = 'Text Changed';

// myText.style.wordWrap = true;
// myText.style.wordWrapWidth = 100;
// myText.style.align = 'center'

// app.ticker.add(delta => loop(delta));

// function loop(delta) {
//     const rectangle = new Graphics();
//     rectangle.beginFill(0xFFFFFF)
//     .drawRect(Math.random() * app.screen.width, Math.random() * app.screen.width, 10, 10)
//     .endFill();

//     app.stage.addChild(rectangle);
// }
// app.ticker.add(delta => loop(delta));

// function loop(delta) {
//     char1Sprite.x += 1;
//     char1Sprite.rotation += 0.01;
// }

const char1Texture = PIXI.Texture.from('./images/char1');
const char1Sprite = new PIXI.Sprite(char1Texture);

// const char1Sprite = PIXI.Sprite.from('./images/char1.png');

app.stage.addChild(char1Sprite);


// char1Sprite.width = 500;
// char1Sprite.height = 500;

// char1Sprite.scale.x = 1.5;
// char1Sprite.scale.y = 2;
// char1Sprite.scale.set(2, 2);

// char1Sprite.x = 200;
// char1Sprite.y = 400;
// char1Sprite.position.set(800, 400);

// // char1Sprite.anchor.x = 0.5;
// // char1Sprite.anchor.y = 0.5;
// char1Sprite.anchor.set(0.5, 0.5);


// char1Sprite.interactive = true;
// char1Sprite.buttonMode = true;

// char1Sprite.on('pointerdown', function() {
//     char1Sprite.scale.x += 0.1;
//     char1Sprite.scale.y += 0.1;
// });


// document.addEventListener('keydown', function(e) {
//     if(e.key === 'ArrowRight')
//         char1Sprite.x += 10;
//     if(e.key === 'ArrowLeft')
//         char1Sprite.x -= 10;
// });
// const container = new PIXI.Container();

// const char2Sprite = PIXI.Sprite.from('./images/char2.png');
// container.addChild(char2Sprite);

// const char3Sprite = PIXI.Sprite.from('./images/char3.png');
// container.addChild(char3Sprite);

// app.stage.addChild(container);

// char2Sprite.position.set(1000, 500);

// container.x = 200;

// console.log(char3Sprite.x);
// console.log(char3Sprite.getGlobalPosition());
// console.log(container.children);