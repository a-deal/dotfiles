import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './grid.module.css';

class Grid extends PureComponent {
  static Container = () => {};

  static Item = () => {};

  render() {
    return React.Children.map(children, child => {
      return React.cloneElement(child, this.props);
    });
    // <div
    //   className={styles.container}
    //   style={{ gridTemplate: `${rows} / ${columns}` }}
    // >
    //   {children}
    // </div>
    // );
  }
}

Grid.propTypes = {
  columns: PropTypes.string,
  rows: PropTypes.string,
};

export default Grid;
