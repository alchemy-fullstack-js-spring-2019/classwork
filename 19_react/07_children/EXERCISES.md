# React Children Exercises

## Create and render a Sidebar component

Demo [Simple Sidebar](https://demo.alchemycodelab.io/simple-sidebar)

* create a `Sidebar` component
  * a sidebar has children that render in a `<nav>` element
* create an `App` component that uses your `Sidebar` component
* create an `index.js` that renders your `App` component

## Create and render a Sidebar component that can error

Demo [Simple Error](https://demo.alchemycodelab.io/simple-error)

* create an `ErrorBoundary` component
  * display `<h3>Error!</h3>` if there is an error
  * `console.error` the error
  * otherwise render children components
* create a `Bad` component that throws an error
* create a `Good` component that renders `<h1>Good</h1>`
* create an `App` component that uses your components
  * what happens if you wrap `ErrorBoundary` around `Bad`?
  * what happens if you don't?
* create an `index.js` that renders your `App` component
