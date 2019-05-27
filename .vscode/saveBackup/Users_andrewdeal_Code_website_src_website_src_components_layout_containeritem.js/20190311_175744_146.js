import React, { PureComponent } from 'react';

import styles from './containeritem.module.css';

class ContainerItem extends PureComponent {
  render() {
    const { alignSelf, order, children } = this.props;
    return (
      <div className={styles.containeritem} style={{ alignSelf, order }}>
        {children}
      </div>
    );
  }
}

export default ContainerItem;
