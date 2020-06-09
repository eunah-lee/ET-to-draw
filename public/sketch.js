let socket = io.connect();

socket.on("message", processMessage);

let myColor;
let FingerET;
let FingerHuman;

function preload() {
  FingerET = loadImage('https://cdn.glitch.com/1d0cc28c-52ce-42f0-91e8-17c2dd8111ec%2FETfinger.png?v=1591735543280');
  FingerHuman = loadImage('https://cdn.glitch.com/1d0cc28c-52ce-42f0-91e8-17c2dd8111ec%2Fhumanfinger.png?v=1591735545254');
}

function setup() {
  createCanvas(800, 800);
  background(0);
  myColor = random(255);
  colorMode(HSB);
  

function draw() {
  let data = {x: mouseX, y: mouseY};
  socket.emit("message", data);
  //background(126);
  //image(FingerET, mouseX-440, mouseY-65);
  cursor('https://s3.amazonaws.com/mupublicdata/cursor.cur', 20, 20);
}
  
}

function mousePressed() {
  let data = {x: mouseX, y: mouseY, color: myColor};
  socket.emit("message", data);
  
  
  fill(myColor, 255, 255);
  
  rect(mouseX, mouseY, 10, 10)
}


function keyPressed() {
  let data = {k: key}
  socket.emit("message", data);
}


function processMessage(data) {
  print(data);
  fill(data.color, 255, 255);
  rect(data.x, data.y, 10, 10);
}