import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import Notifications from '../Notifications/Notifications';
import { getLatestNotification } from '../utils/utils';
import { AppContext } from './AppContext';
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
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      listNotifications: [], // Initialize listNotifications as an empty array
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
      this.logOut(); // Use the local logOut function
    }
  };

  // logIn function that sets the user's email, password, and isLoggedIn
  logIn = (email, password) => {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  };

  // logOut function to reset the user object
  logOut = () => {
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
    });
  };

  // Function to mark a notification as read
  markNotificationAsRead = (id) => {
    this.setState((prevState) => {
      const updatedList = prevState.listNotifications.filter(
        (notification) => notification.id !== id
      );
      return {
        listNotifications: updatedList,
      };
    });
  };

  render() {
    const { displayDrawer, user } = this.state;

    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
    ];

    return (
      <AppContext.Provider value={{ user, logOut: this.logOut }}>
        <div className={css(styles.body)}>
          <Notifications
            handleHideDrawer={this.handleHideDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            displayDrawer={displayDrawer}
            listNotifications={listNotifications}
            markNotificationAsRead={this.markNotificationAsRead} // Pass the function to Notifications
          />
          <Header />
          <div className={css(styles.body)}>
            {user.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn} />
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
      </AppContext.Provider>
    );
  }
}

App.propTypes = {
  // No need for isLoggedIn and logOut props
};

App.defaultProps = {
  // No need for default props
};

export default App;
