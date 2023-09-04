import React from "react";
import NavbarProfile from "../../components/navbar/navbarProfile";
import SideBarSeller from "../../components/sideBarSeller/sideBarSeller";
import ListProduct from "./content/listProduct";

const ProductSeller = () => {
  return (
    <>
      <NavbarProfile />
      <main>
        <section>
          <div className="row">
            <SideBarSeller />
            <ListProduct />
          </div>
        </section>
      </main>
    </>
  );
};
export default ProductSeller;