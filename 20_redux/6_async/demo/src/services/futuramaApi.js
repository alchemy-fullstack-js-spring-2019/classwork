export const getQuotes = () => {
  return fetch('http://futuramaapi.herokuapp.com/api/quotes')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Could not fetch quotes';

      return json;
    })
    .then(json => json.map(quote => ({
      image: quote.image,
      text: quote.quote,
      name: quote.character
    })));
};
