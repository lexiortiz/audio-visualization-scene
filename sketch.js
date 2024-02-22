let sound;
let amp;
let fft;
let slider;
let angle = 0;

// Load sound file before setup() function runs
function preload() {
  // Load the sound file: Forest Dark x Nailah Hunter
  sound = loadSound("forestdark-compressed.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  // Loop sound file
  sound.loop();
  
  // Create Slider
  // slider = createSlider(30, 55, PI/4, 0.01);

  // Create Amplitude object
  amp = new p5.Amplitude();

  // Create FFT object
  fft = new p5.FFT();

  noStroke(0);

  // Create a Graphics Layer for BKGD
}

function draw() {
  background("rgba(18, 19, 23, 0.15)");
  const powder = color("rgba(253, 255, 250, 0.75)");
  let level = amp.getLevel();
  // angle = slider.value;

  /* Get waveform and spectrum arrays
  let waveformVis = fft.waveform(); */

  // Static-like Background
  beginShape();
  fill(powder);
  for (i = 0; i < 50; i++) {
    ellipse(i * random(40), random(windowHeight), random(3));
  }
  endShape();

  /* Loop through waveform array to draw a circle per time segment
  for (let i = 0; i < waveformVis.length; i++) {
    // Map x location using index number of waveform array
    let x = map(i, 0, waveformVis.length, 0, width);
    // May y location using the amplitude value for the specific time segment
    let y = map(waveformVis[i], -2, 1, height * 2, 0);

    fill(powder);
    circle(x, y, 3);
  } */

  // Draw Circle
  let shapeSize = map(level, 0, 1, 0, width / 2);
  fill('rgba(253, 255, 250, 1)');
  circle(width / 2, height / 2, shapeSize);
  
  // angle = slider.value();

  /* Tree
  push();
  translate(width / 4, height + 80);
  stroke('rgba(253, 255, 250, 0.1)');
  strokeWeight(3);
  branch(90);
  pop(); 
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop(); 
  } */
}