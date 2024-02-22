import React from "react";
import "./homePage.css";

const Home =()=> {
  return (
    <>
      <div className="lowestpriceContainer">
        <div className="lowestPrice_texe">
          <h1>Lowest Prices </h1>
          <h1>Best Quality Shopping</h1>
          <div className="lowestPriceWhay">
            <div className="lowestpriceItem">
              <div className="lowestprice_icon">
                <img
                  src="https://images.meesho.com/images/pow/freeDelivery.svg"
                  loading="eager"
                  alt="free delivery"
                />
              </div>
              <p>Free Delivery</p>
            </div>

            <div className="lowestpriceItem">
              <div className="lowestprice_icon">
                <img
                  src="https://images.meesho.com/images/pow/cod.svg"
                  loading="eager"
                  alt="cash on delivery"
                />
              </div>
              <p>Cash on Delivery</p>
            </div>

            <div className="lowestpriceItem">
              <div className="lowestprice_icon">
                <img
                  src="https://images.meesho.com/images/pow/easyReturns.svg"
                  loading="eager"
                  alt="return mony"
                />
              </div>
              <p>Easy Returns</p>
            </div>
          </div>

          <button className="downlodApp_Container">
            <div className="downloadAppIcon">
              <img
                src="https://images.meesho.com/images/pow/playstoreSmallIcon.webp"
                loading="eager"
                alt="Download"
              />
            </div>
            <p> Download the Meesho App </p>
          </button>
        </div>
        <div className="lowestPrice_image">
          <img
            src="https://images.meesho.com/images/marketing/1631722939962.webp"
            loading="eager"
            alt="images"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
