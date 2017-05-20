import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PhotoReducer from './photo_reducer';
import ErrorReducer from './error_reducer';
import UserReducer from './user_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  photos: PhotoReducer,
  errors: ErrorReducer,
  targetUser: UserReducer
});

export default RootReducer;
