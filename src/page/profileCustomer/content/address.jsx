import axios from "axios";
import { useEffect, useState } from "react";
import ModalCreateAddress from "../../../modal/modalCreateAddress";

const AddressContent = () => {
  const [address, setAddress] = useState([]);

  useEffect(() => {
    const getId = localStorage.getItem("id");
    axios
      .get(`${process.env.REACT_APP_BASEURL}/address/${getId}`)
      .then((response) => setAddress(response.data.data))
      setLoading(true)
      // .catch((error) => console.log(error));
  }, []);

  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);
  return (
    <>
      <div
        className="col-md-8 col-12 vhhp"
        style={{ backgroundColor: "#F5F5F5", marginLeft: "right" }}
      >
        <div
          className="col-md-12 border container-fluid vhhy"
          style={{
            marginTop: 124,
            backgroundColor: "#FFF",
            borderRadius: 4,
            border: "1px solid #9B9B9B",
          }}
        >
          <div className=" col-md-12 border-bottom mt-3 ">
            <h4 className="font-weight-bold pt-2">Choose another address</h4>
            <p>Manage your shipping address</p>
          </div>
          <div className="col-md-12 mt-5">
            <div className="row">
              <button
                type="button"
                className="btn btn-primary btn-modal container-fluid p-3"
                data-toggle="modal"
                data-target="#addressModal"
                style={{
                  backgroundColor: "transparent",
                  color: "#9B9B9B",
                  border: "1px dashed",
                }}
              >
                Add New Address
              </button>
            </div>
          </div>
          {isLoading ? "Loading..." : address.map((item) => (
            <div className="col-md-12 mt-5">
              <div
                className="row"
                style={{ borderRadius: 4, border: "1px solid red" }}
              >
                <div className="col-md-12">
                  <p
                    style={{ fontWeight: "bold", color: "black" }}
                    className="mt-2 mb-1"
                  >
                    {item.place_address}
                  </p>
                  <p
                    style={{ fontWeight: "bold", color: "black" }}
                    className="mb-0"
                  >
                    {item.name_address}
                  </p>
                  <p style={{ color: "black" }} className="mb-0">
                    {" "}
                    {item.phone_address}
                  </p>
                  <p style={{ color: "black" }} className="mb-1">
                    {" "}
                    {item.street_address} {item.postal_address}{" "}
                    {item.city_address}
                  </p>
                  <ModalCreateAddress
                    id_address={item.id_address}
                    name_address={item.name_address}
                    place_address={item.place_address}
                    phone_address={item.phone_address}
                    street_address={item.street_address}
                    postal_address={item.postal_address}
                    city_address={item.city_address}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="col-md-1 vhhp"
        style={{ backgroundColor: "#F5F5F5" }}
      ></div>
    </>
  );
};

export default AddressContent;