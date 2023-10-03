import { Map } from 'immutable';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';

// Initial state for the UI reducer as an Immutable Map
const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: Map(), // Use Map() for the user object as well
});

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      // Update isNotificationDrawerVisible using set
      return state.set('isNotificationDrawerVisible', true);

    case HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false);

    case LOGIN_SUCCESS:
      return state.set('isUserLoggedIn', true);

    case LOGIN_FAILURE:
    case LOGOUT:
      return state.set('isUserLoggedIn', false);

    default:
      return state;
  }
};


export default uiReducer;
