import React from 'react'
import Paper from 'material-ui/Paper'
import {primary3Color} from '../../theme/colors'
import Copywrite from './copywrite'

class Footer extends React.Component {
  render() {
    return (
      <Paper
        zDepth={1}
        style={{
            width: '100%',
            position: 'fixed',
            bottom: 0,
            backgroundColor: primary3Color
        }}
        rounded={false}>
          <Copywrite/>
      </Paper>
    )
  }
}

export default Footer
