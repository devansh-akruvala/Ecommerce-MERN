import { FaPlus } from "react-icons/fa";

type productsProps = ({
  productId:string;
  photo:string;
  name:string;
  price:number;
  stock:number;
  handler:()=>void;
})

const ProductCart = ({productId,photo,name,price,stock,handler}:productsProps) => {
  return (
    <div className="product_card">
      <img src={photo} alt={name} />
      <p>{name}</p>
      <span>{price}$</span>

      <div>
        <button onClick={()=>handler}><FaPlus/></button>
      </div>
    </div>
  )
}

export default ProductCart