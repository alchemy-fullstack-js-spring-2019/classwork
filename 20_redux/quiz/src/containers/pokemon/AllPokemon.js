import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PokemonList from '../../components/pokemon/PokemonList';
import { getPokemonList, getPokemonLoading } from '../../selectors/pokemonSelectors';
import { fetchPokemon } from '../../actions/pokemonActions';

class AllPokemon extends PureComponent {
  static propTypes = {
    pokemonList: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { pokemonList, loading } = this.props;
    if(loading) return <h1>LOADING</h1>;

    return <PokemonList pokemonList={pokemonList} />;
  }
}

const mapStateToProps = state => ({
  pokemonList: getPokemonList(state),
  loading: getPokemonLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchPokemon());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPokemon);
