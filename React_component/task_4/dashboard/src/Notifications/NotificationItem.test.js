import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';


describe('<NotificationItem />', () => {
  let wrapper

  // Tests that the component renders without crashing
  it('renders without crashing', () => {
    wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toEqual(true);
  }
  );

  // Tests that by passing dummy type and value props,
  // it renders the correct html (for example: type=“default” and value=“test”)
  it('renders the correct html', () => {
    wrapper = shallow(<NotificationItem type='default' value='test' />);
    expect(wrapper.html()).toEqual('<li data-notification-type="default">test</li>');
  }
  );

  // Tests  that by passing a dummy html prop,
  // it renders the correct html (for example: html={{ __html: '<u>test</u>' }})
  it('renders the correct html', () => {
    wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.html()).toEqual('<li><u>test</u></li>');
  }
  );
});
