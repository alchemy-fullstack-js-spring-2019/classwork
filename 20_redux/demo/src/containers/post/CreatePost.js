import { connect } from 'react-redux';
import PostForm from '../../components/posts/PostForm';
import { createPost } from '../../actions/postActions';

// store.dispatch()
const mapDispatchToProps = dispatch => ({
  onSubmit(title, body) {
    dispatch(createPost(title, body));
  }
});

export default connect(
  null, // mapStateToProps
  mapDispatchToProps
)(PostForm);
