import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/cart_Item";
import { Link } from "react-router-dom";

const cartItem = [
  {
    productId: "abc",
    photo:"https://m.media-amazon.com/images/I/41k6TSkyDnL._AC_SY355_.jpg",
    name:"macboojk",
    price:4000,
    stock:40,
    quantity:4,
  },
  {
    productId: "abc",
    photo:"https://m.media-amazon.com/images/I/41k6TSkyDnL._AC_SY355_.jpg",
    name:"macboojk",
    price:4000,
    stock:40,
    quantity:4,
  },
  {
    productId: "abc",
    photo:"https://m.media-amazon.com/images/I/41k6TSkyDnL._AC_SY355_.jpg",
    name:"macboojk",
    price:4000,
    stock:40,
    quantity:4,
  },
  {
    productId: "abc",
    photo:"https://m.media-amazon.com/images/I/41k6TSkyDnL._AC_SY355_.jpg",
    name:"macboojk",
    price:4000,
    stock:40,
    quantity:4,
  },

];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const discount = 40;
const total = subtotal + tax + shippingCharges;

const Cart = () => {
  const [couponcode, setcouponcode] = useState<string>("");
  const [isCouponValid, setisCouponValid] = useState<boolean>(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (Math.random() > 0.5) setisCouponValid(true);
      else setisCouponValid(false);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
      setisCouponValid(false);
    };
  }, [couponcode]);

  return (
    <div className="cart">
      <main>
        {cartItem.length > 0 ?(cartItem.map((i,index)=>(
          <CartItem key={index}   cartItem={i}/>)) 
        ):(<h1>No Items.</h1>)
}

      </main>
      <aside>
        <p>Subtotal: ${subtotal}</p>
        <p>Shipping Charges: ${shippingCharges}</p>
        <p>Tax: ${tax}</p>
        <p>
          Discount - <em>${discount}</em>
        </p>
        <p>
          <b>total: ${total}</b>
        </p>
        <input
          type="text"
          value={couponcode}
          onChange={(e) => setcouponcode(e.target.value)}
          placeholder="Coupon Code"
        />
        {couponcode &&
          (isCouponValid ? (
            <span className="green">
              ${discount} off using <code> {couponcode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Copoun Code <VscError />
            </span>
          ))}

      {
        cartItem.length>0  && <Link to="/shipping">Checkout</Link>
      }
      </aside>
    </div>
  );
};

export default Cart;
