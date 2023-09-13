import React from 'react';
import { mount } from 'enzyme';
import Footer from './Footer';


describe('<Footer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Footer />);
  }
  );

  // Test that Footer renders without crashing
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  }
  );

 // Test that components at very least render the text "Copyright"
  it('renders text "© 2018" in a footer tag', () => {
    wrapper.update();
    const footerElement = wrapper.find('footer');
    expect(footerElement.exists()).toBe(true);
    expect(footerElement.text()).toEqual('© 2018');
  }
  );
});