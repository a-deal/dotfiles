import React, { PureComponent } from 'react';

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
