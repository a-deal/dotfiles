import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './grid.module.css';

class Grid extends PureComponent {
  render() {
    const { columns, rows, children } = this.props;
    return (
      <div
        className={styles.container}
        style={{ gridTemplate: `${rows} / ${columns}` }}
      >
        {children}
      </div>
    );
  }
}

Grid.propTypes = {
  columns: PropTypes.string,
  rows: PropTypes.string,
};

export default Grid;
