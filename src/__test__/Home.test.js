import React from 'react';
import { shallow } from 'enzyme';
import { Home } from '../components/Home';

describe('<Home />', () => {
  it('it renders 1 <Home /> component', () => {
    const component = shallow(<Home />);
    expect(component).toHaveLength(1);
  });
  it('renders props correctly', () => {
    const component = shallow(<Home name="home" />);
    expect(component.instance().props.name).toBe('home');
  });
});
