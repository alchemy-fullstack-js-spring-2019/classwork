import { connect } from 'react-redux';
import Posts from '../../components/posts/Posts';
import { getPosts } from '../../selectors/postSelectors';
import { withConnect } from './withConnect';
import { createPost } from '../../actions/postActions';

// state is the result of store.getState()
const mapStateToProps = state => ({
  posts: getPosts(state),
  fun: 'maybe?'
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (title, body) => {
    dispatch(createPost(title, body));
  }
});

export default withConnect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
