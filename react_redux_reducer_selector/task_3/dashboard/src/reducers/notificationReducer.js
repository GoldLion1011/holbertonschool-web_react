import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

// Default state for the notification reducer
const initialState = {
  notifications: [],
  filter: 'DEFAULT', 
};

// Notification reducer function
const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      // When FETCH_NOTIFICATIONS_SUCCESS action is dispatched, update notifications
      const updatedNotifications = action.data.map((notification) => ({
        ...notification,
        isRead: false, // Set isRead to false for each notification
      }));

      return {
        ...state,
        notifications: updatedNotifications,
      };
      
      case MARK_AS_READ:
        // When MARK_AS_READ action is dispatched, update the specified notification's isRead to true
        const { index } = action;
        const updatedNotificationList = state.notifications.map((notification, idx) => {
          if (idx === index) {
            return {
              ...notification,
              isRead: true,
            };
          }
          return notification;
        });
  
        return {
          ...state,
          notifications: updatedNotificationList,
        };
    
      case SET_TYPE_FILTER:
        // When SET_TYPE_FILTER action is dispatched, update the filter property in the state
        return {
          ...state,
          filter: action.filter,
        };

    default:
      return state;
  }
};

export default notificationReducer;
