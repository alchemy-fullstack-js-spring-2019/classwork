import { connect } from 'react-redux';
import VideoThumbnails from '../../components/thumbnails/VideoThumbnails';
import { getVideoThumbnails } from '../../selectors/videosSelectors';

const mapStateToProps = state => ({
  thumbnails: getVideoThumbnails(state)
});

export default connect(
  mapStateToProps
)(VideoThumbnails);
