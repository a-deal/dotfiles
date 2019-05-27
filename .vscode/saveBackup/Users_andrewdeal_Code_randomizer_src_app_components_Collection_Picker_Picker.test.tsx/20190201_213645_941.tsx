import React from 'react';
import { shallow } from 'enzyme';
import CollectionPicker from './index';

console.log(React)
describe('CollectionPicker', () => {
  it('should render correctly', () => {
    const component = shallow(<CollectionPicker items={[]}/>);

    expect(component).toMatchSnapshot();
  });
});
