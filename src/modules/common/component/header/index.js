import { Link, useNavigate } from "react-router-dom";
import logo from "../../../../assets/images/logo.png";
import "./Header.css";
import SearchBox from "./SearchBox/SearchBox";
import HeaderBotom from "./headerBotom/index";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

function Header() {
  const [isShow, setShow] = useState(false);
  const navigate = useNavigate();
  const handaleClick = () => {
    navigate("/login");
  };
  const handleCart = () => {
    navigate("/cart");
  };
  const handleMenu = () => {
    setShow(!isShow);
  };
  return (
    <>
      <section className="header-section">
        <header className="header">
          <div className="logocontainer">
            <div onClick={handleMenu}>
              {isShow ? (
                <FaTimes className="menuBar" />
              ) : (
                <IoMdMenu className="menuBar" />
              )}
            </div>

            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <>
            <SearchBox />
          </>
          <div className="headerRight">
            <div className="downloadContainer">
              <div className="downloadIconContainer">
                <i className="fa-solid fa-mobile downloadIcon"></i>
                <p className="">Download App</p>
              </div>

              <div className="downlodHoverBtnContainer">
                <p>Download form</p>

                <div className="downloadBtn">
                  <img
                    src="https://images.meesho.com/images/pow/playstore-icon-big.webp"
                    alt="img"
                  />
                </div>
                <div className="downloadBtn">
                  <img
                    src="https://images.meesho.com/images/pow/appstore-icon-big.webp"
                    alt="img"
                  />
                </div>
              </div>
            </div>

            <div className="becomeSupplierContainer">
              <p>Become a Supplier</p>
            </div>

            <div className="profileAndCart">
              <div onClick={handaleClick} className="profileContainer">
                <i className="fa-solid fa-user profileIcon"></i>
                <p>profile</p>
              </div>

              <div onClick={handleCart} className="CartContainer">
                <i className="fa-solid fa-cart-shopping cartIcon"></i>
                <p>cart</p>
              </div>
            </div>
          </div>
        </header>
      </section>

      <>
        <HeaderBotom isShow={isShow} />
      </>
    </>
  );
}

export default Header;
