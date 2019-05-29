import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Video from '../../components/videos/Video';
import { getVideoUrl } from '../../selectors/videosSelectors';

const mapStateToProps = (state, props) => ({
  url: getVideoUrl(state, props.match.params.id)
});

export default withRouter(connect(
  mapStateToProps
)(Video));
