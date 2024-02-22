import ProductList from "../../../details/component/product/PeoductList";
import SortProduct from "../../../details/component/product/ProductSorting";
import FilterSection from "../../../details/component/product/ProductFilters";
import "./Product.css";
import { useState } from "react";
import { IoFilterSharp } from "react-icons/io5";

function Products() {
  const [show, setShow] = useState(false);
  // show filter section on mobile
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <section className="product-layout-page">
        <h1>Products For You</h1>
        <div className="product-and-filter-container">
          <div className="filter-section">
            <div className="sort-filter">
              <SortProduct />
            </div>
            <h2 className="category-heading">Shop By Category</h2>

            <hr className="category-hrLine" />
            <div className="allFilterSection">
                <h2 onClick={handleShow}>
                   <span><IoFilterSharp /></span>
                  Filters
                </h2>
              <FilterSection show={show} setShow={setShow} />
            </div>
          </div>

          {/* right section */}
          <div className="right-product-container">
            <ProductList />
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
