import React, { PureComponent } from 'react';
import { Link } from 'gatsby';

// TODO make Layout components compound -> https://is.gd/SdEJ6E
import Grid from '../components/layout/grid';
import GridItem from '../components/layout/griditem';
import Container from '../components/layout/container';
import ContainerItem from '../components/layout/containeritem';
import About from '../components/About';
import Influences from '../components/Influences';
import Interests from '../components/Interests';
import Reads from '../components/Reads';
import Timeline from '../components/Timeline';

class IndexPage extends PureComponent {
  render() {
    return (
      <Grid columns={'1fr 1fr 1fr 1fr'} rows={'1fr 1fr 1fr'}>
        <About />
        <Influences />
        <Interests />
        <Reads />
        <Timeline />
        <GridItem area={'3 / 4 / 4 / 5'}>
          <Container justifyContent={'flex-end'} alignItems={'flex-end'}>
            <ContainerItem>Design Bullet</ContainerItem>
          </Container>
        </GridItem>
      </Grid>
    );
  }
}

export default IndexPage;
