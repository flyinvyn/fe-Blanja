import axios from "axios";
import React, {  useState } from "react";
import Swal from "sweetalert2";

const ModalCreateAddress = () => {
  const getId = localStorage.getItem("id");

  const [address, setAddress] = useState({
    name_address: "",
    street_address: "",
    phone_address: "",
    postal_address: "",
    city_address: "",
    place_address: "",
    id_user: getId,
  });

  let handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BASEURL}/address`, address)
      .then((res) => {
        Swal.fire({
          title: "New Addres Added",
          icon: "success",
        });
        setTimeout(function () {
          window.location.reload(1);
        }, 2000);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
    <>
      {" "}
      <form onSubmit={handleSubmit}>
        <div
          className="modal fade"
          id="addressModal"
          tabIndex={-1}
          aria-labelledby="addressModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addressModalLabel">
                  Add new address
                </h5>
                <button
                  type="button"
                  className="close mr-1"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-1" />
                  <div className="col-md-10">
                    <div className="form-group">
                      <p className="form-font">
                        Save address as (ex : home address, office address)
                      </p>
                      <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput2"
                        placeholder="Rumah"
                        name="place_address"
                        value={address.place_address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-1" />
                </div>
                <div className="row">
                  <div className="col-md-1" />
                  <div className="col-md-5">
                    <div className="form-group">
                      <p className="form-font">Recipient’s name</p>
                      <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput2"
                        placeholder=""
                        name="name_address"
                        value={address.name_address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="form-group">
                      <p className="form-font">Recipient's telephone number</p>
                      <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput2"
                        placeholder=""
                        name="phone_address"
                        value={address.phone_address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-1" />
                </div>
                <div className="row">
                  <div className="col-md-1" />
                  <div className="col-md-5">
                    <div className="form-group">
                      <p className="form-font">Address</p>
                      <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput2"
                        placeholder=""
                        name="street_address"
                        value={address.street_address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="form-group">
                      <p className="form-font">Postal Code</p>
                      <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput2"
                        placeholder=""
                        name="postal_address"
                        value={address.postal_address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-1" />
                </div>
                <div className="row">
                  <div className="col-md-1" />
                  <div className="col-md-5">
                    <div className="form-group">
                      <p className="form-font">City or Subdistrict</p>
                      <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput2"
                        placeholder=""
                        name="city_address"
                        value={address.city_address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-1" />
                </div>
                <input
                  type="hidden"
                  name="id_user"
                  value={getId}
                  onChange={handleChange}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn border rounded-pill"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" className="btn rounded-pill btn-danger">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ModalCreateAddress;