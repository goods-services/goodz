import React from 'react';
import { shallow } from 'enzyme';
import { FooterVanilla } from '../Footer';

test('Footer render', () => {
  // Render a checkbox with label in the document
  const wrapper = shallow(<FooterVanilla  />);
  expect(wrapper).toMatchSnapshot();
});