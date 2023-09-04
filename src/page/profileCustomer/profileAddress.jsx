import RequireLogin from "../../auth/requireNavbar";
import SidebarCustomer from "../../components/sideBarSeller/sidebarCustomer";
import ModalCreateAddress from "../../modal/modalCreateAddress";
import AddressContent from "./content/address";


const CustomerAddress = () => {
  return (
    <>
      <RequireLogin />
      <main>
        <section>
          <div className="row">
            <SidebarCustomer />
            <AddressContent />
          </div>
        </section>
        <ModalCreateAddress />
      </main>
    </>
  );
};
export default CustomerAddress;