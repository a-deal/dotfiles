import React, { PureComponent } from 'react';

import GridItem from './layout/griditem';
import Container from './layout/container';
import ContainerItem from './layout/containeritem';

class About extends PureComponent {
  render() {
    return (
      <GridItem area={'1 / 1 / 3 / 2'}>
        <Container
          flexFlow={'column nowrap'}
          justifyContent={'space-between'}
          alignItems={'flex-start'}
        >
          <ContainerItem>Design Block</ContainerItem>
          <ContainerItem>Photo</ContainerItem>
          <ContainerItem>About Me</ContainerItem>
          <ContainerItem>Design Ellipsis</ContainerItem>
          <ContainerItem alignSelf={'flex-end'}>About Me Blurb</ContainerItem>
          <ContainerItem>Tech I use</ContainerItem>
        </Container>
      </GridItem>
    );
  }
}

export default About;
