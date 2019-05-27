import React, { PureComponent } from 'react';

import GridItem from './layout/griditem';
import Container from './layout/container';
import ContainerItem from './layout/containeritem';
import bulletSvg from '../images/bullet-sm.svg';

class Interests extends PureComponent {
  render() {
    return (
      <GridItem area={'1 / 3 / 2 / 5'}>
        <Container flexFlow={'column wrap'} justifyContent={'center'}>
          <ContainerItem alignSelf={'flex-end'} height={'50%'}>
            What I'm Interested In
          </ContainerItem>
          <ContainerItem alignSelf={'flex-end'} height={'45%'}>
            Interests
          </ContainerItem>
          <ContainerItem />
        </Container>
      </GridItem>
    );
  }
}

export default Interests;