import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import '../detail.css'

const Clicked = () => {
    const { id } = useParams();
    const getUserId = localStorage.getItem("id");
    const getToken = localStorage.getItem("token");
    const [data, setData] = useState({
        id_product: id,
        quantity_order: "",
        id_user: getUserId,
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
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
    const handleCreateOrder = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_BASEURL}/order`, data).then((res) => {
            if (res.data.statusCode === 201) {
                Toast.fire({
                    title: "Order Created",
                    icon: "success",
                });
            } else {
                Toast.fire({
                    title: "Order Created Error",
                    icon: "error",
                });
            }
        });
    };

    return (
        <>
            <form >
                <div style={{ display: "flex" }}>
                    <div className="mb-5">
                        <p style={{ fontWeight: "bold", color: "black", marginTop: 20, }}> Size </p>
                        <div className="d-flex align-items-center">
                            <button className="button"> - </button>
                            <input
                                className="content"
                                placeholder="XL"
                            />
                            <button className="button"> + </button>
                        </div>
                    </div>
                    <div className="left">
                        <p style={{ fontWeight: "bold", color: "black", marginTop: 20, }}> Jumlah </p>
                        <div className="d-flex align-items-center">
                            <button className="button" > - </button>
                            <input
                                className="content"
                                placeholder="1"
                                name="quantity_order"
                                value={data.quantity_order}
                                onChange={handleChange}
                            />
                            <button className="button"> + </button>
                        </div>
                    </div>
                </div>
                <div className="buttons d-flex mt-3 metropolis">
                    <button
                        type="button"
                        className="Btn rounded-pill mr-2"
                        style={{ width: 160, height: 48,backgroundColor:"#ffffff",border:"1px solid black" }}
                    >
                        Chat
                    </button>
                    <button
                        type="button"
                        className="Btn rounded-pill mr-2"
                        style={{ width: 160, height: 48,backgroundColor:"#ffffff",border:"1px solid black" }}
                        onClick={!getToken ? Toast.fire({
                            title: "You need to log in to use this feature.",
                            icon: "error"
                        }) : handleCreateOrder}
                    >
                        Add Bag
                    </button>
                    <button
                        type="submit"
                        className="btn btn-danger rounded-pill mr-2"
                        style={{ width: 343, height: 48, backgroundColor: "#DB3022" }}
                    >
                        Buy Now
                    </button>
                </div>
            </form>
        </>
    );
};

export default Clicked;