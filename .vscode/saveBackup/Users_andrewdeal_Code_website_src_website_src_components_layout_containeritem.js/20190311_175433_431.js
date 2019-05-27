import React, { PureComponent } from 'react';

import styles from './containeritem.module.css';

class ContainerItem extends PureComponent {
  render() {
    const { flexFlow, justifyContent, alignContent, children } = this.props;
    return (
      <div
        className={styles.containeritem}
        style={{ flexFlow, justifyContent, alignContent }}
      >
        {children}
      </div>
    );
  }
}

export default ContainerItem;
