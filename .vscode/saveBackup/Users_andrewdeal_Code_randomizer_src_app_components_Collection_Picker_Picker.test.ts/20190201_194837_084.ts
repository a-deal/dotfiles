import React from 'react';
import renderer from 'react-test-renderer';

import CollectionPicker from './index.tsx';

it('renders correctly', () => {
    const tree = renderer.create(<CollectionPicker />).toJSON();
    expect(tree).toMatchSnapshot();
});
