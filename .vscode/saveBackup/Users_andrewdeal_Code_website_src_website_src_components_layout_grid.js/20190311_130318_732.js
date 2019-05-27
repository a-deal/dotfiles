import React, { PureComponent } from "react"
import PropTypes from "prop-types"

class Grid extends PureComponent {
  render() {
    const {columns, rows} = this.props;
    return <div style={{'grid-area': `${}`}}>I'm a grid</div>
  }
}

Grid.propTypes = {
  columns: PropTypes.string,
  rows: PropTypes.string
}

Grid.defaultProps = {
  siteTitle: ``,
}

export default Grid
