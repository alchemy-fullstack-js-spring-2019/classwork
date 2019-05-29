import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Comments from '../../components/comments/Comments';
import { getCommentsForVideo } from '../../selectors/commentsSelectors';

const mapStateToProps = (state, props) => ({
  comments: getCommentsForVideo(state, props.match.params.id)
});

export default withRouter(connect(
  mapStateToProps
)(Comments));
