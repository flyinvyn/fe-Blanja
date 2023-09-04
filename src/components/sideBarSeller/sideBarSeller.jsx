import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import '../../components/sideBarSeller/sidebar.css'

const SideBarSeller = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getSeller = localStorage.getItem("id");
    axios
      .get(`${process.env.REACT_APP_BASEURL}/seller/${getSeller}`)
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
            style={{ backgroundColor: "#FFFFF" }}
          ></div>
          <div className="col-md-8" style={{ marginTop: 100 }}>
            <div className="row">
              <div className="col-md-3 col-3">
                <img
                  src={data.photo}
                  alt="profil"
                  style={{ width: 50, borderRadius: "50%" }}
                />
              </div>
              <div className="col-md-9 col-9 pl-4 pt-1">
                <p className="mt-0 mb-0 font-weight-bold text-body">
                  {data.store_seller}
                </p>
                <span className="pencil"><MdEdit /></span>
                <span style={{ color: "#9B9B9B" }}>Ubah profile</span>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-3 col-3 pl-0 ">
                <img
                  src={require("../../assets/image/icon-profile.png")}
                  alt="seller-profile"
                  style={{ width: 30, borderRadius: "50%" }}
                />
              </div>
              <div className="col-md-9 col-9 pl-0 pt-1">
                <p
                  className="mt-0 mb-0 font-weight-bold"
                  style={{ marginLeft: "-20px" }}
                >
                  <a
                    href="/pages/profile-address.html"
                    style={{ fontSize: "1rem", color: "black",paddingLeft:"10px" }}
                    data-toggle="collapse"
                    data-target="#collapseStore"
                    aria-expanded="false"
                    aria-controls="collapseStore"
                  >
                    Store
                  </a>
                </p>
                <div
                  className="accordion"
                  id="accordionExample"
                  style={{ marginLeft: "-5px" }}
                >
                  <div
                    id="collapseStore"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div className="row mt-2">
                      <div className="col-md-12 col-12 pl-0 pt-1">
                        <p className="sidebar">
                          <Link to={"/profile/seller"}>
                            <a
                              href="/pages/profile-order.html"
                            >
                              Store profile
                            </a>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-3 col-3 pl-0">
                <img
                  src={require("../../assets/image/icon-product.png")}
                  alt="product"
                  style={{ width: 30, borderRadius: "50%" }}
                />
              </div>
              <div className="col-md-9 col-9 pl-0 pt-1">
                <p
                  className="mt-0 mb-0 font-weight-bold"
                  style={{ marginLeft: "-20px" }}
                >
                  <a
                    href="/pages/profile-address.html"
                    style={{ fontSize: "1rem", color: "black", paddingLeft:"10px" }}
                    data-toggle="collapse"
                    data-target="#collapseProduct"
                    aria-expanded="false"
                    aria-controls="collapseProduct"
                  >
                    Product
                  </a>
                </p>
                <div
                  className="accordion"
                  id="accordionExample"
                  style={{ marginLeft: "-5px" }}
                >
                  <div
                    id="collapseProduct"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div className="row mt-2">
                      <div className="col-md-12 col-12 pl-0 pt-1">
                        <p className="sidebar">
                          <Link to={"/product"}>
                            <a
                              href="/pages/profile-order.html"
                            >
                              My Product
                            </a>
                          </Link>
                        </p>
                      </div>
                      <div className="col-md-12 col-12 pl-0 pt-1">
                        <p className="sidebar">
                          <Link to={"/product/create"}>
                            <a
                              href="/pages/profile-order.html"
                            >
                              Selling Product
                            </a>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-3 col-3 pl-0">
                <img
                  src={require("../../assets/image/icon-order.png")}
                  alt="order"
                  style={{ width: 30, borderRadius: "50%" }}
                />
              </div>
              <div className="col-md-9 col-9 pl-0 pt-1">
                <p
                  className="font-weight-bold"
                  style={{ marginLeft: "-20px" }}
                >
                  <a
                    href="/pages/profile-address.html"
                    data-toggle="collapse"
                    data-target="#collapseOrder"
                    aria-expanded="false"
                    aria-controls="collapseOrder"
                    style={{fontSize:"1rem",color:"black",paddingLeft:"10px"}}
                  >
                    Order
                  </a>
                </p>
                <div
                  className="accordion"
                  id="accordionExample"
                  style={{ marginLeft: "-5px" }}
                >
                  <div
                    id="collapseOrder"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div className="row mt-2">
                      <div className="col-md-12 col-12 pl-0 pt-1">
                        <p className="sidebar">
                          <a
                            href="/pages/profile-order.html"
                          >
                            My order
                          </a>
                        </p>
                      </div>
                      <div className="col-md-12 col-12 pl-0 pt-1">
                        <p className="sidebar">
                          <a
                            href="/pages/profile-order.html"
                          >
                            Order cancel
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBarSeller;