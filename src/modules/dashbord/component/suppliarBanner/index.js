import React from "react";
import { Link } from "react-router-dom";
import "./banner.css";
const SuppliarBanner = () => {
  return (
    <>
      {/* messo supliaer banner */}
      <div className="Meesho_Supplier_Container">
        <div className="Meesho_Supplier_container_content">
          <h1>Register as a Meesho Supplier</h1>
          <p>Sell your products to crores of customers at 0% commission</p>
          <div className="Meesho_Supplier_benifit_Container">
            <div className="mesho_supplier-benifit">
              <img
                className="meesho_benifit_Image"
                src="https://cdn-icons-png.flaticon.com/128/6459/6459980.png"
                loading="lazy"
                alt="product_image"
              />
              <p>Grow your business 10</p>
            </div>
            <div className="mesho_supplier-benifit">
              <img
                className="meesho_benifit_Image"
                src="https://cdn-icons-png.flaticon.com/128/6459/6459980.png"
                loading="lazy"
                alt="Product_image"
              />
              <p>Enjoy 100% Profit</p>
            </div>
            <div className="mesho_supplier-benifit">
              <img
                className="meesho_benifit_Image"
                src="https://cdn-icons-png.flaticon.com/128/6459/6459980.png"
                loading="lazy"
                alt="Product_image"
              />
              <p>Sell all over Indi</p>
            </div>
          </div>
          <Link className="Signup_btn_now">Sign up now</Link>
        </div>
      </div>
    </>
  );
};

export default SuppliarBanner;
