import React from 'react';
import { shallow } from 'enzyme';
import { SeoVanilla } from '../Seo';

test('Seo render', () => {
  // Render a checkbox with label in the document
  const wrapper = shallow(<SeoVanilla  />);
  expect(wrapper).toMatchSnapshot();
});