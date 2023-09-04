import NavbarProfile from "../../components/navbar/navbarProfile";
import SideBarSeller from "../../components/sideBarSeller/sideBarSeller";
const Products = () => {
  return (
    <>
      <NavbarProfile />
      <main>
        <section>
          <div className="row">
            <SideBarSeller />
            {/* <ProductCreate /> */}
          </div>
        </section>
      </main>
    </>
  );
};

export default Products;