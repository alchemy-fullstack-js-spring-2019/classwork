# Back-end Review

## Agenda

* Express
* MongoDB/Mongoose
* Auth
* Aggregations

## Express

Express is a minimalist web framework. It allows us to quickly create
web applications by applying middleware to requests.

### Middleware

Middleware are functions that run between an incoming request and
outgoing response. They are executed in the order they are added
to the app. **NOTE** you need to either respond or invoke the
`next` function.

Middleware can be added to an app like:

```js
const express = require('express');
const app = express();
app.use((req, res, next) => {});
```

You can also add middleware to a specific path:

```js
const express = require('express');
const app = express();
app.use('/path', (req, res, next) => {});
```

In express, middleware has a diversity of jobs.

1. Handler - Middleware can be used to handle requests. They can
  take a request and respond.
1. Add Properties - Middleware can be used to add properties to
  the request object.
1. Not Found - Middleware can be used to customize the not found message.
1. Error Handler - Middleware can be used to handle errors.

#### Handler

We can add request handlers

```js
app.get('/path', (req, res, next) => {});
```

#### Add Properties

```js
app.use((req, res, next) => {
  req.stuff = 'stuff'
  next();
});
```

#### Not Found

```js
app.use((req, res, next) => {
  res
    .status(404)
    .send({ error: 'Not Found' });
});
```

#### Error Handling

```js
app.use((err, req, res, next) => {
  res
    .status(500)
    .send({
      error: err.message ||  err
    });
});
```

### Routing

```js
// lib/routes/route.js
const { Router } = require('express');

module.exports Router()
  .get('/', (req, res, next) => {});
```

```js
// lib/app.js
const express = require('express');
const app = express();

app.use('/route', require('./routes/route'));

module.exports = app;
```

## Mongodb/Mongoose

MongoDB is a noSQL document database.

* Documents are data records
* Collections are stores of documents
* Databases are stores of related collections

MongoDB documents have no schema. This means any document can take any shape.
We use Mongoose to apply a schema to documents to better structure our data

### Mongoose

Mongoose is a Object-Document Mapping (ODM). It has built-in schema validation and
provides a nice query API.

#### Mongoose Schema/Model

```js
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  dob: Date,
  age: Number
});

const Person = mongoose.model('Person', personSchema);
```

#### Mongoose Instance Methods

```js
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  dob: Date,
  age: Number
});

personSchema.methods.myMethod = function() {
  return 'do stuff';
};

const Person = mongoose.model('Person', personSchema);

Person.create({
  name: 'Severian',
})
  .then(person => person.myMethod());
```

#### Mongoose Static Methods

```js
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  dob: Date,
  age: Number
});

personSchema.statics.myStaticMethod = function() {
  return 'do stuff';
};

const Person = mongoose.model('Person', personSchema);

Person.myStaticMethod();
```

#### Mongoose hooks/middleware

```js
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  dob: Date,
  age: Number
});

personSchema.pre('save', function(next) {
  // do stuff before save
});

personSchema.post('save', function(next) {
  // do stuff post save
});

const Person = mongoose.model('Person', personSchema);
```

##### Mongoose Document Middleware

`this` refers to the document.

* validate
* save
  * User.create
* remove
* init
  * new User()

##### Mongoose Query Middleware

`this` refers to the query.

* count
* deleteMany
* deleteOne
* find
* findOne
* findOneAndDelete
* findOneAndRemove
* findOneAndUpdate
* remove
* update
* updateOne
* updateMany

##### Mongoose Aggregate Middleware

`this` refers to the aggregate object.

* aggregate

##### Mongoose Model Middleware

`this` refers to the model.

* insertMany

#### Document Reference / Population

```js
const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  weight: String,
  age: Number
});

const Dog = mongoose.model('Dog', dogSchema);

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  dob: Date,
  age: Number,
  dog: {
    type: mongoose.Schema.Types.ObjectID,
    ref: 'Dog'
  }
});

const Person = mongoose.model('Person', personSchema);

Person
  .find()
  .populate('dog')
  .populate('cat')
  .then(people => {

  })
```

## Auth

### Bcrypt

We use bcrypt to hash passwords and store the hashed password in our database.

### JWT

We use JSON Web Tokens (JWTs) to hold user/session information.

## Aggregation

Aggregations are performed in steps. The output of each step is passed to
the next step of the aggregation.
