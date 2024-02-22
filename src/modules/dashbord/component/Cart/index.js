import React from "react";
import { useContext } from "react";
import { cartContextForCartPage } from "../../../../GlobalContext/Context/CartContext";
import CartItems from "./Cartitem";
import "./CartPage.css";

function CartPage() {
  const { cart, clearCart, totalAmount, shippingFees } = useContext(
    cartContextForCartPage
  );

  if (cart.length === 0) {
    return <h1 className="show-empty-cart-msg">your cart is empty !</h1>;
  }
  return (
    <>
      <section className="cart-page-section">
        <div className="cart-list-box">
          <table className="cart-table">
            <tr>
              <th className="table-row"><h1>Product</h1></th>
              <th className="table-row"><h1>Quantity</h1></th>
              <th className="table-row"><h1>Total</h1></th>
            </tr>
            {cart.map((curelm) => {
              return <CartItems key={curelm.id} {...curelm} />;
            })}
          </table>

          <div className="total-price">
            <table>
              <tr>
                <td>Subtotal</td>
                <td> {totalAmount}</td>
              </tr>
              <tr>
                <td>Shiping Charge</td>
                <td>{shippingFees}</td>
              </tr>
              <tr>
                <td>Total Amount</td>
                <td>{totalAmount + shippingFees}</td>
              </tr>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default CartPage;
