import React from 'react';
import { shallow } from 'enzyme';
import { HeaderVanilla } from '../Header';

test('Header render', () => {
  // Render a checkbox with label in the document
  const wrapper = shallow(<HeaderVanilla  />);
  expect(wrapper).toMatchSnapshot();
});