import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getVideoId } from '../../services/videoService';

export default class VideoForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    videoId: ''
  }

  handleSubmit = event => {
    event.preventDefault();

    const videoId = getVideoId(this.state.videoId);
    this.props.onSubmit(videoId);
    this.setState({ videoId: '' });
  }

  updateVideoId = ({ target }) => {
    this.setState({ videoId: target.value });
  }

  render() {
    const { videoId } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={videoId} onChange={this.updateVideoId} />
        <button>Submit</button>
      </form>
    );
  }
}
