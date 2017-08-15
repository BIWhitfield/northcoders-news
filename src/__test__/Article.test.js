import React from 'react';
import { shallow } from 'enzyme';
import { Article } from '../components/Article';

describe('<Article />', () => {
  it('it renders 1 <Article /> component', () => {
    const component = shallow(<Article />);
    expect(component).toHaveLength(1);
  });
  it('renders props correctly', () => {
    const component = shallow(<Article name="Article" />);
    expect(component.instance().props.name).toBe('Article');
  });
});
