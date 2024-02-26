import { Link } from "react-router-dom"
import ProductCart from "../components/product_card"


const Home = () => {


  const handler= ()=>{}

  return (
    <div className="home">
      <section></section>
      <h1>Trending Now 🔥🔥
      <Link to="/search" className="findmore">More</Link>
      </h1>

      <main>
      <ProductCart productId="1233" photo="https://m.media-amazon.com/images/I/41k6TSkyDnL._AC_SY355_.jpg" name="Macbook" price={900} stock={2} handler={handler}></ProductCart>
        </main>

    </div>
  )
}

export default Home