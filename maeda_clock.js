// // Update this function to draw you own maeda clock on a 960x500 canvas
// function draw_clock(obj) {
//   // YOUR MAIN CLOCK CODE GOES HERE
//   background(50); //  beige
//   fill(200); // dark grey
//   textSize(40);
//   textAlign(CENTER, CENTER);
//   text("YOUR MAEDA CLOCK CODE GOES HERE", width/2, height/2);
// }

// Update this function to draw you own maeda clock on a 960x500 canvas
let midX = 480;
let midY = 250;


// YOUR MAIN CLOCK CODE GOES HERE
function draw_clock(obj) {
//--------------------------------------------------
  angleMode(DEGREES);
  background(30); //  beige
  textAlign(CENTER,CENTER);
//----------------------------------------------------
let size = 100
let hours = obj.hours
let minutes = obj.minutes
let seconds = obj.seconds
let hRotate = map(hours,0,360,0,23);
let mRotate = 6;
var sMap = map(obj.seconds, 0, 59, 50 ,450);
var mMap = map(obj.minutes ,0,59,50,450);
var hMap = map(obj.hours,0,23,50,450);
var hColour = map(obj.hours,0,23,100,255);
var mColour = map(obj.minutes,0,59,100,255);
var sColour = map(obj.seconds,0,59,100,255);

textSize(30);

// // for(i=0;i<23;i++){
fill(100,100,hColour);
//   text(hours,midX-200,hMap);//hours
// // }for(i=0;i<59;i++){
// fill(100,mColour,100);
//   text(minutes,midX,mMap);
// fill(sColour,100,100);
//   text(seconds,midX+200,sMap);


textSize(50);
rotate(hRotate);
text(hours,midX,midY);


}