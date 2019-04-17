# MongoDB and Mongoose

## Schedule

### Day 1

time | topic
--- | ---
9:00 - 9:45 | Install MongoDB / Robo3T
9:45 - 10:25 | Intro to MongoDB
10:25 - 10:35 | Break
10:35 - 11:00 | Solo mongoDB queries
11:00 - 11:30 | Intro to mongoose
11:30 - 12:00 | Solo mongoose schema and models
12:00 - 1:00 | Lunch
1:00 - 1:30 | Mongoose demo
1:30 - 2:15 | Mongoose with express
2:15 - 2:30 | Break
2:30 - 3:00 | Mongoose with express demo
3:15 - 3:45 | More mongoose with express
3:45 - 4:00 | Break
4:00 - 5:45 | More mongoose with express
5:45 - 6:00 | Retro

### Day 2

time | topic
--- | ---
9:00 - 9:30 | Mongo/Mongoose Review
9:30 - 10:00 | Fix tests and routes / refactor
10:00 - 10:15 | Break
10:15 - 10:45 | Mongoose select and lean demo
10:45 - 11:15 | Solo mongoose select and lean
11:15 - 12:00 | Mongoose model relationships demo
12:00 - 1:00 | Lunch
1:00 - 5:45 | Solo mongoose model relationships
5:45 - 6:00 | Retro

## Day 3

9:00 - 10:00 | Mongoose full demo
10:00 - 5:45 | Mob ripe-banana

## Dependencies

* Dev
  * jest
  * eslint
  * supertest
  * nodemon
* Regular
  * express
  * mongoose

## What do we need to run?

* ALWAYS: `mongod` running (`gomongo` maybe?)

### Testing

* `npm run test:watch` or `npm run test`

### Dev server

* `npm run start:watch` or `npm start`

## Mongo DB

* Collection / Document based data model
* Data is stored in JSON like documents

### DB vs Collection vs Document

* Databases hold collections
* Collections hold documents
* Documents hold data

## Mongoose

Mongoose is an ODM (Object Document Mapping). It creates a map
of documents (from MongoDB) to objects in JavaScript.

### Schema

A schema maps to a MongoDB collection and specifies the shape
each document in that collection should take. The schema defines
the fields and types that each document should have with a
provided object DSL (Domain Specific Language). The supported
types are:

* String
* Number
* Date
* Buffer
* Boolean
* Mixed
* ObjectId
* Array
  * { type: [String] } **DONT** { type: Array }
* Decimal128
* Map

### Validators

#### Built in

* `required` - makes the field non-optional
* `unique` - makes the field unique
* `default` - gives the field a default value if not specified
* `select` - boolean whether the field should returned
* `validate` - function to validate the field

##### String only

* `lowercase` - make the field always lowercase
* `uppercase` - make the field always uppercase
* `trim` - trim off whitespace
* `match` - regex that the field must match
* `enum` - array of strings that the field must match
* `minlength` - minimum length of field
* `maxlength` - maximum length of field

##### Number only

* `min` - field must be greater than or equal to min
* `max` - field must be less than or equal to max

##### Date only

* `min`
* `max`

#### Custom

A custom validate function can be added to a field:

```js
var personSchema = new Schema({
  phone: {
    type: String,
    validate: {
      validator: function(v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
    },
    required: [true, 'Person phone number required']
  }
});
```
