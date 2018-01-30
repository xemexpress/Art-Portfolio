import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Nav from './Nav'
import agent from '../agent'

import {
  REDIRECT,
  SET_PAGE
} from '../constants'

const mapStateToProps = state => ({
  header: state.common.header,
  concentration: state.common.concentration,
  redirectTo: state.common.redirectTo,
  showBlogPagination: state.blog.showBlogPagination,
  articlesCount: state.blog.articlesCount,
  currentPage: state.blog.currentPage
})

const mapDispatchToProps = dispatch => ({
  onRedirect: () => dispatch({
    type: REDIRECT
  }),
  onSetPage: p => dispatch({
    type: SET_PAGE,
    page: p,
    payload: agent.Articles.all(p)
  })
})

class App extends React.Component {
  componentWillReceiveProps(nextProps){
    if(nextProps.redirectTo){
      this.context.router.replace(nextProps.redirectTo)
      this.props.onRedirect()
    }
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='main-view col-xl-8 col-lg-7 col-md-7 col-sm-7'>
            {this.props.children}
          </div>
          <Nav
            header={this.props.header}
            concentration={this.props.concentration}
            showBlogPagination={this.props.showBlogPagination}
            onSetPage={this.props.onSetPage}
            currentPage={this.props.currentPage}
            articlesCount={this.props.articlesCount} />
        </div>
      </div>
    );
  }
}

App.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
