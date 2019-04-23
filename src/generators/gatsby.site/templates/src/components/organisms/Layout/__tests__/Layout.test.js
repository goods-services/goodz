import React from 'react';
import { shallow } from 'enzyme';
import { LayoutVanilla } from '../Layout';

test('Layout render', () => {
  // Render a checkbox with label in the document
  const wrapper = shallow(<LayoutVanilla  />);
  expect(wrapper).toMatchSnapshot();
});