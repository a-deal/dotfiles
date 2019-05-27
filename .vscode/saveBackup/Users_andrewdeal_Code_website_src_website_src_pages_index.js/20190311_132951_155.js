import React, { PureComponent } from 'react';
import { Link } from 'gatsby';

import Grid from '../components/layout/grid';
import Column from '../components/layout/item';

class IndexPage extends PureComponent {
  render() {
    return (
      <Grid columns={'1fr 1fr 1fr 1fr'} rows={'1fr 1fr 1fr 1fr'}>
        <Item area={'1 / 1 / 2 / 5'}>One</Item>
        <Item area={'2 / 1 / 3 / 5'}>One</Item>
        <Item area={'3 / 1 / 4 / 5'}>One</Item>
        <Item area={'4 / 1 / 5 / 5'}>One</Item>
      </Grid>
    );
  }
}

export default IndexPage;
