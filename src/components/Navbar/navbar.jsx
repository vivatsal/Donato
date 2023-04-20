import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Search from "../Search/search";
import { Link } from "react-router-dom";

function Navbar() {
  let url =
    "http://www.goodmorningimagesdownload.com/wp-content/uploads/2021/12/Best-Quality-Profile-Images-Pic-Download-2023.jpg";

  return (
    <div className="navbar h-[10vh] w-full px-5 mb-5 border-black shadow-lg">
      <div className="nav flex items-center justify-between px-4 h-full w-full ">
        <div className="w-[47%] flex items-center justify-between">
          <div className="text-3xl font-bold cursor-pointer">
            <Link to="/">Donato</Link>
          </div>
          <div className="text-lg font-semibold cursor-pointer">
            <Link to="/">Home</Link>
          </div>
          <div className="text-lg font-semibold cursor-pointer">
            <Link to="/about">About</Link>
          </div>
          <div className="text-lg font-semibold cursor-pointer">
            <Link to="/contact">Contact</Link>
          </div>
          <div className="text-lg font-semibold cursor-pointer">
            <Link to="/create">Create</Link>
          </div>
        </div>
        <div className="w-4/12 h-full flex items-center justify-between">
          <div className="w-[70%] h-full">
            <Search />
          </div>
          <div className="">
            <Link to="/profile">
              <img src={url} className="h-9 w-9 rounded-md" alt="profile_img" />
            </Link>
          </div>
          <Link to="/cart">
            <ShoppingCartIcon className="scale-150" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
