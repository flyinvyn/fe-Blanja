import NavbarProfile from "../../components/navbar/navbarProfile";
import SideBarSeller from "../../components/sideBarSeller/sideBarSeller";
import ProfileContent from "./content/profileContent";
const ProfileSeller = () => {
  return (
    <>
      <NavbarProfile />
      <main>
        <section>
          <div className="row">
            <SideBarSeller />
            <ProfileContent />
          </div>
        </section>
      </main>
    </>
  );
};

export default ProfileSeller;