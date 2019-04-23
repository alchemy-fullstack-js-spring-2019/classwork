# Auth

## Topics

* Bcrypt
* JWT
* mongoose methods
* auth routes
* cookie sessions

## Schedule

### Day 1

time | topic
--- | ---
9:00 - 12:00 | Finish ripe-banana
12:00 - 1:00 | Lunch
1:00 - 1:30 | Intro to Auth
1:30 - 1:45 | Intro to bcrypt hash
1:45 - 2:15 | Solo make bcrypt hash module
2:15 - 2:30 | Break
2:30 - 2:45 | Intro Bcrypt compare
2:45 - 3:15 | Solo make bcrypt compare module
3:15 - 3:30 | Break
3:30 - 3:45 | Intro JWT sign
3:45 - 4:15 | Solo JWT tokenize module
4:15 - 4:30 | Break
4:30 - 4:45 | Intro JWT verify
4:45 - 5:15 | Solo JWT untokenize module
5:15 - 5:30 | Break
5:45 - 6:00 | Retro

### Day 2

time | topic
--- | ---
9:00 - 9:30 | Review yesterday
9:30 - 10:00 | Solo add password to user model
10:00 - 10:10 | Intro custom toJSON transformer
10:10 - 11:20 | Intro mongoose methods (static vs instance)
10:20 - 11:00 | Solo create compare and authToken method
11:00 - 11:15 | Review static vs instance methods
11:15 - 11:30 | Solo create findByToken method
11:30 - 12:00 | Intro auth routes signup
12:00 - 1:00 | Lunch
1:00 - 1:30 | Solo auth routes signup
1:30 - 2:00 | Intro auth routes signin
2:00 - 2:15 | Break
2:15 - 2:30 | Solo auth routes signin
2:30 - 2:45 | Intro auth routes middleware
2:45 - 3:15 | Solo auth routes middleware
3:15 - 5:45 | Mob Tardygram
5:45 - 6:00 | Retro

### Day 3

time | topic
--- | ---
9:00 - 9:30 | Mongo queries
9:30 - 1:00 | Mob Tardygram
1:00 - 1:30 | Intro aggregation
1:30 - 2:00 | Aggregate notes by author
2:00 - 2:15 | Break
2:15 - 3:45 | Aggregate notes by author lookup author
3:45 - 4:15 | Review aggregation
4:15 - 5:00 | Aggregate average note length
5:00 - 5:45 | Enron aggregations
5:45 - 6:00 | Retro

### Day 4

time | topic
--- | ---
9:00 - 9:30 | Aggregation review
9:30 - 11:30 | Enron aggregations
11:30 - 12:00 | Intro adding aggregations with mongoose
12:00 - 1:00 | Lunch
1:00 - 1:30 | Inquirer
1:30 - 5:45 | Mob add aggregations to notes
5:45 - 6:00 | Retro

## Agenda

### Day 1

* Intro to auth
  * flow:
    * client sends email/password
    * server verifies email/password
    * server sends JWT
    * client uses JWT for further requests
  * storing passwords
    * plain text vs hash
    * hash and rainbow table attacks
    * salt
      * Hard coded vs random
    * bcrypt
* Bcrypt
  * expansion rounds
  * parts
    * version
    * expansion rounds / cost
    * salt
    * hash
* JWT
  * sign
    * create a new jwt
  * verify
    * decrypt a jwt

## Dependencies

* dev
  * supertest
  * jest
  * eslint
* dependencies
  * express
  * mongoose
  * bcryptjs
  * jsonwebtoken
  * cookie-parser
