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
let audio;  
//Play and Pause   
let button; 
let ampArray = [];   
//For storing spectrum analysis data   
let fft; 

// Resize the canvas and reposition it when the window size changes
function windowResized() {
    resizeCanvas(558, 558);
    canvas.position(windowWidth / 2 - width / 2, windowHeight / 2 - height / 2);
}

// Preload the audio file
function preload() {
    audio = loadSound('1.mp3');
}

// Initialize the canvas, button, and block positions
function setup() {
    canvas = createCanvas(558, 558);
    canvas.position(windowWidth / 2 - width / 2, windowHeight / 2 - height / 2);

    // Iterate over the roadMetrics array and create block objects for each color
    for (let i = 0; i < roadMetrics.length; i++) {
        let row = roadMetrics[i];
        for (let j = 0; j < row.length; j++) {
            let idx = i * row.length + j;
            switch (row[j]) {
                case 1:
                    yellowBlocks.push(new Block(idx, 558 / row.length * j, 558 / 50 * i, 558 / row.length, 558 / 50));
                    break;
                case 2:
                    redBlocks.push(new Block(idx, 558 / row.length * j, 558 / 50 * i, 558 / row.length, 558 / 50));
                    break;
                case 3:
                    blueBlocks.push(new Block(idx, 558 / row.length * j, 558 / 50 * i, 558 / row.length, 558 / 50));
                    break;
                case 4:
                    grayBlocks.push(new Block(idx, 558 / row.length * j, 558 / 50 * i, 558 / row.length, 558 / 50));
                    break;
                default:
                    break;
            }
        }
    }

    // Create the play button and configure it to toggle audio playback
    button = createButton('PLAY');
    button.mousePressed(togglePlaying);
    //This technique is from https://p5js.org/reference/p5.sound/p5.FFT/
    fft = new p5.FFT(0, 256);  // Initialize FFT for audio spectrum analysis
    audio.loop();              // Set the audio to loop
}

// Define the Block class for creating block objects
class Block {
    constructor(idx, x, y, width, height) {
        this.idx = idx;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}

// Draw all blocks, with color and transparency adjusted based on audio spectrum
function drawAllBlocks() {
    for (let redBlock of redBlocks) {
        let i = redBlock.idx % 256;
        fill(175, 57, 43, ampArray[i] + 50);
        noStroke();
        rect(redBlock.x, redBlock.y, redBlock.width, redBlock.height);
    }
    for (let yellowBlock of yellowBlocks) {
        let i = yellowBlock.idx % 256;
        fill(225, 201, 41, ampArray[i] ** 3);
        noStroke();
        rect(yellowBlock.x, yellowBlock.y, yellowBlock.width, yellowBlock.height);
    }
    for (let blueBlock of blueBlocks) {
        fill(57, 86, 151);
        noStroke();
        rect(blueBlock.x, blueBlock.y, blueBlock.width, blueBlock.height);
    }
    for (let grayBlock of grayBlocks) {
        fill(217, 214, 209);
        noStroke();
        rect(grayBlock.x, grayBlock.y, grayBlock.width, grayBlock.height);
        fill('white');
        circle(grayBlock.x + grayBlock.width / 2, grayBlock.y + grayBlock.height / 2, 8);
    }
}

// Main draw loop, responsible for background, audio analysis, and drawing blocks
function draw() {
    background(242, 243, 238); 
    ampArray = fft.analyze();  
    drawAllBuildings();    
    drawAllBlocks();           
}

// Function to draw various buildings at specified positions and colors
function drawAllBuildings() {
    // Draw different buildings at specific locations with specific colors
    drawBuildings(83, 33.90, 48, 18, color(225, 201, 41));
    drawBuildings(92, 21.90, 24, 68, color(175, 57, 43));
    drawBuildings(92, 52, 24, 13, color(217, 214, 209));
}

// Helper function to draw a single building
function drawBuildings(x, y, width, height, color) {
    fill(color);
    rect(x, y, width, height);
    noStroke();
}

// Function to control audio playback and pause
function togglePlaying() {
    if (!audio.isPlaying()) {
        audio.play();
        audio.setVolume(1.0);
        button.html("PAUSE");
    } else {
        audio.stop();
        button.html("PLAY");
    }
}
