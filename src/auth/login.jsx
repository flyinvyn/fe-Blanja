import React, { useState } from 'react'
import bag from '../assets/image/bag.png'
import Styles from '../auth/auth.module.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email_seller: "",
        password_seller: ""
    })

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    });

    const [datas, setDatas] = useState({
        email_user: "",
        password_user: ""
    })

    const onChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
        console.log(data);
    }

    const handleChange = (e) => {
        setDatas({
            ...datas,
            [e.target.name]: e.target.value
        })
        console.log(datas);
    }

    const onClick = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_BASEURL}/seller/login`, data)
            .then((res) => {
                Toast.fire({
                    title:
                        "Login Succesfuly!",
                    icon: "success",
                })
                localStorage.setItem("token", res.data.data.token_user)
                localStorage.setItem("role", res.data.data.role_seller)
                localStorage.setItem("id", res.data.data.id_seller)
                navigate('/home')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleClick = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_BASEURL}/customer/login`, datas)
            .then((res) => {
                Toast.fire({
                    title:
                        "Login Succesfuly!",
                    icon: "success",
                })
                localStorage.setItem("token", res.data.data.token_user)
                localStorage.setItem("role", res.data.data.role_user)
                localStorage.setItem("id", res.data.data.id_user)
                navigate('/home')
            })
            .catch((err) => {
                console.log(err);
            })
    }
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
                        Customer
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
                                name='password_user'
                                className="form-control"
                                placeholder="Password"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <Link to={'#'} className="float-right py-3 text-danger">Forgot password</Link>
                            <button className={Styles.btn} onClick={handleClick}>
                                Login
                            </button>
                        </div>
                    </form>
                    <p className="text-regis">
                        Don't have Tokopedia account?
                        <Link to={'/register'} className='text-danger'>Sign up</Link>
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
                                type="email"
                                name="email_seller"
                                className="form-control"
                                placeholder="Email"
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                name="password_seller"
                                className="form-control"
                                placeholder="Password"
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-group">
                            <Link to={'#'} className="float-right py-3 text-danger">Forgot password</Link>
                            <button className={Styles.btn} onClick={onClick}>
                                Login
                            </button>
                        </div>
                    </form>
                    <p className="text-regis">
                        Don't have Tokopedia account?
                        <Link to={'/register'} className='text-danger'>Sign up</Link>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Login