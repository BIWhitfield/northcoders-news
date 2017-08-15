import React from 'react';
import { shallow } from 'enzyme';
import { UnauthorisedUserModal } from '../components/UnauthorisedUserModal';

describe('<UnauthorisedUserModal />', () => {
  it('it renders 1 <UnauthorisedUserModal /> component', () => {
    const component = shallow(<UnauthorisedUserModal />);
    expect(component).toHaveLength(1);
  });
  it('renders props correctly', () => {
    const component = shallow(<UnauthorisedUserModal name="UnauthorisedUserModal" />);
    expect(component.instance().props.name).toBe('UnauthorisedUserModal');
  });
});
