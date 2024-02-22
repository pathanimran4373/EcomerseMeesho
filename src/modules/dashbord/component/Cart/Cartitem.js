import { cartContextForCartPage } from '../../../../GlobalContext/Context/CartContext'
import { useContext } from 'react'


const CartItems = ({ id, name, image, price, amount }) => {

    const {removeItem} = useContext(cartContextForCartPage)
  return (
    <>
      <tr>
        <td>
          <div className="cart-info">
            <img src={image} alt={id} />
            <div className="description-of-product">
              <h1>{name}</h1>
              <h2>Rs.{price}</h2>
              <button onClick={() => removeItem(id)}>Remove</button>
            </div>
          </div>
        </td>
        <td><h2 className="table-row">{amount}</h2></td>
        <td><h2>Rs.{amount*price}</h2></td>
      </tr>
    </>
  );
};

export default CartItems;
