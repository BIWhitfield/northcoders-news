import React from 'react';
import { shallow } from 'enzyme';
import { TopicPage } from '../components/TopicPage';

describe('<TopicPage />', () => {
  it('it renders 1 <TopicPage /> component', () => {
    const component = shallow(<TopicPage />);
    expect(component).toHaveLength(1);
  });
  it('renders props correctly', () => {
    const component = shallow(<TopicPage name="topicPage" />);
    expect(component.instance().props.name).toBe('topicPage');
  });
});