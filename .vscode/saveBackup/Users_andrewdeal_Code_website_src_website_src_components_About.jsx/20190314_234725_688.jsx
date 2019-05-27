import React, { PureComponent } from 'react';

import GridItem from './layout/griditem';
import Container from './layout/container';
import ContainerItem from './layout/containeritem';
import styles from './About.module.css';
import bulletSvg from '../images/bullet-xl.svg';
import ellipsisSvg from '../images/ellipsis.svg';
import profilePicture from '../images/profile_pic.jpg';

class About extends PureComponent {
  render() {
    return (
      <GridItem area={'1 / 1 / 3 / 2'}>
        <Container
          flexFlow={'column nowrap'}
          justifyContent={'space-between'}
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
          <ContainerItem>
            <Container flexFlow={'row nowrap'} justifyContent={'flex-start'}>
              <ContainerItem>
                <h2 className={`${styles.rotated} ${styles.rotatedHeading}`}>
                  Tech I use
                </h2>
                <hr className={`${styles.rotated} ${styles.rotatedRule}`} />
              </ContainerItem>
              <ContainerItem>
                <div
                  style={{ position: 'relative', left: '-80px', bottom: '5px' }}
                >
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
                </div>
              </ContainerItem>
            </Container>
          </ContainerItem>
        </Container>
      </GridItem>
    );
  }
}

export default About;
