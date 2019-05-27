import React from 'react';
import { shallow } from 'enzyme';
import CollectionPicker from './Picker';

describe('CollectionPicker', () => {
  it('should render correctly', () => {
   const component = shallow(<CollectionPicker items={[]}/>);

   expect(component).toMatchSnapshot();
  });
  it('should generate a picked item on generate', () => {
    const component = shallow(<CollectionPicker items={['one', 'two', 'three']}/>);

    component.find('button').simulate('click');
    expect(component.state('picked')).toEqual(expect.anything());
  });
});
