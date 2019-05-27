import React, { PureComponent } from 'react';

import GridItem from './layout/griditem';
import Container from './layout/container';
import ContainerItem from './layout/containeritem';
import designBullet from '../images/bullet-xl.svg';

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
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 225 17"
            >
              <title>bullet-xl</title>
              <g>
                <path
                  d="M.5,26.5v-16H217a7.5,7.5,0,0,1,7.5,7.5v1a7.5,7.5,0,0,1-7.5,7.5Z"
                  transform="translate(0 -10)"
                  fill="#1e0903"
                />
                <path
                  d="M217,11a7,7,0,0,1,7,7v1a7,7,0,0,1-7,7H1V11H217m0-1H0V27H217a8,8,0,0,0,8-8V18a8,8,0,0,0-8-8Z"
                  transform="translate(0 -10)"
                  fill="#1e0903"
                />
              </g>
            </svg>

            {/* <img src={designBullet} alt="Design decorative element" /> */}
          </ContainerItem>
          <ContainerItem>Photo</ContainerItem>
          <ContainerItem>About Me</ContainerItem>
          <ContainerItem>Design Ellipsis</ContainerItem>
          <ContainerItem alignSelf={'flex-end'}>About Me Blurb</ContainerItem>
          <ContainerItem>Tech I use</ContainerItem>
        </Container>
      </GridItem>
    );
  }
}

export default About;
