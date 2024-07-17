import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const menuHandler = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className='navbar_box display_row'>
                <div className="navbar_logo">
                    <div className="logo_image">
                        <h1>#MiLogo </h1>
                    </div>
                </div>
                <ul className="navbar_nav display_row">

                    <li className="nav_elements display_colum">
                        <Link className="nav_item" to="/">Inicio</Link>
                    </li>

                    <li className="nav_elements display_colum">
                        <Link className="nav_item" to="/">Nosotros</Link>
                    </li>

                    <li className="nav_elements display_colum">
                        <Link className="nav_item" to="/">Documentación</Link>
                    </li>

                </ul>

                <div className="navbar_account display_row">
                    <div className="account_register display_colum">
                        <Link className="nav_item" to="/Registro">Registrarse</Link>
                    </div>
                    <div className="account_login display_colum">
                        <Link className="nav_item" to="/Login">Login</Link>
                    </div>
                </div>

                <div className="navbar_responsive_menu">
                    <button className="menu_icon" onClick={menuHandler} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className={`${isOpen ? 'navbar_menu_sheet' : 'navbar_responsive'}`}>
                <div className="responsive_menu">
                    <div className="menu_icon_box">

                        <button className="menu_icon_close nav_text" onClick={menuHandler}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                            </svg>
                        </button>
                    </div>

                    <div className="menu_list">
                        <h1 className="menu_list_title nav_text">Menu</h1>
                        <ul className="list_list">
                            <li className="list_item">
                                <Link className="item nav_text" to="/">Home</Link>
                            </li>

                            <li className="list_item">
                                <Link className="item nav_text" to="/">Home</Link>
                            </li>

                            <li className="list_item">
                                <Link className="item nav_text" to="/">Home</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}