import React, { PureComponent } from 'react';
import store from '../../store';

export const withConnect = (
  mapStateToProps = () => ({}),
  mapDispatchToProps = () => ({})
) => Component => {

  class WithConnect extends PureComponent {
    state = {
      loaded: false,
      props: {}
    }

    updateState = () => {
      const currentState = store.getState();

      // { posts: [], fun: 'maybe' }
      const propsFromState = mapStateToProps(currentState);

      // { onSubmit: () => {} }
      const propsFromDispatch = mapDispatchToProps(store.dispatch);

      this.setState({
        loaded: true,
        // { posts: [], onSubmit: () => {} }
        props: {
          ...propsFromState,
          ...propsFromDispatch
        }
      });
    }

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
      if(!this.state.loaded) return null;

      console.log(this.state.props);

      return (
        <Component {...this.state.props} />
      );
    }
  }

  return WithConnect;
};
