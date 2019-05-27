import React from 'react';
import { shallow } from 'enzyme';
import CollectionPicker from './index';

describe('CollectionPicker', () => {
  it('should render correctly', () => {
    console.log('HELLLLLLLLLLLLLLLLLLLLLLLLLOOO', React);
    const component = shallow(<CollectionPicker items={[]}/>);

    expect(component).toMatchSnapshot();
  });
});
