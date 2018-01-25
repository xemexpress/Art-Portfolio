import React from 'react'

class About extends React.Component {
  render(){
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
      </div>
    )
  }
}

export default About
