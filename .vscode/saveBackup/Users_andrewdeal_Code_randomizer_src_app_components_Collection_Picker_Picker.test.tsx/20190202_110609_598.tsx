import React from 'react';
import { mount, render, shallow } from 'enzyme';
import CollectionPicker from './Picker';

describe('CollectionPicker', () => {
  it('should render correctly', () => {
   const component = render(<CollectionPicker items={[]}/>);

   expect(component).toMatchSnapshot();
  });
  it('should generate a picked item on generate', () => {
    // Because this component is wrapped by MaterialUI's decorator
    // we need to grab the unwrapped component with the following workaround.
    const component = mount(shallow(<CollectionPicker items={['one', 'two', 'three']}/>).get(0));

    expect(component.state('picked')).toBeNull();
    component.find('button').simulate('click');
    expect(component.state('picked')).toEqual(expect.anything());
    component.unmount();
  });
});