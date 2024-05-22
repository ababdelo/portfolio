const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
color__ = "rgba(75,75,75,";

let particlesArray;

// function changetheme(Colorini){
// 	color__ = Colorini;
// }

// get mouse position 
// let mouse = {
// 	x: null,
// 	y: null,
// 	radius: (canvas.height/120) * (canvas.width/120)
// }

// window.addEventListener('mousemove',
// 	function(event){
// 		mouse.x = event.x;
// 		mouse.y = event.y;
// 	}
// );

// create particle
class Particle{
	constructor(x, y, directionX, directionY, size, color){
		this.x = x;
		this.y = y;
		this.directionX = directionX;
		this.directionY = directionY;
		this.size = size;
		this.color = color;
	}
	// methode to draw individual particle
	draw(){
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
		ctx.fillStyle = "rgba(75,75,75,1)";
		ctx.fill();
	}
	// check particle position, check mouse position, move the partical, draw the particle
	update(){
		// check if particle is still within canvas
		if (this.x > canvas.width || this .x < 0){
			this.directionX = -this.directionX;
		}
		if (this.y > canvas.height || this .y < 0){
			this.directionY = -this.directionY;
		}
		
		// check collision detection - mouse position / particle position

		// let dx = mouse.x - this.x;
		// let dy = mouse.y - this.y;
		// let distance = Math.sqrt(dx * dx + dy * dy);

		// if (distance < mouse.radius + this.size){
		// 	if (mouse.x < this.x && this.x < canvas.width - this.size * 10){
		// 		this.x += 10;
		// 	}
		// 	if (mouse.x > this.x && this.x > this.size * 10) {
        // 		this.x -= 10;
      	// 	}
		// 	if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
        //     	this.y += 10;
        //     }
		// 	if (mouse.y > this.y && this.y > this.size * 10){
		// 		this.y -= 10;
		// 	}
		// }
		
		// move particle
		this.x += this.directionX;
		this.y += this.directionY;
		// draw particle
		this.draw();
	}
}

// create particle array
function init(){
	particlesArray= [];
	let numberOfParticles = (canvas.height * canvas.width) / 10000;
	for (let i = 0; i < numberOfParticles; i++){
		let size = (Math.random() * 5) + 1;
		let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
		let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
		let directionX = (Math.random() * 5) - 2.5;
		let directionY = (Math.random() * 5) - 2.5;
		let color = "rgba(75,75,75,1)";
		
		particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
	}
}

// check if particles are close enough to draw line between them
function connect(){
	let opacityValue = 1;
	for (let a = 0; a < particlesArray.length; a++){
		for (let b = a; b < particlesArray.length; b++){
			let distance = ((particlesArray[a].x - particlesArray[b].x) *
          (particlesArray[a].x - particlesArray[b].x)) +
        ((particlesArray[a].y - particlesArray[b].y) *
          (particlesArray[a].y - particlesArray[b].y));
		  if (distance < (canvas.width / 9) * (canvas.height / 9)){
			opacityValue = 1 - (distance/15000);
			ctx.strokeStyle = color__ + opacityValue + ")";
			ctx.lineWidth = 2;
			ctx.beginPath();
			ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
			ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
			ctx.stroke();
		  }
		}
	}
}

// animation loop 
function animate(){
	requestAnimationFrame(animate);
	ctx.clearRect(0,0, innerWidth, innerHeight);
	
	for (let i = 0; i < particlesArray.length; i++){
		particlesArray[i].update();
	}
	connect();
}

//resize event
window.addEventListener('resize',
	function(){
		canvas.width = this.innerWidth;
		canvas.height = this.innerHeight;
		canvas.radius = ((canvas.height / 100) * (canvas.height / 100));
		init();
	}
);

// // mouse out event
// window.addEventListener('mouseout',
// 	function(){
// 		mouse.x = undefined;
// 		mouse.y = undefined;
// 	}
// );

init();
animate();