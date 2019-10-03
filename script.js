var distanceBetweenSquares = 20;
var squareSize = 10;
// number of squares depends on the width of window (more mobile-friendly/responsive approach);
// their density will be always the same, regardless the size of the screen;

var numberOfSquares = Math.round(window.innerWidth/distanceBetweenSquares);
console.log(numberOfSquares);

var colors = ["yellow", "blue", "red", "orange", "green"];
var numberOfColors = colors.length;

function createSquares() {
  for (var i = 0; i < numberOfSquares; i++) {
    //creating elements
    var square = document.createElement("div");
    square.setAttribute("class", "square");
  
    //style
    square.style.width = squareSize + "px";
    square.style.height = square.style.width;
    // adding random background color
    square.style.backgroundColor = colors[randomNumber(numberOfColors)];
    square.style.position = "fixed";
    square.style.zIndex = "-1";
    square.style.top = 0 + "px";
    // setting left position for each square with even distance between them
    square.style.left = (window.innerWidth / numberOfSquares) * i + "px";
    // appending to body
    document.body.appendChild(square);
  }
}

createSquares();
// setInterval(createSquares, 1000);

// random position
// movement
// loop? or setInterval? or CSS animation!!!
// 3 animacje rotating
// 7 animacji ruchu
// i dodac je randomly do squares;

// add window resize event
// var num = window.addEventListener("resize", function () {
//   console.log(window.innerWidth)
//   return window.innerWidth;
// });

// console.log(num)


// supporting functions

// returns a random integer from 0 to num-1;
function randomNumber(num) {
  return Math.floor(Math.random() * Math.floor(num));
}
