import React from 'react'

class About extends React.Component {
  render(){
    return (
      <div className='row'>
        <div className='contact offset-lg-3 col-lg-6 offset-xs-2 col-xs-10'>
          <a href='https://www.instagram.com/kate.redtea.cake/' target='blank'><img src='http://res.cloudinary.com/unimemo-dfd94/image/upload/v1516694472/instalgram_h69qvh.svg' alt='instalgram-icon'/></a>
          <div className='welcome'>
            Follow me on Instalgram<br/>
            If you have any question feel free to contact me!
          </div>
          <form>
            <input
              className='messager'
              type='text'
              placeholder='Your name' /><br/>
            <textarea
              className='message'
              type='text'
              rows='9'
              placeholder='Write down something...' />
            <br/>
            <button
              type='submit'>
              Send
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default About
