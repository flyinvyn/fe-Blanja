// import axios from "axios";
import React from "react";
import SideBarSeller from "../../components/sideBarSeller/sideBarSeller";
import NavbarProfile from "../../components/navbar/navbarProfile";
import ProductCreateContent from "./content/productCreate";

const ProductCreate = () => {
//   let [photo, setPhoto] = useState(null);
//   let [product, setProduct] = useState({
//     name_product: "",
//     id_category: "",
//     stock_product: "",
//     price_product: "",
//     description_product: "",
//   });

//   let handleUpload = (e) => {
//     setPhoto(e.target.files[0]);
//   };

//   let handleChange = (e) => {
//     setProduct({
//       ...product,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name_product", product.name_product);
//     formData.append("id_category", product.id_category);
//     formData.append("stock_product", product.stock_product);
//     formData.append("price_product", product.price_product);
//     formData.append("image_product", photo);
//     formData.append("description_product", product.description_product);
//     axios
//       .post(`${process.env.REACT_APP_BACKEND}/product`, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       })
//       .then((response) => {
//         alert("product created");
//         window.location.reload();
//       })
//       .catch((error) => console.log(error));
//   };
  return (
    <>
      <NavbarProfile />
      <main>
        <section>
          <div className="row">
            <SideBarSeller />
            <ProductCreateContent />
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductCreate;