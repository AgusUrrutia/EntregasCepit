const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext('2d');

function Circle(x, y, dx, dy, radius, xS, yS, circleArray, dist, serial) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.xS = xS;
	this.yS = yS;
	this.circleArray = circleArray;
	this.dist = dist;

	this.draw = function () {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		ctx.strokeStyle = "black";
    /*ctx.filter = 'blur(0.00001px)'*/
    ctx.shadowBlur =500
		ctx.stroke();

		for (let i = 0; i < circleArray.length; i += 1) {
			const dist = Math.sqrt((this.circleArray[i].x - this.x) * (this.circleArray[i].x - this.x) + (this.circleArray[i].y - this.y) * (this.circleArray[i].y - this.y));

			if (dist < 250) {
				ctx.beginPath();
				ctx.moveTo(this.x, this.y)
				ctx.lineTo(this.circleArray[i].x, this.circleArray[i].y)
				ctx.strokeStyle = "#32012F"
				ctx.stroke();
			}
		}
	}

	this.update = function () {

		if (this.x + this.radius > x + this.xS || this.x - this.radius < x - this.xS || this.x - this.radius < 0 || this.x + this.radius > innerWidth) this.dx = -this.dx;
		if (this.y + this.radius > y + this.yS || this.y - this.radius < y - this.yS || this.y - this.radius < 0 || this.y + this.radius > innerHeight) this.dy = -this.dy;

		this.x = this.x + this.dx
		this.y = this.y + this.dy

		this.draw()
	}

}

let circleArray = [];

for (let i = 0; i < 150; i++) {
	let radius = 3;
	let x = Math.random() * (innerWidth - radius * 2);
	let y = Math.random() * (innerHeight + radius * 2);
	let dx = (Math.random() - 0.5) * 0.5;
	let dy = (Math.random() - 0.5) * 0.5;
	const xS = 100;
	const yS = 100;
	const dist = 250;
	circleArray.push(new Circle(x, y, dx, dy, radius, xS, yS, circleArray, dist, i));
}

function animate() {
	requestAnimationFrame(animate);
	ctx.clearRect(0, 0, innerWidth, innerHeight);

	for (let i = 0; i < circleArray.length; i++) {
		const element = circleArray[i].update();


	}

}
animate()