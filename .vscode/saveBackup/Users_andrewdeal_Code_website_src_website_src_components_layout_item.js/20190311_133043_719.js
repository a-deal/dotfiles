import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './item.module.css';

class Item extends PureComponent {
  render() {
    const { area: gridArea, children } = this.props;
    return <div style={{ gridArea, ...styles }}>{children}</div>;
  }
}

Item.propTypes = {
  gridArea: PropTypes.string,
};

Item.propTypes = {
  gridArea: PropTypes.string,
};

export default Item;
