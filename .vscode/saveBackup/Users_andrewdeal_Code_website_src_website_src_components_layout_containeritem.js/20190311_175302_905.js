import React, { PureComponent } from 'react';

class Container extends PureComponent {
  render() {
    const { flexFlow, justifyContent, alignContent, children } = this.props;
    return <div>{children}</div>;
  }
}

export default Container;
