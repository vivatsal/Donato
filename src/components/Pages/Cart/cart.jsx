import Navbar from "../../Navbar/navbar";
import NewFooter from "../../New Footer/newFooter";
import CartCards from "../../CartCards/cartcards";
import { arr2 } from "../../../assets/data2";

function Cart() {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <div className="h-3/4 w-full">
        <div className="font-bold flex justify-between text-3xl mx-[3.5%] my-10">
          <p>Cart</p>
          <button className="bg-black h-10 w-[10%] text-base rounded-3xl text-white">
            Checkout
          </button>
        </div>
        <CartCards data={arr2} />
      </div>
      <NewFooter />
    </div>
  );
}

export default Cart;
