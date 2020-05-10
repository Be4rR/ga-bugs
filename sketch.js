var cnv;

function setup() {
	// cnv = createCanvas(100, 100);
	cnv = createCanvas(600, 500);
	cnv.parent('canvas');
	// centerCanvas();
	// background(51);
	background(126);
	noStroke();
}

function draw() {
	let x = mouseX;
	let y = mouseY;
	let ix = width - mouseX;  // Inverse X
	let iy = height - mouseY; // Inverse Y
	background(126);
	fill(255, 150);
	ellipse(x, height / 2, y, y);
	fill(0, 159);
	ellipse(ix, height / 2, iy, iy);
}


