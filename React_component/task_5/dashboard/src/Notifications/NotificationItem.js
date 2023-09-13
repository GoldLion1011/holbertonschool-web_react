import React, { PureComponent } from 'react';
import './Notifications.css';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';

class NotificationItem extends PureComponent {
  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  handleClick = () => {
    this.props.markAsRead(this.props.id);
  };

  render() {
    const { type, html, value } = this.props;

    if (html) {
      return (
        <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={this.handleClick}/>
      );
    }
    return (
      <li data-notification-type={type} onClick={this.handleClick}>{value}</li>
    );
  }
}

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
