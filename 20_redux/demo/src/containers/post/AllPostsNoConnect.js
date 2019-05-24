import React, { PureComponent } from 'react';
import store from '../../store';
import Posts from '../../components/posts/Posts';
import { getPosts } from '../../selectors/postSelectors';


export default class AllPostsNoConnect extends PureComponent {
  state = {
    posts: []
  }

  updateState = () => {
    const posts = getPosts(store.getState());

    this.setState({ posts });
  };

  componentDidMount() {
    this.updateState();

    this.unsubscribe = store.subscribe(() => {
      this.updateState();
    });
  }

  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }

  render() {
    console.log(this.state);
    return (
      <Posts posts={this.state.posts} />
    );
  }
}
