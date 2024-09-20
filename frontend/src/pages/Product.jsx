import GetAllCategories from "../productComponent/GetAllCategories";
import CategoryNavigator from "../productComponent/CategoryNavigator";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../productComponent/ProductCard";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../index.css"

const Product = () => {
  const { productId, categoryId } = useParams();
  let navigate = useNavigate();

  let user = JSON.parse(sessionStorage.getItem("active-user"));

  const [quantity, setQuantity] = useState("");

  const [products, setProducts] = useState([]);

  const [product, setProduct] = useState({
    id: "",
    title: "",
    description: "",
    quantity: "",
    price: "",
    imageName: "",
    category: { id: "", title: "" },
  });

  const retrieveProduct = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/product/id?productId=" + productId
    );

    return response.data;
  };

  useEffect(() => {
    const getProduct = async () => {
      const retrievedProduct = await retrieveProduct();

      setProduct(retrievedProduct.products[0]);
    };

    const getProductsByCategory = async () => {
      const allProducts = await retrieveProductsByCategory();
      if (allProducts) {
        setProducts(allProducts.products);
      }
    };

    getProduct();
    getProductsByCategory();
  }, [productId]);

  const retrieveProductsByCategory = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/product/category?categoryId=" + categoryId
    );
    console.log(response.data);
    return response.data;
  };

  const saveProductToCart = (userId) => {
    fetch("http://localhost:8080/api/user/cart/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: quantity,
        userId: userId,
        productId: productId,
      }),
    })
      .then((result) => {
        result.json().then((res) => {
          if (res.success) {
            toast.success(res.responseMessage, {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });

            setTimeout(() => {
              navigate("/user/mycart");
            }, 2000); // Redirect after 3 seconds
          } else if (!res.success) {
            toast.error(res.responseMessage, {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setTimeout(() => {
              window.location.reload(true);
            }, 2000); // Redirect after 3 seconds
          } else {
            toast.error("It Seems Server is down!!!", {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setTimeout(() => {
              window.location.reload(true);
            }, 2000); // Redirect after 3 seconds
          }
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error("It seems server is down", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          window.location.reload(true);
        }, 1000); // Redirect after 3 seconds
      });
  };

  const addToCart = (e) => {
    if (user == null) {
      alert("Please login as Customer to buy the products!!!");
      e.preventDefault();
    } else {
      saveProductToCart(user.id);
      setQuantity("");
      e.preventDefault();
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-2 mt-2">
          <GetAllCategories />
        </div>
        <div className="col-sm-3 mt-2 admin">
          <div className="card form-card border-color custom-bg">
            <img
              //src={"http://localhost:8080/api/product/" + product.imageName}
              src={`/images/${product.imageName}`} 
              style={{
                maxHeight: "500px",
                maxWidth: "100%",
                width: "auto",
              }}
              className="card-img-top rounded mx-auto d-block m-2"
              alt="img"
            />
          </div>
        </div>
        <div className="col-sm-7 mt-2">
          <div className="card form-card border-color custom-bg">
            <div className="card-header bg-color">
              <div className="d-flex justify-content-between">
                <h1 className="custom-bg-text">{product.title}</h1>
              </div>
            </div>

            <div className="card-body text-left text-color">
              <div className="text-left mt-3">
                <h3>Description :</h3>
              </div>
              <h4 className="card-text">{product.description}</h4>
            </div>

            <div className="card-footer custom-bg">
              <div className="text-center text-color">
                <p>
                  <span>
                    <h4>Price : &#8377;{product.price}</h4>
                  </span>
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <form className="row g-3" onSubmit={addToCart}>
                    <div className="col-auto">
                      <input
                        type="number"
                        className="form-control"
                        id="addToCart"
                        placeholder="Enter Quantity..."
                        onChange={(e) => setQuantity(e.target.value)}
                        value={quantity}
                        required
                      />
                    </div>
                    <div className="col-auto">
                      <input
                        type="submit"
                        className="btn bg-color custom-bg-text mb-3"
                        value="Add to Cart"
                        disabled={user && user.role === "Seller"}
                      />
                      <ToastContainer />
                    </div>
                  </form>
                </div>

                <p className="ml-2 text-color">
                  <b>Stock : {product.quantity}</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-sm-2"></div>

        <div className="col-sm-10">
          <h2>Related Products:</h2>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {products.map((product) => {
              return <ProductCard item={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
