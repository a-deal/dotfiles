import React, { PureComponent } from 'react';

import GridItem from './layout/griditem';
import Container from './layout/container';
import ContainerItem from './layout/containeritem';
import styles from './Interests.module.css';
import bulletSvg from '../images/bullet-sm.svg';

class Interests extends PureComponent {
  render() {
    return (
      <GridItem area={'1 / 3 / 2 / 5'}>
        <Container
          flexFlow={'row wrap'}
          alignItems={'flex-start'}
          alignContent={'flex-start'}
          justifyContent={'flex-end'}
        >
          <ContainerItem>
            <Container className={styles.alignRight} flexFlow={'column nowrap'}>
              <ContainerItem>
                <h2>What I'm Interested In</h2>
              </ContainerItem>
              <ContainerItem>Interests</ContainerItem>
            </Container>
          </ContainerItem>
          <ContainerItem>
            <img
              className={styles.bullet}
              src={bulletSvg}
              alt="Design decorative element"
            />
          </ContainerItem>
        </Container>
      </GridItem>
    );
  }
}

export default Interests;
