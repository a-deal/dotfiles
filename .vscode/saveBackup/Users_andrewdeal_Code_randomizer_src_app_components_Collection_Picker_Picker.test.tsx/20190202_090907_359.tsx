import React from 'react';
import { shallow } from 'enzyme';
import CollectionPicker from './index';

describe('CollectionPicker', () => {
  it('should render correctly', () => {
   console.log(React.Component);
   const component = shallow(<CollectionPicker items={[]}/>);

   expect(component).toMatchSnapshot();
  });
});
