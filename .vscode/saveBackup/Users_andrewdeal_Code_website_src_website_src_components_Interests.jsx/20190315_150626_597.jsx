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
            <Container flexFlow={'column nowrap'}>
              <div className={styles.alignRight}>
                <ContainerItem>
                  <h2>What I'm Interested In</h2>
                  <hr className={styles.rule} />
                </ContainerItem>
                <ContainerItem>
                  <p style={{ margin: 0 }}>
                    Product Design
                    <br />
                    Frontend Architecture
                    <br />
                    UI/UX Design
                    <br />
                    Progressive Web Applications
                    <br />
                    Blockchain
                    <br />
                    Deep Learning
                  </p>
                </ContainerItem>
              </div>
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
