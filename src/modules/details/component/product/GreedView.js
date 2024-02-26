import { SearchContextProvider } from "../../../../GlobalContext/Context/FilterProducts";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Stars from "../../../common/component/rating";
const Product = () => {
  const { ProductpageData } = useContext(SearchContextProvider);

  return (
    <>
      <div className="greed-section">
        {ProductpageData.map((element) => {
          return (
            <Link
              style={{ textDecoration: "none" }}
              className="product-link"
              to={`/productdetail/${element.id}`}
            >
              <div className="greed-product-box" key={element.id}>
                <figure className="imageContainer">
                  {/* <LazyLoadImage
                    alt={element.name}
                    effect="opacity"
                    src={element.image}
                    height={200}
                    width={200}
                    className="productImage"
                  /> */}
                  <img className='product-image' src={element.image} loading='lazy' alt="product" width="600" height="650"  />
                </figure>

                <h1>{element.name}</h1>
                <Stars stars={element.stars} reviews={element.reviews} />

                <div className="cart-btn">
                  <h2>$.{element.price}</h2>
                  <button className="view-btn">view details</button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Product;
