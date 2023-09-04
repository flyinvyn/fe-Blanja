import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';

const CheckoutCard = () => {
    const [loading, setLoading] = useState(false);
    const [order, setOrder] = useState([]);
    useEffect(() => {
        getOrder();
    }, []);

    const getOrder = async () => {
        try {
            const id = localStorage.getItem("id");
            await axios
                .get(`${process.env.REACT_APP_BASEURL}/order/${id}`)
                .then((response) => setOrder(response.data.data))
                setLoading(true)
        } catch (e) {
            console.log(e);
        }finally{
            setLoading(true)
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
                    key={index}
                    className="row mt-2 metropolis"
                    style={{
                        boxShadow: "0px 6px 40px 20px rgba(173, 173, 173, .25)",
                        borderRadius: 5,
                    }}
                    id="border-big"
                >
                    <div className="col-md-10" id="detail-small-right">
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
                                margin: "10px 0px",
                            }}
                            className="mr-2"
                        />
                        <h6 style={{ paddingTop: 20 }}>
                            {item.name_product}
                        </h6>
                        <p style={{ fontSize: "small", marginTop: "10px" }}>
                            Qty: {item.quantity_order}
                        </p>
                    </div>
                    <div className="col-md-2 ">
                        <p
                            className="mt-4"
                            style={{
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

export default CheckoutCard;