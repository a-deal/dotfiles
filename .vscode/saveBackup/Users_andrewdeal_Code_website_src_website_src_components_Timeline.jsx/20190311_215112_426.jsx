import React, { PureComponent } from 'react';

import GridItem from './layout/griditem';
import Container from './layout/container';
import ContainerItem from './layout/containeritem';

class Timeline extends PureComponent {
  render() {
    return (
      <GridItem area={'3 / 1 / 4 / 4'}>
        <Container>
          <ContainerItem>Design i</ContainerItem>
          <ContainerItem>Timeline SVG</ContainerItem>
        </Container>
      </GridItem>
    );
  }
}

export default Timeline;
