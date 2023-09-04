import React, { useState } from 'react'
import bag from '../assets/image/bag.png'
import Styles from '../auth/auth.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

const Register = () => {
    const [data, setData] = useState({
        email_user: "",
        password_user: "",
        fullname_user: "",
        role_user: "customer",
    });
    const [dataSeller, setDataSeller] = useState({
        email_seller: "",
        password_seller: "",
        name_seller: "",
        description_seller: "",
        store_seller: "",
        phone_seller: "",
        role_seller: "seller",
    });
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
        console.log(data);
    };

    const handleChangeSeller = (e) => {
        setDataSeller({
            ...dataSeller,
            [e.target.name]: e.target.value,
        });
    };

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    });
    const handleRegister = (e) => {
        e.preventDefault();
        axios
            .post(`${process.env.REACT_APP_BASEURL}/customer/register`, data)
            .then((res) => {
                if (res.data.statusCode === 201) {
                    Toast.fire({
                        title:
                            "Sign up Succesfuly!",
                        icon: "success",
                    }).then(function () {
                        // Redirect the user
                        window.location.href = "/login";
                    });
                } else {
                    Toast.fire({
                        title: "Sorry, this email is already registered.",
                        icon: "error",
                    }).then(function () {
                        // Redirect the user
                        window.location.href = "/register";
                    });
                }
            })
            .catch((err) => {
                console.log(err.response);
                alert("gagal register");
            });
    };
    const handleRegisterSeller = (e) => {
        e.preventDefault();
        axios
            .post(`${process.env.REACT_APP_BASEURL}/seller/register`, dataSeller)
            .then((res) => {
                if (res.data.statusCode === 201) {
                    Toast.fire({
                        title:
                            "Sign up Succesfuly",
                        icon: "success",
                    }).then(function () {
                        // Redirect the user
                        window.location.href = "/login";
                    });
                } else {
                    Toast.fire({
                        title: "Sorry, this email is already registered.",
                        icon: "error",
                    }).then(function () {
                        // Redirect the user
                        window.location.href = "/signup";
                    });
                }
            })
            .catch((err) => {
                console.log(err.response);
                alert("gagal register");
            });
    };
    return (
        <div className={Styles.container}>
            <img src={bag} alt="blnja" />
            <p className="text-center text-dark font-weight-bold py-3">
                Please sign up with your account!
            </p>
            <ul
                className="nav nav-pills mb-3 justify-content-center"
                id="pills-tab"
                role="tablist"
            >
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link active"
                        id="pills-home-tab"
                        data-toggle="pill"
                        data-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                    >
                        Custommer
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="pills-profile-tab"
                        data-toggle="pill"
                        data-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                    >
                        Seller
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                >
                    <form>
                        <div className="form-group">
                            <input
                                type="text"
                                name="fullname_user"
                                className="form-control"
                                placeholder="Name"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email_user"
                                className="form-control"
                                placeholder="Email"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                name='password_user'
                                placeholder="Password"
                                onChange={handleChange}
                            />
                            <input
                                type="hidden"
                                className="form-control"
                                name='role_user'
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <button onClick={handleRegister} className={Styles.btn}>
                                Sign up
                            </button>
                        </div>
                    </form>
                    <p className="text-regis">
                        Already have a Blanja account?
                        <Link to={"/login"} className='text-danger'>Login</Link>
                    </p>
                </div>
                <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                >
                    <form>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name_seller"
                                className="form-control"
                                placeholder="Name"
                                onChange={handleChangeSeller}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email_seller"
                                className="form-control"
                                placeholder="Email"
                                onChange={handleChangeSeller} />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="phone_seller"
                                className="form-control"
                                placeholder="Phone number"
                                onChange={handleChangeSeller} />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="store_seller"
                                className="form-control"
                                placeholder="Store name"
                                onChange={handleChangeSeller} />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                name="password_seller"
                                className="form-control"
                                placeholder="Password"
                                onChange={handleChangeSeller} />
                            <input
                                type="hidden"
                                name="role_seller"
                                className="form-control"
                                onChange={handleChangeSeller} />
                        </div>
                        <div className="form-group">
                            <button onClick={handleRegisterSeller} className={Styles.btn}>
                                <Link to={'/home'}>Login</Link>
                            </button>
                        </div>
                    </form>
                    <p className="text-regis">
                        Already have a Blanja account?
                        <Link to={"/login"} className='text-danger'>Login</Link>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Register