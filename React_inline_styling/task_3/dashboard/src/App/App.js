import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

// import components
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

// create listNotifications array
const listNotifications = [
  { id: 1, type: 'default', value: 'New course available', html: undefined },
  { id: 2, type: 'urgent', value: 'New resume available', html: undefined },
  { id: 3, type: 'urgent', value: undefined, html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' }},
];

// create listCourses array
const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

class App extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  };

  handleKeyDown = (event) => {
    console.log('A key was pressed', event.key);
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  };

  render() {
    const { isLoggedIn, logOut } = this.props;
    return (
      <>
        <div className={`App-header ${css(styles.header)}`}>
          <Notifications listNotifications={listNotifications} />
          <Header />
        </div>
        <div className={`App-body ${css(styles.body)}`}>
          {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
          <BodySection title='News from the School'>
            <p>Effective today and going forward, there shall be no Kool Aid made on campus, neither in a pitcher, coffee maker, a rain boot, absolutely no other containers. Strict Kool Aid enforcement guidelines have been issued and any student caught making Kool Aid shall be force fed 7 dozen Crunch Wrap Supremes. NO EXCEPTIONS and NO HOT SAUCE.</p>
          </BodySection>
        </div>
        <Footer className={`App-footer ${css(styles.footer)}`} />
      </>
    );
  };
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

const styles = StyleSheet.create({
  header: {
    fontFamily: 'serif',
    borderBottom: '3px solid #e0354b',
  },

  body: {
    fontFamily: 'sans-serif',
    padding: '10px 8px',
    minHeight: '200px',
  },
  footer: {
    borderTop: '3px solid #e0354b',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default App;
