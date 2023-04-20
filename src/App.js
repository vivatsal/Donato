import Home from "./components/Pages/Home/home";
import Toys from "./components/Pages/Toys/toys";
import Description from "./components/Pages/Description/description";
import { arr } from "./assets/data.js";
import { arr3 } from "./assets/data3.js";
import { arr4 } from "./assets/data4.js";
import Cart from "./components/Pages/Cart/cart";
import Contact from "./components/Pages/Contact/contact";
import Create from "./components/Pages/Create/create";
import Signup from "./components/Pages/Sign Up/signup";
import SignIn from "./components/Pages/Sign In/signin";
import About from "./components/Pages/About/about";
import Books from "./components/Pages/Books/books";
import { Route, Routes } from "react-router-dom";
import Clothes from "./components/Pages/Clothes/clothes";
import Profile from "./components/Pages/Profile/profile";

function App() {
  return (
    <div className="App h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books arr={arr} />} />
        <Route path="/toys" element={<Toys arr={arr3} />} />
        <Route path="/clothes" element={<Clothes arr={arr4} />} />
        <Route path="/description" element={<Description data={arr[0]} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/create" element={<Create />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
