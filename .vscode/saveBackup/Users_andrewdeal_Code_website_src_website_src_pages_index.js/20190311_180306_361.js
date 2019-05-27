import React, { PureComponent } from 'react';
import { Link } from 'gatsby';

// TODO make Layout components compound -> https://is.gd/SdEJ6E
import Grid from '../components/layout/grid';
import GridItem from '../components/layout/griditem';
import Container from '../components/layout/container';
import ContainerItem from '../components/layout/containeritem';

class IndexPage extends PureComponent {
  render() {
    return (
      <Grid columns={'1fr 1fr 1fr 1fr'} rows={'1fr 1fr 1fr'}>
        <GridItem area={'1 / 1 / 3 / 2'}>
          <Container>
            <ContainerItem>Design Block</ContainerItem>
            <ContainerItem>Photo</ContainerItem>
            <ContainerItem>About Me</ContainerItem>
            <ContainerItem>Design Block</ContainerItem>
            <ContainerItem>About Me Blurb</ContainerItem>
          </Container>
        </GridItem>
        <GridItem area={'1 / 2 / 3 / 3'}>Two</GridItem>
        <GridItem area={'1 / 3 / 3 / 5'}>Three</GridItem>
        <GridItem area={'2 / 3 / 3 / 5'}>Four</GridItem>
        <GridItem area={'3 / 1 / 4 / 4'}>Five</GridItem>
        <GridItem area={'3 / 4 / 4 / 5'}>Six</GridItem>
      </Grid>
    );
  }
}

export default IndexPage;
