import React from 'react';
import renderer from 'react-test-renderer';

import Picker from '../index';

it('renders correctly', () => {
    const tree = renderer.create(<Picker />).toJSON();
    expect(tree).toMatchSnapshot();
})
