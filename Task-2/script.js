
function draw() {

  let canvas = document.getElementById('canvas');

    let context = canvas.getContext('2d');
    context.beginPath();
    context.moveTo(30, 20);
    context.lineTo(150, 140);
    context.lineTo(250, 30);
    context.closePath();
    context.strokeStyle = "red";
    context.stroke();

    context.beginPath();
    context.moveTo(190, 190)
    context.strokeRect(100, 260, 170, 170);
    


    context.beginPath();
    context.moveTo(390, 490)
    context.strokeRect(400, 260, 170, 100);
    

    context.beginPath();
    context.arc(550,99,80,0,Math.PI*2,true);
    context.stroke();
}

draw();



