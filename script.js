var numberOfSquares = 70;
var colors = [
  "yellow", "blue", "red", "orange", "green"
];
var numberOfColors = colors.length;

for (var i = 0; i < numberOfSquares; i++) {
  //creating elements
  var square = document.createElement("div");
  square.setAttribute("class", "square");
  //style
  square.style.width = "10px";
  square.style.height = "10px";
  // adding random background color
  square.style.backgroundColor = colors[randomNumber(numberOfColors)];
  square.style.position = "fixed";
  square.style.zIndex = "-1";
  square.style.top = 100 + 10*i + "px";
  square.style.left = 100 + 10*i + "px";

  // appending to body
  document.body.appendChild(square);
}


console.log(document.getElementsByClassName("square"));

// random position 
// movement
// loop? or setInterval? or CSS animation!!!
// 3 animacje rotating
// 7 animacji ruchu
// i dodac je randomly do squares;

function randomNumber(num) {
  return Math.floor(Math.random() * Math.floor(num));
}