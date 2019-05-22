# Redux Reducer Exercises

## Reducer refactor

Demo [Redux Vanilla Lunch Reducers](https://demo.alchemycodelab.io/redux-vanilla-lunch-reducers)

* Refactor your redux-vanilla-lunch extracting reducer into its own directory

## Blog Reducers

* create a blog-reducers branch (branch from blog-actions)
* create `src/reducers/postReducer.js`
  * store an array of posts
  * handle create a post
  * handle delete a post
  * BONUS: handle update a post by index

## Blog Combine Reducers

* create a blog-combine-reducers branch (branch from blog-reducers)
* create `src/actions/commentActions.js`
  * create an action to create a comment for a post (by post index)
  * create an action to delete a comment for a post (by post index and comment index)
* create `src/reducers/commentReducer.js`
  * store comments for each post (create an object where the key is a posts index)
    and the value is an array of comments
  * handle create a comment
  * handle delete a comment
  * delete post should also delete all comments
