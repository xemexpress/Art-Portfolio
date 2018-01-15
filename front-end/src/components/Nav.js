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
                <li><a>Jewlery&nbsp;practice</a></li>
                <li><a>Light&nbsp;up&nbsp;silver&nbsp;jewelry</a></li>
                <li><a>Orgami&nbsp;jewelry&nbsp;series</a></li>
                <li><a>Shell&nbsp;small&nbsp;object</a></li>
                <li><a>Weave&nbsp;jewelry</a></li>
              </ul>
            </li>
            <li className='category'>
              <span className='design-drop'>Design</span>
              <ul className='design'>
                <span className='nav-hand'></span>
                <li className='sub-category'>
                  <span className='book-design-drop'>Book&nbsp;design</span>
                  <ul className='book-design'>
                    <span className='nav-hand'></span>
                    <li><a>Ancestral&nbsp;house</a></li>
                    <li><a>Artist&nbsp;book</a></li>
                    <li><a>Future&nbsp;calendar</a></li>
                  </ul>
                </li>
                <li className='sub-category'>
                <span className='brand-design-drop'>Brand&nbsp;design</span>
                  <ul className='brand-design'>
                    <span className='nav-hand'></span>
                    <li><a>Ancestral&nbsp;house</a></li>
                    <li><a>Artist&nbsp;book</a></li>
                    <li><a>Future&nbsp;calendar</a></li>
                  </ul>
                </li>
                <li><a>Graphic&nbsp;&amp;&nbsp;sketch</a></li>
                <li><a>Icon&nbsp;design</a></li>
                <li><a>Others</a></li>
                <li><a>UI&nbsp;design</a></li>
              </ul>
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
