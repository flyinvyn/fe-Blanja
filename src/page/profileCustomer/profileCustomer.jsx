import RequireLogin from "../../auth/requireNavbar";
import SidebarCustomer from "../../components/sideBarSeller/sidebarCustomer";
import Profile from "./content/profile";


const ProfileCustomer = () => {
  return (
    <>
        <RequireLogin />
        <main>
          <section>
            <div className="row">
              <SidebarCustomer />
              <Profile />
            </div>
          </section>
        </main>
    </>
  );
};

export default ProfileCustomer;