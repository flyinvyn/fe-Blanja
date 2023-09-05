// import axios from "axios";
import { useEffect, useState } from "react";
import RequireLogin from "../../auth/requireNavbar";
// import BagOrder from "./bag/bagOrder";
import BagTotal from "./bag/bagTotal";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';
import Swal from "sweetalert2";

const MyBag = () => {
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState([]);
  useEffect(() => {
    getOrder()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const id = localStorage.getItem("id");
  const getOrder = async () => {
    try {
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

  const deleteOrder = () => {
    axios.delete(`${process.env.REACT_APP_BASEURL}/order/${id}`)
      .then(() => {
        Toast.fire({
          title: "Order Deleted",
          icon: "success",
        });
      })
    // window.location.reload()
      .catch((err) => {
        console.log(err);
      })
  }

  const formatRp = (bilangan) => {
    var reverse = bilangan.toString().split("").reverse().join(""),
      ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join(".").split("").reverse().join("");
    return ribuan;
  };

  const data = order.length;

  return (
    <>
      <RequireLogin />
      <main className="container">
        <section>
          <div>
            <h3 style={{ fontWeight: "bold", marginTop: "50px" }}>
              My bag
            </h3>
          </div>
        </section>
        <section>
          <div className="row">
            <div className="col-md-8">
              <div
                className="row mt-2"
                style={{
                  boxShadow: "0px 6px 40px 20px rgba(225, 225, 225, .90)",
                  borderRadius: 5,
                }}
                id="border-big"
              >
                <div className="col-md-1">
                  <input
                    className="form-check-input"
                    style={{ margin: "20px 20px" }}
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckDefault"
                  />
                </div>
                <div className="col-md-9 col-9">
                  <p
                    style={{
                      paddingTop: 15,
                      color: "black",
                      fontWeight: "bold",
                    }}
                    id="p-small"
                  >
                    Select all items ({data} items selected)
                  </p>
                </div>
                <div className="col-md-2 col-2">
                  <button
                    className="mt-3"
                    onClick={deleteOrder}
                    style={{
                      color: "#DB3022",
                      fontWeight: "bold",
                      textAlign: "right",
                      backgroundColor: "transparent",
                      border: "none"
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
              {/* <BagOrder /> */}
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
                      Rp. {formatRp(item.total_order)}
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
            </div>
            <BagTotal />
            <div className="row"></div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MyBag;