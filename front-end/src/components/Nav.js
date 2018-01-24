import React from 'react'
import { Link } from 'react-router'

class Nav extends React.Component {
  render(){
    return (
      <div className='col-lg-4 col-md-5'>
        <div className='nav'>
          <Link to='/' className='link'>
            <div className='artist-name'>
              {this.props.header.toUpperCase()}
            </div>
          </Link>
          <div className='artist-title'>
            {this.props.concentration}
          </div>
          <ul className='navbar'>
            <li className='category'>
              <Link to='/' className='link'>
                Blog
              </Link>
            </li>
            <li className='category'>
              <span className='crafts-drop'>Crafts</span>
              <ul className='crafts'>
                <span className='nav-hand'></span>
                <li><Link to='gallery/jewlery-practice' className='link'>Jewlery&nbsp;practice</Link></li>
                <li><Link to='gallery/light-up-silver-jewelry' className='link'>Light&nbsp;up&nbsp;silver&nbsp;jewelry</Link></li>
                <li><Link to='gallery/origami-jewelry-series' className='link'>Origami&nbsp;jewelry&nbsp;series</Link></li>
                <li><Link to='gallery/shell-small-object' className='link'>Shell&nbsp;small&nbsp;object</Link></li>
                <li><Link to='gallery/weave-jewelry' className='link'>Weave&nbsp;jewelry</Link></li>
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
                    <li><Link to='gallery/ancestral-house' className='link'>Ancestral&nbsp;house</Link></li>
                    <li><Link to='gallery/artist-book' className='link'>Artist&nbsp;book</Link></li>
                    <li><Link to='gallery/future-calendar' className='link'>Future&nbsp;calendar</Link></li>
                  </ul>
                </li>
                <li className='sub-category'>
                <span className='brand-design-drop'>Brand&nbsp;design</span>
                  <ul className='brand-design'>
                    <span className='nav-hand'></span>
                    <li><Link to='gallery/herbal-day' className='link'>Herbal&nbsp;day</Link></li>
                    <li><Link to='gallery/mindtree' className='link'>Mindtree</Link></li>
                    <li><Link to='gallery/sound' className='link'>Sound</Link></li>
                    <li><Link to='gallery/stationary' className='link'>Stationary</Link></li>
                    <li><Link to='gallery/tongxianghui' className='link'>Tongxianghui</Link></li>
                  </ul>
                </li>
                <li><Link to='gallery/graphic-sketch' className='link'>Graphic&nbsp;&amp;&nbsp;sketch</Link></li>
                <li><Link to='gallery/icon-design' className='link'>Icon&nbsp;design</Link></li>
                <li><Link to='gallery/ui-design' className='link'>UI&nbsp;design</Link></li>
                <li><Link to='gallery/others' className='link'>Others</Link></li>
              </ul>
            </li>
            <li className='category'>
              About
            </li>
            <li className='category'>
              <Link to='contact' className='link'>
                Contact
              </Link>
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
