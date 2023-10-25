import React from 'react'
import LogoFull from '../assets/logo-full.svg'
import Logo from '../assets/Logo.svg'
import '../styles/header.css'
export default function Header() {
  const [open, setOpen] = React.useState(false)
  return (
    <header className={`${open ? "mobail__popap" : null}`}>
      <div className="header__inner">
        <div className="mobail-flex">
          <div className="logo__frame">
            <picture>
              <source srcSet={LogoFull} media="(min-width: 600px)" />
              <img src={Logo} alt="Logo Fenix" />
            </picture>
          </div>
          <div className={`header-main ${open ? "" : "burger"}`}>
            <div className="menu__frame">
              <ul className="menu-list">
                <li className="menu-lists">Fenix Advisors</li>
                <li className="menu-lists">Fenix Trading</li>
                <li className="menu-lists">Contact</li>
                <li className="menu-lists">EN</li>
                <li className="menu-lists">ES</li>
              </ul>
            </div>
            <div className="getstarted__frame">
              <button className="button__primary-outline">
                Sign In
              </button>
              <div className="button__primary">
                Get Started
              </div>
            </div>
          </div>
        </div>
        <div onClick={() => setOpen(!open)} className="header__burger-menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19.8751 7.12524H4.12507" stroke="white" stroke-width="2.25" stroke-miterlimit="10" stroke-linecap="round" />
            <path d="M19.8751 12.0002H10.1251" stroke="white" stroke-width="2.25" stroke-miterlimit="10" stroke-linecap="round" />
            <path d="M19.8751 16.874H7.12506" stroke="white" stroke-width="2.25" stroke-miterlimit="10" stroke-linecap="round" />
          </svg>
        </div>
      </div>
    </header>
  )
}
