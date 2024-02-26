import { useState } from "react";
import { FaSearch, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const user = {_id:"uid123",role:"user"};

const Header = () => {

const [isOpen, setisOpen] = useState<boolean>(false)
const logoutHandler = ()=>{
  setisOpen((false))
}

  return (
    <nav className="header">
      <Link onClick={()=>{setisOpen((false))}} to={"/"}>Home</Link>
      <Link onClick={()=>{setisOpen((false))}} to={"/search"}>
        <FaSearch />
      </Link>
      <Link onClick={()=>{setisOpen((false))}} to={"/cart"}>
        <FaCartShopping />
      </Link>
      {user?._id ? (
        <>
        <button onClick={()=>{setisOpen((prev)=>!prev)}}>
            <FaUser/>
        </button>
        <dialog open={isOpen}>
            <div>
                {
                    user?.role==='admin' && (<Link to="/admin/dashboard">Admin</Link>)
                }
                <Link onClick={()=>{setisOpen((false))}} to="/orders">Orders</Link>
                <button onClick={logoutHandler}><FaSignOutAlt/></button>

            </div>
        </dialog>
        </>
      ) : (
        <Link onClick={()=>{setisOpen((false))}} to={"/login"}>
          <FaSignInAlt /> Login
        </Link>
      )}
    </nav>
  );
};

export default Header;
