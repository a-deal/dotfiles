import React, { PureComponent } from 'react';

import styles from './container.module.css';

class Container extends PureComponent {
  render() {
    const { children } = this.props;
    return <div className={styles.container}>{children}</div>;
  }
}

export default Container;
