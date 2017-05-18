import { connect } from 'react-redux';
import FeedItem from './feed_item';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  photo: state.photo
});

export default connect(
  mapStateToProps,
  null
)(FeedItem);
