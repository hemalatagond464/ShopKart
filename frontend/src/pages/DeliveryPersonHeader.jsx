import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeliveryPersonHeader = () => {

 // const user = JSON.parse(sessionStorage.getItem("active-delivery"));
  
  const userLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-delivery");
    window.location.reload(true);
    setTimeout((navigator('./pages/HomePage')),1000);
  };

  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5 text-color">
      <li className="nav-item">
        <Link
          to="/user/delivery/myorders"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">My Deliveries</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/user/admin/searchOrder"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Update Order Delivery</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/"
          className="nav-link active"
          aria-current="page"
          onClick={userLogout}
        >
          <b className="text-color">Logout</b>
        </Link>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default DeliveryPersonHeader;
