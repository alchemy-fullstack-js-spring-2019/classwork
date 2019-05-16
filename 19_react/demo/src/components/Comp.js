import React, { PureComponent, Component } from 'react';
import PropTypes from 'prop-types';

class Pure extends PureComponent {
  componentDidUpdate() {
    console.log('componentDidUpdate', 'Pure');
  }

  // beforeAll
  componentDidMount() {

  }

  // afterAll
  componentWillUnmount() {
    console.log('componentWillUnmount', 'Pure');
  }

  render() {
    console.log('render', 'Pure');

    return <h1>PureComponent</h1>;
  }
}

class NonPure extends Component {

  componentDidUpdate() {
    console.log('componentDidUpdate', 'Component');
  }
  render() {
    console.log('render', 'Component');
    return <h1>Component</h1>;
  }
}

export default class ComponentDemo extends Component {
  state = {
    count: 0,
    countProps: 0
  };

  incrementCount = () => {
    this.setState(state => ({ count: state.count + 1 }));
  };

  incrementCountProps = () => {
    this.setState(state => ({ countProps: state.countProps + 1 }));
  };

  componentDidMount() {
    console.log('componentDidMount', 'Parent');
    // fetch a list of characters from the api
  }

  componentDidUpdate() {
    console.log('componentDidUpdate', 'Parent');
    // fetch a list of character from the api based on page
  }

  render() {
    console.log('render', 'Parent');
    return (
      <>
        <h1>Hello</h1>
        <Pure count={this.state.countProps} />
        <NonPure />
        <button onClick={this.incrementCount}>Count!</button>
        <button onClick={this.incrementCountProps}>Count Props!</button>
      </>
    );
  }
}
