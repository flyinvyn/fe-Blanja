import React from 'react'
import { useNavigate } from 'react-router-dom'
import bag from '../../assets/image/bag.png'
import '../../components/navbar/style.css'
import { FiFilter, FiBell, FiMail } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";
import ModalFilter from '../../modal/modalFilter';
import profile from '../../assets/image/noimage.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const image = localStorage.getItem('image')
  const navigate = useNavigate()
  const Auth = localStorage.getItem("role");
  console.log(Auth);

  const Logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link to={'/'}>
            <div className="d-flex align-items-center">
              <img src={bag} alt="logo" />
              <h3 style={{ color: "#DB3022",marginTop:"15px" }}>Blanja</h3>
            </div></Link>
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
                <button
                  type="button"
                  className="filter"
                  data-toggle="modal"
                  data-target="#exampleModal1" >
                  <FiFilter />
                </button>
              </div>
              <ModalFilter />
              <div className="d-flex align-items-center ml-auto">
                <button className="hd" onClick={() => navigate('/mybag')}>
                  <BsCart2 />
                </button>
                <button className="hd">
                  <FiBell />
                </button>
                <button className="hd">
                  <FiMail />
                </button>
                <div className="ml-5 dropdown">
                  <Link to={'#'} role="button" data-toggle="dropdown" aria-expanded="false">
                    <img className='profile' src={image === "null" ? profile : image} alt="profile" />
                  </Link>

                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to={Auth === "seller" ? "/profile/seller" : "/profile/customer"}>Profile</Link>
                    <Link className="dropdown-item" onClick={Logout} to={'/'}>Logout</Link>
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

export default Navbar