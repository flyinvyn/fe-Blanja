// import axios from "axios";
import RequireLogin from "../../auth/requireNavbar";
import BagOrder from "./bag/bagOrder";
import BagTotal from "./bag/bagTotal";
// import Swal from "sweetalert2";

const MyBag = () => {
  // const Toast = Swal.mixin({
  //   toast: true,
  //   position: "bottom-end",
  //   showConfirmButton: false,
  //   timer: 2000,
  //   timerProgressBar: true,
  //   didOpen: (toast) => {
  //     toast.addEventListener("mouseenter", Swal.stopTimer);
  //     toast.addEventListener("mouseleave", Swal.resumeTimer);
  //   },
  // });
  // const handleDelete = (e) => {
  //   e.preventDefault()
  //   axios.delete(`${process.env.REACT_APP_BASEURL}/order`)
  //     .then(() => {
  //       Toast.fire({
  //         title: "Order Delete",
  //         icon: "success",
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }
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
                    Select all items (2 items selected)
                  </p>
                </div>
                <div className="col-md-2 col-2">
                  <button
                    className="mt-3"
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
              <BagOrder />
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