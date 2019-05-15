# React Forms Exercises

## Create and render a TextFormatter component

Demo [Simple Text Formatter](https://demo.alchemycodelab.io/simple-text-formatter/)

* create a `TextFormatter` component
  * use a text input to capture text
  * print text below input
  * use a color input to set the color of the text
  * BONUS
    * use figlet (`npm i figlet`) to format the text
    * HINT: you'll need to `cp -r node_modules/figlet/fonts .`
* create an `App` component
* create an `index.js` that renders your `App` component

## Create and render a CreateColor component

Demo [Simple Colors Form](https://demo.alchemycodelab.io/simple-colors-form)

* create a `CreateColor` component takes an `addColor` property
  * `CreateColor` is a form with a name and color input
  * on submitting the form invoke the `addColor` property to add a new color
* create a `Colors` component that takes an array of colors
  * a color has name, hex, and rgb
  * for each color in the array create a `Color` component
  * display all `Color` components in a ul
* create an `App` component
  * store a list of colors in `App` state
* create an `index.js` that renders your `App` component
