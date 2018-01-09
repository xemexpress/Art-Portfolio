import React from 'react'
import { connect } from 'react-redux'

import Gallery from './Gallery'
import Nav from './Nav'

const mapStateToProps = state => ({
  artist: state.artist,
  concentration: state.concentration,
  units: state.units
})

class App extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <Gallery />
          <Nav
            artist={this.props.artist}
            concentration={this.props.concentration} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, () => ({}))(App)
