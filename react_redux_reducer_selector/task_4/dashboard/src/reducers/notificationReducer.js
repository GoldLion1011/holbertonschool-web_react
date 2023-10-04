import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';
import { Map, List } from 'immutable';
import notificationsNormalizer from './notificationsNormalizer';

// Default state: an empty Map
const initialState = Map({
  notifications: List(),
  filter: 'DEFAULT',
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      // Normalize the data using notificationsNormalizer and merge it with the state
      return state.merge({
        notifications: List(notificationsNormalizer(action.data).result),
      });

    case MARK_AS_READ:
      // When MARK_AS_READ action is dispatched, update the specified notification's isRead to true using setIn
      const { index } = action;
      return state.setIn(['notifications', index, 'isRead'], true);

    case SET_TYPE_FILTER:
      // When SET_TYPE_FILTER action is dispatched, update the filter attribute using set
      return state.set('filter', action.filter);

    default:
      return state;
  }
};

export default notificationReducer;

