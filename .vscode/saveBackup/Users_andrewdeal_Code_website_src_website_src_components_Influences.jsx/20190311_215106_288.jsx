import React, { PureComponent } from 'react';

import GridItem from './layout/griditem';
import Container from './layout/container';
import ContainerItem from './layout/containeritem';

class Influences extends PureComponent {
  render() {
    return (
      <GridItem area={'1 / 2 / 3 / 3'}>
        <Container
          flexFlow={'row-reverse wrap-reverse'}
          justifyContent={'center'}
        >
          <ContainerItem order={'2'}>Influences</ContainerItem>
          <ContainerItem width={'40%'} order={'1'}>
            Influences Sources
          </ContainerItem>
          <ContainerItem width={'40%'}>Design Triangle</ContainerItem>
        </Container>
      </GridItem>
    );
  }
}

export default Influences;
