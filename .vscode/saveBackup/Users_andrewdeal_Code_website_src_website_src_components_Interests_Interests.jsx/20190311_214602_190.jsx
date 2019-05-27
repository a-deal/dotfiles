import React, { PureComponent } from 'react';

import GridItem from '../layout/griditem';
import Container from '../layout/container';
import ContainerItem from '../layout/containeritem';

class Interests extends PureComponent {
  render() {
    return (
      <GridItem area={'1 / 3 / 2 / 5'}>
        <Container flexFlow={'column wrap-reverse'} justifyContent={'center'}>
          <ContainerItem alignSelf={'flex-end'} height={'50%'}>
            What I'm Interested In
          </ContainerItem>
          <ContainerItem alignSelf={'flex-end'} height={'50%'}>
            Interests
          </ContainerItem>
          <ContainerItem>Design Bullet</ContainerItem>
        </Container>
      </GridItem>
    );
  }
}

export default Interests;
