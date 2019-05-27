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
    // https://github.com/Pomax/react-onclickoutside/issues/133#issuecomment-362319243
    const component = mount(shallow(<CollectionPicker items={['one', 'two', 'three']}/>).get(0));

    expect(component.state('picked')).toBeNull();
    component.find('button').simulate('click');
    expect(component.state('picked')).toEqual(expect.anything());
    component.unmount();
  });
  it('should reset pick on child\'s modal close', () => {
    const component = mount(shallow(<CollectionPicker items={['one', 'two', 'three']}/>).get(0));
    component.find('button').simulate('click');
    component.find('div[role="document"]').simulate('blur');
    expect(component.state('picked')).toBeNull();
    component.unmount();
  });
});
