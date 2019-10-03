var distanceBetweenSquares = 20;
var squareSize = 10;
// number of squares depends on the width of window (more mobile-friendly/responsive approach)
var numberOfSquares = Math.round(window.innerWidth/distanceBetweenSquares);
console.log(numberOfSquares);
var colors = ["yellow", "blue", "red", "orange", "green"];
var numberOfColors = colors.length;

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
  // setting left position for each square; each will 
  square.style.left = (window.innerWidth / numberOfSquares) * i + "px";
  // appending to body
  document.body.appendChild(square);
}


// random position
// movement
// loop? or setInterval? or CSS animation!!!
// 3 animacje rotating
// 7 animacji ruchu
// i dodac je randomly do squares;


// supporting functions

// returns a random integer from 0 to num-1;
function randomNumber(num) {
  return Math.floor(Math.random() * Math.floor(num));
}
