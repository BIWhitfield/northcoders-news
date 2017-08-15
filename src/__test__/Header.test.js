import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../components/Header';

describe('<Header />', () => {
  it('it renders 1 <Header /> component', () => {
    const component = shallow(<Header />);
    expect(component).toHaveLength(1);
  });
  it('renders props correctly', () => {
    const component = shallow(<Header name="header" />);
    expect(component.instance().props.name).toBe('header');
  });
});
