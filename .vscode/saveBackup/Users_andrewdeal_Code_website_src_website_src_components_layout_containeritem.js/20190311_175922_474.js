import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

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

Container.propTypes = {
  alignSelf: PropTypes.string,
  order: PropTypes.string,
};

export default ContainerItem;
