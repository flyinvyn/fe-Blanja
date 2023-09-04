import axios from "axios";
import React, { useEffect, useState } from "react";
import noimage from '../../../assets/image/noimage.png'
import Swal from "sweetalert2";

const Profile = () => {
  const getRole = localStorage.getItem('role_user')
  const [data, setData] = useState({
    fullname_user: "",
    email_user: "",
    phone_number: "",
    role_user: getRole,
  });
  // const [users, setUsers] = useState({
  //   fullname_user: "",
  //   email_user: "",
  //   phone_number: "",
  //   role_user: getRole,
  // })
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };
  useEffect(() => {
    const getCustomer = localStorage.getItem("id");
    axios
      .get(`${process.env.REACT_APP_BASEURL}/customer/${getCustomer}`)
      .then((response) => setData(response.data.data[0]))
    setLoading(true)
    // .catch((error) => console.log(error));
  }, []);

  const [preview, setPreview] = useState("");
  const [photo, setPhoto] = useState(null)
  const handleUpload = (e) => {
    const image = e.target.files[0];
    setPhoto(image);
    setPreview(URL.createObjectURL(image));
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

  const getCustomer = localStorage.getItem("id");
  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname_user", data.fullname_user);
    formData.append("email_user", data.email_user);
    formData.append("phone_number", data.phone_number);
    formData.append("role_user", data.role_user);
    formData.append("photo", photo);
    await axios
      .put(`${process.env.REACT_APP_BASEURL}/customer/update/${getCustomer}`, formData)
      .then((response) => {
        setData(response);
        window.location.reload();
        Toast.fire({
          title: "Profile Changed",
          icon: "success",
      });
      })
      .catch((error) => console.log(error));
  };

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
      <>
        <div
          className="col-md-8 col-12"
          style={{ backgroundColor: "#F5F5F5", marginLeft: "right" }}
        >
          <div
            className="col-md-12 border container"
            style={{
              marginTop: 124,
              backgroundColor: "#FFF",
              borderRadius: 4,
              border: "1px solid #9B9B9B",
            }}
          >
            <div className=" col-md-12 border-bottom mt-3 ">
              <h4 className="font-weight-bold pt-2">My Profile</h4>
              <p>Manage your profile information</p>
            </div>
            <form onSubmit={handleUpdate}>
              <div className="row">
                {/* <div className="col-md-12">
                <div className="col-md-8 "> */}
                <div className="col-md-8 col-12 mt-5">
                  <div className="row">
                    <div
                      className="col-md-3 col-3  text-right my-auto mb-3"
                      style={{ color: "#9B9B9B" }}
                    >
                      Name
                    </div>
                    <div className="col-md-8 col-9">
                      <input
                        type="text"
                        className="form-control"
                        style={{ height: 48 }}
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-lg"
                        name="fullname_user"
                        value={isLoading ? "Loading..." : data.fullname_user}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div
                      className="col-md-3 col-3 text-right my-auto mb-3"
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
                        name="email_user"
                        value={isLoading ? "Loading..." : data.email_user}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div
                      className="col-md-3 col-3 text-right my-auto mb-3"
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
                        name="phone_number"
                        value={isLoading ? "Loading..." : data.phone_number}
                        onChange={handleChange}
                      />
                      <input
                        type="hidden"
                        className="form-control"
                        style={{ height: 48 }}
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-lg"
                        name="role_user"
                        value={data.role_user}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div
                      className="col-md-3 col-3 text-right my-auto mb-3"
                      style={{ color: "#9B9B9B" }}
                    >
                      Gender
                    </div>
                    <div className="col-md-8 col-9">
                      <div className="row ml-1">
                        <div className="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            id="customRadioInline1"
                            name="customRadioInline1"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customRadioInline1"
                            style={{ color: "#9B9B9B" }}
                          >
                            Male
                          </label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            id="customRadioInline2"
                            name="customRadioInline1"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customRadioInline2"
                            style={{ color: "#9B9B9B" }}
                          >
                            Female
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div
                      className="col-md-3 col-3 text-right my-auto mb-3"
                      style={{ color: "#9B9B9B" }}
                    >
                      Date of birth
                    </div>
                    <div
                      className="col-md-2 col-3 text-right my-auto mb-3"
                      style={{ color: "#9B9B9B" }}
                    >
                      <select
                        className="custom-select custom-select-lg mb-3"
                        style={{ fontSize: 14 }}
                      >
                        <option selected="">Day</option>
                        <option>1</option>
                      </select>
                    </div>
                    <div
                      className="col-md-2 col-3 text-right my-auto mb-3"
                      style={{ color: "#9B9B9B" }}
                    >
                      <select
                        className="custom-select custom-select-lg mb-3"
                        style={{ fontSize: 14 }}
                      >
                        <option selected="">Month</option>
                        <option value={1}>Agustus</option>
                      </select>
                    </div>
                    <div
                      className="col-md-2 col-3 text-right my-auto mb-3"
                      style={{ color: "#9B9B9B" }}
                    >
                      <select
                        className="custom-select custom-select-lg mb-3"
                        style={{ fontSize: 14 }}
                      >
                        <option selected="">Year</option>
                        <option value={1}>2000</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div
                      className="col-md-3 text-right my-auto mb-3"
                      style={{ color: "#9B9B9B" }}
                    ></div>
                    <div className="col-md-3" style={{ color: "#9B9B9B" }}>
                      <button
                        type="submit"
                        className="btn btn-danger rounded-pill btn-cm"
                      >
                        Save
                      </button>
                    </div>
                  </div>

                </div>

                <div className="col-md-4 col-12">
                  {/* <div className="col-md-12"> */}
                  {/* <div className="row mt-2">
                    </div> */}
                  <div className="mt-3">
                    <img
                      src={data.photo === "null" ? noimage : data.photo}
                      style={{ width: 160, borderRadius: "50%" }}
                      alt=""
                    />
                    {preview ? (
                      <figure className="image is-128x128">
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
                  {/* </div> */}
                  {/* </div> */}
                  {/* </div>  */}
                </div>
              </div>
            </form>
          </div>
        </div>
        <div
          className="col-md-1 vhhp"
          style={{ backgroundColor: "#F5F5F5" }}
        ></div>
      </>
    </>
  );
};

export default Profile;