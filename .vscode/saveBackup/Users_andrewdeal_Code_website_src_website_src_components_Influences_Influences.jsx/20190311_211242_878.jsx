import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Influences.styles';

class Influences extends PureComponent {
  render() {
    return (
      <GridItem area={'1 / 2 / 3 / 3'}>
        <Container
          flexFlow={'row-reverse wrap-reverse'}
          justifyContent={'center'}
        >
          <ContainerItem order={'2'}>Influences</ContainerItem>
          <ContainerItem order={'1'}>Influences Sources</ContainerItem>
          <ContainerItem>Design Triangle</ContainerItem>
        </Container>
      </GridItem>
    );
  }
}

Influences.propTypes = {
  // bla: PropTypes.string,
};

Influences.defaultProps = {
  // bla: 'test',
};

export default Influences;
