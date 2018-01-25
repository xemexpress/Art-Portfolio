import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Nav from './Nav'

const mapStateToProps = state => ({
  header: state.common.header,
  concentration: state.common.concentration
})

class App extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='main-view col-lg-8 col-md-7'>
            {this.props.children}
          </div>
          <Nav
            header={this.props.header}
            concentration={this.props.concentration} />
        </div>
      </div>
    );
  }
}

App.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect(mapStateToProps, () => ({}))(App)
