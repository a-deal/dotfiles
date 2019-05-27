import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './containeritem.module.css';

class ContainerItem extends PureComponent {
  render() {
    const { alignSelf, order, children, height } = this.props;
    return (
      <div className={styles.item} style={{ alignSelf, order, height }}>
        {children}
      </div>
    );
  }
}

ContainerItem.propTypes = {
  alignSelf: PropTypes.string,
  order: PropTypes.string,
  height: PropTypes.string,
};

export default ContainerItem;
