var ball;
function preload(){

}

function setup(){
    createCanvas(1000,400);

    ball = createSprite(200,200,10,10)
}

function draw(){
    background(220);
    drawSprites();
}