/* import Menu from "../Menu/Menu" */
/* import "./Header.scss" */
/* import { Link } from "react-router-dom" */



export const Header = () => {

    return(
        <header className="header bg-blue-400">
          < div className="header_container">
            <h1 className="header_logo">MI PASTILLITA</h1>
            
              <nav className="navbar">
                <a className="nav__link" href="#">nosotros</a>
                <a className="nav__link" href="#">productos</a>
                <a className="nav__link" href="#">servicios</a>
              </nav>

              <Menu />
          </div>
        </header>
    )
} 

/* 
import { useContext } from 'react'
import Menu from '../Menu/Menu'
import './Header.scss'
import { DarkModeContext } from '../../context/DarkModeContext'
import CartWidget from '../CartWidget/CartWidget'

export const Header = () => {
    // const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

    return (
        <header className="header bg-blue-400">
            <div className="header__container">
                <h1 className="header__logo">LOGO</h1>
                {/* <button onClick={toggleDarkMode}>{darkMode ? 'Modo Oscuro' : 'Modo Light'}</button> }
                <CartWidget />
                <Menu />
            </div>
        </header>
    )
}*/*/