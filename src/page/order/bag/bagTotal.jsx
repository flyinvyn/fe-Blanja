import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';

const BagTotal = () => {
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

  const calculateTotal = () => {
    let totalOrderCart = 0;
    loading ? order.map((item) => (totalOrderCart += item.total_order)) : <Spinner animation="border" /> ;
    return totalOrderCart;
  };

  const formatRp = (bilangan) => {
    var reverse = bilangan.toString().split("").reverse().join(""),
      ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join(".").split("").reverse().join("");
    return ribuan;
  };
  return (
    <>
      <div className="col-md-4" id="border-right-big">
        <div
          className="col-md-12 mt-2"
          id="border-right-inside-big"
          style={{
            boxShadow: "0px 6px 40px 20px rgba(173, 173, 173, .25)",
            borderRadius: 5,
          }}
        >
          <div className="row">
            <div className="col-md-12 ">
              <p
                style={{
                  paddingTop: 15,
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Shopping summary
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7 col-6">
              <p
                style={{
                  paddingTop: 15,
                  color: "#9B9B9B",
                  fontWeight: "bold",
                }}
              >
                Total price
              </p>
            </div>
            <div className="col-md-5 col-6">
              <p
                style={{
                  color: "#000000",
                  fontWeight: "bold",
                  textAlign: "right",
                  padding: "15px 10px 0 0",
                }}
              >
                Rp. {formatRp(calculateTotal())}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Link to={"/checkout"}>
                <button
                  type="button"
                  className="btn btn-danger rounded-pill w-100 mb-3"
                  id="btn-danger-small"
                >
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BagTotal;