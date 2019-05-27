import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './griditem.module.css';

class GridItem extends PureComponent {
  render() {
    const { area: gridArea, children } = this.props;
    return (
      <div className={styles.item} style={{ gridArea }}>
        {children}
      </div>
    );
  }
}

GridItem.propTypes = {
  gridArea: PropTypes.string,
};

export default GridItem;
