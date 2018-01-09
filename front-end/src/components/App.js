import React from 'react'
import { connect } from 'react-redux'

import MainView from './MainView'
import Nav from './Nav'

const mapStateToProps = state => ({
  header: state.header,
  artist: state.artist,
  concentration: state.concentration,
  units: state.units
})

class App extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <MainView
            artist={this.props.artist} />
          <Nav
            header={this.props.header}
            concentration={this.props.concentration} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, () => ({}))(App)
