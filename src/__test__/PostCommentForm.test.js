import React from 'react';
import { shallow } from 'enzyme';
import { PostCommentForm } from '../components/PostCommentForm';

describe('<PostCommentForm />', () => {
  it('it renders 1 <PostCommentForm /> component', () => {
    const component = shallow(<PostCommentForm />);
    expect(component).toHaveLength(1);
  });
  it('renders props correctly', () => {
    const component = shallow(<PostCommentForm name="postCommentForm" />);
    expect(component.instance().props.name).toBe('postCommentForm');
  });
});
