import React from 'react'
import { Link } from 'react-router'

import ListPagination from './ListPagination';

const Nav = props => {
  return (
    <div className='col-xl-3 col-lg-4 col-md-4 col-sm-3'>
      <div className='nav'>
        <Link to='/' className='link'>
          <div className='artist-name'>
            {props.header.toUpperCase()}
          </div>
        </Link>
        <div className='artist-title'>
          {props.concentration}
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
              <div className='nav-hand'></div>
              <li><Link to='gallery/jewlery-practice' className='link'>Jewlery&nbsp;Practice</Link></li>
              <li><Link to='gallery/light-up-silver-jewelry' className='link'>Light&nbsp;Up&nbsp;Silver&nbsp;Jewelry</Link></li>
              <li><Link to='gallery/origami-jewelry-series' className='link'>Origami&nbsp;Jewelry&nbsp;Series</Link></li>
              <li><Link to='gallery/shell-small-object' className='link'>Shell&nbsp;Small&nbsp;Object</Link></li>
              <li><Link to='gallery/weave-jewelry' className='link'>Weave&nbsp;Jewelry</Link></li>
            </ul>
          </li>
          <li className='category'>
            <div className='design-drop'>Design</div>
            <ul className='design'>
              <div className='nav-hand'></div>
              <li className='sub-category'>
                <span className='book-design-drop'>Book</span>
                <ul className='book-design'>
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
                  <li><Link to='gallery/tong-xiang-association' className='link'>Tong&nbsp;Xiang Association</Link></li>
                </ul>
              </li>
              <li><Link to='gallery/graphic-and-sketch' className='link'>Graphic&nbsp;&amp;&nbsp;Sketch</Link></li>
              <li><Link to='gallery/icon-design' className='link'>Icon</Link></li><br/>
              <li><Link to='gallery/ui-design' className='link'>UI</Link></li><br/>
              <li><Link to='gallery/others' className='link'>Others</Link></li>
            </ul>
          </li>
          <li className='category'>
            <Link to='about' className='link'>
              About
            </Link>
          </li>
        </ul>
        <div className='nav-deco'>
        </div>
        {
        props.showBlogPagination ?
        <ListPagination
          articlesCount={props.articlesCount}
          currentPage={props.currentPage}
          onSetPage={props.onSetPage} />
        : null
        }
      </div>
    </div>
  )
}

export default Nav
