import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  let wrapper;

  // Creates Notifications array
  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', value: undefined, html: { __html: getLatestNotification() } },
  ];

  // Re-creates wrapper before each test to prevent side-effects or
  // interference between tests
  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  // Test that Notifications renders without crashing
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  // Test that Notifications renders three list items
  it('renders a div with class App-header', () => {
    wrapper.update();
    const listItems = wrapper.find('li');
    expect(listItems.length).toBe(3);
  });

  // Test that Notifications renders the correct text
  it('renders a div with class App-body', () => {
    wrapper.update();
    const p = wrapper.find('p');
    expect(p.text()).toEqual('Here is the list of notifications');
  });

  // Test that Notifications renders the correct NotificationItem
  it('renders the correct NotificationItem', () => {
    wrapper.update();
    const firstItem = wrapper.find('NotificationItem').first();
    expect(firstItem.html()).toEqual('<li data-notification-type="default">New course available</li>');
  }
  );
});