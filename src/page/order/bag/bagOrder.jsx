import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';

// import { Link } from "react-router-dom";

const BagOrder = () => {
    const [loading, setLoading] = useState(false);
    const [order, setOrder] = useState([]);
    useEffect(() => {
        getOrder()
    }, []);

    const getOrder = async () => {
        try {
            const id = await localStorage.getItem("id");
            await axios
                .get(`${process.env.REACT_APP_BASEURL}/order/${id}`)
                .then((response) => {
                    setOrder(response.data.data)
                })
            setLoading(true);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(true);
        }
    }

    const formatRp = (bilangan) => {
        var reverse = bilangan.toString().split("").reverse().join(""),
            ribuan = reverse.match(/\d{1,3}/g);
        ribuan = ribuan.join(".").split("").reverse().join("");
        return ribuan;
    };

    return (
        <>
            {loading ? order.map((item, index) => (
                <div
                    className="row mt-2 align-items-center"
                    key={index}
                    style={{
                        boxShadow: "0px 6px 40px 20px rgba(173, 173, 173, .25)",
                        borderRadius: 5
                    }}
                    id="border-big"
                >
                    <div className="col-md-1">
                        <input
                            className="form-check-input"
                            style={{ marginLeft: "20px" }}
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault"
                        />
                    </div>
                    <div className="col-md-7" id="detail-small">
                        <img
                            src={item.image_product}
                            crossOrigin="anonymous"
                            alt="product"
                            style={{
                                float: "left",
                                borderRadius: 8,
                                width: 69,
                                height: 59,
                                objectFit: "cover",
                                marginTop: "25px",
                            }}
                            className="mr-2"
                        />
                        <h6 style={{ paddingTop: 20, fontWeight: "bold" }}>
                            {item.name_product}
                        </h6>
                        <p style={{ fontSize: "small", marginTop: "10px" }}>
                            Rp. {item.total_order}
                        </p>
                    </div>
                    <div className="col-md-2 col-7">
                        <div className="color-groups d-flex align-items-center">
                            <div
                                className="color color-white"
                                style={{ fontSize: 20 }}
                            >
                                -
                            </div>
                            <div
                                className="color color ml-4"
                                style={{ fontSize: 16 }}
                            >
                                {item.quantity_order}
                            </div>
                            <div
                                className="color color-white ml-4"
                                style={{ fontSize: 20 }}
                            >
                                +
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-5 col-3">
                        <p
                            className="mt-3"
                            style={{
                                color: "#000000",
                                fontWeight: "bold",
                                textAlign: "left",
                            }}
                        >
                            Rp. {formatRp(item.total_order)}
                        </p>
                    </div>
                </div>
            )) : <Spinner animation="border" />}
        </>
    );
};

export default BagOrder;