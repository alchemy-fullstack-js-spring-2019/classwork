import { connect } from 'react-redux';
import Characters from '../../components/characters/Characters';
import { getCharacters } from '../../selectors/quotesSelector';
import { selectAnswer } from '../../actions/gameActions';

const mapStateToProps = state => ({
  characters: getCharacters(state)
});

const mapDispatchToProps = dispatch => ({
  selectCharacter(character) {
    dispatch(selectAnswer(character));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Characters);
