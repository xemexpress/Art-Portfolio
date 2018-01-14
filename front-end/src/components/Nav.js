import React from 'react'

class Nav extends React.Component {
  render(){
    return (
      <div className='col-lg-4 col-md-5'>
        <div className='nav'>
          <div className='artist-name'>
            {this.props.header.toUpperCase()}
          </div>
          <div className='artist-title'>
            {this.props.concentration}
          </div>
          <ul className='navbar'>
            <li className='category'>
              Blog
            </li>
            <li className='category'>
              <span className='crafts-drop'>Crafts</span>
              <ul className='crafts'>
                <span className='nav-hand'></span>
                <li>Jewlery&nbsp;practice</li>
                <li>Light&nbsp;up&nbsp;silver&nbsp;jewelry</li>
                <li>Orgami&nbsp;jewelry&nbsp;series</li>
                <li>Shell&nbsp;small&nbsp;object</li>
                <li>Weave&nbsp;jewelry</li>
              </ul>
            </li>
            <li className='category'>
              Design
            </li>
            <li className='category'>
              About
            </li>
            <li className='category'>
              Contact
            </li>
          </ul>
          <div className='nav-deco'>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav
