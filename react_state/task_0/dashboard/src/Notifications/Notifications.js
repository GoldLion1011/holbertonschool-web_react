import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types'
import NotificationItemShape from './NotificationItemShape';

const styles = StyleSheet.create({
  container: {
    float: 'right',
    '@media screen and (max-width: 900px)': {
      float: 'unset',
    },
  },
  notifications: {
    border: '2px dashed black',
    padding: '1%',
    float: 'right',
    margin: '10px',
    position: 'relative',
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
  
  defaultNotifications: {
    color: 'blue',
  },
  urgentNotifications: {
    color: 'red',
  },
  
  menuItem: {
    textAlign: 'right',
    '@media (max-width: 900px)': {
      display: 'none',
    },
  },

  lists: {  
    listStyleType: 'none',
    padding: '0',
    margin: '0',
  },

  fadeBounceIn: {
    ':hover': {
      animationName: [
      {
        '0%': { opacity: 0.5 }, 
        '50%': { opacity: 0.75 },
        '100%': { opacity: 1 },
      },
      {
        '0%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-5px)' },
        '100%': { transform: 'translateY(5px)' },
      }
    ],
    animationDuration: ['1s', '0.5s'],
    animationIterationCount: ['infinite', '3'],
  }
},
});

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
    const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer } = this.props;

    return (
      <div id='container' className={css(styles.container)}>
        {/* Define click handler for "Your notifications" */}
        <div
          className={`menuItem ${css(styles.menuItem)} ${css(styles.fadeBounceIn)}`}
          onClick={handleDisplayDrawer} // Call handleDisplayDrawer on click
        >
          Your notifications
        </div>
        {displayDrawer && (
          <div className={`notifications ${css(styles.notifications)}`}>
            <img
              src={closeIcon}
              alt='close icon'
              style={{ height: '15px', position: 'absolute', top: 10, right: 10 }}
              aria-label='Close'
              onClick={handleHideDrawer} // Call handleHideDrawer on click
            ></img>

            {listNotifications.length > 0 && <p>Here is the list of notifications</p>}
            <ul className={css(styles.lists)}>
              {listNotifications.length === 0 ? (
                <p>No new notification for now</p>
              ) : (
                listNotifications.map(({ type, html, value, id }) => (
                  <NotificationItem
                    key={id}
                    type={type}
                    html={html}
                    value={value}
                    markAsRead={this.markAsRead}
                    className={`notification-item ${css(type === 'default' ? styles.defaultNotifications : styles.urgentNotifications)}`}
                  />
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
  handleDisplayDrawer: PropTypes.func.isRequired, // Define propTypes for new props
  handleHideDrawer: PropTypes.func.isRequired,    // Define propTypes for new props
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
