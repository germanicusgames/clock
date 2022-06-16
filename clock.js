var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
drawClock();

function drawClock() {
   drawFace(ctx, radius);
}

function drawFace(ctx, radius) {
    var grad;
    ctx.beginpath();
    ctx.arc(0,0,radius,0,2*Math.PI);
    ctx.fillstyle ="white";
    ctx.fill();
    grad = ctx.createradialgradient(0,0,radius*0.95, 0,0,radius*1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    ctx.strokestyle = grad;
    ctx.linewidth = radius*0.1;
    ctx.stroke();
    ctx.beginpath();
    ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
    ctx.fillstyle = '#333';
    ctx.fill();
}


