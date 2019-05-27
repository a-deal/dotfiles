import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Influences.styles';

class Influences extends PureComponent {
  render() {
    return (
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
    );
  }
}

export default Influences;
