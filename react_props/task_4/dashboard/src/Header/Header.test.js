import React from 'react';
import { mount } from 'enzyme';
import Header from './Header';


describe('Header Component', () => {
  let wrapper;

  // Re-creates wrapper before each test to prevent side-effects, interference
  // between tests, and to clear mock data
  beforeEach(() => {
    wrapper = mount(<Header />);
  }
  );

  // Test that Header renders without crashing
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  }
  );

  // Test that component renders img and h1 tags
  it('renders img and h1 tags', () => {
    wrapper.update();
    const imgElement = wrapper.find('img');
    const h1Element = wrapper.find('h1');
    expect(imgElement.exists()).toBe(true);
    expect(h1Element.exists()).toBe(true);
  }
  );
});
