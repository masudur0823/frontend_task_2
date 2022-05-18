import React from 'react'
import { GrClose } from 'react-icons/gr';

function MobileMenu(props) {
    const { left, setLeft } = props;
    const handleClose = () => {
        setLeft("-1000px")
    }

    const handleIndustries = () => {

    }

    return (
        <div className='mobile_menu_offcanvas' style={{ left: left }}>
            <div className='mm_header'>
                <h4 className='header_text'>MENU</h4>
                <GrClose onClick={handleClose} />
            </div>
            <hr className='horizotal_line' />

            <ul className='list-unstyled mobile_menu_ul'>
                <li><a href="#!">Home</a></li>
                <li>
                    <a href="#!" onClick={handleIndustries}>
                        INDUSTRIES
                    </a>
                    <ul className='mobile_dropmenu'>
                        <li><a href="#!">Technology and Software</a></li>
                        <li><a href="#!">Consumer Products and Insights</a></li>
                        <li><a href="#!">Marketing and Ad-Ops</a></li>
                        <li><a href="#!">E-Commerce</a></li>
                        <li><a href="#!">HR and Recruiting</a></li>
                    </ul>
                </li>
                <li><a href="#!">CONTACT US</a></li>
            </ul>
        </div>
    )
}

export default MobileMenu