import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/logo.jpg';
import React from 'react';

const Header = () => (
  <div className={`header ${css(styles.header)}`} >
    <img src={logo} className={`logo ${css(styles.logo)}`} alt="logo" />
    <h1 className={`title ${css(styles.title)}`}>School dashboard</h1>
  </div>
);

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
});

export default Header;
