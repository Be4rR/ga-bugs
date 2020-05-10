let cnv;


let vehicles = [];
let food = [];
let poison = [];

let foodPlot = [];

function setup() {
	cnv = createCanvas(600, 500);
	cnv.parent('canvas');
	background(126);
	frameRate(30);

	for (let i = 0; i < 50; i++) {
		let x = random(width);
		let y = random(height);
		vehicles[i] = new Vehicle(x, y);
	}

	for (let i = 0; i < 30; i++) {
		let x = random(width);
		let y = random(height);
		food.push(createVector(x, y));
	}

	for (let i = 0; i < 15; i++) {
		let x = random(width);
		let y = random(height);
		poison.push(createVector(x, y));
	}
}

function draw() {
	background(126);

	if (random(1) < 0.05) {
		let x = random(width);
		let y = random(height);
		food.push(createVector(x, y));
	}

	if (random(1) < 0.01) {
		let x = random(width);
		let y = random(height);
		poison.push(createVector(x, y));
	}

	//   let target = createVector(mouseX, mouseY);

	//   //Draw an ellipse at the mouse position
	//   fill(127);
	//   stroke(200);
	//   strokeWeight(2);
	//   ellipse(target.x, target.y, 48, 48);

	for (let i = 0; i < food.length; i++) {
		fill(0, 255, 0);
		noStroke();
		ellipse(food[i].x, food[i].y, 4, 4);
	}

	for (let i = 0; i < poison.length; i++) {
		fill(255, 0, 0);
		noStroke();
		ellipse(poison[i].x, poison[i].y, 4, 4);
	}


	// Call the appropriate steering behaviors for our agents

	for (let i = vehicles.length - 1; i >= 0; i--) {
		vehicles[i].boundaries();
		vehicles[i].behaviors(food, poison);
		// v.seek(food);
		vehicles[i].update();
		vehicles[i].display();

		var newVehicle = vehicles[i].clone();
		if (newVehicle != null) {
			vehicles.push(newVehicle);
		}

		if (vehicles[i].dead()) {
			let x = vehicles[i].position.x;
			let y = vehicles[i].position.y;
			food.push(createVector(x, y));
			vehicles.splice(i, 1);
		}


	}

	// print(food.length);
	foodPlot.unshift(food.length);
	if (foodPlot.length > 200) {
		foodPlot.pop();
	}

	// plotter(foodPlot, width/2+350, height/2+210, "food");

}


