import React from 'react'
import { connect } from 'react-redux'

import ListErrors from './ListErrors'
import agent from '../agent'

const mapStateToProps = state => ({ ...state.about })

const mapDispatchToProps = dispatch => ({
  onUpdateField: (key, value) => dispatch({
    type: 'UPDATE_FIELD_ABOUT',
    key,
    value
  }),
  onSubmit: (messager, message) => dispatch({
    type: 'SEND_MAIL',
    payload: agent.Message.send(messager, message)
  }),
  onUnload: () => dispatch({
    type: 'ABOUT_PAGE_UNLOADED'
  })
})

class About extends React.Component {
  constructor(){
    super()

    const updateFieldEvent = key => ev => this.props.onUpdateField(key, ev.target.value)
    this.changeMessager = updateFieldEvent('messager')
    this.changeMessage = updateFieldEvent('message')

    this.submitMessage = (messager, message) => ev => {
      ev.preventDefault()
      this.props.onSubmit(messager, message)
    }
  }

  componentWillUnmount(){
    this.props.onUnload()
  }

  render(){
    const { messager, message } = this.props
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='about offset-lg-3 col-lg-6 offset-xs-2 col-xs-10'>
            <div className='row'>
              <div className='col-lg-1 col-md-1'>
                <a href='https://www.instagram.com/kate.redtea.cake/' target='blank'><img src='http://res.cloudinary.com/unimemo-dfd94/image/upload/v1516694472/instalgram_h69qvh.svg' width='46' height='46' alt='instalgram-icon'/></a>
              </div>
              <div className='col-lg-9 col-md-9 welcome'>
                Follow me on Instalgram<br/>
                If you have any question feel free to contact me!
              </div>  
            </div>
            
            <form onSubmit={this.submitMessage(messager, message)}>
              <input
                className='messager'
                type='text'
                maxLength='70'
                placeholder='Your name'
                value={messager}
                onChange={this.changeMessager} /><br/>
              <textarea
                className='message'
                type='text'
                rows='9'
                maxLength='250'
                placeholder='Write down something...'
                value={message}
                onChange={this.changeMessage} />
              <br/>
              <button
                type='submit'
                disabled={this.props.inProgress}>
                Send
              </button>
            </form>
            <ListErrors errors={this.props.errors} />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
