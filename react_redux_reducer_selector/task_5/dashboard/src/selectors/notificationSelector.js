import { createSelector } from 'reselect';
import { Map } from 'immutable';

// Selector to get the selected filter type
export const filterTypeSelected = (state) => state.notifications.get('filter');

// Selector to get all notifications in a Map format
export const getNotifications = (state) => state.notifications.get('notifications', Map());

// Selector to get unread notifications in a Map format
export const getUnreadNotifications = createSelector(
  [getNotifications],
  (notifications) => {
    return notifications.filter((notification) => !notification.get('isRead'));
  }
);
