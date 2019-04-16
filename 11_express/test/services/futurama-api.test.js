const { getQuoteByCharacter } = require('../../lib/services/futurama-api');


describe('futurama api', () => {
  it('gets a quote by charater', () => {
    return getQuoteByCharacter('Bender')
      .then(quote => {
        expect(quote).toEqual({
          character: 'Bender',
          quote: expect.any(String),
          image: 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png'
        });
      });
  });
});
