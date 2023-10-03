import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/logo.jpg';
import React from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../App/AppContext';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '3px solid #E0354B',
    width: '100%',
    height: '200px',
    backgroundColor: '#fff',
  },

  logo: {
    width: '200px',
    height: '200px',
  },

  title: {
    fontSize: '50px',
    fontWeight: 'bold',
    color: '#E0354B',
    margin: '0 0 0 20px',
  },

  logoutSection: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto', // Push this section to the right
  },

  logoutLink: {
    color: 'blue',
    marginLeft: '10px',
    cursor: 'pointer',
  },
});

class Header extends React.Component {
  // contextType specifies the context you want to access
  static contextType = AppContext;

  render() {
    const { user } = this.context;

    return (
      <div className={`header ${css(styles.header)}`} >
        <img src={logo} className={`logo ${css(styles.logo)}`} alt="logo" />
        <h1 className={`title ${css(styles.title)}`}>School dashboard</h1>
        
        {user.isLoggedIn && (
          <div className={`logoutSection ${css(styles.logoutSection)}`} id="logoutSection">
            Welcome {user.email} 
            <span
              className={`logoutLink ${css(styles.logoutLink)}`}
              onClick={this.context.logOut} // Call the logOut function from the context
            >
              (logout)
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default Header;
