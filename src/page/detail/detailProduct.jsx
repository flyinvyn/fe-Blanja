import axios from "axios";
// import ProductReview from "./ProductReview/ProductReview";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RequireLogin from "../../auth/requireNavbar";
import { BsFillStarFill } from "react-icons/bs";
import '../detail/detail.css'
import Clicked from "./clicked/clicked";
import Spinner from 'react-bootstrap/Spinner';

const DetailProduct = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getDetail();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const getDetail = async () => {
        try {
            await axios
                .get(`${process.env.REACT_APP_BASEURL}/product/${id}`)
                .then((response) => setProducts(response.data.data))
                setLoading(true)
        } catch (e) {
            console.log(e);
        }finally{
            setLoading(true)
        }
    }

    return (
        <>
            <RequireLogin />
            {loading ? products.map((item, index) => (
                <main key={index}>
                    <section>
                        <div className="container">
                            <p className="" style={{ marginTop: 50 }}>
                                Home &gt; Category &gt;{item.name_category}
                            </p>
                        </div>
                    </section>
                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-3 mt-2">
                                    <div className="row">
                                        <div className="col">
                                            <img
                                                src={item.image_product}
                                                crossOrigin="anonymous"
                                                className="w-100"
                                                alt="Product"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-8">
                                    <h3>{item.name_product}</h3>
                                    <p style={{ color: "#9B9B9B" }}>{item.store_seller}</p>
                                    <div style={{ color: "#FFBA49" }}>
                                        <BsFillStarFill />
                                        <BsFillStarFill />
                                        <BsFillStarFill />
                                        <BsFillStarFill />
                                        <BsFillStarFill />
                                    </div>
                                    <div className="price">
                                        <p style={{ margin: "20px 0 -5px 0", color: "#9B9B9B" }}>Price</p>
                                        <h4 className="fw-bold fs-3 mt-2">
                                            Rp. {item.price_product}
                                        </h4>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <p
                                            className="font-weight-bold ms-1 mt-4 mb-4"
                                            style={{ color: "black" }}
                                        >
                                            Color
                                        </p>
                                        <div className="d-flex">
                                            <button className="color-black"></button>
                                            <button className="color-red ml-3"></button>
                                            <button className="color-blue ml-3"></button>
                                            <button className="color-green ml-3"></button>
                                        </div>
                                    </div>
                                    <Clicked />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container">
                            <h2 className="mt-5 fw-bold fs-3">Informasi Produk</h2>
                            <div className="condition mt-5">
                                <h3 className="fw-bold fs-4">Condition</h3>
                                <h4 style={{ color: "#DB3022" }}>New</h4>
                            </div>
                            <div className="descirpiton">
                                <h3 className="fw-bold fs-4 mt-5">Description</h3>
                                <p>{item.description_product}</p>
                            </div>
                        </div>
                    </section>
                </main>
            )) : <Spinner animation="border" />}
        </>
    );
}

export default DetailProduct;