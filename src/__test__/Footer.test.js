import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from '../components/Footer';

describe('<Footer />', () => {
  it('it renders 1 <Footer /> component', () => {
    const component = shallow(<Footer />);
    expect(component).toHaveLength(1);
  })
  it('renders props correctly', () => {
    const component = shallow(<Footer name="footer" />);
    expect(component.instance().props.name).toBe('footer');
  })
})