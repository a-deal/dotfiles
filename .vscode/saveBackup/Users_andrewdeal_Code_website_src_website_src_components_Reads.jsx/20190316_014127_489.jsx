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
          flexFlow={'column wrap'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <ContainerItem>
            <Container flexFlow={'row nowrap'}>
              <ContainerItem>
                <img
                  className={styles.triangleSvg}
                  src={triangleSvg}
                  alt="Design decorative element"
                />
              </ContainerItem>
              <ContainerItem width={'60%'}>
                <p style={{ margin: '0 10px' }}>
                  <em>Laws of Human Nature</em>
                  <br />
                  <em>The Art of Explanation</em>
                  <br />
                  Where Men Win Glory
                </p>
              </ContainerItem>
            </Container>
          </ContainerItem>
          <ContainerItem width={'40%'}>
            <div style={{ paddingLeft: '4em' }}>
              <hr className={styles.rule} />
              <h2>What I'm Reading</h2>
            </div>
          </ContainerItem>
        </Container>
      </GridItem>
    );
  }
}

export default Reads;
