import React from 'react';
import './Notifications.css';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';

const NotificationItem = React.memo(({ type, html, value, markAsRead, id }) => {
  const handleClick = () => {
    markAsRead(id);
  };

  if (html) {
    return (
      <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={handleClick}/>
    );
  }
  return (
    <li data-notification-type={type} onClick={handleClick}>{value}</li>
  );
});

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: 'default',
  html: {},
  value: '',
  markAsRead: () => {},
  id: NaN,
};

export default NotificationItem;
