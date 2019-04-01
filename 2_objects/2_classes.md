# Make classes

## House

* create a `House` class in `House.js` and `House.test.js`
* `House` has location, floors, bedrooms, bathrooms
  * test that a new `House` has the expected
    location, floors, bedrooms, bathrooms properties
* `House` has a `price` method
  * test that `price` returns the expected price
  * calculate the `House` price (this is a fake price. Make it up)

## Car

* create a `Car` class in `Car.js` and `Car.test.js`
* `Car` has a make, model, year, color, miles
  * make, model, year, color are passed to the constructor
  * miles is set at 0 initially
  * test that a new `Car` has the expected
    make, model, year, miles, and color properties
* `Car` has a `drive` method that takes `drivenMiles`
  * increment the `miles` property by the `drivenMiles` parameter
  * test after calling `drive` that miles is what you expect
* `Car` has a `makes` static methods
  * `makes` returns an array of valid car makes
    (e.g. 'honda', 'ford', etc.)
* BONUS: Update `Car` constructor so if make is not a valid
  make (from your `makes` static method), it throws an error

# Colors

* Create a `Colors` class
* colors has a `favorites` property
  * initialize `favorites` as an empty array
* `addColor` method takes a `color` parameter
  * `addColor` pushes `color` to the array of `favorites`
* `hasColor` method takes a `color` parameter
  * `hasColor` returns true if `favorites` `includes` `color`
  * `hasColor` returns false if `favorites` does not `includes` `color`

# User

* Create a `User` class in `User.js` and a `User.test.js`
* a user has an id, name, email, and password
  * name, email, and password are passed into the constructor
  * id is generated (use the `uuid` module `npm i uuid`)
* create a `toString` method
  * `toString` should print the users name and email `Ryan | ryan@test.com`
* create a `resetPassword` method
  * `resetPassword` takes the `oldPassword` and a `newPassword`
  * if `oldPassword` matches `password` set `password` to `newPassword`
  * if `oldPassword` doesn't match `password` throw an error
* BONUS: create a `count` method
  * `count` method counts the number of times a user has been created (`new User()`)
