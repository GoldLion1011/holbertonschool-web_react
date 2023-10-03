import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types'
import NotificationItemShape from './NotificationItemShape';

const NotificationItem = React.memo(({ type, html, value, markAsRead, id }) => {
  const className = type === 'default' ? css(styles.default) : css(styles.urgent);

  if (html) {
    return (
      <li className={css(className)} data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}/>
    );
  }
  return (
    <li className={css(className)} data-notification-type={type} onClick={() => markAsRead(id)}>{value}</li>
  );
});

NotificationItem.propTypes = {
  ...NotificationItemShape.propTypes,
  markAsRead: PropTypes.func.isRequired,
};

NotificationItem.defaultProps = {
  type: 'default',
};

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
  listItem: {
    '@media screen and (max-width: 900px)': {
      borderBottom: '1px solid black',
      fontSize: '20px',
      padding: '10px 8px',
      listStyleType: 'none',
    },
  },
});

export default NotificationItem;
