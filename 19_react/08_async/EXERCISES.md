# React Async Exercises

## Create an application to display futurama quotes

Demo [Simple Futurama Quotes](http://demo.alchemycodelab.io/simple-futurama-quotes)

* create a `Quote` presentational component
  * display character, quote, and image
* create a `Quotes` presentational component
* create a `TopQuotes` container component
  * `TopQuotes` take a count property
  * fetch `count` quotes from the [futurama api](http://futuramaapi.herokuapp.com/) and
    display them
* create an `App` component that uses your `TopQuotes` component
* create an `index.js` that renders your `App` component
* BONUS
  * create a `CharacterQuotes` container component
    * `CharacterQuotes` take a count and character
    * display quotes by only that character
  * add a select to select characters to get quotes for

## Create an application to display Rick and Morty Characters

Demo [Simple Rick And Morty](http://demo.alchemycodelab.io/simple-rick-and-morty)

* create a `Character` presentational component
  * display name, status, species, and image
* create a `Characters` presentational component
* create an `AllCharacters` container component
  * fetch characters from [https://rickandmortyapi.com/api/character/](https://rickandmortyapi.com/api/character/)
* create an `App` component that uses your `AllCharacters` component
* create an `index.js` that renders your `App` component

## Create an application to display Rick and Morty Characters

Demo [Paged Rick And Morty](http://demo.alchemycodelab.io/paged-rick-and-morty)

* Branch off of your `simple-rick-and-morty` branch
* update `AllCharacters`
  * add `page` to state and create buttons to increment and decrement page
  * use `page` to page through the rick and morty api
  * make sure you can't go passed the last page
  * make sure you can't go before the first page
* Bonus
  * make a `Paging` component
