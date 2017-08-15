import React from 'react';
import { shallow } from 'enzyme';
import { TopicArticle } from '../components/TopicArticle';

describe('<TopicArticle />', () => {
  it('it renders 1 <TopicArticle /> component', () => {
    const component = shallow(<TopicArticle />);
    expect(component).toHaveLength(1);
  });
  it('renders props correctly', () => {
    const component = shallow(<TopicArticle name="topicArticle" />);
    expect(component.instance().props.name).toBe('topicArticle');
  });
});
