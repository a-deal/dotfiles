import React, { PureComponent } from 'react';

import GridItem from './layout/griditem';
import Container from './layout/container';
import ContainerItem from './layout/containeritem';
import styles from './Timeline.module.css';
import timelineSvg from '../images/timeline.svg';
import iSvg from '../images/design_i.svg';

class Timeline extends PureComponent {
  render() {
    return (
      <GridItem area={'3 / 1 / 4 / 4'}>
        <Container alignItems={'flex-end'}>
          <ContainerItem>
            <img
              className={styles.iSvg}
              src={iSvg}
              alt="Design decorative element"
            />
          </ContainerItem>
          <ContainerItem height={'100%'} width={'100%'}>
            <Container
              flexFlow={'column nowrap'}
              justifyContent={'space-around'}
            >
              <ContainerItem>
                <Container
                  flexFlow={'row nowrap'}
                  justifyContent={'space-around'}
                >
                  <ContainerItem>The RSR Company</ContainerItem>
                  <ContainerItem>Twitch Interactive</ContainerItem>
                </Container>
              </ContainerItem>
              <ContainerItem>
                <Container
                  flexFlow={'row nowrap'}
                  justifyContent={'space-between'}
                >
                  <ContainerItem alignSelf={'flex-start'}>
                    <h1>Now</h1>
                  </ContainerItem>
                  <ContainerItem>
                    <img
                      // className={styles.iSvg}
                      style={{
                        height: '150px',
                        position: 'absolute',
                        left: '50px',
                        bottom: '25px',
                      }}
                      src={timelineSvg}
                      alt="Design decorative element"
                    />
                  </ContainerItem>
                  <ContainerItem alignSelf={'flex-end'}>
                    <h1>Then</h1>
                  </ContainerItem>
                </Container>
              </ContainerItem>
              <ContainerItem>
                <Container
                  flexFlow={'row nowrap'}
                  justifyContent={'space-around'}
                >
                  <ContainerItem>B.A. - George Mason University</ContainerItem>
                  <ContainerItem>Independent</ContainerItem>
                  <ContainerItem>Independent</ContainerItem>
                </Container>
              </ContainerItem>
            </Container>
          </ContainerItem>
        </Container>
      </GridItem>
    );
  }
}

export default Timeline;
