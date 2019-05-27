import React, { PureComponent } from 'react';
import { Link } from 'gatsby';

import Grid from '../components/layout/grid';
import Item from '../components/layout/item';

class IndexPage extends PureComponent {
  render() {
    return (
      <Grid columns={'1fr 1fr 1fr 1fr'} rows={'1fr 1fr 1fr'}>
        <Item area={'1 / 1 / 2 / 5'}>One</Item>
        <Item area={'2 / 1 / 3 / 5'}>Two</Item>
        <Item area={'3 / 1 / 4 / 5'}>Three</Item>
        <Item area={'1 / 1 / 2 / 5'}>Four</Item>
        <Item area={'2 / 1 / 3 / 5'}>Five</Item>
        <Item area={'3 / 1 / 4 / 5'}>Six</Item>
      </Grid>
    );
  }
}

export default IndexPage;
