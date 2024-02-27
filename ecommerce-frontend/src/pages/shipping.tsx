import { ChangeEvent, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const [shipping, setShipping] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });

  const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

    setShipping((prev)=>({...prev,[e.target.name]:e.target.value}))
  };

 const navigate =  useNavigate()

  return (
    <div className="shipping">
      <button className="back-btn" onClick={()=>navigate("/cart")}>
        <BiArrowBack />
      </button>

      <form>
        <h1>Shipping Address</h1>
        <input
          required
          type="text"
          placeholder="Address"
          name="address"
          value={shipping.address}
          onChange={changeHandler}
        />

        <input
          required
          type="text"
          placeholder="City"
          name="city"
          value={shipping.city}
          onChange={changeHandler}
        />

        <input
          required
          type="text"
          placeholder="State/Province"
          name="state"
          value={shipping.state}
          onChange={changeHandler}
        />
        <select
          required
          name="country"
          value={shipping.country}
          onChange={changeHandler}
        >
          <option value="">Select Country</option>
          <option value="india">India</option>
          <option value="canada">Canada</option>
          <option value="us">US</option>
        </select>

        <input
          required
          type="number"
          placeholder="Pin Code"
          name="pincode"
          value={shipping.pincode}
          onChange={changeHandler}
        />

        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Shipping;
