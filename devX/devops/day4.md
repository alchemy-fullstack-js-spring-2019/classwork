# CI / CD

## Resources

* [CD to Heroku](https://docs.travis-ci.com/user/deployment/heroku/)
* [CD to s3](https://docs.travis-ci.com/user/deployment/s3/)

## Agenda

* travis to s3
* travis to heroku

## Travis to heroku

```yaml
language: node_js
node_js:
 - node
services: mongodb
env: AUTH_SECRET=s3cret
deploy:
  provider: heroku
  app:
    master: YOUR_HEROKU_APP_NAME
```

Then setup your heroku key:

`travis encrypt $(heroku auth:token) --add deploy.api_key`

## Travis to s3

```yaml
language: node_js
node_js:
 - node
before_deploy: "npm run build"
deploy:
  provider: s3
  bucket: YOUR_BUCKET
  region: us-west-2
  skip_cleanup: true
  local_dir: dist
```

Then setup your s3 keys:

* `travis encrypt YOUR_ACCESS_KEY --add deploy.access_key_id`
* `travis encrypt YOUR_SECRET_ACCESS_KEY --add deploy.secret_access_key`

## Exercise

Build a full-stack application with continuous delivery.
