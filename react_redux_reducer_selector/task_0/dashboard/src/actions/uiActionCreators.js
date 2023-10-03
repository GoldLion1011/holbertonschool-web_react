import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import fetch from 'node-fetch';

export const login = (email, password) => {
  return {
    type: LOGIN,
    user: { email, password },
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const displayNotificationDrawer = () => {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
};

export const hideNotificationDrawer = () => {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
};

// Action creator for successful user login
export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};

// Action creator for failed user login
export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

// Action creator for making a login request and handling success/failure
export const loginRequest = (email, password) => {
  return async (dispatch) => {
    // Dispatch the login action
    dispatch(login(email, password));

    // Simulate an API request using fetch-mock
    fetchMock.getOnce('/login-success.json', { status: 200, body: {} }); // Simulate success
    fetchMock.get('/login-failure.json', { status: 401, body: {} }); // Simulate failure

    try {
      // Make the actual API request using node-fetch
      const response = await fetch('/login-success.json'); // Replace with your API endpoint

      if (response.ok) {
        // API request succeeded, dispatch loginSuccess
        dispatch(loginSuccess());
      } else {
        // API request failed, dispatch loginFailure
        dispatch(loginFailure());
      }
    } catch (error) {
      // Error occurred during the API request, dispatch loginFailure
      dispatch(loginFailure());
    }
  };
};

// Configure a mock store for testing
const mockStore = configureMockStore([]);

// Export the mock store for testing purposes
export const testStore = (initialState) => {
  return mockStore(initialState);
};

const boundUIActionCreators = bindActionCreators(
  {
    login,
    logout,
    displayNotificationDrawer,
    hideNotificationDrawer,
    loginSuccess,
    loginFailure,
    loginRequest,
  },
  useDispatch()
);

export const uiActions = {
  ...boundUIActionCreators,
};
