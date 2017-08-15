import React from 'react';
import { shallow } from 'enzyme';
import { TopicsHeader } from '../components/TopicsHeader';

describe('<TopicsHeader />', () => {
  it('it renders 1 <TopicsHeader /> component', () => {
    const component = shallow(<TopicsHeader />);
    expect(component).toHaveLength(1);
  });
  it('renders props correctly', () => {
    const component = shallow(<TopicsHeader name="topicsHeader" />);
    expect(component.instance().props.name).toBe('topicsHeader');
  });
});
