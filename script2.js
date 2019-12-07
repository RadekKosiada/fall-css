// immediately invoked function expression not to pollute the global scope
(function () {

    var distanceBetweenSquares = 20;
    var squareSize = 10;
    // number of squares depends on the width of window (more mobile-friendly/responsive approach);
    // their density will be always the same, regardless the size of the screen;
    var numberOfSquares = Math.round(window.innerWidth / distanceBetweenSquares);

    var colors = confettiSettings.colorsCI;
    var numberOfColors = colors.length;

    var maxRotationSpeed = 2.0;
    var minRotationSpeed = 0.75;

    // FUNCTION TO CREATE SQUARES
    function createSquares() {

        // grabbing existing 'squares' and removing them from body
        // (otherwise infinite number of squares will be added to DOM eventually)
        var existingSquares = document.getElementsByClassName("square");
        if (existingSquares.length) {
            Array.from(existingSquares).forEach(function (element) {
                document.body.removeChild(element);
            });
        }

        for (var i = 0; i < numberOfSquares; i++) {
            //creating elements
            var square = document.createElement("div");
            square.setAttribute("class", "square");

            //style
            square.style.width = squareSize + "px";
            square.style.height = square.style.width;
            // adding random background color
            square.style.backgroundColor = colors[randomInteger(numberOfColors)];
            square.style.position = "fixed";
            square.style.zIndex = "1";
            square.style.top = randomInteger(window.innerHeight) + "px";
            // setting left position for each square with even distance between them
            square.style.left = (window.innerWidth / numberOfSquares) * i + "px";
            // setting 'rotation' animation
            square.style.animationName = "rotation";
            square.style.animationTimingFunction = "linear";
            square.style.animationIterationCount = "infinite";

            // direction will be randomly picked from predefined array;
            square.style.animationDirection = "normal";
            // duration will determine speed of rotation;
            square.style.animationDuration = randomNumber(minRotationSpeed, maxRotationSpeed) + "s";

            // appending to body
            document.body.appendChild(square);
        }
    } //end of createSquares()

    // FUNCTION TO DELETE SQUARES
    function deleteSquare() {
        var squares = document.getElementsByClassName("square");

        Array.from(squares).forEach(function (square) {
            document.body.removeChild(square);
        })
    }

    // CALLING createSquares on page load
    // This function will check url where confetti should be displayed;

    var confetti = false;
    var endConfetti;
    setInterval(function () {
        if (window.location.pathname === confettiSettings.urlToDisplayConfetti && !confetti) {

            createSquares();
            // CALLING deleteSquare() after number of seconds defined in timeAfterConfettiStops;
            endConfetti = setTimeout(deleteSquare, confettiSettings.timeAfterConfettiStops);
            confetti = true;

        } else if (window.location.pathname !== confettiSettings.urlToDisplayConfetti) {

            confetti = false;
            deleteSquare();
            clearTimeout(endConfetti);
        }
    }, confettiSettings.timeInterval);

    // CALLING deleteSquare() after number of seconds defined in timeAfterConfettiStops;
    setTimeout(deleteSquare, confettiSettings.timeAfterConfettiStops);

    // supporting functions

    // returns a random integer from 0 to num-1;
    function randomInteger(num) {
        return Math.floor(Math.random() * Math.floor(num));
    };

    // returns a random number larger or equal than min and smaller (not equal) than max
    function randomNumber(min, max) {
        return Math.random() * (max - min) + min;
    };

})();