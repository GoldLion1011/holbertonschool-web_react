import { StyleSheet, css } from 'aphrodite';
import React, { useState } from 'react';

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

const Login = ({ logIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  // Create a function to handle the login submission
  const handleLoginSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Call the logIn function to update the user state
    logIn(email, password);
  };

  // Create a function to handle changes in the email input
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setEnableSubmit(e.target.value !== '' && password !== '');
  };

  // Create a function to handle changes in the password input
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    setEnableSubmit(email !== '' && e.target.value !== '');
  };

  return (
    <>
      <div className={`Login ${css(styles.Login)}`}>
        <p>Login to access the full dashboard</p>
        <form className={css(styles.form)} onSubmit={handleLoginSubmit}>
          <div className={`label ${css(styles.label)}`}>
            <label htmlFor='email' >Email: </label>
            <input
              className={css(styles.input)}
              type='email'
              name='email'
              id='email'
              autoComplete='email'
              value={email}
              onChange={handleChangeEmail}
            ></input>
          </div>
          <div className={`label ${css(styles.label)}`}>
            <label htmlFor='password' >Password: </label>
            <input
              className={css(styles.input)}
              type='password'
              name='password'
              id='password'
              autoComplete='true'
              value={password}
              onChange={handleChangePassword}
            ></input>
          </div>
          <input
            className={`button ${css(styles.button)}`}
            type="submit"
            value="OK"
            disabled={!enableSubmit}
          />
        </form>
      </div>
    </>
  );
};

export default Login;
