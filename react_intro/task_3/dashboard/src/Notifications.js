import React from 'react';
import { getLatestNotification } from './utils';
import './Notifications.css';

const Notifications = () => {
    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
                <button 
                    style={{position: "absolute", top: "10px", right: "10px", border: "none", background: "transparent"}}
                    aria-label="Close"
                    onClick={() => console.log('Close button has been clicked')}
                >
                    <img src="close-icon.png" alt="Close" />
                </button>
                <ul>
                    <li data-priority="default">New course available</li>
                    <li data-priority="urgent">New resume available</li>
                    <li dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
                </ul>

        </div>
    );
}

export default Notifications;
