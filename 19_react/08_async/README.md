# Async React

## Agenda

* making a service
* using service
* refetch after update
* Loading

## Making a service

Make a separate services directory that will contain all API services.
This will keep our components simple, while making API calls reusable.

```js
// src/services/futuramaApi.js

export const getQuotes = (count = 10) => {
  return fetch('https://futuramaapi.herokuapp.com/api/quotes')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch quote'

      return json
    });
}
```

## Using a service

```js
// src/containers/quotes/TopQuotes.js
import React, { PureComponent } from 'react';
import Quotes from '../../components/Quotes';
import { getQuotes } from '../../services/futuramaApi.js';

export default class TopQuotes extends PureComponent {
  state = {
    quotes: []
  }

  componentDidMount() {
    getQuotes()
      .then(quotes => this.setState({ quotes }));
  }

  render() {
    const { quotes } = this.state;
    return <Quotes quotes={quotes} />;
  }
}
```

## Refetch after update

```js
// src/components/quotes/TopQuotes.js
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Quotes from '../../components/quotes/Quotes';
import { getQuotes } from '../../services/futuramaApi.js';

export default class TopQuotes extends PureComponent {
  static propTypes = {
    count: PropTypes.number
  }

  static defaultProps = {
    count: 10
  }

  state = {
    quotes: []
  }

  fetchQuotes = () => {
    getQuotes(this.props.count)
      .then(quotes => this.setState({ quotes }));
  }

  componentDidMount() {
    this.fetchQuotes();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.count  !== this.props.count) {
      this.fetchQuotes();
    }
  }

  render() {
    const { quotes } = this.state;
    return <Quotes quotes={quotes} />;
  }
}
```

## Loading

```js
// src/components/quotes/TopQuotes.js
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Quotes from '../../components/quotes/Quotes';
import Loading from '../../components/Loading'
import { getQuotes } from '../../services/futuramaApi.js';

export default class TopQuotes extends PureComponent {
  static propTypes = {
    count: PropTypes.number
  }

  static defaultProps = {
    count: 10
  }

  state = {
    quotes: [],
    loading: true
  }

  fetchQuotes = () => {
    this.setState({ loading: true })
    getQuotes(this.props.count)
      .then(quotes => this.setState({ quotes, loading: false }));
  }

  componentDidMount() {
    this.fetchQuotes();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.count  !== this.props.count) {
      this.fetchQuotes();
    }
  }

  render() {
    const { quotes, loading } = this.state;
    if(loading) return <Loading />

    return <Quotes quotes={quotes} />;
  }
}
```
