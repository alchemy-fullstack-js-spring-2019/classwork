import { connect } from 'react-redux';
import { createVideo } from '../../actions/videosActions';
import VideoForm from '../../components/videos/VideoForm';

const mapDispatchToProps = dispatch => ({
  onSubmit(videoId) {
    dispatch(createVideo(videoId));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(VideoForm);
