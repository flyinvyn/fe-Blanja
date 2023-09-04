import React from 'react'
import { useNavigate } from 'react-router-dom'
import bag from '../../assets/image/bag.png'
import '../../components/navbar/style.css'
import { BsCart2 } from "react-icons/bs";

const NavbarLogin = () => {
    const navigate = useNavigate()
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <div className="d-flex align-items-center">
                            <img src={bag} alt="logo" />
                            <h3 style={{ color: "#DB3022" }}>Blanja</h3>
                        </div>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarTogglerDemo02"
                            aria-controls="navbarTogglerDemo02"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <div className='d-flex align-items-center'>
                                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                    <li className="nav-item ml-5">
                                        <input
                                            className="mr-2 input"
                                            type="search"
                                            placeholder="Search"
                                            aria-label="Search"
                                        />
                                    </li>
                                </ul>
                            </div>
                            <div className="item d-flex align-items-center ml-auto">
                                <button className="hd">
                                    <BsCart2 />
                                </button>
                                <button className='btn btn-danger rounded-pill ml-3' onClick={()=> navigate('/login')}>Login</button>
                                <button className='btn btn-outline-secondary rounded-pill ml-3' onClick={()=> navigate('/register')}>Sign up</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavbarLogin