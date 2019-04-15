# Spring 2019 Career Track

## Day-by-Day

* Review
* Quiz on Monday
* Solo work to build confidence and clarify concepts
* Mob work / Lab
* Retro

## Steps to setup repo

* Fork repo
* clone forked repo
* initialize npm `npm init -y`
* install `npm i -D jest eslint`
* create a `lib/index.js`
* create a `test/index.test.js`
* add `.eslintrc`
* add `.travis.yml`
* add `.gitignore`
  * ignore `node_modules`
* add scripts
  * `test` script using `jest --verbose`
  * `test:watch` script using `npm run test -- --watch`
  * `start` script using `node lib/index.js`
