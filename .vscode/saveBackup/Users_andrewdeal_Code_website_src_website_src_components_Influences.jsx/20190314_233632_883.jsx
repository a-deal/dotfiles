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
          alignContent={'center'}
        >
          <ContainerItem order={'2'}>Influences</ContainerItem>
          <ContainerItem order={'1'}>Influences Sources</ContainerItem>
          <ContainerItem>Design Triangle</ContainerItem>
        </ContainerItem>
      </GridItem>
    );
  }
}

export default Influences;
