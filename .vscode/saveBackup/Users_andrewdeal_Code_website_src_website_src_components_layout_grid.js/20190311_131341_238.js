import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './grid.module.css';

class Grid extends PureComponent {
  render() {
    const { columns, rows, children } = this.props;
    return (
      <div style={{ gridArea: `${columns} / ${rows}`, ...styles }}>
        {children}
      </div>
    );
  }
}

Grid.propTypes = {
  columns: PropTypes.string,
  rows: PropTypes.string,
};

Grid.defaultProps = {
  columns: '20% 20% 20% 20%',
  rows: `20% 20% 20% 20%`,
};

export default Grid;
