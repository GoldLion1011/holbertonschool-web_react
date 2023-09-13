import React from 'react';
import { mount } from 'enzyme';
import Login from './Login';

describe('<Login />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Login />);
  });

  // Test that Login renders without crashing
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  // Test that Login renders two input tags and two label tags
  it('renders two input tags and two label tags', () => {
    wrapper.update();
    const inputElements = wrapper.find('input');
    const labelElements = wrapper.find('label');
    expect(inputElements.length).toEqual(2);
    expect(labelElements.length).toEqual(2);
  });
});
 