# Goals

* hash passwords that are stored in DB
  * We use bcrypt for this
* create some mechanism to "remember" who is logged in
  * we use JWT for this
* create routes to handle user signup, signin, and verifying if a user
  is already signed in

## Steps

NOTE: added cookie-parser npm package
  `npm i cookie-parser`
  add it to app.js

* create signin static method
  * finding a user by email
  * checking the users password hash with the
    passed in password
  * creates a token (JWT)
  * returns the user and token
* routes
  * now use User.signin
  * if there is no result send error
  * set a cookie called session with token
  * respond with user
* ensureAuth
  * remove bearerToken stuff
  * use req.cookies.session to get token
