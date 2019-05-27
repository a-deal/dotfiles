import React, { PureComponent } from 'react';

import Grid from '../components/layout/grid';
import GridItem from '../components/layout/griditem';
import Container from '../components/layout/container';
import ContainerItem from '../components/layout/containeritem';
import About from '../components/About';
import Influences from '../components/Influences';
import Interests from '../components/Interests';
import Reads from '../components/Reads';
import Timeline from '../components/Timeline';
import bulletSvg from '../images/bullet-m.svg';

class IndexPage extends PureComponent {
  render() {
    return (
      <Grid columns={'325px 1fr 1fr 1fr'} rows={'1fr 1fr 1fr'}>
        <About />
        <Influences />
        <Interests />
        <Reads />
        <Timeline />
        <GridItem area={'3 / 4 / 4 / 5'}>
          <Container justifyContent={'flex-end'} alignItems={'flex-end'}>
            <ContainerItem>
              <img
                // className={styles.timelineSvg}
                style={{ height: '50px' }}
                src={bulletSvg}
                alt="Design decorative element"
              />
            </ContainerItem>
          </Container>
        </GridItem>
      </Grid>
    );
  }
}

export default IndexPage;
