import React, { PureComponent } from 'react';
import { Link } from 'gatsby';

// TODO make Layout components compound -> https://is.gd/SdEJ6E
import Grid from '../components/layout/grid';
import GridItem from '../components/layout/griditem';
import Container from '../components/layout/container';
import ContainerItem from '../components/layout/containeritem';

import About from './components/About';
import Influences from '../components/Influences';
class IndexPage extends PureComponent {
  render() {
    return (
      <Grid columns={'1fr 1fr 1fr 1fr'} rows={'1fr 1fr 1fr'}>
        <About />
        <Influences />
        <GridItem area={'1 / 3 / 2 / 5'}>
          <Container flexFlow={'column wrap'} justifyContent={'center'}>
            <ContainerItem alignSelf={'flex-end'} height={'50%'}>
              What I'm Interested In
            </ContainerItem>
            <ContainerItem alignSelf={'flex-end'} height={'50%'}>
              Interests
            </ContainerItem>
            <ContainerItem>Design Bullet</ContainerItem>
          </Container>
        </GridItem>
        <GridItem area={'2 / 3 / 3 / 5'}>
          <Container
            flexFlow={'row wrap'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <ContainerItem alignSelf={'flex-end'} width={'40%'}>
              Design Bullet
            </ContainerItem>
            <ContainerItem alignSelf={'flex-end'} width={'40%'}>
              Reading Sources
            </ContainerItem>
            <ContainerItem alignSelf={'flex-start'} width={'40%'}>
              What I'm Reading
            </ContainerItem>
          </Container>
        </GridItem>
        <GridItem area={'3 / 1 / 4 / 4'}>
          <Container>
            <ContainerItem>Design i</ContainerItem>
            <ContainerItem>Timeline SVG</ContainerItem>
          </Container>
        </GridItem>
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