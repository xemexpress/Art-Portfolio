import React from 'react'

class Nav extends React.Component {
  render(){
    return (
      <div className='col-lg-4 col-md-5'>
        <div className='nav'>
          <div className='artist-name'>
            {this.props.artist.toUpperCase()}
          </div>
          <div className='artist-title'>
            {this.props.concentration}
          </div>
          <ul className='navbar'>
            <li className='nav-item'>
              <a>Blog</a>
            </li>
            <li className='nav-item'>
              <a>Crafts</a>
            </li>
            <li className='nav-item'>
              <a>Design</a>
            </li>
            <li className='nav-item'>
              <a>About</a>
            </li>
            <li className='nav-item'>
              <a>Contact</a>
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
