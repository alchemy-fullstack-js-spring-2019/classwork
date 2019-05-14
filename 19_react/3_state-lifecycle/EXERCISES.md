# React State Exercises

## Create and render a ColorPicker component

Demo [Simple Color Picker Disploy](http://demo.alchemycodelab.io/simple-color-picker-display)

* create a `ColorPicker` component
  * create a button for red, yellow, and blue
  * make the background color of each button the color it represents
  * create a div who's background color is the color of the last button pressed
  * when the red button is pressed change the div to red
  * when the yellow button is pressed change the div to yellow
  * when the blue button is pressed change the div to blue
* create an `App` component that uses your `ColorPicker` component
* create an `index.js` that renders your `App` component
* BONUS
  * add a css stylesheet and import it instead of using inline styles
  * Pass an array of colors as a property to your `ColorPicker`
  * display a button for each color in the array

## Create and render an Incrementer component

Demo [Simple Incrementer](http://demo.alchemycodelab.io/simple-incrementer)

* create a `Incrementer` component
  * use state to keep track of the `count` of button presses
  * display the current button presses `count`
  * create a button that increments `count`
* create an `App` component that uses your `Incrementer` component
* create an `index.js` that renders your `App` component

## Create and render a ColorPicker and ColorDisplay component

Demo [Lifted Color Picker Display](http://demo.alchemycodelab.io/lifted-color-picker-display)

* create a `ColorPicker` component that takes a function to update the selected color
  * create a button for red, yellow, and blue
  * make the background color of each button the color it represents
  * when the red button is pressed change the selected color to red
  * when the yellow button is pressed change the selected color to yellow
  * when the blue button is pressed change the selected color to blue
* create a `ColorDisplay` component that takes the selected color
  * display the selected color
* create an `App` component that uses your `ColorPicker` and `ColorDisplay` component
* create an `index.js` that renders your `App` component
* BONUS
  * Console.log the selected color after updating.

## Create and render a RandomColor component

Demo [Random Color](http://demo.alchemycodelab.io/random-color)

* create a `RandomColor` changes colors randomly every second
* create an `App` component that uses your `RandomColor` component
* create an `index.js` that renders your `App` component
* BONUS
  * if the color wasn't changed (the same color was randomly selected) set the
    background image to https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg
