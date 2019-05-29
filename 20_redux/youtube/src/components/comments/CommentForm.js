import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CommentForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    text: ''
  }

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.text);

    this.setState({ text: '' });
  }

  updateText = ({ target }) => {
    this.setState({ text: target.value });
  }

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={text} onChange={this.updateText} />
        <button>Submit</button>
      </form>
    );
  }
}
