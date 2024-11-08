# Audio driven animated effect of "New York City Street Scene"
## Project overview
This project presents a dynamic audio-driven New York street scene. Through the blinking effect of colored squares, the cityscape "beats" with the changing rhythm of the music. The project uses JavaScript and p5.js libraries, combined with the audio volume, to make each block vary in transparency, creating a visual "flicker" effect.
## Interactive specification
First please open the code in vs code that supports p5.js and make sure the audio file I selected exists in the specified path.Then，Click the "PLAY" button at the top of the page to start or pause the audio playback. When playing, the transparency of the block will blink as the volume of the audio changes.
## Basic artwork construction
### First
roadMetrics is a two-dimensional array that defines the road layout of a city. Each number corresponds to a colored square, where:
0 indicates a blank area
1 represents the yellow square
2 represents the red square
3 is the blue square
4 represents the gray square
Blocks of different colors are stored in yellowBlocks, redBlocks, blueBlocks, and grayBlocks arrays for independent management and drawing.
### Second
Building drawing generates buildings in the city background through the drawAllBuildings function, and draws individual buildings using the drawBuildings function to control their appearance through location, size, and color parameters, thus achieving a static urban landscape and enhancing the background layer of the animation.
### final for flash
The animation effect is driven by audio flashing, making the transparency of the block blink with the volume change. Using p5.FFT to analyze the audio spectrum, the audio data is mapped to the transparency of the block to create the effect of beating with the rhythm.
![An image of a cat](https://au.pinterest.com/pin/137359857379794331/
Links to an external site.)

## Inspiration and reference
This project is inspired by the audio synchronization effect of p5.js audio library and the flickering changes of neon lights in the city night scene, and it is also after understanding the scene when the author created this painting. From the New York night scene thought of the city neon scene, so as to achieve the square transparency with the volume change and beat the urban night visual effect.

REFERENCE:https://p5js.org/reference/p5.sound/

## The use of main functions
### Audio loading, playback and control
loadSound: Use the loadSound method to load the audio file mp3, as the driver of the animation effect, so that the block animation can be synchronized with the audio rhythm.
createButton: Creates a "PLAY" button to control the playback of the audio.
Button.mousepressed: Binds the click event to the button. When the user clicks the button, the custom function togglePlaying is called to switch the audio playing state.
togglePlaying: A custom function that handles button clicks. It determines the current playback status of the audio, performs play or stop operations, and updates the button text accordingly: if the audio is playing, the button displays "PAUSE"; If the audio stops, the button displays "PLAY."

### Audio spectrum analysis
new p5.FFT: Creates the p5.FFT object to perform the fast Fourier transform (FFT) of the audio, which is used to extract the frequency data of the audio. This object analyzes audio spectrum data in real time, providing the basis for dynamic effects.
fft.analyze() : Call the analyze method to get the spectrum data of the current audio. The returned array contains the volume sizes for each frequency, which can be used for animation effects, such as changes in the transparency of the box, in response to the rhythm of the audio.

### Color Settings and dynamic effects
red block Color setting: Set the color of the red block to rgb(175, 57, 43) when traversing the roadMetrics array and creating the block object. This color setting dynamically controls transparency through audio spectrum data, resulting in a flickering effect when audio is played.