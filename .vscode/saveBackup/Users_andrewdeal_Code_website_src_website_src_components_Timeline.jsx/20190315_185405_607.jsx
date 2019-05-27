import React, { PureComponent } from 'react';

import GridItem from './layout/griditem';
import Container from './layout/container';
import ContainerItem from './layout/containeritem';
import iSvg from '../images/design_i.svg';

class Timeline extends PureComponent {
  render() {
    return (
      <GridItem area={'3 / 1 / 4 / 4'}>
        <Container>
          <ContainerItem>
            <img
              // className={styles.triangleSvg}
              src={iSvg}
              alt="Design decorative element"
            />
          </ContainerItem>
          <ContainerItem>Timeline</ContainerItem>
        </Container>
      </GridItem>
    );
  }
}

export default Timeline;
