import { connect } from 'react-redux';
import Posts from '../../components/posts/Posts';
import { getPosts } from '../../selectors/postSelectors';

// state is the result of store.getState()
const mapStateToProps = state => ({
  posts: getPosts(state)
});

export default connect(
  mapStateToProps
)(Posts);
