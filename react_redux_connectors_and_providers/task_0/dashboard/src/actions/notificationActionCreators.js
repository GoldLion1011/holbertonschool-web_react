import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

export const markAsAread = (index) => ({
  type: MARK_AS_READ,
  index,
});

export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter,
});

const boundNotiActionCreators = bindActionCreators(
  {
    markAsRead,
    setNotificationFilter,
  },
  useDispatch()
);

export const notificationActions = {
  ...boundNotiActionCreators,
};
