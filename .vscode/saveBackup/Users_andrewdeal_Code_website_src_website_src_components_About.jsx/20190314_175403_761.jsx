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
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="198"
              height="29"
              viewBox="0 0 198 29"
            >
              <g id="Artboard_1" data-name="Artboard 1">
                <image
                  id="Design_Bullet_1"
                  data-name="Design Bullet 1"
                  width="198"
                  height="29"
                  xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMYAAAAdCAYAAADxYhOxAAABvElEQVR4nO3cvUrDUBjG8SenWiv4EREcpDgIQq1QHB3E0btw8yacpFPvyVFc3KSgVkEd3AQ1toLa1kaOppo2iSBKUfP/weGUtDTk42lIePs6c6OZE0mzkob0/zmhISXP4ff6JS0fJD9hXX7M67jZ/+Q7/rJMMJy+42S39UnSraT9StFtr0yNJJ3v9rP3Nhh1SWO/5IADg+DnRzOXG/mx0/WZ3HLf+jqSPBuMB0k5DgdSyC9NZI/LhcmmO2xKwebbYNwYzgakmFOtN4ubB9ezh43WniTTHQQDqXfd7MxsHXmlw0Zrt7svCAYgqdHuuNs1r+C1OlURDOCDvXJs1+6yIhhAr2q9ubhz9XjAUykg6owrBhA1TzCAKIdgADFMSmqkgC8xQdEVgBBD8SAQZf5p+THwLTYYz+xCoJcNRjuyFEg5HtcCMQgGEOUTDCDqnGAAvfythckLggGE2P+A2wYJBAMITGfNlW2MIG6+gTfjQ8YrF9xat1sIwUDq2StFpehWl8aH17r7gspapFm4r9Rq0FPqddhgtCSNUEyIFInrRHgTzO+dCOldG531yQ9F0vJBSir8pHftT/Sule5fAFdseWE70uJwAAAAAElFTkSuQmCC"
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
