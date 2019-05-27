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
          <ContainerItem alignSelf={'center'}>
            <img
              // className={styles.iSvg}
              style={{
                width: '100%',
                // height: '250px',
              }}
              src={timelineSvg}
              alt="Design decorative element"
            />
          </ContainerItem>
        </Container>
      </GridItem>
    );
  }
}

export default Timeline;
