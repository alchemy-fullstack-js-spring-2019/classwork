import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getQuote, getQuotesLoading } from '../../selectors/quotesSelector';
import Quote from '../../components/quotes/Quote';
import { fetchQuotes } from '../../actions/quotesActions';

class QuoteChallenge extends PureComponent {
  static propTypes = {
    quote: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { loading, quote } = this.props;
    if(loading) return <h1>LOADING</h1>;

    return <Quote text={quote.text} />;
  }
}

const mapStateToProps = state => ({
  quote: getQuote(state, 0),
  loading: getQuotesLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchQuotes());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteChallenge);
