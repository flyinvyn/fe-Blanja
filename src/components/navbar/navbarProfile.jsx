import React from 'react'
import bag from '../../assets/image/bag.png'
import '../../components/navbar/style.css'
import { FiBell, FiMail } from "react-icons/fi";
import ModalFilter from '../../modal/modalFilter';
import profile from '../../assets/image/noimage.png'
import { Link } from 'react-router-dom';

const NavbarProfile = () => {
  const image = localStorage.getItem('image')
  const Logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <div className="d-flex align-items-center">
              <img src={bag} alt="logo" />
              <h3 style={{ color: "#DB3022",marginTop:"15px" }}>Blanja</h3>
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
              </div>
              <ModalFilter />
              <div className="d-flex align-items-center ml-auto">
                <button className="hd">
                  <FiBell />
                </button>
                <button className="hd">
                  <FiMail />
                </button>
                <div className="ml-5 dropdown">
                  <Link to={'#'} role="button" data-toggle="dropdown" aria-expanded="false">
                   <img className='profile' src={image === "null" || "" ? profile : image} alt="profile" />
                  </Link>

                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to={'/profile/seller'}>Profile</Link>
                    <Link className="dropdown-item" onClick={Logout} to={'#'}>Logout</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default NavbarProfile;