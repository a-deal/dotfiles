import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './grid.module.css';

class Grid extends PureComponent {
  static Container = ({ columns, rows }) => {
    return (
      <div
        className={styles.container}
        style={{ gridTemplate: `${rows} / ${columns}` }}
      >
        {children}
      </div>
    );
  };

  static Item = ({ area: gridArea }) => {
    return (
      <div className={styles.item} style={{ gridArea }}>
        {children}
      </div>
    );
  };

  render() {
    return React.Children.map(children, child => {
      return React.cloneElement(child, this.props);
    });
  }
}

Grid.propTypes = {
  columns: PropTypes.string,
  rows: PropTypes.string,
  area: PropTypes.string,
};

export default Grid;
