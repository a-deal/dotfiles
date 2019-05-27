import React, { PureComponent } from 'react';
import { Link } from 'gatsby';

import Grid from '../components/layout/grid';
import Column from '../components/layout/column';

class IndexPage extends PureComponent {
  render() {
    return (
      <Grid>
        <Column />
      </Grid>
    );
  }
}

export default IndexPage;
