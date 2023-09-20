import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

// import components
import Notifications from '../Notifications/Notifications';
import { getLatestNotification } from '../utils/utils';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

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

class App extends Component {
  constructor(props) {
    super(props);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.state = {
      displayDrawer: false,
    };
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      const { logOut } = this.props;
      logOut();
    }
  };

  render() {
    const { isLoggedIn } = this.props;
    const { displayDrawer } = this.state;

    const listCourses = [
      { id: '1', name: 'ES6', credit: 60 },
      { id: '2', name: 'Webpack', credit: 20 },
      { id: '3', name: 'React', credit: 40 },
    ];

    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
    ];

    return (
      <div className={css(styles.body)}>
        <Notifications
          handleHideDrawer={this.handleHideDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          displayDrawer={this.state.displayDrawer}
          listNotifications={listNotifications}
        />
        <Header />
        <div className={css(styles.body)}>
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title='News from the School'>
            <p>Effective today and going forward, there shall be no Kool Aid made on campus, neither in a pitcher, coffee maker, a rain boot, absolutely no other containers. Strict Kool Aid enforcement guidelines have been issued and any student caught making Kool Aid shall be force fed 7 dozen Crunch Wrap Supremes. NO EXCEPTIONS and NO HOT SAUCE.</p>
          </BodySection>
          </div>
        <footer className={css(styles.footer)}>
          <Footer />
        </footer>
      </div>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};


export default App;
