import React, { PureComponent } from 'react';

import GridItem from './layout/griditem';
import Container from './layout/container';
import ContainerItem from './layout/containeritem';
import styles from './Reads.module.css';
import triangleSvg from '../images/upside_right_triangle.svg';

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
            <img
              className={styles.triangleSvg}
              src={triangleSvg}
              alt="Design decorative element"
            />
          </ContainerItem>
          <ContainerItem alignSelf={'flex-end'} width={'40%'}>
            <p style={{ margin: '0 10px' }}>
              Laws of Human Nature
              <br />
              The Art of Explanation
              <br />
              Where Men Win Glory
            </p>
          </ContainerItem>
          <ContainerItem alignSelf={'flex-start'} width={'40%'}>
            <hr className={`${styles.rule} ${styles.alignRight}` />
            <h2>What I'm Reading</h2>
          </ContainerItem>
        </Container>
      </GridItem>
    );
  }
}

export default Reads;
