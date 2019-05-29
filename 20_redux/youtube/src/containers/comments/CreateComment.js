import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentForm from '../../components/comments/CommentForm';
import { createComment } from '../../actions/commentsActions';

const mapDispatchToProps = (dispatch, props) => ({
  onSubmit(comment) {
    dispatch(createComment(props.match.params.id, comment));
  }
});

export default withRouter(connect(
  null,
  mapDispatchToProps
)(CommentForm));
