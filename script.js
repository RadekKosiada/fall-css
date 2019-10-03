var squaresArray = [];
var numberOfSquares = 70;

for (var i = 0; i < numberOfSquares; i++) {
  //creating elements
  var square = document.createElement("div");
  
  //style
  square.style.width = "8px";
  square.style.height = "8px";
  square.style.backgroundColor = "purple";
  square.style.position = "fixed";
  square.style.top = 100 + 10*i + "px";
  square.style.left = 100 + 10*i + "px";

  // appendding to body
  document.body.appendChild(square);
}
