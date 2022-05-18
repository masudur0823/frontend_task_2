import React, { useState } from 'react'
import logo from '../../assets/images/logo.svg'
import { IoIosArrowDown } from 'react-icons/io';
import MobileMenu from './MobileMenu';
import { IoMdMenu } from 'react-icons/io';

function Menu() {
  const [left, setLeft] = useState("-1000px");

  const handlehumburger = () => {
      setLeft("0px");
  }
  return (
    <>
      <div className='menu'>
        <img src={logo} alt="" />
        <ul className='menu_ul'>
          <li><a href="#!">HOME</a></li>
          <li>
            <a href="#!">
              <div className="dropdown d-inline">
                <span className="dropdown-toggle menu_dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                  INDUSTRIES <IoIosArrowDown className='menu_arrow' />
                </span>
                <div className="dropdown-menu menu_dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <ul className='menu_dropdown_ul'>
                    <li><a href="#!">Technology and Software</a></li>
                    <li><a href="#!">Consumer Products and Insights</a></li>
                    <li><a href="#!">Marketing and Ad-Ops</a></li>
                    <li><a href="#!">E-Commerce</a></li>
                    <li><a href="#!">HR and Recruiting</a></li>
                  </ul>
                </div>
              </div>
            </a>
          </li>
          <li><a href="#!">CONTACT US</a></li>
        </ul>
      </div>
      <div className='mobile_menu'>
        <IoMdMenu className='humberger' onClick={handlehumburger} />
      </div>
        <MobileMenu left={left} setLeft={setLeft} />
    </>
  )
}

export default Menu