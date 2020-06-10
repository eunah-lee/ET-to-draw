var socket;

let handBack;
let handFront;
let ETFinger;
let HumanFinger;

function preload(){
  handBack = loadImage('https://cdn.glitch.com/98ff1b22-9b71-48c8-880b-923d7dc59c6a%2Fhand-back.png?v=1591825106137');
  handFront = loadImage('https://cdn.glitch.com/98ff1b22-9b71-48c8-880b-923d7dc59c6a%2Fhand-front.png?v=1591825106381');
  ETFinger = loadImage('https://cdn.glitch.com/98ff1b22-9b71-48c8-880b-923d7dc59c6a%2FETfinger.png?v=1591825863343');
  HumanFinger = loadImage('https://cdn.glitch.com/98ff1b22-9b71-48c8-880b-923d7dc59c6a%2Fhumanfinger.png?v=1591825865620');
}

function setup() {
  createCanvas(400, 400);
  background(0);

  socket = io.connect('http://localhost:3000');
  socket.on('mouseClick', newDrawing);
  socket.on('mouseDrag', newDrag);
}

function newDrawing(data){
  image(handFront, data.x-15, data.y-15, 30, 30);
  // noStroke();
  // fill(255, 0, 100);
  // ellipse(data.x, data.y, 36, 36);
}

function newDrag(data2){
  image(HumanFinger, data2.x-15, data2.y-15, 100, 70);
}

function mouseClicked() {
  console.log(mouseX + ', ' + mouseY);

  var data = {
    x: mouseX,
    y: mouseY
  }
  socket.emit('mouseClick', data);


  image(handBack, mouseX-15, mouseY-15, 30, 30);
  //ellipse(mouseX, mouseY, 30, 30);
}

function mouseDragged() {
  console.log(mouseX + ', ' + mouseY);

  var data2 = {
    x: mouseX,
    y: mouseY
  }
  socket.emit('mouseDrag', data2);

  //DrawETFinger(mouseX, mouseY);
  image(ETFinger, mouseX-15, mouseY-15, 100, 70);
  //ellipse(mouseX, mouseY, 30, 30);
}

 function draw() {
//   let instruction = createDiv('Click to HighFive');
//   instruction.style('font-size', '20px');
//   instruction.style('color', '#ff0000');
  
}

// function DrawETFinger(x, y) {
//   //set position and size of the main charactor
//   this.pos = createVector(x, y);

//     //mouse to be a direction the main charactor moves
//     this.update = function() {
//       let direction = createVector(mouseX - width/2, mouseY - height/2);
//       //sets magnitude
//       direction.setMag(1);
//       this.pos.add(direction);
//     }


//   //display main charactor
//   this.show = function() {
//     image(ETFinger, this.pos.x - 15, this.pos.y - 15, 100, 70);
//     //fill(255);
//     //ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
//   };
// }






/////////////////////////////////////////////////
//sorry for the mess, I was trying something and it did not work...
/////////////////////////////////////////////////

// var socket;

// var finger;
// var fingers = [];


// //let FingerET;
// //let FingerHuman;
// let hand;

// function preload() {
//   //FingerET = loadImage('https://cdn.glitch.com/1d0cc28c-52ce-42f0-91e8-17c2dd8111ec%2FETfinger.png?v=1591735543280');
//   //FingerHuman = loadImage('https://cdn.glitch.com/1d0cc28c-52ce-42f0-91e8-17c2dd8111ec%2Fhumanfinger.png?v=1591735545254');
//   hand = loadImage('https://cdn.glitch.com/c1a05c2e-b494-4042-856f-c87332707ae9%2Fhand.png?v=1591812499887');
// }

// function setup() {
//  createCanvas(700, 700);
//  background(0);

//  socket = io.connect('http://localhost:3000');
//  socket.on('mouse', newDrawing)
 

//  //main charactor in the middle
//  //finger = new Finger(width/2, height/2, 50);

// }

// function newDrawing(data) {
//   noStroke();
//   fill(255, 0, 100);
//   ellipse(data.x, data.y, 30, 30);

// }

// function mouseMoved() {
  
//   var data = {
//     x: mouseX, 
//     y: mouseY
//   }
//   socket.emit('mouse', data);

//   noStroke();
//   fill(255);
//   ellipse(mouseX, mouseY, 30, 30);
// }
  
// function draw() {
//   //background(0);
//   //translate so that 0, 0 is the middle of the screen
//   translate(width/2 , height/2);
//   //translate so that the et finger is always on center
//   translate(-finger.pos.x, -finger.pos.y);

//   //draw smaller et fingers (loop through the array backwards)
//   for (var i = fingers.length - 1; i >= 0 ; i--) {
//     fingers[i]. show();
    
//      }

//   finger.show();
//   finger.update();
// }




