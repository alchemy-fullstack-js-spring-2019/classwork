// const chance = require('chance').Chance();
// const Studio = require('../lib/models/Studio');
// const Actor = require('../lib/models/Actor');
// const Movie = require('../lib/models/Movie');
// const Reviewer = require('../lib/models/Reviewer');
// const Review = require('../lib/models/Review');
// module.exports = async({
//   studioCount = 5,
//   actorCount = 50,
//   movieCount = 100,
//   reviewerCount = 5,
//   reviewCount = 300
// } = {}) => {
//   const studios = [...Array(studioCount)]
//     .map(() => ({
//       name: chance.name(),
//       address: {
//         city: chance.city(),
//         state: chance.state(),
//         country: chance.country()
//       }
//     }));
//   const actors = [...Array(actorCount)]
//     .map(() => ({
//       name: chance.name(),
//       dob: chance.birthday(),
//       pob: chance.city()
//     }));
//   const reviewers = [...Array(reviewerCount)]
//     .map(() => ({
//       name: chance.name(),
//       company: chance.company()
//     }));


//   const [createdStudios, createdActors, createdReviewers] = await Promise.all([
//     Studio.create(studios),
//     Actor.create(actors),
//     Reviewer.create(reviewers)
//   ]);

//   const movies = [...Array(movieCount)]
//     .map(() => ({
//       title: chance.name(),
//       studio: chance.pickone(createdStudios)._id,
//       released: 1983,
//       cast: [{
//         role: chance.name(),
//         actor: chance.pickone(createdActors)._id
//       },
//       {
//         role: chance.name(),
//         actor: chance.pickone(createdActors)._id
//       },
//       {
//         role: chance.name(),
//         actor: chance.pickone(createdActors)._id
//       }]
//     }));
//   const createdMovies = await Movie.create(movies);

//   const reviews = [...Array(reviewCount)]
//     .map(() => ({
//       rating: chance.integer({ min: 1, max: 5 }),
//       reviewer: chance.pickone(createdReviewers)._id,
//       review: chance.sentence(),
//       movie: chance.pickone(createdMovies)._id,
//     }));

//   const createdReviews = await Review.create(reviews);

//   return {
//     createdMovies,
//     createdActors,
//     createdReviewers,
//     createdStudios,
//     createdReviews
//   };
// };
