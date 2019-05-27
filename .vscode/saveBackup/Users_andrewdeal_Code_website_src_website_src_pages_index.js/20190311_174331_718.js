import React, { PureComponent } from 'react';
import { Link } from 'gatsby';

// TODO make Layout components compound -> https://is.gd/SdEJ6E
import Grid from '../components/layout/grid';
import Item from '../components/layout/item';
import Container from '../components/layout/container';

class IndexPage extends PureComponent {
  render() {
    return (
      <Grid columns={'1fr 1fr 1fr 1fr'} rows={'1fr 1fr 1fr'}>
        <Item area={'1 / 1 / 3 / 2'} />
        <Item area={'1 / 2 / 3 / 3'}>Two</Item>
        <Item area={'1 / 3 / 3 / 5'}>Three</Item>
        <Item area={'2 / 3 / 3 / 5'}>Four</Item>
        <Item area={'3 / 1 / 4 / 4'}>Five</Item>
        <Item area={'3 / 4 / 4 / 5'}>Six</Item>
      </Grid>
    );
  }
}

export default IndexPage;
