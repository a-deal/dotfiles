import React, { PureComponent } from 'react';

import GridItem from './layout/griditem';
import Container from './layout/container';
import ContainerItem from './layout/containeritem';
import styles from './Influences.module.css';

class Influences extends PureComponent {
  render() {
    return (
      <GridItem area={'1 / 2 / 3 / 3'}>
        <Container
          flexFlow={'row-reverse wrap-reverse'}
          justifyContent={'center'}
          alignContent={'center'}
        >
          <ContainerItem order={'2'}>
            <h2>Influences</h2>
          </ContainerItem>
          <ContainerItem
            className={styles.AlignRight}
            width={'40%'}
            order={'1'}
          >
                  <p>
                    Nassim Taleb
                    <br />
                    Robert Greene
                    <br />
                    Jocko Willink
                    <br />
                    Plato
                    <br />
                    Kurt Vonnegut
            Influences Sources
          </ContainerItem>
          <ContainerItem width={'40%'}>Design Triangle</ContainerItem>
        </Container>
      </GridItem>
    );
  }
}

export default Influences;