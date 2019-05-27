import React from 'react';
import { mount, render } from 'enzyme';
import CollectionPicker from './Picker';

describe('CollectionPicker', () => {
  it('should render correctly', () => {
   const component = render(<CollectionPicker items={[]}/>);

   expect(component).toMatchSnapshot();
  });
  it('should generate a picked item on generate', () => {
    const component = mount(<CollectionPicker items={['one', 'two', 'three']}/>).get(0);

    component.find('button').simulate('click');
    expect(component.state()).toEqual(expect.anything());
    component.unmount();
  });
});
