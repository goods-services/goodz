import React from 'react';
import { shallow } from 'enzyme';
import { LinkVanilla } from '../Link';

test('Link render', () => {
  // Render a checkbox with label in the document
  const wrapper = shallow(<LinkVanilla  />);
  expect(wrapper).toMatchSnapshot();
});