var number;
var numberLimit;
var totalFrames;

function setup() {
	number = 1;
	numberLimit = 30;
	totalFrames = 500;

	// this tells p5 that we are not using the `canvas` element
	noCanvas();
}

function draw() {
	// start with an empty output
	var output = "";

	// do this only if we are uner our frame limit
	// http://p5js.org/reference/#/p5/frameCount
	if (frameCount <= totalFrames) {

		if(number >= numberLimit) {
			number = 1;
		}

		// draw a number the same times as its value
		for(var i = 0; i < number; i++) {
			output = output + number;
		}

		// this is the same as writing:
		// number = number + 1;
		number++;

		// print to the console
		print(output);

	} else {

		// stop drawing
		noLoop();
	}
}
