import React, { PureComponent } from 'react';

import GridItem from './layout/griditem';
import Container from './layout/container';
import ContainerItem from './layout/containeritem';
import styles from './About.module.css';
import bulletSvg from '../images/bullet-l.svg';
import ellipsisSvg from '../images/ellipsis.svg';
import profilePicture from '../images/profile_pic.jpg';

class About extends PureComponent {
  render() {
    return (
      <GridItem area={'1 / 1 / 3 / 2'}>
        <Container
          flexFlow={'column nowrap'}
          justifyContent={'flex-start'}
          alignItems={'flex-start'}
          className={styles.container}
        >
          <ContainerItem>
            <img
              className={styles.bulletSvg}
              src={bulletSvg}
              alt="Design decorative element"
            />
          </ContainerItem>
          <ContainerItem>
            <img
              className={styles.profilePicture}
              src={profilePicture}
              alt="Profile Picture"
            />
          </ContainerItem>
          <ContainerItem>
            <h1>About Me</h1>
          </ContainerItem>
          <ContainerItem>
            <img
              className={styles.ellipsisSvg}
              src={ellipsisSvg}
              alt="Design decorative element"
            />
          </ContainerItem>
          <ContainerItem>
            <p>
              Tech. Engineer. Product
              <br />
              I love building products that matter.
              <br />
              Ask me what I'm doing, I'd love to chat.
            </p>
          </ContainerItem>
        </Container>
      </GridItem>
    );
  }
}

export default About;
