Patternist
============
<!DOCTYPE html>
<html lang="en">

	<!-- a head for all the heady/conceptual/meta stuff -->
	<head>

		<title> Card Suits pattern </title>

		<link href='http://fonts.googleapis.com/css?family=Alice' rel='stylesheet' type='text/css'>

		<script type="text/javascript">
  WebFontConfig = {
    google: { families: [ 'Alice::latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('h1, p')[0];
    s.parentNode.insertBefore(wf, s);
  })(); </script>

		<!-- this imports p5  -->
		<script language="javascript" type="text/javascript" src="../p5/p5.min.js"></script>
		<script language="javascript" type="text/javascript" src="../p5/addons/p5.dom.js"></script>

		<!-- here's your sketch! -->
		<script>
		// -------------------------------------------------------------------------
		// we're in javascript land now!
		// (notice the different style of comments)

		// set up our vars here

		// this variable will keep track of what line we're on
		var currentLine = 0;
		// this is the total number of lines
		var totalLines = 900;
		// this is our output
		var output = "";


		function setup() {
			// this tells p5 that we are not using the `canvas` element
			noCanvas();
		}


		// this is fired on every new frame.
		function draw() {

			var elementTag = "span";
			// add a CSS class
			var elementClass = "";

			// if we haven't reached our total number of lines
			if(currentLine < totalLines) {

				// if the current line is 0
				if(currentLine == 0) {
					output = "Ace of &spades;";
					elementClass= "aceofspades";
					elementTag= "h1";
					
				// if it's the last line
				} else if ( currentLine == totalLines - 1) {
					output = "&spades; of Ace";
					elementClass= "aceofspades";
					elementTag= "p";

					

				// the % operator (also known as "modulus") gives us the remainder when
				// dividing one number into another:
				// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder
				//
				// so this will only be true if the current line is a multiple of 2,
				// since then it won't have a remainder
				} else if ( currentLine % 2 == 0) {
					output = "&spades;  &clubs;";
					//elementTag= "p";

				// same as above, but a multiple of three
				} else if ( currentLine % 3 == 0) {
					output = "&diams;";
					elementClass= "diamonds";
				

				// if we're over halfway done
				} else if ( currentLine > totalLines / 2) {
					output = "&amp;";
					elementClass= "amper";
					//elementTag= "p";

				} else if ( currentLine % 4 == 0)  {
					output = "&clubs;";
					//ßelementTag= "p";

				} else if ( currentLine % 5 == 0) {
					output = "&hearts;";
					elementClass= "hearts";
					

				} else if ( currentLine > totalLines / 3 ) {
					output = "&Rarr;";
					elementClass= "amper";
					//elementTag= "p";

				// otherwise, our default option
				} else {
					output = "&weierp;"
					elementClass= "amper";
				}

				// output the result
				element = createElement(elementTag, output);

				element.addClass(elementClass);

				// increase the line #
				currentLine = currentLine + 1;
			}
		}

		// now leaving the land of javascript...
		// -------------------------------------------------------------------------
		</script>
		<!-- back to HTML -->

		<style>
			body {
				padding: 50px;
				margin: 50px;
				font-size: 45px;
				font-family: 'Alice', serif;

			}

			.aceofspades{
				color:#003366;
				font-family: 'Alice', serif;
				font-size: 74px;
			}

			.diamonds{
				color: red;

			}

			.amper {
				color: #999999;
				font-family: 'Alice', serif;
				font-size: 64px;

			}

			.hearts{
				color: red;
			}


		</style>

	</head>

	<!-- since we're using JavaScript, we can leave the body empty -->
	<body>

	</body>

</html>

Second assignment.
