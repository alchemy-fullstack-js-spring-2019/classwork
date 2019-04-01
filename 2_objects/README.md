# ES6 Classes

## Readings and Resources

* [MDN - Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [MDN - this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
* [MDN - Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

## Agenda

* Lab review
* Array Methods
  * `find`
  * `splice`
  * `join`
  * `split`
* `this`: JavaScript object context
* JavaScript Object creation
  * Object literal
  * Constructor function
  * Factory function
  * class
  * EXERCISE: animal object
* ES6 Classes
  * constructor
  * static vs instance methods
  * EXERCISE: User class

## JavaScript Objects

From MDN:

> JavaScript is designed on a simple object-based
> paradigm. An object is a collection of properties,
> and a property is an association between a name
> (or key) and a value. A property's value can be a
> function, in which case the property is known as a
> method. In addition to objects that are predefined
> in the browser, you can define your own objects.
> This chapter describes how to use objects,
> properties, functions, and methods, and how to
> create your own objects.

This collection of properties and methods can model
real-world objects.-

### `this`

In the context of a JavaScript object, `this` refers
to the object itself. When dealing with object
creators (constructor function, factory functions,
and classes) `this` refers to an instance of an
object (e.g. a particular person).

### Object literal

Object literals are useful for creating one time use
objects. Object literals are created by putting
properties and methods between a set of curly braces.

```js
const person = {
  name: 'William James',
  phone: '503-555-5555',
  age: 177,
  sayHi() {
    console.log(`Hi, I'm ${this.name}`);
  }
};
```

### Constructor functions

Constructor functions are useful when we want to have
many objects that all have some properties in common.

```js
const Person = function(name, phone, age) {
  this.name = name;
  this.phone = phone;
  this.age = age;
};

Person.prototype.sayHi = function() {
  console.log(`Hi, I'm ${this.name}`);
};

const williamJames = new Person('William James',
  '503-555-5555',
  177);
```

### Factory functions

Similar to constructor functions, factory functions
are useful when we want to have many objects that
all have some properties in common.

```js
const Person = function(name, phone, age) {
  return {
    name,
    phone,
    age,
    sayHi() {
      console.log(`Hi, I'm ${this.name}`);
    }
  };
};

const williamJames = Person('William James',
  '503-555-5555',
  177);
```

### Class

As of ES6 JavaScript has a `class` keyword that
allows developers to create objects similar to
constructor functions, but with a more familiar
syntax (from other programming languages).

```js
class Person {
  constructor(name, phone, age) {
    this.name = name;
    this.phone = phone;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const williamJames = new Person('William James',
  '503-555-5555',
  177);
```
