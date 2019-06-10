# Notes app

## Slices

### Create Note

* Notes client create note
  * reducer
  * service
  * action
  * component
  * container
* Notes server create note
  * model
  * route
  * deploy to heroku
    * create app on heroku
    * `heroku addons:create mongolab:sandbox -a YOUR_APP_HERE`
    * `git remote add heroku YOUR_HEROKU_GIT_URL`
    * `git push heroku master`
    * setup travis file to auto deploy
      * Install travis cli `gem install travis -v 1.8.10 --no-rdoc --no-ri`
      * [Travis Docs](https://docs.travis-ci.com/user/deployment/heroku/)
* Connect client and server
  * update client service
  * use cors
  * use webpack-dotenv

### List Notes

* Notes client list notes
  * reducer
  * service
  * action
  * component
  * container
* Notes server list notes
  * route
* Connect client and server list notes

### Note Detail

* Notes client note detail
  * reducer
  * service
  * action
  * component
  * container
* Notes server note detail
  * route
* Connect client and server note detail

### Update Note

* Notes client note edit
  * reducer
  * service
  * action
  * container
* Notes server note edit
  * route
* Connect client and server note edit

### Delete Note

* Notes client delete note
  * reducer
  * service
  * action
  * component
  * container
* Notes server delete note
  * route
* Connect client and server delete note

### Add paging

* Notes client paging
  * service
  * component
  * container
* Notes server paging
  * update route

### Add auth

* setup auth0 on client
* setup auth0 on server

### Add querying
