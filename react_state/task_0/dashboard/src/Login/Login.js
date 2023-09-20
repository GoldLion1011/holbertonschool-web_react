import { StyleSheet, css } from 'aphrodite';
import React from 'react';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

const Login = () => (
  <>
      <div className={`Login ${css(styles.Login)}`}>
        <p>Login to access the full dashboard</p>
          <form className={css(styles.form)}>
            <div className={`label ${css(styles.label)}`}>
              <label htmlFor='email' >Email: </label>
              <input className={css(styles.input)} type='email' name='email' id='email' autoComplete='email'></input>
            </div>
            <div className={`label ${css(styles.label)}`}>
              <label htmlFor='password' >Password: </label>
              <input className={css(styles.input)} type='password' name='password' id='password' autoComplete='true'></input>
            </div>
            <button className={`button ${css(styles.button)}`}>OK</button>
          </form>
      </div>
  </>
);

const styles = StyleSheet.create({
  Login: {
    margin: '30px 30px auto',
  },
  form: {
    display: 'flex',
    '@media screen and (max-width: 900px)': {
      flexDirection: 'column',
    },
  },
  input: {
    border: 'none',
    outline: 'none',
  },
  button: {
    maxWidth: '40px',
    color: 'black',
    borderColor: '#ffc107',
    backgroundColor: '#fff',
  },
  label: {
    display: 'flex',
    flexDirection: 'row !important',
  },
});

export default Login;
