var settings = {
    size: 150,
    angle: 0.4,
    scale: 0.67,
    iterations: 10,
    animate: true,
    speed: 0.5,
    offset: 0,
    slices: 13
};

var width, height;
var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

var bufferCanvas = document.createElement('canvas');
var bufferContext = bufferCanvas.getContext('2d');

window.addEventListener('resize', resize);
resize();

function resize() {
    width = bufferCanvas.width = canvas.width = window.innerWidth;
    height = bufferCanvas.height = canvas.height = window.innerHeight;

    bufferContext.translate(width * 0.5, height);
    bufferContext.strokeStyle = '#c3c3c3';
}

function draw() {
    requestAnimationFrame(draw);

    if (settings.animate) settings.angle += 0.02 * settings.speed;

    var points = [];

    // Clear canvas
    bufferContext.save();
    bufferContext.setTransform(1, 0, 0, 1, 0, 0);
    bufferContext.clearRect(0, 0, width, height);
    bufferContext.restore();

    // Draw stem
    bufferContext.beginPath();
    bufferContext.moveTo(0, 0);
    bufferContext.lineTo(0, -settings.size * settings.scale);
    bufferContext.stroke();

    drawShape({x: 0, y: -settings.size * settings.scale, angle: -Math.PI * 0.5, size: settings.size});

    for (var i = 0; i < settings.iterations; i++) {
        for (var j = points.length - 1; j >= 0; j--) {
            drawShape(points.pop());
        }
    }

    function drawShape(point) {
        drawBranch(point, 1); // Branch right
        drawBranch(point, -1); // Branch left
    }

    function drawBranch(point, direction) {
        var angle = point.angle + (settings.angle * direction + settings.offset);
        var size = point.size * settings.scale;
        var x = point.x + Math.cos(angle) * size;
        var y = point.y + Math.sin(angle) * size;

        bufferContext.beginPath();
        bufferContext.moveTo(point.x, point.y);
        bufferContext.lineTo(x, y);
        bufferContext.stroke();

        points.unshift({x: x, y: y, angle: angle, size: size});
    }

    var side1 = width * 0.5;
    var side2 = height * 0.5;
    var radius = Math.sqrt(side1 * side1 + side2 * side2);

    bufferContext.globalCompositeOperation = 'destination-in';
    bufferContext.fillStyle = 'red';
    bufferContext.beginPath();

    // Nice variation
    // bufferContext.arc(0, 0, radius, -(Math.PI * 0.8 + (Math.PI / settings.slices)), -(Math.PI * 0.5 - (Math.PI / settings.slices)));
    bufferContext.arc(0, 0, radius, -(Math.PI * 0.5 + (Math.PI / settings.slices)), -(Math.PI * 0.5 - (Math.PI / settings.slices)));
    bufferContext.lineTo(0, 0);
    bufferContext.closePath();
    bufferContext.fill();
    bufferContext.globalCompositeOperation = 'source-over';

    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, width, height);
    context.translate(width * 0.5, height * 0.5);

    for (var i = 0; i < settings.slices; i++) {
        context.rotate(Math.PI * 2 / settings.slices);
        context.drawImage(bufferCanvas, -width * 0.5, -height);
    }

}

draw();

var gui = new dat.GUI();
gui.add(settings, 'scale', 0, 1);
gui.add(settings, 'angle', 0, Math.PI);
gui.add(settings, 'iterations', 0, 12).step(1);
gui.add(settings, 'speed', 0, 2);
gui.add(settings, 'offset', 0, Math.PI * 2);
gui.add(settings, 'slices', 1, 40).step(1);
gui.add(settings, 'animate');


document.querySelector('#Mandala').classList.add('view')
//Esta clase lo que hace es añadir una lista una al identificador "Mandala",
// que pertenece a 'canvas' (llamado como un lienzo que se edita con JS)
//el nombre de la nueva clase que añadimos a este ID es 'view'. El cual se accede en css.




//***********************************************************************
// JS, de las letras moviendose
var area = document.getElementById('area'),
	list = [
		'Hello,',
		'Are you creative ?',
		'Are you a photographer ?',
		'Are you a programmer ?',
    'Else, talk to me.',
	],
	count_li = 0,
	count = 0,
	speed = 100;


function rewrite() {
	var type = list[count_li].substring(0, count);
	document.getElementById('area').textContent = type;
	count++;
	var timer = setTimeout(rewrite, speed);
	if(count > list[count_li].length) {
		count = 0;
		count_li++;
		clearTimeout(timer);
		setTimeout(rewrite, 2500);
	}

	if(count_li === list.length) {
		count_li = 0;
	}
}

rewrite();


var flag = true;

function flashing() {
	if(flag) {
		document.getElementById('cursor').style.opacity = 1;
	} else {
		document.getElementById('cursor').style.opacity = 0;
	}
	flag = !flag
	setTimeout(flashing, 500);
}

flashing();
//***********************************************************************
//****************INTENTO DE REALENTIZAR LAS LETRAS DE SALIDA************
 // var texto = document.getElementById('Front');
 // texto.setTimeout(function(), 1000);
 //***********************************************************************
