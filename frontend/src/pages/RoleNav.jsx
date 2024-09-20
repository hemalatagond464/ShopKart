import AdminHeader from "./AdminHeader";
import DeliveryPersonHeader from "./DeliveryPersonHeader";
import HeaderUser from "./HeaderUser";
import NormalHeader from "./NormalHeader";
import SellerHeader from "./SellerHeader";

const RoleNav = () => {
  const user = JSON.parse(sessionStorage.getItem("active-user"));
  const admin = JSON.parse(sessionStorage.getItem("active-admin"));
  const deliveryPerson = JSON.parse(sessionStorage.getItem("active-delivery"));
  const seller = JSON.parse(sessionStorage.getItem("active-seller"));

  if (user != null) {
    return <HeaderUser />;
  } else if (admin != null) {
    return <AdminHeader />;
  } else if (deliveryPerson != null) {
    return <DeliveryPersonHeader />;
  }
  else if (seller != null) {
    return <SellerHeader />;
  } else {
    return <NormalHeader />;
  }
};

export default RoleNav;
