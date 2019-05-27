import React, { PureComponent } from 'react';

class Interests extends PureComponent {
  render() {
    return (
      <GridItem area={'1 / 3 / 2 / 5'}>
        <Container flexFlow={'column wrap'} justifyContent={'center'}>
          <ContainerItem alignSelf={'flex-end'} height={'50%'}>
            What I'm Interested In
          </ContainerItem>
          <ContainerItem alignSelf={'flex-end'} height={'50%'}>
            Interests
          </ContainerItem>
          <ContainerItem>Design Bullet</ContainerItem>
        </Container>
      </GridItem>
    );
  }
}

export default Interests;
