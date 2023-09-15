import { StyleSheet, css } from 'aphrodite';
import React from 'react';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

const Login = () => (
  <>
    <BodySectionWithMarginBottom title='Log in to continue'>
      <div className={`Login ${css(styles.Login)}`}>
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor='email' className={`email ${css(styles.email)}`} >Email</label>
          <input type='email' name='email' id='email' autoComplete='email'></input>
          <label htmlFor='password' className={`password ${css(styles.password)}`}>Password</label>
          <input type='password' name='password' id='password' autoComplete='true'></input>
          <button className={`button ${css(styles.button)}`}>OK</button>
        </form>
      </div>
    </BodySectionWithMarginBottom>
  </>
);

const styles = StyleSheet.create({
  Login: {
    padding: '16px 0',
  },

  email: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '16px',
    paddingBottom: '16px',
  },

  password: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '16px',
  },

  button: {
    marginTop: '16px',
    backgroundColor: 'grey',
    color: '#fff',
  },
});

export default Login;
