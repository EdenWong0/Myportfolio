import React, { useState } from 'react'
import { CgWebsite } from "react-icons/cg";
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import './nav.scss'

const data = [
    {
        label : 'HOME',
        to : '/'
    },
    {
        label : 'ABOUT ME',
        to : '/about'
    },
    {
        label : 'SKILLS',
        to : '/skill'
    },
    {
        label : 'RESUME',
        to : '/resume'
    },
    {
        label : 'PROFOLIO',
        to : '/profolio'
    },
    {
        label : 'CONTACT',
        to : '/contact'
    }
]

const Navbar = () => {
    const [toggleIcon,  setToggleIcon] = useState(false)

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon)
    }
  return (
    <div>
        <nav className='navbar'>
            <div className='navbar__container'>
                <Link to={'/'} className='navbar__container__logo'>
                    <CgWebsite size={50}/>
                </Link>
            </div>
            <ul className={`navbar__container__menu ${toggleIcon ? "active" : " "}`}>
                {
                    data.map((item, key) => (
                        <li key={key}className='navbar__container__menu__item'>       
                            <Link className='navbar__container__menu__item__link' to={item.to}>
                                {item.label}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <div className='nav-icon' onClick={handleToggleIcon}>
                {toggleIcon ? <HiX size={50}/> : <FaBars size={50}/>}
            </div>
        </nav>
    </div>
  )
}

export default Navbar