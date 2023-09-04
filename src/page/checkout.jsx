import React from "react";
import RequireLogin from "../auth/requireNavbar";
import Address from "./checkout/address";
import CheckoutCard from "./checkout/checkoutCard";
import CheckOutTotal from "./checkout/checkoutTotal";

const Checkout = () => {
  return (
    <>
      <RequireLogin />
      <main className="container">
        <section>
          <div>
            <h3 className="h1-small" style={{ fontWeight: "bold",marginTop:"50px" }}>
              Checkout
            </h3>
            <p
              style={{
                fontSize: 16,
                marginTop: "-10px",
                fontWeight: "bold",
                color: "black",
                marginBottom: 0,
              }}
            >
              Shipping Adress
            </p>
          </div>
        </section>
        <section>
          <div className="row">
            <div className="col-md-8">
              <div
                className="row mt-2"
                style={{
                  boxShadow: "0px 6px 40px 20px rgba(173, 173, 173, .25)",
                  borderRadius: 5,
                }}
                id="border-big"
              >
                <Address /> 
              </div>
              <CheckoutCard /> 
            </div>
            <CheckOutTotal />
          </div>
        </section>
      </main>
    </>
  );
};

export default Checkout;