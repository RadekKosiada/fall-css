let button = document.getElementById("test-button");

button.addEventListener("click", function() {
  console.log("got it!")
})

//creating canvas
let canvas = document.createElement('canvas');
// adding id
canvas.setAttribute("id", "confetti");
// adding style: position absolute, so it covers the other content;
canvas.style.position = "absolute";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.zIndex = -1;

var body = document.getElementsByTagName("body")[0];
body.appendChild(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext("2d");
let pieces = []; //will hold pieces of confetti
const numberOfPieces = 350;

// colors from our palette used in the puzzle game
let colorObj = {
  red: 'rgba(255,0,0, 0.9)',
  yellow: 'rgba(255,242,0, 0.9)',
  orange: 'rgba(255,106,0, 0.6)',
  blue: 'rgba(22,94,247, 0.7)',
  green: 'rgba(0, 128, 0, 0.8)',
}
// picking a random color from the object
function randomColor() {
  console.log('randomColor() called')
  let colKey = Math.floor(Math.random() * Object.keys(colorObj).length);

  // using ES6 Object.values to get a random value from our colorObj.
  return Object.values(colorObj)[colKey];
};

function update() {
  // console.log('update() called')
  for (let i = pieces.length - 1; i >= 0; i--) {
    // the for loop iterates through the pieces array backwards; 
    // runs under the condition that i equals or larger than 0; i decreases by 1, each time it iterates.  

    let p = pieces[i];
    //if the piece reaches the lower border of the canvas, 
    // if the position of the piece is bigger than height of canvas
    if (p.y > canvas.height) {

      // it's getting removed (*1* element) from the array on the place *i*. 
      pieces.splice(i, 1);
      continue; //after it removes the element, the iteration and continues from there on.
    }

    //another check;
    // if the number of pieces is smaller than it's defined above;
    // piece() function is called and a new piece is added to the array;
    while (pieces.length < numberOfPieces) {

      // CREATING OF NEW PIECES
      // Math.random() * canvas.width = x position
      // -20 = y position; a bit higher so it looks more realistic
      pieces.push(new piece(Math.random() * canvas.width, -20) ); // adding new pieces to the array: pieces; with x & y
    }

    p.y += p.gravity; //position of a piece on the y axe is being changed by as much as defined in gravity.
    p.rotation += p.rotationSpeed;
  }
  setTimeout(update, 1); //the function will be called after 1 millisecond
}

function draw() {
  // console.log('draw() called')
  ctx.clearRect(0, 0, canvas.width, canvas.height); //this will prevent that the pieces will stay on the canvas, snake-like. 

  pieces.forEach(function (p) { //iterates through all elements in the array pieces
    ctx.save(); //we need to save the canvases and restore it below, to make just the pieces rotate.
    ctx.fillStyle = p.color;
    // it will translate the canvas to the center of the specific component;
    // its position + half of its size. 
    ctx.translate(p.x + p.size / 2, p.y + p.size / 2);
    ctx.rotate(p.rotation); //we set rotation in the piece function; 

    //// square pieces
    // this draws a new element: it is placed at 0, 0 of the translated canvas, 
    // thus *-p.size* https://www.screencast.com/t/DSKpt7NxH; https://www.w3schools.com/graphics/game_rotation.asp
    ctx.stroke();
    ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);

    ////circle pieces
    // ctx.beginPath();
    // ctx.arc(100, 75, p.size, 0, 2 * Math.PI);
    // ctx.fill();

    ctx.restore(); // this will stop from transforming other elements. 
  })
  requestAnimationFrame(draw); //to update the animation on screen
}

//this function will define how the confetti will be like
//it will store all important features
function piece(x, y) {
  // console.log('piece() called');
  this.x = x; //this refers to global object this === window; the variable remains global
  this.y = y;
  this.size = Math.random() * (8 - 15) + 15; //no lower or equal 8, lower or not equal 12;
  //the gravity can be in a similar range to size of the piece. 15 would be to fast. 
  // additionally check *gravitySpeed*.
  this.gravity = (Math.random() * 0.5 + 0.75) * 1  // arbitrary decided on that;
  this.rotation = (Math.PI * 2) * Math.random(); //how much we rotate the element;
  this.rotationSpeed = (Math.PI * 2) * Math.random() * 0.010; //how fast we rotate it;
  this.color = randomColor();

}

while (pieces.length < numberOfPieces) {
  //calling piece(x, y) function
  pieces.push(new piece(Math.random() * canvas.width, Math.random() * canvas.height)); // adding new pieces to the array: pieces; with x & y
}
// both functions will call themselves
update();
draw();



