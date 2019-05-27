import React, { PureComponent } from 'react';

import GridItem from './layout/griditem';
import Container from './layout/container';
import ContainerItem from './layout/containeritem';
import styles from './Reads.module.css';

class Reads extends PureComponent {
  render() {
    return (
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
            <hr />
            <h2>What I'm Reading</h2>
          </ContainerItem>
        </Container>
      </GridItem>
    );
  }
}

export default Reads;
