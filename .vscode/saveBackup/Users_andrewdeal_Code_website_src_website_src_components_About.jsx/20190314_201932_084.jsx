import React, { PureComponent } from 'react';

import GridItem from './layout/griditem';
import Container from './layout/container';
import ContainerItem from './layout/containeritem';
import styles from './About.module.css';
import bulletSvg from '../images/bullet-xl.svg';
import ellipsisSvg from '../images/ellipsis.svg';

class About extends PureComponent {
  render() {
    return (
      <GridItem area={'1 / 1 / 3 / 2'}>
        <Container
          flexFlow={'column nowrap'}
          justifyContent={'space-between'}
          alignItems={'flex-start'}
        >
          <ContainerItem>
            <img
              className={styles.bulletSvg}
              src={designBullet}
              alt="Design decorative element"
            />
          </ContainerItem>
          <ContainerItem>Photo</ContainerItem>
          <ContainerItem>About Me</ContainerItem>
          <ContainerItem>
            <img
              className={styles.ellipsisSvg}
              src={designEllipsis}
              alt="Design decorative element"
            />
          </ContainerItem>
          <ContainerItem alignSelf={'flex-end'}>About Me Blurb</ContainerItem>
          <ContainerItem>Tech I use</ContainerItem>
        </Container>
      </GridItem>
    );
  }
}

export default About;
