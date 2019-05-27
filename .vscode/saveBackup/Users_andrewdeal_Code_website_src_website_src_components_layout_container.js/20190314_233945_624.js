import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './container.module.css';

class Container extends PureComponent {
  render() {
    const {
      flexFlow,
      justifyContent,
      alignContent,
      alignItems,
      children,
    } = this.props;
    return (
      <div
        className={styles.container}
        style={{ flexFlow, justifyContent, alignContent, alignItems }}
      >
        {children}
      </div>
    );
  }
}

Container.propTypes = {
  flexFlow: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  alignContent: PropTypes.string,
};

export default Container;
