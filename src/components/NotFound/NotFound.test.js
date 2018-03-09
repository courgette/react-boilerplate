import React from 'react';
import {shallow} from 'enzyme';
import NotFound from './NotFound';

test('should render NotFount correctly', () => {
  const wrapper = shallow(<NotFound />);
  expect(wrapper).toMatchSnapshot();
});