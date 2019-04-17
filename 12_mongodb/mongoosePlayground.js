Promise.all([
  Promise.resolve(1),
  Promise.resolve(2)
])
  .then(([one, two]) => {
    console.log(one);
    console.log(two);
  });



// const mongoose = require('mongoose');
// const User = require('./lib/models/User');
// const Tweet = require('./lib/models/Tweet');

// mongoose.connect('mongodb://localhost:27017/tweets', {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

// // User
// //   .create({
// //     handle: 'ryan',
// //     image: 'https://via.placeholder.com/250'
// //   })
// //   .then(createdUser => {
// //     return Tweet.create({
// //       // associate user with tweet
// //       user: createdUser._id,
// //       body: 'my first tweet'
// //     });
// //   })
// //   .then(console.log);

// Tweet
//   .findById('5cb7734daa599c7f90e9f03f')
//   // .then(foundTweet => {
//   //   return Promise.all([
//   //     Promise.resolve(foundTweet),
//   //     User.findById(foundTweet.user)
//   //   ]);
//   // })
//   .populate('user', {
//     __v: false
//   })
//   .select({
//     __v: false
//   })
//   .lean()
//   .then(console.log)
//   .finally(() => mongoose.connection.close());
