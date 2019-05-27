import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './column.module.css';

class Column extends PureComponent {
  render() {
    const { gridArea, children } = this.props;
    return <div style={{ gridArea, ...styles }}>{children}</div>;
  }
}

Column.propTypes = {
  gridArea: PropTypes.string,
};

Column.propTypes = {
  gridArea: PropTypes.string,
};

export default Column;
