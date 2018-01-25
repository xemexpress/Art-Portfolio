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
                <li><Link to='gallery/jewlery-practice' className='link'>Jewlery&nbsp;Practice</Link></li>
                <li><Link to='gallery/light-up-silver-jewelry' className='link'>Light&nbsp;Up&nbsp;Silver&nbsp;Jewelry</Link></li>
                <li><Link to='gallery/origami-jewelry-series' className='link'>Origami&nbsp;Jewelry&nbsp;Series</Link></li>
                <li><Link to='gallery/shell-small-object' className='link'>Shell&nbsp;Small&nbsp;Object</Link></li>
                <li><Link to='gallery/weave-jewelry' className='link'>Weave&nbsp;Jewelry</Link></li>
              </ul>
            </li>
            <li className='category'>
              <span className='design-drop'>Design</span>
              <ul className='design'>
                <span className='nav-hand'></span>
                <li className='sub-category'>
                  <span className='book-design-drop'>Book</span>
                  <ul className='book-design'>
                    <span className='nav-hand'></span>
                    <li><Link to='gallery/ancestral-house' className='link'>Ancestral&nbsp;House</Link></li>
                    <li><Link to='gallery/artist-book' className='link'>Artist&nbsp;Book</Link></li>
                    <li><Link to='gallery/future-calendar' className='link'>Future&nbsp;Calendar</Link></li>
                  </ul>
                </li><br/>
                <li className='sub-category'>
                  <span className='brand-design-drop'>Brand</span>
                  <ul className='brand-design'>
                    <li><Link to='gallery/herbal-day' className='link'>Herbal&nbsp;Day</Link></li>
                    <li><Link to='gallery/mindtree' className='link'>Mindtree</Link></li>
                    <li><Link to='gallery/sound' className='link'>Sound</Link></li>
                    <li><Link to='gallery/stationary' className='link'>Stationary</Link></li>
                    <li><Link to='gallery/tongxianghui' className='link'>Tong&nbsp;Xiang Association</Link></li>
                  </ul>
                </li>
                <li><Link to='gallery/graphic-sketch' className='link'>Graphic&nbsp;&amp;&nbsp;Sketch</Link></li>
                <li><Link to='gallery/icon-design' className='link'>Icon</Link></li><br/>
                <li><Link to='gallery/ui-design' className='link'>UI</Link></li><br/>
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
