import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PokemonList from '../../components/pokemon/PokemonList';
import { getPokemonList, getPokemonLoading, getPokemonListPage, getPokemonListTotalPages } from '../../selectors/pokemonSelectors';
import { fetchPokemon, incrementPage, decrementPage } from '../../actions/pokemonActions';

class AllPokemon extends PureComponent {
  static propTypes = {
    pokemonList: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    fetch: PropTypes.func.isRequired
  }

  fetchPokemon = () => {
    this.props.fetch(this.props.currentPage);
  }

  componentDidMount() {
    this.fetchPokemon();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.currentPage !== this.props.currentPage) {
      this.fetchPokemon();
    }
  }

  render() {
    const {
      pokemonList,
      loading,
      currentPage,
      totalPages,
      decrement,
      increment
    } = this.props;
    if(loading) return <h1>LOADING</h1>;

    return (
      <>
        <button onClick={decrement}>Previous</button>
        {currentPage} / {totalPages}
        <button onClick={increment}>Next</button>
        <PokemonList pokemonList={pokemonList} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  pokemonList: getPokemonList(state),
  currentPage: getPokemonListPage(state),
  totalPages: getPokemonListTotalPages(state),
  loading: getPokemonLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch(page) {
    dispatch(fetchPokemon(page));
  },
  increment() {
    dispatch(incrementPage());
  },
  decrement() {
    dispatch(decrementPage());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPokemon);
