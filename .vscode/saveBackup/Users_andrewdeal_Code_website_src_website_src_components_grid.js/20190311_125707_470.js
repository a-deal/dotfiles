import React, { PureComponent } from "react"
import PropTypes from "prop-types"

class Grid extends PureComponent {
  render() {
    return <div>I'm a grid</div>
  }
}

Grid.propTypes = {
  columns: PropTypes.string,
}

Grid.defaultProps = {
  siteTitle: ``,
}

export default Grid
