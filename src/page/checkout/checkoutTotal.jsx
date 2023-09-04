import axios from "axios";
import React, { useEffect, useState } from "react";
import ModalPayment from "../../modal/modalPayment";
import Spinner from 'react-bootstrap/Spinner';

const CheckOutTotal = () => {
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState([]);
  useEffect(() => {
    getTotal();
  }, []);

  const getTotal = async () => {
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

  const calculateTotal = () => {
    let totalOrderCart = 0;
    order.map((item) => (totalOrderCart += item.total_order));
    return totalOrderCart;
  };

  const formatRp = (bilangan) => {
    var reverse = bilangan.toString().split("").reverse().join(""),
      ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join(".").split("").reverse().join("");
    return ribuan;
  };

  let Delivery = 25000;

  return (
    <>
      <div className="col-md-4 metropolis" id="border-right-big ">
        <div
          className="col-md-12 mt-2"
          id="border-right-address-inside-big"
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
              <p style={{ color: "#9B9B9B", fontWeight: "500" }}>Order</p>
            </div>
            <div className="col-md-5 col-6">
              <p
                style={{
                  color: "#000000",
                  fontWeight: "bold",
                  textAlign: "right",
                  padding: "0 10px 0 0",
                }}
              >
                Rp. {loading ? formatRp(calculateTotal()) : <Spinner animation="border" />}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7 col-6">
              <p style={{ color: "#9B9B9B", fontWeight: "500" }}>Delivery</p>
            </div>
            <div className="col-md-5 col-6">
              <p
                style={{
                  color: "#000000",
                  fontWeight: "bold",
                  textAlign: "right",
                  padding: "0 10px 0 0",
                }}
              >
                Rp. {formatRp(Delivery)}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7 col-7">
              <hr style={{ width: "109%" }} />
              <p style={{ color: "black", fontWeight: "bold" }}>
                Shopping summary
              </p>
            </div>
            <div className="col-md-5 col-5">
              <hr style={{ width: "100%" }} />
              <p
                style={{
                  color: "#000000",
                  fontWeight: "bold",
                  textAlign: "right",
                  padding: "0 10px 0 0",
                }}
              >
                Rp. {formatRp(Delivery + calculateTotal())}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <button
                type="button"
                className="btn btn-danger rounded-pill w-100 mb-4"
                data-toggle="modal"
                id="btn-danger-small"
                data-target="#paymentModel"
              >
                Select payment
              </button>
              {/* Modal */}
              <div
                className="modal fade"
                id="paymentModel"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="paymentModelLabel"
                aria-hidden="true"
              >
                <ModalPayment />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOutTotal;