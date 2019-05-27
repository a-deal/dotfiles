import React from 'react';
import { shallow } from 'enzyme';
import CollectionPicker from './index';

describe('CollectionPicker', () => {
  it('should render correctly', () => {
    const component = shallow(<CollectionPicker />);

    expect(component).toMatchSnapshot();
  });
});
