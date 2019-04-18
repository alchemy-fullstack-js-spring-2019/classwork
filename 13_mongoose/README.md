## Agenda

* setup packages
  * `npm init -y`
  * `npm i -D jest eslint supertest nodemon`
  * `npm i express mongoose dotenv`
  * create scripts (pretest, test, test:watch, start, start:watch)
* create `app.js`
  * add middleware
    * use morgan for logging
      * `npm i morgan`
    * use `express.json()
    * create error middleware
    * create `notFound` middleware
* create server.js
  * configure `dotenv`
  * add app listener
* add mongoose
  * create connect util
  * add to server.js
  * create mongoose-connection middleware
* create Warehouse model
  * add states util
  * create lib/models/Warehouse.js
  * create schema
  * create model
* create warehouse routes
  * create lib/routes/warehouses.js
* refactor tests
  * use dataHelpers
* create Employee model
* add employee to seedData and dataHelpers
* create employees routes
* create Item model
* add item to seedData and dataHelpers
* create item routes
