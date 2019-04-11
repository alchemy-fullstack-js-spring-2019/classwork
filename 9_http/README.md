# Class 07 Http and Rest

## Questions, Feedback
* Quiz Review
* ?

## Today's Learning Objectives

1. Create HTTP server using Node.js
1. Understand Request/Response cycle
1. Differentiate HTTP requests based on:
	* `url` (path)
	* `method` (verb)
	* Other request factors (`query`, `content-type`)
1. E2E servers using Jest (and supertest for HTTP)

## Tool Review

* [Postman](https://www.getpostman.com/)
* or curl and [jq](https://stedolan.github.io/jq/)

### HTTP

An envelop with a letter (or a postcard)

* [Http Protocol explained](http://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177)
* Path (nouns):
	* [parts of url](http://bl.ocks.org/abernier/3070589)
	* protocol
	* hostname ( host + port )
	* resource path
	* query
* Method (verbs):
	* GET, POST, PUT, DELETE, PATCH
	* plus more ...
	* CRUD
		* POST - CREATE
		* GET - READ
		* PUT - UPDATE
		* DELETE - DELETE
* REST
	* [understanding REST](https://spring.io/understanding/REST)
	* Resources (nouns!)
	* Part “art”
* Headers
	* Status codes
	* Entity Description
		* Content type, etc.
	* Authorization tokens

### REST use cases:

* `GET /pandas` = return the list of pandas (Read)
* `GET /pandas/:id` (example: `/pandas/123`) = return specific todo,
often used for a detail view (Read)
* `POST /pandas` = create a new todo (and return object with id) (Create)
* `PUT /pandas/:id` = create or replace todo with this specific id (Update)
* `PATCH /pandas/:id` = update the supplied properties on the todo with specific id (Partial Update)
* `DELETE /pandas/:id` = delete the specified todo (Delete)

### Query Parameters

Represent refinements or modifications to how the request should be processed:
* `?limit=100&page=3` - return results 201-300
* `?format=xml` - control results format (might see on third party API)
* `?access_token=123edfdo3o3o23` - provide a token for authentication
* `?name=Smith` - provide query parameter directly
* `?query={ name: 'Smith' }` - provide query parameters that filter the results

Check out built-in module `const url = require('url');` Which includes query methods, but you can also use built-in `const qs = require('querystring');` for helpful methods.

HTTP status codes:
* `200` OK
* `300` (about the resource, hasn't changed, redirect here)
* `400` user did something wrong
* `500` something went wrong on our server

## Scripts

* role of `npm start`
* need separate test watch!
