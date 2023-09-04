// import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { updateProductActions } from "../config/redux/action/productAction";

const ModalUpdate = ({
  id_product,
  id_category,
  id_seller,
  name_product,
  price_product,
  description_product,
  stock_product,
  image_product,
}) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [file, setFile] = useState("");
  const handleShow = () => setShow(true);
  const [preview, setPreview] = useState("");
//   let [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    id_category,
    id_seller,
    name_product,
    price_product,
    stock_product,
    description_product,
  });

  console.log(product);

  let handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProductActions(id_product, product, file, handleClose));
  };

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Update
      </Button>
      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Update Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                name="name_product"
                class="form-control"
                placeholder="name"
                value={product.name_product}
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <label for="name">Category</label>
              <input
                type="text"
                name="id_category"
                class="form-control"
                placeholder="id Category"
                value={product.id_category}
                onChange={handleChange}
              />
              <input
                type="hidden"
                name="id_seller"
                class="form-control"
                value={product.id_seller}
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <label for="price">Price</label>
              <input
                type="text"
                name="price_product"
                class="form-control"
                value={product.price_product}
                placeholder="price"
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <label for="stock">Stock</label>
              <input
                type="text"
                name="stock_product"
                class="form-control"
                value={product.stock_product}
                placeholder="stock"
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              <label for="name">Description Product</label>
              <input
                type="text"
                name="description_product"
                class="form-control"
                placeholder="Description Product"
                value={product.description_product}
                onChange={handleChange}
              />
            </div>
            <div class="form-group">
              {preview ? (
                <figure className="image is-128x128">
                  <img src={preview} alt="product" />
                </figure>
              ) : (
                ""
              )}
              <label for="name">Image Product</label>
              <input
                type="file"
                name="image_product"
                class="form-control"
                value={product.image_product}
                onChange={loadImage}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" className="btn-success">
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default ModalUpdate;