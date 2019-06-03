import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPokemonDetail, getPokemonDetailLoading } from '../../selectors/pokemonDetailSelector';
import PokemonDetail from '../../components/pokemon/PokemonDetails';
import { fetchPokemonDetail } from '../../actions/pokemonDetailActions';

class PokemonById extends PureComponent {
  static propTypes = {
    pokemon: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { pokemon, loading } = this.props;
    if (loading) return <h1>LOADING</h1>;

    return <PokemonDetail pokemon={pokemon} />;
  }
}

const mapStateToProps = state => ({
  pokemon: getPokemonDetail(state),
  loading: getPokemonDetailLoading(state)
});

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    dispatch(fetchPokemonDetail(props.match.params.id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonById);
