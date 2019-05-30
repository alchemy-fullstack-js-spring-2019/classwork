import { connect } from 'react-redux';
import Score from '../../components/score/Score';
import { getScore } from '../../selectors/quotesSelector';

const mapStateToProps = state => ({
  score: getScore(state)
});

export default connect(
  mapStateToProps
)(Score);
