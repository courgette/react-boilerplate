import React from 'react';
import {shallow} from 'enzyme';
import Dashboard from './Dashboard';

test('should render Dashboard correctly', () => {
  const wrapper = shallow(<Dashboard />);
  expect(wrapper).toMatchSnapshot();
});