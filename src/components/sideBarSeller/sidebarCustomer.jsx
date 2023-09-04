import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import noimage from '../../assets/image/noimage.png'

const SidebarCustomer = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const id = localStorage.getItem("id");
        axios
            .get(`${process.env.REACT_APP_BASEURL}/customer/${id}`)
            .then((response) => setData(response.data.data[0]))
            .catch((error) => console.log(error));
    }, []);
    return (
        <>
            <div
                className="col-md-3 col-12"
                style={{ backgroundColor: "#FFF", width: "25%" }}
            >
                <div className="row">
                    <div
                        className="col-md-4"
                        style={{ backgroundColor: "#FFF" }}
                    ></div>
                    <div className="col-md-8" style={{ marginTop: 100 }}>
                        <div className="row">
                            <div className="col-md-3 col-3 ">
                                <img
                                    src={data.photo === "null" ? noimage : data.photo }
                                    style={{ width: 50, borderRadius: "50%" }}
                                    alt="user"
                                />
                            </div>
                            <div className="col-md-9 col-9 pl-0 pt-1">
                                <p className="mt-0 mb-0 font-weight-bold text-body ml-3">
                                    {data.fullname_user}
                                </p>
                                <span className="pencil ml-3"><MdEdit /></span>
                                <span style={{ color: "#9B9B9B" }}>Ubah profile</span>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-3 col-3 pl-0 ">
                                <img
                                    src={require("../../assets/image/profile-customer.png")}
                                    style={{ width: 30, borderRadius: "50%" }}
                                    alt="profile"
                                />
                            </div>
                            <div
                                className="col-md-9 col-9 pl-0 pt-1"
                                style={{ marginLeft: "-20px" }}
                            >
                                <p className="mt-0 mb-3 font-weight-bold">
                                    <Link
                                        to={"/profile/customer"}
                                        style={{ fontSize: "1rem", color: "black", paddingLeft: "10px" }}
                                    >
                                        My Account
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-3 col-3 pl-0">
                                <img
                                    src={require("../../assets/image/map.png")}
                                    style={{ width: 30, borderRadius: "50%" }}
                                    alt="address"
                                />
                            </div>
                            <div className="col-md-9 col-9 pl-0 pt-1">
                                <Link to={"/profile/address"}>
                                    <p
                                        className="mt-0 mb-3 font-weight-bold"
                                        style={{ marginLeft: "-20px" }}
                                    >
                                        <p style={{ fontSize: "1rem", color: "black", paddingLeft: "10px" }}>
                                            Shipping Adrress
                                        </p>
                                    </p>
                                </Link>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-3 col-3 pl-0">
                                <img
                                    src={require("../../assets/image/order.png")}
                                    style={{ width: 30, borderRadius: "50%" }}
                                    alt="order"
                                />
                            </div>
                            <div className="col-md-9 col-9 pl-0 pt-1">
                                <Link to={"/customer/order"}>
                                    <p
                                        className="mt-0 mb-0 font-weight-bold"
                                        style={{ marginLeft: "-20px" }}
                                    >
                                        <a
                                            href="/pages/profile-order.html"
                                            style={{ fontSize: "1rem", color: "black", paddingLeft: "10px" }}
                                        >
                                            My Order
                                        </a>
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SidebarCustomer;