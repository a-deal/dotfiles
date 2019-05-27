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
              src={bulletSvg}
              alt="Design decorative element"
            />
          </ContainerItem>
          <ContainerItem>Photo</ContainerItem>
          <ContainerItem>
            <h2>About Me</h2>
          </ContainerItem>
          <ContainerItem>
            <img
              className={styles.ellipsisSvg}
              src={ellipsisSvg}
              alt="Design decorative element"
            />
          </ContainerItem>
          <ContainerItem alignSelf={'flex-end'}>
            <p>
              Tech. Engineer. Product
              <br />I love building products that matter.
            </p>
            <p>Ask me what I'm doing, I'd love to chat.</p>
          </ContainerItem>
          <ContainerItem>
            <h2>Tech I use</h2>
            <p>
              Javascript
              <br />
              Typescript
              <br />
              ReactJS
              <br />
              Redux
              <br />
              NodeJS
              <br />
              Go
            </p>
          </ContainerItem>
        </Container>
      </GridItem>
    );
  }
}

export default About;
