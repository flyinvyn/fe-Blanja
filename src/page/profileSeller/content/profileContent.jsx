import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import '../../profileSeller/profile.css'
import noimage from '../../../assets/image/noimage.png'

const ProfileContent = () => {
    const id = localStorage.getItem("id");
    const [data, setData] = useState({
        store_seller: "",
        email_seller: "",
        phone_seller: "",
        description_seller: "",
        role_seller: "seller"
    });


    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
        console.log(data);
    };

    const Toast = Swal.mixin({
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    });

    const [preview, setPreview] = useState("");
    const [photo, setPhoto] = useState(null)
    const handleUpload = (e) => {
        const image = e.target.files[0];
        setPhoto(image);
        setPreview(URL.createObjectURL(image));
    };

    console.log(photo);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('store_seller', data.store_seller)
        formData.append('email_seller', data.email_seller)
        formData.append('phone_seller', data.phone_seller)
        formData.append('role_seller', data.role_seller)
        formData.append('description_seller', data.description_seller)
        formData.append('photo', photo)
        await axios
            .put(`${process.env.REACT_APP_BASEURL}/seller/update/${id}`, formData)
            .then((response) => {
                setData(response);
                Toast.fire({
                    title: "Profile Changed",
                    icon: "success",
                });
                window.location.reload();
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        const id = localStorage.getItem("id");
        axios
            .get(`${process.env.REACT_APP_BASEURL}/seller/${id}`)
            .then((response) => setData(response.data.data[0]))
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <div
                className="col-md-8 col-12"
                style={{ backgroundColor: "#F5F5F5", marginLeft: "right" }}
            >
                <div
                    className="col-md-12 border container-fluid"
                    style={{
                        marginTop: 124,
                        backgroundColor: "#FFF",
                        borderRadius: 4,
                        border: "1px solid #9B9B9B",
                    }}
                >
                    <div className=" col-md-12 border-bottom mt-3 p-0">
                        <h4 className="font-weight-bold pt-2">My Profile</h4>
                        <p>Manage your profile information</p>
                    </div>
                    <div className="col-md-12">
                        <form onSubmit={handleUpdate}>
                            <div className="row">
                                <div className="col-md-8 ">
                                    <div className="col-md-12 mt-5">
                                        <div className="row">
                                            <div
                                                className="col-md-3 col-3 my-auto mb-3"
                                                style={{ color: "#9B9B9B" }}
                                            >
                                                Store name
                                            </div>
                                            <div className="col-md-8 col-9">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    style={{ height: 48 }}
                                                    aria-label="Sizing example input"
                                                    aria-describedby="inputGroup-sizing-lg"
                                                    name="store_seller"
                                                    value={data.store_seller}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div
                                                className="col-md-3 col-3 my-auto mb-3"
                                                style={{ color: "#9B9B9B" }}
                                            >
                                                Email
                                            </div>
                                            <div className="col-md-8 col-9">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    style={{ height: 48 }}
                                                    aria-label="Sizing example input"
                                                    aria-describedby="inputGroup-sizing-lg"
                                                    name="email_seller"
                                                    value={data.email_seller}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div
                                                className="col-md-3 col-3 my-auto mb-3"
                                                style={{ color: "#9B9B9B" }}
                                            >
                                                Phone number
                                            </div>
                                            <div className="col-md-8 col-9">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    style={{ height: 48 }}
                                                    aria-label="Sizing example input"
                                                    aria-describedby="inputGroup-sizing-lg"
                                                    name="phone_seller"
                                                    value={data.phone_seller}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div
                                                className="col-md-3 col-3 mt-3 mb-3"
                                                style={{ color: "#9B9B9B" }}
                                            >
                                                Store description
                                            </div>
                                            <div className="col-md-8 col-9">
                                                <textarea
                                                    type="text"
                                                    className="form-control"
                                                    style={{ height: 118 }}
                                                    aria-label="Sizing example input"
                                                    aria-describedby="inputGroup-sizing-lg"
                                                    name="description_seller"
                                                    value={data.description_seller}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <input
                                            type="hidden"
                                            className="form-control"
                                            style={{ height: 48 }}
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-lg"
                                            name="phone_seller"
                                            value={data.role_seller}
                                            onChange={handleChange}
                                        />
                                        <div className="row mt-4">
                                            <div
                                                className="col-md-3 text-right my-auto mb-3"
                                                style={{ color: "#9B9B9B" }}
                                            ></div>
                                            <div className="col-md-3" style={{ color: "#9B9B9B" }}>
                                                <button
                                                    type="submit"
                                                    className="btn btn-danger rounded-pill mb-3"
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-12">
                                    <div className="col-md-12">
                                        <div className="mt-3">
                                            <img
                                                src={data.photo === "null" ? noimage : data.photo}
                                                style={{ width: 160, borderRadius: "50%" }}
                                                alt=""
                                            />
                                            {preview ? (
                                                <figure className="image">
                                                    <img src={preview} width={160} height={160} alt="product" />
                                                </figure>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                        <div className="row">
                                            <div className=" container text-center pt-3 ">
                                                <button
                                                    type="button"
                                                    className="btn border rounded-pill mb-3"
                                                    style={{ width: 226, color: "#9B9B9B" }}
                                                    data-toggle="modal"
                                                    data-target="#addressModal"
                                                >
                                                    <input type="file" onChange={handleUpload} style={{ width: 200, color: "#9B9B9B" }} />
                                                    {/* Select image */}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <div
                className="col-md-1"
                style={{ backgroundColor: "#F5F5F5" }}
            ></div> */}
        </>
    );
};

export default ProfileContent;