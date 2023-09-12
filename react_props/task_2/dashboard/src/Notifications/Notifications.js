import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem'; // Import the NotificationItem component


export default function Notifications() {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  }

  return (
    <div className='Notifications'>
      <img
        src={closeIcon}
        alt='close icon'
        style={{ height: '15px', position: 'absolute', top: 10, right: 10 }}
        aria-label='Close'
        onClick={handleButtonClick}
      ></img>

      <p>Here is the list of notifications</p>
      <ul>
        {/* Replace repetitive li elements with NotificationItem */}
        <NotificationItem type='default' value='New course available' />
        <NotificationItem type='urgent' value='New resume available' />
        <NotificationItem type='urgent' html={getLatestNotification()} />
      </ul>
    </div>
  );
}
