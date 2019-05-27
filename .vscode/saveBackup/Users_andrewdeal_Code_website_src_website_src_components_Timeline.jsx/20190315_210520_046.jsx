import React, { PureComponent } from 'react';

import GridItem from './layout/griditem';
import Container from './layout/container';
import ContainerItem from './layout/containeritem';
import styles from './Timeline.module.css';
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
          <ContainerItem alignSelf={'center'}>
            <Container flexFlow={'column nowrap'}>
              <ContainerItem>
                <Container flexFlow={'row nowrap'}>
                  <ContainerItem>The RSR Company</ContainerItem>
                  <ContainerItem>Twitch Interactive</ContainerItem>
                </Container>
              </ContainerItem>
              <ContainerItem>
                <Container flexFlow={'row nowrap'}>
                  <ContainerItem />
                  <ContainerItem />
                </Container>
              </ContainerItem>
              <ContainerItem>
                <Container flexFlow={'row nowrap'}>
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
