//A two-dimensional array defining the road grid, with each number representing a square of one color
let roadMetrics = [
  [0, 1, 0, 2, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 1, 0, 2, 0],
  [1, 3, 1, 1, 1, 1, 1, 1, 3, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 1, 4, 1, 1, 1, 1, 4, 4, 1, 1, 1, 4, 3, 1, 4, 1, 3, 4, 1, 4],

  [0, 4, 0, 4, 0, 0, 1, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 3, 0, 4, 0, 2, 0],
  [0, 1, 0, 1, 0, 0, 4, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 4, 0, 1, 0, 4, 0],
  [0, 1, 0, 1, 0, 0, 4, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 4, 0, 1, 0],
  [0, 3, 0, 2, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 2, 0],
  [0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 1, 0, 0, 0, 1, 0],
  [0, 1, 0, 4, 0, 0, 1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 4, 0, 0, 0, 4, 0],

  [1, 2, 1, 1, 1, 1, 3, 1, 4, 4, 2, 1, 4, 1, 3, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 3, 1, 2, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 4, 3, 4, 1, 2, 1, 4, 3, 1],

  [0, 1, 0, 4, 0, 0, 1, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 4, 0, 4, 0, 4, 0],
  [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 3, 0, 1, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0],
  [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 4, 0],
  [0, 1, 0, 4, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 4, 0, 4, 0, 1, 0],
  [0, 2, 0, 1, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 0, 4, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 4, 0, 2, 0],
  [0, 1, 0, 1, 0, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 4, 0, 1, 0, 0, 3, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],

  [1, 2, 1, 3, 1, 1, 4, 2, 1, 1, 4, 3, 1, 1, 4, 1, 3, 1, 2, 1, 1, 1, 3, 1, 1, 2, 1, 3, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 3, 1, 2, 1, 4, 3, 4, 1],

  [0, 0, 0, 1, 0, 0, 3, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 4, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 4, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 4, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 1, 0, 4, 0],

  [1, 2, 4, 3, 1, 1, 3, 4, 1, 1, 4, 3, 1, 1, 2, 4, 4, 1, 2, 4, 4, 4, 3, 1, 1, 4, 1, 4, 1, 1, 2, 4, 1, 4, 1, 1, 3, 1, 1, 2, 1, 1, 4, 2, 1, 2, 4],

  [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 3, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0],
  [0, 0, 0, 1, 0, 0, 3, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 4, 0],
  [0, 0, 0, 4, 0, 0, 1, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],

  [1, 1, 4, 3, 1, 1, 3, 1, 1, 1, 1, 3, 1, 1, 4, 1, 2, 1, 1, 2, 4, 4, 2, 1, 1, 4, 1, 4, 1, 1, 1, 2, 1, 3, 4, 4, 3, 1, 1, 2, 1, 1, 1, 3, 4, 2, 1],

  [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 4, 0],

  [1, 1, 4, 2, 1, 1, 3, 1, 1, 4, 1, 3, 1, 1, 4, 1, 1, 3, 1, 1, 2, 1, 1, 3, 1, 4, 1, 4, 1, 1, 1, 4, 1, 3, 1, 3, 1, 1, 1, 3, 1, 1, 1, 2, 4, 1, 2],

  [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 4, 0],
  [0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0],
  [1, 3, 1, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0],
  [0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 4, 0, 2, 0],
  [0, 0, 0, 2, 1, 1, 2, 1, 1, 4, 1, 3, 1, 1, 1, 4, 1, 1, 3, 1, 1, 2, 1, 3, 1, 4, 2, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 4, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 3, 0],
  [1, 3, 1, 2, 0, 0, 3, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0],
  [0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 4, 1, 2, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],

  [1, 4, 1, 3, 1, 1, 3, 1, 1, 2, 4, 3, 1, 1, 1, 4, 1, 1, 3, 1, 2, 1, 3, 2, 1, 3, 1, 2, 1, 3, 1, 2, 1, 3, 1, 1, 4, 1, 1, 2, 1, 1, 3, 1, 1, 2, 1],
  [0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 3, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 4, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 1, 4, 2, 1, 1, 3, 1, 1, 2, 1, 3, 1, 4, 1, 1, 4, 1, 3, 1, 3, 2, 2, 2, 1, 4, 1, 4, 1, 2, 1, 3, 1, 3, 1, 1, 4, 1, 1, 3, 1, 1, 2, 1, 1, 2, 1],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
];
//Arrays of different colored squares
let redBlocks = [];
let yellowBlocks = [];
let blueBlocks = [];
let grayBlocks = [];
//Define canvas and audio related variables
let canvas;
let audio
//Play and Pause
let button;
//For storing spectrum analysis data
let ampArray = [];
//Create FFT objects for spectrum analysis
let fft;

//Adjust the canvas size and position when the window size changes
function windowResized() {
  resizeCanvas(558, 558);
  canvas.position(windowWidth / 2 - width / 2, windowHeight / 2 - height / 2);
}
//Load the audio file before the setup function
//This technique is from https://p5js.org/reference/p5.sound/loadSound/
function preload() {
  audio = loadSound('1.mp3')
}
//Create canvas, audio, and block layout
function setup() {
  canvas = createCanvas(558, 558);
  //Displays the canvas in the center
  canvas.position(windowWidth / 2 - width / 2, windowHeight / 2 - height / 2);
  //Iterate through the roadMetrics array, generating squares of the corresponding color
  for (let i = 0; i < roadMetrics.length; i++) {
      let row = roadMetrics[i];
      for (let j = 0; j < row.length; j++) {
          let idx = i * row.length + j;
          switch (row[j]) {
              case 1:
                //Add yellow squares based on location and size
                  yellowBlocks.push(new Block(idx, 558 / row.length * j, 558 / 50 * i, 558 / row.length, 558 / 50));
                  break;
              case 2:
                //Add red squares based on location and size
                  redBlocks.push(new Block(idx, 558 / row.length * j, 558 / 50 * i, 558 / row.length, 558 / 50));
                  break;
              case 3:
                //Add blue squares based on location and size
                  blueBlocks.push(new Block(idx, 558 / row.length * j, 558 / 50 * i, 558 / row.length, 558 / 50));
                  break;
              case 4:
                //Add gray squares based on location and size
                  grayBlocks.push(new Block(idx, 558 / row.length * j, 558 / 50 * i, 558 / row.length, 558 / 50));
                  break;
              default:
                  break;
          }
      }
  }
  //create button for play
  button = createButton('PLAY');
  //Set button click event to switch playback state
  button.mousePressed(togglePlaying);
  //Initialize FFT objects for spectrum analysis
  //This technique is from https://p5js.org/reference/p5.sound/p5.FFT/
  fft = new p5.FFT(0, 256)
  //Start playing the audio loop
  audio.loop()
}

//Define a Block class to create a block object
class Block {
  constructor(idx, x, y, width, height) {
      this.idx = idx;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
  }
}
//Draw all squares
function drawAllBlocks() {
  //Draw red squares and dynamically set transparency based on spectrum data
  for (let redBlock of redBlocks) {
    //Get spectrum data index
      let i = redBlock.idx % 256
      //Fill color and transparency
      fill(175, 57, 43, ampArray[i] + 50);
      noStroke();
      rect(redBlock.x, redBlock.y, redBlock.width, redBlock.height);
  }
  //Draw yellow squares, using the cube of the ampArray data to control transparency
  for (let yellowBlock of yellowBlocks) {
      let i = yellowBlock.idx % 256
      console.log(i);
      fill(225, 201, 41, ampArray[i] * ampArray[i] * ampArray[i]);
      noStroke();
      rect(yellowBlock.x, yellowBlock.y, yellowBlock.width, yellowBlock.height);
  }
  //Draw a blue square, using a fixed color and transparency
  for (let blueBlock of blueBlocks) {
      let i = blueBlock.idx % 256
      fill(57, 86, 151);
      noStroke();
      rect(blueBlock.x, blueBlock.y, blueBlock.width, blueBlock.height);
  }
  //Draw a Gray square, using a fixed color and transparency
  for (let grayBlock of grayBlocks) {
      let i = grayBlock.idx % 256
      fill(217, 214, 209);
      noStroke();
      rect(grayBlock.x, grayBlock.y, grayBlock.width, grayBlock.height);
  }
}
//Draw function, which is called every frame
function draw() {
  background(242, 243, 238);

  //Audio spectrum data is acquired and stored in ampArray
  ampArray = fft.analyze()


  drawAllBuildings()
  drawAllBlocks();
}
//create all buildings
function drawAllBuildings() {
  drawBuildings(83, 33.90, 48, 18, color(225, 201, 41));
  drawBuildings(92, 21.90, 24, 68, color(175, 57, 43));
  drawBuildings(92, 52, 24, 13, color(217, 214, 209));


  drawBuildings(152, 21.90, 44, 52, color(175, 57, 43));
  drawBuildings(162, 38.90, 23, 20, color(217, 214, 209));
  drawBuildings(152, 73.90, 44, 15.8, color(217, 214, 209));


  drawBuildings(498.5, 56, 36, 20, color(76, 102, 197));

  drawBuildings(47, 112, 36, 33, color(76, 102, 197));

  drawBuildings(83, 160, 47.6, 33, color(225, 201, 41));
  drawBuildings(100, 168, 16, 14, color(217, 214, 209));


  drawBuildings(360, 100, 50, 100.5, color(76, 102, 197));
  drawBuildings(360, 130, 50, 48, color(175, 57, 43));
  drawBuildings(375, 145, 25, 20, color(225, 201, 41));

  drawBuildings(486.5, 112, 36, 33, color(175, 57, 43));

  drawBuildings(95.5, 212, 22.5, 35, color(225, 201, 41));
  drawBuildings(100, 222, 13, 12, color(217, 214, 209));

  drawBuildings(83, 277.2, 47.6, 35, color(175, 57, 43));

  drawBuildings(166, 256, 36, 56.6, color(225, 201, 41));
  drawBuildings(166, 270, 36, 42.6, color(76, 102, 197));
  drawBuildings(173, 283, 21.5, 16, color(225, 201, 41));

  drawBuildings(225, 212, 36, 101, color(225, 201, 41));
  drawBuildings(225, 268, 36, 25, color(217, 214, 209));

  drawBuildings(392, 256, 43, 77, color(175, 57, 43));
  drawBuildings(402, 275, 24, 20, color(217, 214, 209));
  drawBuildings(392, 333, 43, 15, color(217, 214, 209));

  drawBuildings(475, 273, 60, 25, color(225, 201, 41));
  drawBuildings(499, 273, 12, 25, color(175, 57, 43));

  drawBuildings(47, 368.5, 36, 33.5, color(76, 102, 197));

  drawBuildings(475, 368.5, 36, 33.5, color(76, 102, 197));
  drawBuildings(475, 402, 36, 18, color(225, 201, 41));
  drawBuildings(475, 420, 36, 33.5, color(175, 57, 43));

  drawBuildings(83, 430, 47.6, 39, color(225, 201, 41));
  drawBuildings(100, 439, 16, 13, color(217, 214, 209));

  drawBuildings(0, 485, 36, 14, color(225, 201, 41));
  drawBuildings(18, 485, 14, 14, color(175, 57, 43));

  drawBuildings(249, 528, 36, 22, color(175, 57, 43));

}
//Generic function for drawing a single building
function drawBuildings(x, y, width, height, color) {
  fill(color);
  rect(x, y, width, height);
  noStroke();;
}
//Toggle audio play and pause
//This technique is from https://p5js.org/reference/p5.MediaElement/stop/
function togglePlaying() {
  if (!audio.isPlaying()) {
      audio.play();
      audio.setVolume(1.0);
      //Update button text
      button.html("PAUSE");
  } else {
      audio.stop();
      //Update button text
      button.html("PLAY");
  }
}
