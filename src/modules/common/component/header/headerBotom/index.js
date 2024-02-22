import React from "react";
import "./headerBotom.css";

const HeaderBottom = ({isShow}) => {
  return (
    <>
      <nav
      //  className="navbar"
      className={`headerBottom-container ${
        isShow ? "headerBottomActive" : ""
      }`}
       >
        <ul className="menu-container">
          {menuItems.map((menuItem) => (
            <li className="menus" key={menuItem.id}>
              <>{menuItem.label}</>
              <ul className="subMenuContainer">
          {menuItem.subMenuItems.map((subMenuItem, subIndex) => (
            <li key={subIndex} className="subMenuItem">{subMenuItem}</li>
          ))}
        </ul>
            </li>
          ))}
        </ul>
      </nav>

      {/* <nav className="navbar">
        <ul>
          {menuItems.map((menuItem, index) => (
            <li key={index}>
              <Link to="/" className="menus"> {menuItem.label}</Link>
              <div className="subMenu">
                {menuItem.subMenuItems.map((subMenuItem, subIndex) => (
                  <p key={subIndex}>{subMenuItem}</p>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </nav> */}
    </>
  );
};

const menuItems = [
  {
    id: 1,
    label: "For Women",
    subMenuItems: ["All Women Ethnic", "View All", "View All"],
  },
  {
    id: 2,
    label: "Watch",
    subMenuItems: ["Fastrak", "Tiatan", "Philips"],
  },
  {
    id: 3,
    label: "Cloths",
    subMenuItems: ["Jeans", "Shurt", "Kurta"],
  },
  {
    id: 4,
    label: "Laptop",
    subMenuItems: ["Asus", "Lenevo", "Sony"],
  },
  {
    id: 5,
    label: "Smart Phone",
    subMenuItems: ["Apple", "Redmi", "Samsung"],
  },
  {
    id: 6,
    label: "Computer",
    subMenuItems: ["Lenevo", "Samsung", "Asus"],
  },
  {
    id: 7,
    label: "Accessories",
    subMenuItems: ["Headphone", "Mobile cover", "speaker"],
  },
  {
    id: 8,
    label: "Bags & Footwear",
    subMenuItems: ["Shoue", "Sandale", "Casual Bag"],
  },
];

export default HeaderBottom;
