import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SellerHeader = () => {
  const user = JSON.parse(sessionStorage.getItem("active-admin"));
  console.log(user);

  const adminLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-seller");
    window.location.reload(true);

    setTimeout((navigator('./pages/HomePage')),1000);
  };

  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">

      <li className="nav-item">
        <Link to="/addcategory" className="nav-link active" aria-current="page">
          <b className="text-color"> Add Category</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/addproduct" className="nav-link active" aria-current="page">
          <b className="text-color">Add Product</b>
        </Link>
      </li>


      <li className="nav-item">
        <Link
          to="/"
          className="nav-link active"
          aria-current="page"
          onClick={adminLogout}
        >
          <b className="text-color">Logout</b>
        </Link>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default SellerHeader;
