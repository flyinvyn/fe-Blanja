import axios from "axios";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
});

export const createProductAction = (product, photo) => async (dispatch) => {
    try {
        const formData = new FormData();
        formData.append("name_product", product.name_product);
        formData.append("id_seller", product.id_seller);
        formData.append("id_category", product.id_category);
        formData.append("stock_product", product.stock_product);
        formData.append("price_product", product.price_product);
        formData.append("image_product", photo);
        formData.append("description_product", product.description_product);
        const products = await axios.post(
            `${process.env.REACT_APP_BASEURL}/product`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        const result = products.data.data;
        dispatch({ type: "CREATE_PRODUCT", payload: result });
        Toast.fire({
            title: "Create product success.",
            icon: "success",
        }).then(function () {
            // Redirect the user
              window.location.reload()
        });
    } catch (error) { }
};


export const getProductAction = () => async (dispatch) => {
    try {
        const products = await axios.get(
            `${process.env.REACT_APP_BASEURL}/product`
        );
        const result = products.data.data;
        dispatch({ type: "GET_ALL_PRODUCT", payload: result });
    } catch (err) {
        console.log(err);
    }
};


export const updateProductActions =
  (id_product, product, file, handleClose) => async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("name_product", product.name_product);
      formData.append("id_category", product.id_category);
      formData.append("id_seller", product.id_seller);
      formData.append("stock_product", product.stock_product);
      formData.append("price_product", product.price_product);
      formData.append("image_product", file);
      formData.append("description_product", product.description_product);
      const products = await axios.put(
        `${process.env.REACT_APP_BASEURL}/product/${id_product}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const result = products.data.data;
      dispatch({ type: "UPDATE_PRODUCT", payload: result });
      handleClose();
      Toast.fire({
        title: "Product update success.",
        icon: "success",
    });
      setTimeout(function () {
        window.location.reload(1);
      }, 2000);
    } catch (error) {}
  };

  export const deleteProductAction = (id_product, setShow) => async (dispatch) => {
    try {
        const product = await axios.delete(`${process.env.REACT_APP_BASEURL}/product/${id_product}`)
        Toast.fire({
          title: "Product deleted.",
          icon: "success",
      });
        setShow(false)
        window.location.reload()
        const result = product.data.data
        dispatch({ type: "DELETE_PRODUCT", payload: result });

    } catch (error) {
        alert(error);
        setShow(false)
    }
}

