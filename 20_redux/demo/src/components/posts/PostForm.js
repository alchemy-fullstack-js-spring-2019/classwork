import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class PostForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    title: '',
    body: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    const { title, body } = this.state;

    this.props.onSubmit(title, body);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { title, body } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="title" value={title} onChange={this.handleChange} />
        <textarea name="body" value={body} onChange={this.handleChange}></textarea>
        <button>Sumbit</button>
      </form>
    );
  }
}
