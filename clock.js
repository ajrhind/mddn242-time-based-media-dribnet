/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
function draw_clock(obj) {
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off
  background(50); //  beige
  fill(200); // dark grey
  textSize(40);
  textAlign(CENTER, CENTER);
  text("YOUR MAIN CLOCK CODE GOES HERE", width / 2, 200);


  let hours =obj.hours;
  let minutes = obj.minutes;
  let seconds = obj.seconds;
  let mills = obj.millis;

  let secondSize = map(seconds,0,59,100,200);


  fill(249, 140, 255);// pink == hours
  ellipse(width / 3, 350, hours);

  fill(140, 255, 251) // blue
  ellipse(width / 2, 350, minutes);
  
  fill(175, 133, 255); // purple
  
  let bounce = map(mills,0,1000,0,PI);
  let phase = sin(bounce);
  let yMove = map(phase,-1,1,100,400);
  
  ellipse(width / 3 * 2,yMove, 100);



}
