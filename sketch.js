var number;
var numberLimit;
var totalFrames;

function setup() {
	number = 1;
	numberLimit = 30;
	totalFrames = 500;

	noCanvas();
}

function draw() {
	var output = "";

	// do this only if we are uner our frame limit
	// http://p5js.org/reference/#/p5/frameCount
	if (frameCount <= totalFrames) {

		if(number >= numberLimit) {
			number = 1;
			print("This is a line of text");
			print("xx");
		}

		// clear the output string

		// draw as many numbers
		for(var i = 0; i < number; i++) {
			output = output + number;
		}

		// this is the same as writing:
		// number = number + 1;
		number++;

		print(output);

	}
}


var outputs;
function add() {

}
