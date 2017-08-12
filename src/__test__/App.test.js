import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';

describe('<App />', () => {
  it('it renders 1 <App /> component', () => {
    const component = shallow(<App />);
    expect(component).toHaveLength(1);
  })
  it('renders props correctly', () => {
    const component = shallow(<App name="app" />);
    expect(component.instance().props.name).toBe('app');
  })
})
