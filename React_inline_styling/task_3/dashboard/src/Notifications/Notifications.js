import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types'
import NotificationItemShape from './NotificationItemShape';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  };

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  };

  componentDidUpdate() {
    console.log('Component has updated');
  };

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  };

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <div id='container' className={css(styles.container)}>
        <div className={`menuItem ${css(styles.menuItem)}`}>
          Your notifications
        </div>
        {displayDrawer && (
          <div className={`Notifications ${css(styles.Notifications)}`}>
            <img src={closeIcon} alt='close icon'
              style={{ height: '15px', position: 'absolute', top: 10, right: 10 }}
              aria-label='Close'
              onClick={() => console.log('Close button has been clicked')}
            ></img>

            {listNotifications.length > 0 && <p>Here is the list of notifications</p>}
            <ul>
              {listNotifications.length === 0 ? (
                <p>No new notification for now</p>
              ) : (
                listNotifications.map(({ type, html, value, id }) => (
                  <NotificationItem key={id} type={type} html={html} value={value} markAsRead={this.markAsRead} />
                ))
              )}
            </ul>
          </div>
        )}
      </div>
    );
  };
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

const styles = StyleSheet.create({
  container: {
    float: 'right',
    '@media screen and (max-width: 900px)': {
      float: 'unset',
    },
  },
  Notifications: {
    border: '2px dashed #e1354b',
    padding: '10px',
    float: 'right',
    margin: '10px',
    fontFamily: 'sans-serif',
    '@media (max-width: 900px)': {
      border: 'none',
      padding: '0',
      margin: '0',
      float: 'none',
      fontSize: '20px',
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
      position: 'absolute',
      left: '0',
      top: '0',
    },
  },

  menuItem: {
    textAlign: 'right',
    '@media (max-width: 900px)': {
      display: 'none',
    },
  },

});

export default Notifications;
