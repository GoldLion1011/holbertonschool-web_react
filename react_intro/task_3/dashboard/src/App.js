import React, { Component } from 'react';
import logo from './holbielogo.jpg';
import './App.css';
import './Notifications.css';
import { getFullYear, getFooterCopy } from './utils';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} alt="Holberton Logo" />
                    <h1>School dashboard</h1>
                </div>
                <div className="App-body">
                    <p>Login to access the full dashboard</p>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
                
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
                
                <button>OK</button>

                </div>
                <div className="App-footer">
                    <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
                </div>
            </div>
        );
    }
}

export default App;