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
  order: PropTypes.number,
  height: PropTypes.string,
};

ContainerItem.defaultProps = {
  alignSelf: 'auto',
  order: '0',
  height: 'inherit',
};

export default ContainerItem;
