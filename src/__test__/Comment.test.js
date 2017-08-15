import React from 'react';
import { shallow } from 'enzyme';
import { Comment } from '../components/Comment';

describe('<Comment />', () => {
  it('it renders 1 <Comment /> component', () => {
    const component = shallow(<Comment />);
    expect(component).toHaveLength(1);
  });
  it('renders props correctly', () => {
    const component = shallow(<Comment name="comment" />);
    expect(component.instance().props.name).toBe('comment');
  });
  it()
});
