import React from 'react';
import './Notifications.css';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';


const NotificationItem = ({ type, html, value }) => {
  if (html) {
    return (
      <li data-notification-type={type} dangerouslySetInnerHTML={html}/>
    );
  }
  return (
    <li data-notification-type={type}>{value}</li>
  );
};

NotificationItem.propTypes = {
  listCourses: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    html: PropTypes.shape({
      __html: PropTypes.string,
    }),
    value: PropTypes.string,
  })).isRequired,
};

export default NotificationItem;
