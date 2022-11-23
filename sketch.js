var panSpeed = 5;
var gravity = 5;


function setup(){
    window.canvas = createCanvas(450, 800);
    player = new Player(100, canvas.height / 2);

}

function draw(){
    background(135,206,250);
    player.update();
    player.show();

}