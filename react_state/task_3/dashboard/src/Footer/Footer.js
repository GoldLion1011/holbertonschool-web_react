import React from 'react';
import { useContext } from 'react';
import { checkIsIndex, getFooterCopy, getFullYear } from '../utils/utils';
import { AppContext } from '../App/AppContext';

const Footer = () => {
  const { user } = useContext(AppContext);

  return (
    <div className="App-footer">
      <p>Copyright {new Date().getFullYear()} - {getFooterCopy(checkIsIndex())}</p>
      {user.isLoggedIn && ( // Conditionally render when user is logged in
        <p>
          <a href="/contact-us">Contact us</a>
        </p>
      )}
    </div>
  );
};

export default Footer;
